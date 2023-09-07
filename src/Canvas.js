import React, {useRef, useEffect} from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect (() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const context = canvas.getContext('2d')

        //context.fillRect(0,0, context.canvas.width, context.canvas.height)


        //arc / circle
        for(var i = 0; i < 5; i++) {
            var x = Math.random() * window.innerWidth
            var y = Math.random() * window.innerHeight


            context.beginPath()
            context.strokeStyle = context.fillStyle = "#00acc9"
            context.arc(x, y, 30, 0, Math.PI * 2, false)
            context.stroke()
        }
        context.beginPath()
        context.fillStyle = "#00acc9"
        context.arc(600, 500, 30, 0, Math.PI * 2, false)
        context.stroke()
    }, [])


    return <canvas ref={canvasRef}{...props}/>
}

export default Canvas