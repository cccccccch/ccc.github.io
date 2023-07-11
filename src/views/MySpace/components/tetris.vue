<template>
  <div class="tetrisPage" id="box"></div>
</template>

<script>
var Fnc
export default {
  name: 'tetrisPage',
  data () {
    return {
      tatris: [
        [0x6600],
        [0x2222, 0x0f00],
        [0xc600, 0x2640],
        [0x6c00, 0x4620],
        [0x4460, 0x2e0, 0x6220, 0x740],
        [0x2260, 0x0e20, 0x6440, 0x4700],
        [0x2620, 0x720, 0x2320, 0x2700]
      ],
      keycom: {
        38: 'this.rotate(1)',
        40: 'this.down()',
        37: 'this.move(2, 1)',
        39: 'this.move(0.5, -1)'
      },
      dia: '',
      pos: '',
      bak: '',
      run: ''
    }
  },
  computed: {
    map () {
      return this.evil('[' + Array(23).join('0x801,') + '0xfff]')
    }
  },
  mounted () {
    Fnc = e => {
      var step = e.keyCode
      if (step === 38) {
        this.rotate(1)
      } else if (step === 40) {
        this.down()
      } else if (step === 37) {
        this.move(2, 1)
      } else if (step === 39) {
        this.move(0.5, -1)
      }
    }
    this.start()
    this.run = setInterval(() => {
      this.down()
    }, 500)
    document.addEventListener('keydown', Fnc)
  },
  beforeDestroy () {
    clearInterval(this.run)
    document.removeEventListener('keydown', Fnc)
  },
  methods: {
    evil (fn) {
      const Fn = Function
      return new Fn('return' + fn)()
    },
    start () {
      this.dia = this.tatris[~~(Math.random() * 7)]
      this.bak = this.pos = {
        fk: [],
        y: 0,
        x: 4,
        s: ~~(Math.random() * this.dia.length)
      }
      this.rotate(0)
    },
    rotate (r) {
      var f = this.dia[(this.pos.s = (this.pos.s + r) % this.dia.length)]
      for (var i = 0; i < 4; i++) {
        this.pos.fk[i] = ((f >> (12 - i * 4)) & 0x000f) << this.pos.x
      }
      this.update(this.is())
    },
    is () {
      for (var i = 0; i < 4; i++) {
        if ((this.pos.fk[i] & this.map[this.pos.y + i]) !== 0) {
          return (this.pos = this.bak)
        }
      }
    },
    update (t) {
      this.bak = {
        fk: this.pos.fk.slice(0),
        y: this.pos.y,
        x: this.pos.x,
        s: this.pos.s
      }
      if (t) {
        return
      }
      let a2 = ''
      for (let i = 0; i < 22; i++) {
        a2 += this.map[i].toString(2).slice(1, -1) + '<br/>'
      }
      for (let i = 0, n; i < 4; i++) {
        if (
          /([^0]+)/.test(this.bak.fk[i].toString(2).replace(/1/g, '\u25a1'))
        ) {
          a2 =
            a2.substr(
              0,
              (n = (this.bak.y + i + 1) * 15 - RegExp.$_.length - 4)
            ) +
            RegExp.$1 +
            a2.slice(n + RegExp.$1.length)
        }
      }
      document.getElementById('box').innerHTML = a2
        .replace(/1/g, '\u25a0')
        .replace(/0/g, '\u3000')
    },
    over () {
      document.onkeydown = null
      clearInterval(this.run)
      alert('游戏结束')
    },
    down () {
      ++this.pos.y
      if (this.is()) {
        for (var i = 0; i < 4 && this.pos.y + i < 22; i++) {
          if ((this.map[this.pos.y + i] |= this.pos.fk[i]) === 0xfff) {
            this.map.splice(this.pos.y + i, 1)
            this.map.unshift(0x801)
          }
        }
        if (this.map[1] !== 0x801) {
          return this.over()
        }
        this.start()
      }
      this.update()
    },
    move (t, k) {
      this.pos.x += k
      for (var i = 0; i < 4; i++) {
        this.pos.fk[i] *= t
      }
      this.update(this.is())
    }
  }
}
</script>

<style>
.tetrisPage {
  width: 100%;
  /* height: 100%; */
  margin: 20px auto;
  text-align: center;
  width: 252px;
  font: 25px / 25px 宋体;
  background: #000;
  color: #fff;
  border: #999 20px ridge;
  text-shadow: 0px 0px 1px #fff;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.25) 1%,
      rgba(0, 0, 0, 0) 5%
    ),
    linear-gradient(rgba(255, 255, 255, 0.25) 1%, rgba(0, 0, 0, 0) 5%);
  background-size: 25px 25px;
}
</style>
