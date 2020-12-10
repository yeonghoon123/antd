import React from 'react';
import { Tag } from 'antd'
import img from "../img/asd.jpg"
import 'antd/dist/antd.css';

export default function Lawer(data) {
    let getData = []
    for (let i = 0; i < data.data.length; i++) {
        getData.push(data.data[0][i])
    }
    console.log(getData)
    return (
        <>
            <div className="Main_Second_Lawer">
                <div className="Main_Second_LawerImgWrapper">
                    <img src={img} alt="" className="Main_Second_LawerImg"></img>
                </div>
                <div className="Main_Second_LawerContentWrapper">
                    <div className="Main_Second_ContentHeader">{getData[0].lawer}</div>
                    <div className="Main_Second_ContentSub">{getData[0].sub}</div>
                    <div className="Main_Second_ContentTagWrapper">
                        <Tag color="#515251" className="Main_Second_ContentTag">{getData[0].tag}</Tag>
                    </div>
                </div>
            </div>
        </>
    )
}