import React from 'react'
import './LawerDetail.css'
import ImgBtn from './LawerDetailComponent/LawerImgBtn'
import Content from './LawerDetailComponent/LawerContent'

export default function LawerDetail() {
    return (<>
        <div className="LawerDetail_Container">
            <ImgBtn />
            <Content />
        </div>
    </>)
}