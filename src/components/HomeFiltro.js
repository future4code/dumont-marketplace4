import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const TabFiltros = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    border-bottom: 1px solid grey;
`
const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-height: max-content;
    min-height: 80vh;
    margin-top: 100px;
    background-color: #ebded9;

`

const DivProdutos= styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 10px;
    height: max-content;
    width: 100%;
`

const ButtonFiltro = styled.li`
    margin: 20px;
`
const LinkButton = styled.a`
    text-decoration: none;
    color:grey;
    &:hover{
        font-size: large;
        color: black;
    }
    &:focus{
        font-size: large;
        color: black; 
    }
`
class HomeFiltro extends Component {
    state = { 
       
     }


    render() { 
        
        return (  
            <MainDiv>
                <TabFiltros>
                    <ButtonFiltro><LinkButton href="#">Todos</LinkButton></ButtonFiltro>
                    <ButtonFiltro><LinkButton href="#">Roupas</LinkButton></ButtonFiltro>
                    <ButtonFiltro><LinkButton href="#">Calcados</LinkButton></ButtonFiltro>
                    <ButtonFiltro><LinkButton href="#">Decoracao</LinkButton></ButtonFiltro>
                    <ButtonFiltro><LinkButton href="#">Eletronicos</LinkButton></ButtonFiltro>
                </TabFiltros>
                <DivProdutos>
                    {/* renderizar aqui os produtos */}
                </DivProdutos>
            </MainDiv>
        );
    }
}
 
export default HomeFiltro;