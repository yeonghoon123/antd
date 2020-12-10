import React, { useState } from 'react';
import "../SecondPage/MainSecondPage.css"
import Lawer from "./SecondPageLawer/Lawer"


export default function SecondPage() {
    let data = useState(
        [
            {
                lawer: "권경렬",
                sub: "노무 법인 대유",
                tag: "급여관리",
                tag2: "기업 노무 자문"
            },
            {
                lawer: "권경렬",
                sub: "노무 법인 대유",
                tag: "급여관리",
                tag2: "기업 노무 자문"
            }

        ]
    )
    const sendData = data


    return (
        <>
            <div className="Main_Second_Header">
                <h1 className="Main_Second_HeaderText">자버의 든든한 노무사님들</h1>
            </div>
            <div className="Main_Second_Content">
                <Lawer data={sendData} />
            </div>
        </>
    )
}
