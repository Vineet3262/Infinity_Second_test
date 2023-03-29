import React from 'react';
import './header.css';
import arrow from '../image/arrow.png';

export default function Header({ imgIndex, setImgIndex }) {
    return (
        <div class="arrow-container">
            <div className={`arrow arrow-1 ${imgIndex == 1 && "active"}`}>
                <img src={arrow} onClick={() => setImgIndex(1)} />
            </div>
            <div className={`arrow arrow-2 ${imgIndex == 0 && "active"}`}>
                <img src={arrow} onClick={() => setImgIndex(0)} />
            </div>
            <div className={`arrow arrow-3 ${imgIndex == 2 && "active"}`}>
                <img src={arrow} onClick={() => setImgIndex(2)} />
            </div>
        </div>

    )
}
