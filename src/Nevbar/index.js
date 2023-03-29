import React, { useState } from 'react'
import './Nevbar.css'

export default function Nevbar({ imgIndex, setImgIndex }) {
    return (
        <div className="nevBar">
            <button className={`${imgIndex == 0 && "active"}`} onClick={() => setImgIndex(0)}>First Image</button>
            <button className={`${imgIndex == 1 && "active"}`} onClick={() => setImgIndex(1)}>Second Image</button>
            <button className={`${imgIndex == 2 && "active"}`} onClick={() => setImgIndex(2)}>Third Image</button>
        </div>
    )
}
