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

    addQuantity = (id) => {
        console.log(id)
        const addItem = this.state.itemsCarrinho.map((item) => {
            if (id === item[0].id && item.quantidade<item[0].installments) {
                const newItem = {
                    ...item,
                    quantidade: item.quantidade + 1
                }
                return newItem
            } else {
                alert ("Limite de estoque atingido")
                return item
            }
        })
        this.setState({itemsCarrinho: addItem})
    }

    removeQuantity = (id) => {
    console.log(id)
    const addItem = this.state.itemsCarrinho.map((item) => {
        if (id === item[0].id && item.quantidade>1) {
            const newItem = {
                ...item,
                quantidade: item.quantidade - 1
            }
            return newItem
        }
            return item
    })
    this.setState({itemsCarrinho: addItem})
    }

    removeItem = (id) => {
        console.log(id)
        const addItem = this.state.itemsCarrinho.map((item) => {
            if (id === item[0].id) {
                const newItem = {
                    ...item,
                    quantidade: 0
                }
                return newItem
            }
            return item
        })
        this.setState({itemsCarrinho: addItem})
    }
    
    render() {

        const novaListaCarrinho = this.state.itemsCarrinho.filter(item => {
            if (item.quantidade === 0) {
                return false
            } else {
                return true
            }
        })
       console.log(this.state.itemsCarrinho)
       
       let total = novaListaCarrinho.reduce(getTotal, 0);
       function getTotal(total, item) {
       return total + (item[0].price * item.quantidade);
       }

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

                        {novaListaCarrinho && novaListaCarrinho.map(item=>{
                            return <CartItem
                            addQuantity={() => this.addQuantity(item[0].id)}
                            removeQuantity={() => this.removeQuantity(item[0].id)}
                            removeItem={() => this.removeItem(item[0].id)}
                            imgUrl={item[0].photos}
                            productName={item[0].name}
                            price={item[0].price}
                            description={item[0].description}
                            quantity={item.quantidade}/>
                        })}


                        <Total>
                            Valor Total: R${total}
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