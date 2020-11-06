import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import styled from 'styled-components'


const Carousel = styled(Slider)`
width:100%;
margin:auto;
margin-top:40px;
&:hover{
  outline:none;
  border:none;
}
outline: none;
border:none;`
const Imagem = styled.img`
width:100%;
height:200px;
`
const MainDiv = styled.div`
height:max-content;
width:100%;

`



export default class CustomSlider extends React.Component {
  render() {
    const settings =  {
      adaptiveHeight: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      initialSlide: true,
      virtualList: true
    };
    return (
      <MainDiv>
      
        <Carousel { ...settings }>
          <div>
          <Imagem src="https://picsum.photos/900/201" alt="" srcset=""/>
          </div>
          <div>
            <Imagem src="https://picsum.photos/900/202" alt="" srcset=""/>
          </div>
          <div>
          <Imagem src="https://picsum.photos/900/203" alt="" srcset=""/>
          </div>
        </Carousel>
      </MainDiv>
    );
  }
}
