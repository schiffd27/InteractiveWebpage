import React, {useRef, useEffect} from 'react'


const Gravity = props => {

    const canvasRef = useRef(null)

    useEffect (() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const context = canvas.getContext('2d')

        //context.fillRect(0,0, context.canvas.width, context.canvas.height)


        //arc / circle
        /*
        for(var i = 0; i < 5; i++) {
            var x = Math.random() * window.innerWidth
            var y = Math.random() * window.innerHeight


            context.beginPath()
            context.strokeStyle = context.fillStyle = "#00acc9"
            context.arc(x, y, 30, 0, Math.PI * 2, false)
            context.stroke()
        }

         */
        function Circle(x, y, dx, dy, radius) {
            this.x = x
            this.y = y
            this.dx = dx
            this.dy = dy
            this.radius = radius

            this.draw = function() {
                context.beginPath()
                context.strokeStyle = "#00acc9"
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                context.stroke()
            }
            this.update = function () {
                if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
                    this.dx = -dx
                }
                if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
                    this.dy = -this.dy
                }
                this.x += this.dx
                this.y += this.dy
                this.draw()
            }
        }



        var circleArr = []
        for (let i = 0; i < 100; i++) {
            let radius = 30
            let x = Math.random() * (window.innerWidth - radius * 2) + radius
            let dx = (Math.random() - 0.5) * 8
            let y = Math.random() * (window.innerHeight - radius * 2) + radius
            let dy = (Math.random() - 0.5) * 8
            circleArr.push(new Circle(x, y, dx, dy, radius))
        }

        function animate() {
            requestAnimationFrame(animate)
            context.clearRect(0,0, window.innerWidth, window.innerHeight)

            for (let i = 0; i < circleArr.length; i++) {
                circleArr[i].update()
            }

            context.stroke()

        }

       animate()
    }, [])


    return <canvas ref={canvasRef}{...props}/>
}

export default Gravity