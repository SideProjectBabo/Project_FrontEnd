import React from 'react'
import styled from 'styled-components'
import { IMAGES } from 'src/commons/variables'
import Image from 'next/image'

const FooterWrapper = styled.div`
    padding:100px;
    width: 100%;
    height: 300px;
    background-color: #FB9620;
    color:white;
    

`

export default function Footer() {
    return (
        <FooterWrapper>
            <div>
                <Image src={IMAGES.FOOTERLOGO} alt="Picture of the author" />
            </div>

            <span>이용약관 ｜ 개인정보처리방침 ｜ 이용안내 ｜ 고객센터</span><br></br>
            <span> 주식회사 BABO ｜ 대표이사 : BEN JADEN RAMY SPACE ｜ 사업자등록번호 : 123-45-67890 ｜ 통신판매업신고 : 제2021-대한민국-1234호</span><br></br>
            <span>주소: 12345 서울 중구 덕수궁길 15 ｜ TEL : 1566-1234 ｜ E-mail : cooker@babo.co.kt</span><br></br>
            Copytight by 쿠커. all rights reserved. designed by BABO
        </FooterWrapper>
    )
}
