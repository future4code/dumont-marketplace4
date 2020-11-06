import React, { Component } from 'react';
import {Fab, Button, } from '@material-ui/core/';
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemContainer = styled.div `
margin-bottom: 20px;
border: solid 1px;
display:flex;
flex-direction: row;
align-items: center;
/* width:50vw; */
`
const MainContainer = styled.div `
display:flex;
flex-direction: column;
margin: 10px;
`
const QuantityValueContainer = styled.div `
display:flex;
flex-direction: row;
justify-content: space-between;
`
const QuantityContainer = styled.div `
display:flex;
flex-direction: row;
align-items:center;
`
const ProductLine = styled.div `
display:flex;
flex-direction: row;
justify-content: space-between;
`
const ProductImage = styled.img `
max-width: width auto;
max-height:33vh;
`
const ProductName = styled.h2 `
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const ProductDescr = styled.h4 `
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const PlusButton = styled(Fab) `
    border-radius: 10px;
`
const MinusButton = styled(Fab) `
`
const RemoveButton = styled(Fab) `
`
const Quantity = styled.h3 `
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin: 10px;
`
const UnitPrice = styled.h3 `
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`


export class CartItem extends Component {
    render() {
      return (
        <ItemContainer>
            <ProductImage src={this.props.imgUrl} alt=""/>
            <MainContainer>
                <ProductLine>
                    <ProductName>{this.props.productName}</ProductName>
                    <RemoveButton color="secondary" aria-label="add"><DeleteIcon/></RemoveButton>
                </ProductLine>
                    <ProductDescr>{this.props.description}</ProductDescr>
                <QuantityValueContainer>
                    <QuantityContainer>
                        <MinusButton color="primary" aria-label="add"><RemoveIcon/></MinusButton>
                        <Quantity>{this.props.quantity}</Quantity>
                        <PlusButton color="primary" aria-label="add"><AddIcon/></PlusButton>

                    </QuantityContainer>
                    <div>
                        <UnitPrice>Valor: R${this.props.price}</UnitPrice>
                    </div>
                </QuantityValueContainer>
            </MainContainer>

        </ItemContainer>
      )
    }
  }