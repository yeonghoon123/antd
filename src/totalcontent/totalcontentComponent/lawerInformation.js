import React from 'react'
import { Input, Select } from 'antd'

export default function LawerInf(props) {
    const { Option } = Select
    return (
        <div className="totalContent_LawerInformationContainer">
            <div className="totalContent_Header">
                노무사 정보
            </div>
            <div className="totalContent_Input">
                상담 노무사
                <Input placeholder="이름을 입력해 주세요." style={{ marginTop: "5px" }} required name="lawer" onChange={props.getValue} />
            </div>
            <div className="totalContent_Input">
                상담 유형 선택
                <div className="totalContent_SelectBox">
                    <Select defaultValue="-유형 선택-" className="totalContent_Input" onChange={props.playValue} name="play">
                        <Option value="단건 노무 상담">단건 노무 상담 (전화 상담 10분까지 무료 ~ 그 이후 10분당만원)</Option>
                        <Option value="연단위 노무 자문 계약 체결">연단위 노무 자문 계약 체결 (노무사 협의 후 최종 자문 비용이 결정되며, 단 최소 자문비는 월 10만원입니다.)</Option>
                        <Option value="긴급">긴급</Option>
                    </Select>
                </div>
            </div>
            <div className="totalContent_LastInput">
                상담 시간 선택
                <div className="totalContent_LastSelectBox">
                    <Select defaultValue="-원하시는 시간을 선택하세요-" className="totalContent_LastInput" onChange={props.timeValue} name="time">
                        <Option value="오전 10시 ~ 12시">오전 10시 ~ 12시</Option>
                        <Option value="오후 1시 ~ 3시">오후1시 ~ 3시</Option>
                        <Option value="오후 3시 ~ 5시">오후 3시 ~ 5시</Option>
                        <Option value="오후 5시 ~ 6시">오후 5시 ~ 6시</Option>
                    </Select>
                </div>
            </div >
        </div >

    )
}