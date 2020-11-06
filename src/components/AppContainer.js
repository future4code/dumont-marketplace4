import React, { Component } from 'react'
import PostProduto from './PostProduto'
import HomeFiltro from './HomeFiltro'
import {Cart} from './Cart'
export class AppContainer extends Component {

  state = {
     home: true,
     carrinho: false,
     vender: false,
  }

 

  render() {
    console.log(this.state)
    return (
      <div>
          {this.state.home && <HomeFiltro 
            onClickVender={()=>this.setState({home: false, carrinho: false, vender: true,})}
            onClickCarrinho={()=>this.setState({home: false, carrinho: true, vender: false,})}
            />}
          {this.state.vender && <PostProduto 
            onClickVender={()=>this.setState({home: false, carrinho: false, vender: true,})}
            onClickCarrinho={()=>this.setState({home: false, carrinho: true, vender: false,})}
            botaoVoltar={()=>this.setState({home: true, carrinho: false, vender: false})}
            /> 
            }
            {this.state.carrinho && <Cart
            onClickVender={()=>this.setState({home: false, carrinho: false, vender: true,})}
            onClickCarrinho={()=>this.setState({home: !this.state.home, carrinho: !this.state.carrinho, vender: !this.state.vender,})}
            botaoVoltar={()=>this.setState({home: true, carrinho: false, vender: false})}
            />}
      </div>
    )
  }
}
