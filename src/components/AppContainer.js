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
            </div>
    )
  }
}
