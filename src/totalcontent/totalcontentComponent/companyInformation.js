import React from 'react'
import { Input } from 'antd'

export default function CompanyInf() {
    return (<div className="totalContent_HeaderContainer">
        <div className="totalContent_Header">
            회사정보
    </div>
        <div className="totalContent_Input">
            <span className="totalContent_Span">*</span>회사명
        <Input placeholder="회사명을 입력해 주세요." style={{ marginTop: "5px" }} />
        </div>
        <div className="totalContent_LastInput">
            대표자명
        <Input placeholder="대표자명을 입력하세요." style={{ marginTop: "5px" }} />
        </div>
    </div>)
}