let fn = ''
export default {
  ClickOut: {
    bind (dom, obj) {
      const buttonBox = document.querySelector('#BoxButton')
      fn = e => {
        if (dom.contains(e.target)) {
          console.log(111)
          console.dir(dom, 'dom内')
        } else {
          console.dir(dom, 'dom外')
          if (!buttonBox.contains(e.target)) {
            obj.value()
          }
        }
      }
      document.addEventListener('click', fn)
    },
    unbind () {
      document.removeEventListener('click', fn)
    }
  }
}
