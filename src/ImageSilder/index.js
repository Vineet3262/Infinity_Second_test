import React from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import firstImg from '../image/FirstImg.jpg';
import SecondImg from '../image/SecondImg.jpg';
import ThirdImg from '../image/ThirdImg.jpg';
import 'animate.css';
import './imgSlider.css';

export default function ImageSlider({ imgIndex, setImgIndex }) {
    const MyCollection = [
        { label: "First Image", imgPath: firstImg },
        { label: "Second Image", imgPath: SecondImg },
        { label: "Third Image", imgPath: ThirdImg },
    ];
    const sliderLength = MyCollection.length;

    const HandelRightNev = (id) => {
        if (id == "Right" && sliderLength > imgIndex + 1) {
            setImgIndex(imgIndex + 1)
        } else {
            setImgIndex(0);
        }
    }
    const HandelLeftNev = (id) => {
        if (id == "Left" && imgIndex > 0) {
            setImgIndex(imgIndex - 1)
        } else {
            setImgIndex(sliderLength - 1);

        }
    }

    return (
        <div className="sliderDiv">
            <BsChevronLeft className="leftArrow" id="Left" onClick={(e) => HandelLeftNev(e.target.id)} />
            <img src={MyCollection[imgIndex].imgPath} animate__fadeOutLeft className="imgSlider" alt={MyCollection[imgIndex].label} />
            <BsChevronRight className="rightArrow" id="Right" onClick={(e) => HandelRightNev(e.target.id)} />
        </div>
    );
};