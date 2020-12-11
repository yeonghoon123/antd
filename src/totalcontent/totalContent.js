import React, { useState } from 'react';
import emailjs from "emailjs-com"
import { Button } from 'antd'
import 'antd/dist/antd.css';
import './totalContent.css'
import CompanyInf from './totalcontentComponent/companyInformation'
import ProposerInf from './totalcontentComponent/proposerInformation'
import LawerInf from './totalcontentComponent/lawerInformation'


export default function TotalContent() {
    const [formdata, setFormdata] = useState({});
    const getValue = event => {
        const target = event.target
        const name = target.name
        const value = target.value
        setFormdata({
            ...formdata,
            [name]: value
        })
    }
    const lawerValue = (value) => {
        setFormdata({
            ...formdata,
            "lawer": value
        })
    }
    const playValue = (value) => {
        setFormdata({
            ...formdata,
            "play": value
        })
    }
    const timeValue = (value) => {
        setFormdata({
            ...formdata,
            "time": value
        })
    }



    async function submitData(e) {
        if (formdata.companyName != null && formdata.enquiryName != null && formdata.number != null && formdata.companyName !== "" && formdata.enquiryName !== "" && formdata.number !== "") {

            //웹훅 보내는 코드
            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://wh.jandi.com/connect-api/webhook/18007791/2ee1e9fdb8febe410ab4734d7d46d211', false);

            //Send the proper header information along with the request
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "application/vnd.tosslab.jandi-v2+json");

            xhr.onreadystatechange = function () { // Call a function when the state changes.
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    // Request finished. Do processing here.
                }
            }

            var payload = {
                "body": "[[노무사 문의]](http://url_to_text) 노무사 신청이 들어왔습니다.",
                "connectColor": "#FAC11B",
                "connectInfo": [{
                    "title": "이름",
                    "description": formdata.enquiryName
                },
                {
                    "title": "전화번호",
                    "description": formdata.number

                }, {
                    "title": "의뢰한 노무사님",
                    "description": formdata.lawer
                }, {
                    "title": "용건",
                    "description": formdata.play
                },
                {
                    "title": "시간",
                    "description": formdata.time
                }]
            }
            console.log(JSON.stringify(payload))
            // xhr.send(JSON.stringify(payload));

            //이메일 보내는 곳
            let content =
            {
                from_name: formdata.enquiryName,
                lawer: formdata.lawer,
                play: formdata.play,
                email: formdata.email
            }
            let content2 =
            {
                from_name: formdata.enquiryName,
                lawer: formdata.lawer,
                play: formdata.play,
            }

            // emailjs.init("user_nORNSxbA9Ew8k6aTRsN9U");
            // emailjs.send("andy@jober.io", "template_gi6fgh1", content)
            // emailjs.send("andy@jober.io", "template_xoixqdj", content2)
            //     .then(function (response) {
            //         console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            //     }, function (err) {
            //         console.log("FAILED. error=", err);
            //     })

            setTimeout(() => {
                document.location.href = "/"
            }, 2000);

        } else { alert("필수 입력을 입력해 주세요.") }

    }

    return (
        <>
            <form>
                <div className="totalContent_TotalContainer">
                    <CompanyInf getValue={getValue} />
                    <ProposerInf getValue={getValue} />
                    <LawerInf lawerValue={lawerValue} playValue={playValue} timeValue={timeValue} />
                    <Button type="primary" className="totalContent_SubmitBtn" onClick={submitData}>신청서 제출하기</Button>
                </div>
            </form>
        </>
    )
}