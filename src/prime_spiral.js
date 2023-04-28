const { sievePrime } = require('@algorithm.ts/prime')

class PrimeSpiral {
  constructor () {
    this.outputs = document.getElementById('outputs')
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = 1000
    this.canvas.height = 1000
    this.outputs.appendChild(this.canvas)
    this.outputs.addEventListener('wheel', e => {
      e.preventDefault()
      this.scale += (this.scale > 1) || (e.deltaY > 0) ? e.deltaY / 50 : 0
      this.draw()
    })
  }
  run (params) {
    this.primes = sievePrime(params.n)
    this.scale = params.scale
    this.pointSize = params.pointSize / 10
    this.draw()
  }
  draw (primes, scale) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    const size = 1000
    const center = size / 2
    this.primes.forEach(p => {
      // Convert (p, p) as polar coordinates to (x, y) as cartesian coordinates
      const x = center + p * Math.cos(p) / this.scale
      const y = center + p * Math.sin(p) / this.scale
      // Draw point
      this.ctx.fillStyle = '#000000'
      // Fill circle
      this.ctx.beginPath()
      this.ctx.arc(x, y, this.pointSize, 0, 2 * Math.PI)
      this.ctx.fill()
    })
  }
}

export default PrimeSpiral

