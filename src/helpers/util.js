exports.chunk = (a, c) => {
  return a.reduce((accum, next, i) => {
    const intI = Math.floor(i / c)
    return Object.assign([], accum, {
      [intI]: [...accum[intI], next]
    })
  }, Array(Math.ceil(a.length / c)).fill([]))
}
