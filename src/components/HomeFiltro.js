import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import CardProduto from './CardProduto'

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
    background-color:#F2EFE4;

`

const DivProdutos= styled.div`
    display: flex;
    justify-content: center;
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
        todosProdutos: [],
        produtosFiltrados: [] ,
     }

    componentDidMount = ()=>{
        this.pegarProdutos()
    }
    pegarProdutos = ()=>{
        const urlGet = 'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products'

        axios.get(urlGet).then(response=>{
            const todosProdutos = response.data.products.map(produto=>{
                return {
                    ...produto,
                    maisInfo: false
                }
            })
        
            this.setState({todosProdutos: todosProdutos, produtosFiltrados: todosProdutos})
        }).catch(error=>{
            console.log(error.message)
        })
    }

    filtroDefault = () =>{
        this.pegarProdutos()
    }
    filtrarRoupas = ()=>{
        const produtosRoupas = this.state.todosProdutos.filter(produto =>{
            return produto.category === 'roupas'
        })
        this.setState({produtosFiltrados: produtosRoupas})
        
    }
    filtrarCalcados = ()=>{
        const produtosCalcados = this.state.todosProdutos.filter(produto =>{
            return produto.category === 'calcados'
        })
        this.setState({produtosFiltrados: produtosCalcados})
        
    }
    filtrarDecoracao = ()=>{
        const produtosDecoracao = this.state.todosProdutos.filter(produto =>{
            return produto.category === 'decoracao'
        })
        this.setState({produtosFiltrados: produtosDecoracao})
        
    }
    filtrarEletronicos = ()=>{
        const produtosEletronicos = this.state.todosProdutos.filter(produto =>{
            return produto.category === 'eletronicos'
        })
        this.setState({produtosFiltrados: produtosEletronicos})
        
    }
    showInfoImage = (id)=>{
        const novoArrayProdutos = this.state.produtosFiltrados.map(produto=>{
            if(produto.id === id){
                produto.maisInfo = !produto.maisInfo
            }

            return produto
        })

        this.setState({produtosFiltrados: novoArrayProdutos})
    }

    adicionarCarrinho = (id)=>{
        if(localStorage.getItem('itemsCarrinho')){
            const itemsCarrinho = JSON.parse(localStorage.getItem('itemsCarrinho'))
            console.log('itemcarrinho',itemsCarrinho)
            let existe = false
            // mapeando os items do carrinho para ver se o item ja exite nele
            let novoItemsCarrinho = itemsCarrinho.map(item=>{
                // se o item ja exite so alteramos sua quantidade
                if(item[0].id === id){
                    item.quantidade ++
                    existe = true
                }
                return item
            })
            //se nao adicionamos ele no array Items do Carrinho
            if(!existe){
                const produto = this.state.produtosFiltrados.filter(produto=>{
                    return produto.id === id
                })
                const itemCarrinho = {
                    ...produto,
                    quantidade: 1
                }
                
                novoItemsCarrinho = [...itemsCarrinho, itemCarrinho]
            }
            localStorage.setItem('itemsCarrinho', JSON.stringify(novoItemsCarrinho))
        }else{
            const produto = this.state.produtosFiltrados.filter(produto=>{
                return produto.id === id
            })
            const itemCarrinho = {
                ...produto,
                quantidade: 1
            }
            const novoItemsCarrinho = [itemCarrinho]
            localStorage.setItem('itemsCarrinho', JSON.stringify(novoItemsCarrinho))
        }
    }

    render() { 
       console.log(JSON.parse(localStorage.getItem('itemsCarrinho')))
        
        return (  
            <MainDiv>
                <TabFiltros>
                    <ButtonFiltro>
                        <LinkButton onClick={this.filtroDefault} href="#">Todos</LinkButton>
                    </ButtonFiltro>
                    <ButtonFiltro>
                        <LinkButton onClick={this.filtrarRoupas} href="#">Roupas</LinkButton>
                    </ButtonFiltro>
                    <ButtonFiltro>
                        <LinkButton onClick={this.filtrarCalcados} href="#">Calcados</LinkButton>
                    </ButtonFiltro>
                    <ButtonFiltro>
                        <LinkButton onClick={this.filtrarDecoracao} href="#">Decoracao</LinkButton>
                    </ButtonFiltro>
                    <ButtonFiltro>
                        <LinkButton onClick={this.filtrarEletronicos} href="#">Eletronicos</LinkButton>
                    </ButtonFiltro>
                </TabFiltros>
                <DivProdutos>
                    {this.state.produtosFiltrados.map(produto=>{
                        const resto = produto.price % 50
                        const parcela = (produto.price - resto) / 50
                        
                        return <CardProduto key={produto.id}
                        imagem={produto.photos}
                        preco={produto.price}
                        descricao={produto.description}
                        nome={produto.name}
                        formaPg={produto.paymentMethod}
                        parcelas={parcela <= 1?'A vista': 'ate ' + parcela + ' X'}
                        maisInfo={produto.maisInfo}
                        onClickImagem={()=> this.showInfoImage(produto.id)}
                        adicionarCarrinho={()=> this.adicionarCarrinho(produto.id)}                        />
                    })}
                </DivProdutos>
            </MainDiv>
        );
    }
}
 
export default HomeFiltro;