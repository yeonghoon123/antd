import React from 'react';
import { Input, Checkbox } from 'antd'

export default function ProposerInf() {
    return (
        <>
            <div className="totalContent_ProposerInformationContainer">
                <div className="totalContent_Header">
                    상담신청자 정보<Checkbox style={{ float: "right" }}>대표자명과 동일</Checkbox>
                </div>
                <div className="totalContent_Input">
                    <span className="totalContent_Span">*</span>상담 신청자 이름
        <Input placeholder="이름을 입력해 주세요." style={{ marginTop: "5px" }} />
                </div>
                <div className="totalContent_Input">
                    <span className="totalContent_Span">*</span>상담 신청자 연락처
        <Input placeholder="전화번호를 입력하세요." style={{ marginTop: "5px" }} />
                </div>
                <div className="totalContent_LastInput">
                    상담 신청자 이메일
        <Input placeholder="이메일을 입력하세요." style={{ marginTop: "5px" }} />
                </div>

            </div>
            <div>

            </div>
        </>
    )
}