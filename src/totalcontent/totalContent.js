import React from 'react';
import { Button } from 'antd'
import 'antd/dist/antd.css';
import './totalContent.css'
import CompanyInf from './totalcontentComponent/companyInformation'
import ProposerInf from './totalcontentComponent/proposerInformation'
import LawerInf from './totalcontentComponent/lawerInformation'


export default function TotalContent() {
    return (
        <>
            <form>
                <div className="totalContent_TotalContainer">
                    <CompanyInf />
                    <ProposerInf />
                    <LawerInf />
                    <Button type="primary" htmlType="submit" className="totalContent_SubmitBtn">신청서 제출하기</Button>
                </div>
            </form>
        </>
    )
}