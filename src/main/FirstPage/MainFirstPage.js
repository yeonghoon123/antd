import React from "react"
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import '../FirstPage/MainFirstPage.css'

export default function MainFirstPage() {
    return (
        <>
            <div className="Main_First_BlueBox"></div>
            <div className="Main_First_ContentContainer">
                <div className="Main_First_ContentLeft">
                    <h1 className="Main_First_LeftHeader">노무사 소개 서비스</h1>
                    <p className="Main_First_LeftSub">노무사 상담으로 문제를 해결해 보세요.</p>
                    <Button type="primary" className="Main_First_LeftBtn">노무사 상담하기</Button>
                </div>
                <div className="Main_First_ContentRight">
                    <div className="Main_First_RightQuestion"><span>자버에서 소개받으면 뭐가 좋아요? 🤔</span></div>
                    <div className="Main_First_WrapperFirstAnswer">
                        <div className="Main_First_RightFirstAnswer">
                            <span>한번 들어서는 잘 이해하기 어려운 노무 자문을 글로 받아볼 수 있어서
                            <br></br>
                                <span style={{ color: "#40A9FF" }}>히스토리와 자문내용을 언제든지 재확인</span> 할 수 있어요! 물론 전화상담도 가능하구요! 👍
                        </span>
                        </div>
                    </div>
                    <div className="Main_First_WrapperSecondAnswer">
                        <div className="Main_First_RightSecondAnswer">
                            <span>또하나! 노무사님께 <span style={{ color: "#40A9FF" }}>별도의 자료전달을 하지 않아도</span> 직원의
                        <br></br>
                        근로계약서 및 급여, 회사상태 등을 자버시스템을 통해 공유 할 수 있어요. 😊
                        </span>
                        </div>
                    </div>
                    <div className="Main_First_RightSend">
                        <Input className="Main_First_RightSendText" placeholder="reply..."></Input>
                        <Button className="Main_First_RightSendBtn" type="text" htmlType="submit">send</Button>
                    </div>
                </div>

            </div>
        </>)
}