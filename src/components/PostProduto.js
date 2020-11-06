import React, { Component } from 'react';
import {TextField, Button, InputLabel, Select, FormControl} from '@material-ui/core/';
import styled from 'styled-components'
import StorefrontIcon from '@material-ui/icons/Storefront';
import axios from 'axios'
import NavBar from './NavBar'

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-height: max-content;
    min-height: 100vh;
    background-color:#F2EFE4;

`
const PostDiv = styled.div`
    margin: auto;
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px){
        width:100vw ;
    }
`
const Input = styled(TextField)`
    width: ${props=> props.tamanho};
    word-wrap: break-word;  
`
const InputDiv = styled.div`
     width: ${props=> props.tamanho};
    margin: 5px;
    height: max-content;
    display: flex;
`
const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    height: max-content;
    margin-top: 20px;
`
const Title = styled.h1`
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    align-self: flex-start;
    margin-left: 100px;
    @media screen and (max-width:500px){
        margin-left: 50px;
    }
`
const Form = styled(FormControl)`
    width: 100%;
`


class PostProduto extends Component {
    state = { 
        valorNome: '',
        valorUrl:'',
        valorDescricao: '',
        valorEstoque: '',
        valorPreco: '',
        valorFormaPg:'',
        valorCategoria:''
     }

     postarProduto = ()=>{
        const urlPost = 'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products'
        const body = {
            name: this.state.valorNome,
            description: this.state.valorDescricao,
            price: this.state.valorPreco,
            paymentMethod: this.state.valorFormaPg,
            category: this.state.valorCategoria,
            photos: [this.state.valorUrl],
            installments:this.state.valorEstoque
        }
        axios.post(urlPost, body).then(response=>{
            alert('Seu produto ja esta disponivel na nossa vitrine!')
            this.setState({
                valorNome: '',
                valorUrl:'',
                valorDescricao: '',
                valorEstoque: '',
                valorPreco: '',
                valorFormaPg:'',
                valorCategoria:''
            })
        }).catch(error=>{
            console.log(error.message)
        })
     }
    
    render() { 
       
        return ( 
            <MainDiv>
                 <NavBar 
                onClickCarrinho={this.props.onClickCarrinho}
                onClickVender={this.props.onClickVender}
                />
                <PostDiv>

                <Title> 
                    <StorefrontIcon fontSize='inherit' color='secondary'/>
                     Vender Produto
                </Title>

                <InputDiv tamanho='80%'>
                     <Input 
                        id="outlined-basic"
                        value={this.state.valorNome} 
                        onChange={event=> this.setState({valorNome: event.target.value})}
                        tamanho='100%'
                        label="Nome do Produto" 
                        variant="outlined" />
                </InputDiv >

                <InputDiv tamanho='80%'>
                     <Input 
                     id="outlined-basic" 
                     value={this.state.valorUrl} 
                     onChange={event=> this.setState({valorUrl: event.target.value})}
                     tamanho='100%' 
                     label="Url da Imagem" 
                     variant="outlined" />
                </InputDiv>

                <InputDiv tamanho='80%'>
                     <Input 
                      id="outlined-basic" 
                      value={this.state.valorDescricao} 
                      onChange={event=> this.setState({valorDescricao: event.target.value})} 
                      tamanho='100%'
                      label="Descricao" 
                      variant="outlined" />
                </InputDiv>

                <InputDiv tamanho='80%'>
                    <InputDiv tamanho='25%'>
                        <Input 
                         id="outlined-basic"  
                         value={this.state.valorEstoque} 
                         onChange={event=> this.setState({valorEstoque: event.target.value})}
                         tamanho='100%' 
                         type='number' 
                         label="Estoque" 
                         variant="outlined" />
                    </InputDiv>
                    <InputDiv tamanho='25%'>
                        <Input 
                         id="outlined-basic" 
                         value={this.state.valorPreco} 
                         onChange={event=> this.setState({valorPreco: event.target.value})}
                         color='secondary' 
                         type='number'
                         tamanho='100%'
                         label="Preco" 
                         variant="outlined" />
                    </InputDiv>
                    <InputDiv tamanho='55%'>
                    
                    <Form variant="outlined" >
                            <InputLabel htmlFor="outlined-age-native-simple">Forma de Pag.</InputLabel>
                            <Select
                            native
                            value={this.state.valorFormaPg} 
                            onChange={event=> this.setState({valorFormaPg: event.target.value})}
                            label="Categoria">
            
                            <option aria-label="None" value="" />
                            <option value={'boleto'}>Boleto</option>
                            <option value={'cartao'}>Cartao</option>
                            <option value={'dinheiro'}>Dinheiro</option>
                           
                            </Select>
                        </Form>
                    </InputDiv>
                    {/* <InputDiv tamanho='55%'>
                        <Input 
                         id="outlined-basic" 
                         value={this.state.valorFormaPg} 
                         onChange={event=> this.setState({valorFormaPg: event.target.value})} 
                         tamanho='100%'
                         label="Forma de Pag." 
                         variant="outlined" />
                    </InputDiv> */}
                </InputDiv>
                <InputDiv tamanho='80%'>
                
                        <FormControl variant="outlined" >
                            <InputLabel htmlFor="outlined-age-native-simple">Categoria</InputLabel>
                            <Select
                            native
                            value={this.state.valorCategoria} 
                            onChange={event=> this.setState({valorCategoria: event.target.value})}
                            label="Categoria">
            
                            <option aria-label="None" value="" />
                            <option value={'roupas'}>Roupas</option>
                            <option value={'eletronicos'}>Eletronicos</option>
                            <option value={'decoracao'}>Decoracao</option>
                            <option value={'moveis'}>Moveis</option>
                            <option value={'calcados'}>Calcados</option>
                            </Select>
                        </FormControl>
                </InputDiv>

                <ButtonDiv>
                        <Button onClick={this.props.botaoVoltar} color="primary">Voltar</Button>
                        <Button  onClick={this.postarProduto} variant="contained" color="primary">Vender Produto</Button>
                </ButtonDiv>
                </PostDiv>
            </MainDiv>
    
         );
    }
}
 
export default PostProduto;