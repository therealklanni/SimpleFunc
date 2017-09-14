function encode(obj) {
  if (!obj) {
    return obj
  }

  if (typeof obj === `function`) {
    return encodeFunction(obj)
  }

  if (typeof obj === `object`) {
    return encodeObject(obj)
  }

  return obj
}

function decode(obj) {
  if (!obj) {
    return obj
  }

  if (typeof obj === `object`) {
    if (obj._fn) {
      return Function.constructor(...obj._fn)
    }

    if (obj._obj && obj._fns) {
      const result = obj._obj

      for (const n in obj._fns) {
        result[n] = Function.constructor(...obj._fns[n])
      }

      return result
    }
  }

  return obj
}

function encodeObject(obj) {
  const result = {
    _obj: {},
    _fns: {}
  }
  let nfuncs = 0

  for (const n in obj) {
    if (typeof obj[n] === `function`) {
      const fn = encodeFunction(obj[n])

      result._fns[n] = fn._fn
      nfuncs++
    } else {
      result._obj[n] = obj[n]
    }
  }

  if (!nfuncs) {
    return obj
  }

  return result
}

function encodeFunction(func) {
  const text = func.toString()
  let p1 = text.indexOf(`(`)
  let p2 = text.indexOf(`)`)
  const args = text
    .substring(p1 + 1, p2)
    .trim()
    .split(`,`)

  p1 = text.indexOf(`{`)
  p2 = text.lastIndexOf(`}`)
  const code = text.substring(p1 + 1, p2).trim()

  if (args.length) {
    for (const n in args) {
      args[n] = args[n].trim()
    }

    args.push(code)

    return { _fn: args }
  }

  return { _fn: [code] }
}

module.exports = {
  encode,
  decode,
  toJson: obj => JSON.stringify(encode(obj)),
  fromJson: json => decode(JSON.parse(json))
}
