import React, { Component } from 'react';
import { Fab } from '@material-ui/core/';
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const MainContainer = styled.div `
    border: solid 1px;
    margin: 20px;
    padding: 20px;
    width: 55vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TitleLine = styled.div `
    display:flex;
    flex-direction:row;
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
`
const BackButton = styled(Fab) `
`

export class Cart extends Component {
    render() {
      return (
        <MainContainer>
            <TitleLine>
                <Title> <ShoppingCartIcon color="secondary"></ShoppingCartIcon> Carrinho</Title>
                <BackButton color="primary"><ArrowBackIcon/></BackButton>
            </TitleLine>

            <div>
                Item 1
            </div>
            <div>
                Item 2
            </div>
            <div>
                Item 3
            </div>
            
            <Total>
                Valor Total: R${this.props.total || '0,00'}
            </Total>
            
        </MainContainer>
      )
    }
  }