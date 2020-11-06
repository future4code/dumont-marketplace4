import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import styled from 'styled-components'


const Carousel = styled(Slider)`
  width:80%;
  margin:auto;
  border-radius: 10px;
  &:hover{
    outline:none;
    border:none;
  }
  outline: none;
  border:none;
`
const Imagem = styled.img`
  margin: auto;
  width:40vw;
  height:300px;
  
`
const MainDiv = styled.div`

  margin-top: 10px;
  height:max-content;
  width:100vw;


`



export default class CustomSlider extends React.Component {
  render() {
    const settings =  {
      adaptiveHeight: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      initialSlide: true,
      virtualList: true
    };
    return (
      <MainDiv>
      
        <Carousel { ...settings }>
          <div>
          <Imagem src="https://i.pinimg.com/originals/90/93/5f/90935f52db5cfc2f77831c4fc9a0d02b.jpg" alt="" srcset=""/>
          <Imagem src="https://1.bp.blogspot.com/-dQvrXHCdlXg/UE1gJQq_F1I/AAAAAAAACHo/p3HcR4sUl2w/s1600/IMG_1141+v2.JPG" alt="" srcset=""/>
          </div>
          <div>
           <Imagem src="https://1.bp.blogspot.com/-dQvrXHCdlXg/UE1gJQq_F1I/AAAAAAAACHo/p3HcR4sUl2w/s1600/IMG_1141+v2.JPG" alt="" srcset=""/>
            <Imagem src="https://miro.medium.com/max/6000/1*R_ZBAjns7CL2CxV343WNFQ.jpeg" alt="" srcset=""/>
          </div>
          <div>
          <Imagem src="https://miro.medium.com/max/6000/1*R_ZBAjns7CL2CxV343WNFQ.jpeg" alt="" srcset=""/>
          <Imagem src="https://i.pinimg.com/originals/90/93/5f/90935f52db5cfc2f77831c4fc9a0d02b.jpg" alt="" srcset=""/>
          </div>
        </Carousel>
      </MainDiv>
    );
  }
}
