function loadJs (src) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    document.body.appendChild(script)
    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      reject(new Error(''))
    }
  })
}

export default loadJs
