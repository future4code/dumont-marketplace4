import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import CardProduto from './CardProduto'
import NavBar from './NavBar'
import CustomSlider from './CustomSlide'
import FiltroDropDown from './FIltroDropDown';

const TabFiltros = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    border-bottom: 1px solid grey;
    position: relative;
`
const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-height: max-content;
    min-height: 100vh;
    
    background-color:#F2EFE4;

`

const DivProdutos= styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: 10px;
    max-height: max-content;
    min-height: 80vh;
    width: 100%;
    
`

const ButtonFiltro = styled.li`
    margin: 20px;
    height: 30px;
    width: 80px;

`
const LinkButton = styled.a`
    text-decoration: none;
    color:grey;
    &:hover{
        font-size: large;
        color: ${props=> props.color};
    }
    &:focus{
        font-size: large;
        color: ${props=> props.color}; 
    }
`
const Letra = styled.p`
    display: inline;
    color: grey; 
    letter-spacing: 2px;
    font-weight: bold;
    &:hover{
        
        color: ${props=> props.color};
    }
    &:focus{
        
        color: ${props=> props.color}; 
    }
`
class HomeFiltro extends Component {
    state = { 
        todosProdutos: [],
        produtosFiltrados: [],
        valorDoInput:"",
        valorMin: 0,
        valorMax: Infinity,
        valorNome: "",
        valorOrdenacao: "",
        displayFiltro : false

     }

    componentDidMount = ()=>{
        this.pegarProdutos()
    }

    atualizarCardProdutos = (event) => {
        
        const  novoArrayProdutosfiltrados = this.state.todosProdutos.filter((produto) => {
            const name = produto.name.toLowerCase()
            return name.includes(event.target.value)
             })
        
        this.setState ({
            produtosFiltrados: novoArrayProdutosfiltrados,
        })
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

        valorMin = (event) => {
            if (event.target.value) {
            const novoArrayProdutos = this.state.produtosFiltrados.filter((produto)=>{
                return produto.price >= event.target.value
            })
            this.setState({produtosFiltrados: novoArrayProdutos })
        } else {
            this.pegarProdutos()
        }
    }

    alterarEstoque = (id)=>{
        const arrayProdutos = this.state.produtosFiltrados.map(produto=>{
            if(produto.id === id){
                produto.installments = produto.installments - 1
            }

            return produto
        })
        this.setState({produtosFiltrados: arrayProdutos})
    }

    continuarComprando = ()=>{
        
        if(!window.confirm('Quer Continuar Comprando??')){
            this.props.onClickCarrinho()
        }
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
                    if (item.quantidade<item[0].installments){
                    item.quantidade ++
                    } else {
                        alert("Limite de estoque atingido")
                    }
                    existe = true
                    this.showInfoImage(id)
                    this.alterarEstoque(id)
                
                    this.continuarComprando()
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
                this.showInfoImage(id)
                this.alterarEstoque(id)
                
                novoItemsCarrinho = [...itemsCarrinho, itemCarrinho]
            }
            localStorage.setItem('itemsCarrinho', JSON.stringify(novoItemsCarrinho))
            this.continuarComprando()
        }else{
            const produto = this.state.produtosFiltrados.filter(produto=>{
                return produto.id === id
            })
            const itemCarrinho = {
                ...produto,
                quantidade: 1
            }
            this.showInfoImage(id)
            this.alterarEstoque(id)
            const novoItemsCarrinho = [itemCarrinho]
            localStorage.setItem('itemsCarrinho', JSON.stringify(novoItemsCarrinho))
            this.continuarComprando()
        }
    }
    onChangeOrdem = (event)=>{
        const visualization = this.state.produtosFiltrados
        const orderVisualization = visualization.sort((produtoA, produtoB) =>{
          const order = event.target.value
            console.log(order)
          if(order === 'Menor valor'){
            return produtoA.price - produtoB.price
          }else if (order === 'Maior valor'){
            return produtoB.price - produtoA.price
          }else{
            if (produtoA.name < produtoB.name){ 
                return -1;
            } else if (produtoA.name >produtoB.name){
                return 1;
            } 
            return 0;
          }
        });
        this.setState({produtosFiltrados: orderVisualization})
      }
    
    render() { 
        console.log(this.state.displayFiltro)
        let arrayProdutosFiltadros = this.state.produtosFiltrados.filter((produto)=>{
            const valorMaximo= this.state.valorMax === ''? Infinity: this.state.valorMax
              if(produto.price < this.state.valorMin || produto.price > valorMaximo){

                  return false

                } else{

                    return true
                  }
                })
        return (  
            <MainDiv>
                <NavBar 
                onClickCarrinho={this.props.onClickCarrinho}
                onClickVender={this.props.onClickVender}
                onChangePesquisa={this.atualizarCardProdutos}
                // valorDoInput= {this.state.valorDoInput}
                />
                
                <CustomSlider/>
                <TabFiltros>
                    <ButtonFiltro>
                        <LinkButton color='#4D4D59' onClick={this.filtroDefault} href="#">
                            <Letra color='#41A69C'>T</Letra>
                            <Letra color='#F2C063'>o</Letra>
                            <Letra color='#F24141'>d</Letra>
                            <Letra color='#41A69C'>o</Letra>
                            <Letra color='#F2C063'>s</Letra>
                        </LinkButton>
                    </ButtonFiltro>
                    <ButtonFiltro>
                        <LinkButton color='#41A69C' onClick={this.filtrarRoupas} href="#">Roupas</LinkButton>
                    </ButtonFiltro>
                    <ButtonFiltro>
                        <LinkButton color='#F2C063' onClick={this.filtrarCalcados} href="#">Calcados</LinkButton>
                    </ButtonFiltro>
                    <ButtonFiltro>
                        <LinkButton color='#F24141' onClick={this.filtrarDecoracao} href="#">Decoracao</LinkButton>
                    </ButtonFiltro>
                    <ButtonFiltro>
                        <LinkButton color='#41A69C' onClick={this.filtrarEletronicos} href="#">Eletronicos</LinkButton>
                    </ButtonFiltro>
                    <FiltroDropDown
                    display={this.state.displayFiltro}
                    mudaDisplayNone={()=>this.setState({displayFiltro: false})}
                    mudaDisplayBlock={()=>this.setState({displayFiltro: true})}
                 valorNome={this.atualizarCardProdutos}
                 valorMin={event => this.setState({valorMin: event.target.value})}
                 minimo={this.state.valorMin}
                 valorMax={event => this.setState({valorMax: event.target.value})}
                 maximo={this.state.valorMax}
                 ordenacao={this.onChangeOrdem}/>
                </TabFiltros>
                <DivProdutos>
                    {arrayProdutosFiltadros.map(produto=>{
                        const resto = produto.price % 50
                        const parcela = (produto.price - resto) / 50
                        if(produto.installments > 0){

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
                        }

                    })}
                </DivProdutos>
            </MainDiv>
        );
    }
}
 
export default HomeFiltro;