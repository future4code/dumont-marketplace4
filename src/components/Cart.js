import React, { Component } from 'react';
import { Fab , Button} from '@material-ui/core/';
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavBar from './NavBar'
import {CartItem} from './CartItem'


const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-height: max-content;
    min-height: 100vh;
    
    background-color:#F2EFE4;

`
const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: max-content;
    
`
const MainContainer = styled.div `
    margin:auto;
    padding: 20px;
    width: 70vw;
    min-height: 90vh;
    max-height: max-content;
    display: flex;
    flex-direction: column;
`

const DivCart = styled(MainContainer)`
    width: 100%;
    padding: none;
    height: max-content;

`

const TitleLine = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`
const Title = styled.h1 `
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const Total = styled.h2 `
    text-align: right;
    margin-top: 15px;
    width: max-content;
    align-self: flex-end;
    justify-content: flex-end;
`
// const BackButton = styled(Fab) `
// `

export class Cart extends Component {
    state ={
        itemsCarrinho: []
    }

    componentDidMount =()=>{
        if(localStorage.getItem('itemsCarrinho')){

            this.setState({itemsCarrinho : JSON.parse(localStorage.getItem('itemsCarrinho'))})
        }
    }
    finalizarCompra = ()=>{
        localStorage.setItem('itemsCarrinho', '')
        this.setState({itemsCarrinho: []})
        alert('Compra Finalizada! Volte Sempre!')
    }
    render() {
       // console.log(this.state.itemsCarrinho)
      return (
          <MainDiv>
              <NavBar 
                onClickCarrinho={this.props.onClickCarrinho}
                onClickVender={this.props.onClickVender}
                />
            <MainContainer>
                    <DivCart>

                        <TitleLine>
                            <Title> 
                                <ShoppingCartIcon color="secondary"/>
                                Carrinho
                            </Title>
                            {/* <BackButton color="primary"><ArrowBackIcon/></BackButton> */}
                        </TitleLine>

                        {this.state.itemsCarrinho && this.state.itemsCarrinho.map(item=>{
                            return <CartItem/>
                        })}


                        <Total>
                            Valor Total: R${this.props.total || '0,00'}
                        </Total>

                        <ButtonDiv>
                            <Button onClick={this.props.botaoVoltar} color="primary">Voltar</Button>
                            <Button  onClick={this.finalizarCompra} variant="contained" color="primary">Finalizar Compra</Button>
                        </ButtonDiv>
                    </DivCart>
            </MainContainer>
          </MainDiv>
      )
    }
  }