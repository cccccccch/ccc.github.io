export default {
  data () {
    return {
      step: 0,
      index: 0,
      slideshow: document.querySelectorAll('.slideshow-item'),
      move: 0
    }
  },
  mounted () {
    this.slideshow = document.querySelectorAll('.slideshow-item')
    this.itemClick()
    this.layout()
  },
  methods: {
    leftClik () {
      this.index--
      if (this.index <= 0) {
        this.index = 0
      }
      this.layout()
    },
    rightClik () {
      this.index++
      if (this.index >= this.slideshow.length - 1) {
        this.index = this.slideshow.length - 1
      }
      this.layout()
    },
    itemClick () {
      this.slideshow.forEach((v, i) => {
        v.addEventListener('click', () => {
          this.index = i
          this.layout()
        })
      })
    },
    layout () {
      const xoffsetStep = 100
      const scaleStep = 0.7
      this.slideshow.forEach((v, i) => {
        let move = (i - this.index) * xoffsetStep
        if (i !== this.index) {
          move = move + 50 * Math.sign(i - this.index)
        }
        const scale = scaleStep ** Math.abs(i - this.index)
        const rotateY = i === this.index ? 0 : 45 * Math.sign(this.index - i)
        const opacityStyle =
          i === this.index
            ? 1
            : (this.slideshow.length - Math.abs(this.index - i)) * 0.07
        v.style.zIndex = this.slideshow.length - Math.abs(this.index - i)
        v.style.opacity = opacityStyle
        v.style.transform = `translateX(${move}px) scale(${scale}) rotateY(${rotateY}deg)`
      })
    }
  }
}
