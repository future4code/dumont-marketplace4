import React, { Component } from 'react';
import {TextField, Button, InputLabel, Select, FormControl} from '@material-ui/core/';
import styled from 'styled-components'
import StorefrontIcon from '@material-ui/icons/Storefront';


const MainDiv = styled.div`
    width: 70vw;
    height: 70vh;
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


class PostProduto extends Component {
    state = { 

     }
    
    render() { 
        return ( 
            <MainDiv>
                
               
                <Title> <StorefrontIcon fontSize='inherit' color='secondary'/> Vender Produto</Title>
               
                <InputDiv tamanho='80%'>
                     <Input 
                        id="outlined-basic" 
                        tamanho='100%'
                        label="Nome do Produto" 
                        variant="outlined" />
                </InputDiv >

                <InputDiv tamanho='80%'>
                     <Input 
                     id="outlined-basic" 
                     tamanho='100%' 
                     label="Url da Imagem" 
                     variant="outlined" />
                </InputDiv>

                <InputDiv tamanho='80%'>
                     <Input 
                      id="outlined-basic"  
                      tamanho='100%'
                      label="Descricao" 
                      variant="outlined" />
                </InputDiv>

                <InputDiv tamanho='80%'>
                    <InputDiv tamanho='25%'>
                        <Input 
                         id="outlined-basic"  
                         tamanho='100%' 
                         type='number' 
                         label="Estoque" 
                         variant="outlined" />
                    </InputDiv>
                    <InputDiv tamanho='25%'>
                        <Input 
                         id="outlined-basic" 
                         color='secondary' 
                         type='number'
                         tamanho='100%'
                         label="Preco" 
                         variant="outlined" />
                    </InputDiv>
                    <InputDiv tamanho='55%'>
                        <Input 
                         id="outlined-basic"  
                         tamanho='100%'
                         label="Forma de Pag." 
                         variant="outlined" />
                    </InputDiv>
                </InputDiv>
                <InputDiv tamanho='80%'>
                
                        <FormControl variant="outlined" >
                            <InputLabel htmlFor="outlined-age-native-simple">Categoria</InputLabel>
                            <Select
                            native
                            // value={state.age}
                            // onChange={handleChange}
                            label="Categoria"
                            >
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
                        <Button color="primary">Voltar</Button>
                        <Button variant="contained" color="primary">Vender Produto</Button>
                </ButtonDiv>
            </MainDiv>
    
         );
    }
}
 
export default PostProduto;