import React from 'react'
import { IMAGES } from 'src/commons/variables'
import Image from 'next/image'
import styled from 'styled-components'
import { HeartOutlined, SearchOutlined, } from '@ant-design/icons';
const HeaderWrapper = styled.div`
    padding:20px 50px 0px 50px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 90px;
    }
    input{
        width: 200px;
        height: 30px;
        line-height: 19px;
        border: none;
        box-sizing: border-box;
        border-radius: 3px; 
        padding:10px;
        
    }
   .search{
        width: 300px;
        height: 40px;
        border: 1px solid #6A6A6A;
        padding:3px;
        display: flex;
        align-items: center;
        justify-content:space-between
   }
   .button{
        width: 110px;
        height: 40px;
        background: #FB9620;
        box-sizing: border-box;
        border-radius: 3px;

        display: flex;
        align-items: center;
        justify-content: center;
        span{
            width: 100px;
            height: 19px;
            font-family: PT Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 19px;
            color: #FFFFFF;

        }
   }
   .info{
       display: flex;
       width: 300px;
       justify-content:space-around;
       align-items: center;
   }
   
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Image src={IMAGES.LOGO} alt="Picture of the author" />
            <div className="search">
                <input type="text" placeholder="음식,재료를 검색하세요" />
                <  SearchOutlined style={{ fontSize: "180%" }} /></div>

            <div className="info" >
                <HeartOutlined style={{ fontSize: "200%" }} />
                <div>로그인 | 회원가입</div>
                <div className="button">
                    <span>+내 레시피 등록</span>
                </div>
            </div>
        </HeaderWrapper>

    )
}
