import React, { Component } from 'react'
import CardProduto from './CardProduto'
import PostProduto from './PostProduto'
import HomeFiltro from './HomeFiltro'

export class AppContainer extends Component {

  state = {
     maisInfo: false
  }
  render() {

    return (
      <div>
        <HomeFiltro/>
       {/* <PostProduto></PostProduto> */}
       {/* <CardProduto
        imagem='https://sc01.alicdn.com/kf/HTB1_gQhdf6H8KJjy0Fjq6yXepXaM.jpg_350x350.jpg'
        preco='100'
        descricao='testando card testando card testando card testando card'
        nome='produto'
        formaPg='cartao'
        parcelas='Ate 3x'
        maisInfo={this.state.maisInfo}
        onClickImagem={()=>{this.setState({maisInfo: !this.state.maisInfo})}}
        /> */}
      </div>
    )
  }
}
