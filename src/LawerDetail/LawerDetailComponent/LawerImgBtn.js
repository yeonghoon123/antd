import React from "react"
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import img from '../img/xiaomi-mi-gaming-laptop-stock-4k-nx-1920x1080.jpg'
import 'antd/dist/antd.css';

export default function ImgBtn() {
    return (
        <div className="LawerDetail_ImgBtn">
            <div className="LawerDetail_Img">
                <img src={img} alt="" className="LawerDetail_LawerImg"></img>
            </div>
            <div className="LawerDetail_BtnContainer">
                <Link to="/content"><Button type="primary" className="LawerDetail_Btn">상담 받으러 가기</Button></Link>
            </div>
        </div >)
}