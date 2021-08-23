import React, { useEffect, useState } from 'react';
import { IMAGES } from 'src/commons/variables'
import Image from 'next/image'
import { Carousel } from 'antd';
import * as api from "src/api/index";
import { RestaurantType } from 'src/types'
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux"
import { counterStateType, authStateType } from 'src/types'
import {
    decrement,
    increment,
    reset,
    logIn,
    logOut,
} from "src/redux/actions";
const MainWrapper = styled.div`
.middle{
  padding: 10px;
  width:100%;
  height: 50px;
  color:#ffffff;
  background-color: #FB9620;
  font-size: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.middle2{
  padding-top: 10px;
  width:100%;
  height: 50px;
  color:#FB9620;
  font-size: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.slider-title{
  padding-top: 30px;
  background-color:#EFEFEF;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  .title{
    font-size: 30px;
    font-weight: bold;
  }
  
}

`
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    background: '#EFEFEF',
};
const contentImageStyle = {
    width: "450px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "20px"
};
export default function Home() {

    useEffect(() => {
        getAllRestaurant();
    }, []);
    const [restaurantData, setrestaurantData] = useState([] as Array<RestaurantType>);
    ////맛집 리스트 데이터 가져온다.
    const getAllRestaurant = () => {
        api.getAllRestaurant()
            .then((res) => res.json())
            .then((data) => {
                setrestaurantData(data)

            })
            .catch((err) => {
                console.log(err);
            });
    }


    console.log(restaurantData);

    const counter = useSelector((state: counterStateType) => state.counter);
    const auth = useSelector((state: authStateType) => state.auth);
    const dispatch = useDispatch();
    const [state, setstate] = useState(0);
    return (
        <MainWrapper>
            <div><h3>{counter}</h3>
                <div>{state}</div>
                <div onClick={() => setstate(state + 1)}>hello</div>
            </div>

            <button onClick={() => dispatch(increment())}>Increase</button>
            <Image width="300" height="300" src={IMAGES.BANNER} alt="Picture of the author" />

            <div className="middle">
                <div>지갑은 가볍게 맛은 묵직하게</div>
            </div>
            <div className="middle2">
                <div>Deal Recipe</div>
            </div>
            <Image src={IMAGES.SPRING} alt="Picture of the author" />
            <div className="slider-title" >
                <div className="title" >쿠커소식</div>
                <div>매주 업로드 되는 쿠커의 신선한 노하우와 이벤트를 확인하세요</div>
            </div>


            <Carousel autoplay>
                {restaurantData.map((data, index) => {
                    return (
                        <div key={index} >
                            <div style={contentStyle}>
                                <img style={contentImageStyle} src={data.image} alt={data.description} />
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </MainWrapper>
    )
}
