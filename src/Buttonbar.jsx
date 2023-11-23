import React from 'react'

export default function Buttonbar({ changecolor }) {
    return (
        <div className='flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} onClick={() => { changecolor("red") }}>Red</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => { changecolor("blue") }}>Blue</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onClick={() => { changecolor("green") }}>Green</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }} onClick={() => { changecolor("orange") }}>Orange</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow" }} onClick={() => { changecolor("yellow") }}>Yellow</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }} onClick={() => { changecolor("purple") }}>Purple</button>
            </div>
        </div>
    )
}
