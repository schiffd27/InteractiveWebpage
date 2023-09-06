import React, {useRef, useEffect} from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect (() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const context = canvas.getContext('2d')

        //context.fillRect(0,0, context.canvas.width, context.canvas.height)

        context.fillRect(100,100,100,100)
        context.fillRect(100,300,100,100)
    }, [])


    return <canvas ref={canvasRef}{...props}/>
}

export default Canvas