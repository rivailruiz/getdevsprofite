import React, { Component } from 'react';
import { lodash } from 'lodash';
import './App.css';

  // Load the full build.
    var _ = require('lodash');
    // Load the core build.
    var _ = require('lodash/core');
    

export default class App extends Component {
    
    state = {
        
        produtosFiltrados: [],
        produtos: [{
                "id": 1,
                "nome": "Vestido curto florido",
                "cor": "rosa",
                "preco": "398",
                "tamanho": "M",
                "img": "img/produtos/vestido-curto-florido.jpg",
                "ativo": true
            }, {
                "id": 2,
                "nome": "Vestido curto de mangas",
                "cor": "azul",
                "preco": "238",
                "tamanho": "P",
                "img": "img/produtos/vestido-curto-de-mangas.jpg",
                "ativo": true

            }, {
                "id": 3,
                "nome": "Vestido curto azul",
                "cor": "azul",
                "preco": "438",
                "tamanho": "M",
                "img": "img/produtos/vestido-azul.jpg",
                "ativo": true
            }, {
                "id": 4,
                "nome": "Vestido curto de flores",
                "cor": "rosa",
                "preco": "438",
                "tamanho": "G",
                "img": "img/produtos/bata-bordada.jpg",
                "ativo": true
            },
            {
                "id": 5,
                "nome": "Saia curta",
                "cor": "preto",
                "preco": "199",
                "tamanho": "P",
                "img": "img/produtos/saia-curta.jpg",
                "ativo": true
            },
            {
                "id": 6,
                "nome": "Vestido branco listrado",
                "cor": "branco",
                "preco": "420",
                "tamanho": "M",
                "img": "img/produtos/vestido-listrado.jpg",
                "ativo": true
            },
            {
                "id": 7,
                "nome": "Vestido Branco",
                "cor": "branco",
                "preco": "222",
                "tamanho": "M",
                "img": "img/produtos/vestido-branco-basico.jpg",
                "ativo": true
            },
            {
                "id": 8,
                "nome": "Vestido longo estampado",
                "cor": "cinza",
                "preco": "230",
                "tamanho": "P",
                "img": "img/produtos/vestido-comteporaneo.jpg",
                "ativo": true
            }, {
                "id": 9,
                "nome": "Vestido verde",
                "cor": "verde",
                "preco": "255",
                "tamanho": "P",
                "img": "img/produtos/vestido-floral-pequeno.jpg",
                "ativo": true
            }
        ]
    }

  componentDidMount(){
      const produtosFiltrados = this.returnProdutosAtivo();
      this.setState({ produtosFiltrados });
  }

  returnProdutosAtivo = () => _.filter(this.state.produtos,{"ativo": true});
  
  onClickCheckboxCor = field =>
    (event, value) => {
      const produtosFiltrados = this.returnProdutosCor(field);
      this.setState({
        [field]: value,
        produtosFiltrados,
      });
    };
  returnProdutosCor = (cor) => _.filter(this.state.produtos, {cor});

onClickCheckboxTam = field =>
    (event, value) => {
      const produtosFiltrados = this.returnProdutosTam(field);
      this.setState({
        [field]: value,
        produtosFiltrados,
      });
    };

  returnProdutosTam = (tamanho) => _.filter(this.state.produtos, {tamanho});


    
  render(){
      
    return(
        
        <section className="content">
        <div className="product_list">
            <div className="sub-top">
                <div className="filter">
                    Filtrar
                </div>
                <div className="sort-by">
                    <select value="">
                        <option selected="selected" disabled="disabled">Ordenar</option>
                        <option value="">Mais recentes</option>
                        <option value="">Menor preço</option>
                        <option value="">Maior preço</option>
                    </select>
                </div>
            </div>

	         <div className="Filtro">
				<div>
				{this.state.produtosFiltrados.map((produto) => {
				return (
				<div key={produto.id} className="item">
					<div>
					<img src={produto.img} alt={produto.nome}/>
					<h1 className="title">{produto.nome}</h1>
					<div className="price">R$ {produto.preco}</div>
					<div className="item-cart material-icons">shopping_cart</div>
					</div>
					</div>
				)})
				}
			</div>
			</div> 
        </div> 

        <aside className="sidebar">
			<div className="sidebar_nav">
				<div className="close filter">&#120325;</div>
				<h3 className="title-menu">Cores</h3>

				<ul className="sub-menu" id="filtro-cores">
                    <li>
                        <span className="checkbox" name="cinza" value={this.state.cinza} onClick={this.onClickCheckboxCor('cinza')}></span>
                        <span className="menu-name">Cinza</span>
					</li>
                    <li>
                        <span className="checkbox" name="branco" value={this.state.branco} onClick={this.onClickCheckboxCor('branco')}></span>
                        <span className="menu-name">Branco</span>
					</li>
                    <li>
                        <span className="checkbox" name="vermelho" value={this.state.vermelho} onClick={this.onClickCheckboxCor('vermelho')}></span>
                        <span className="menu-name">Vermelho</span>
					</li>
                    <li>
                        <span className="checkbox" name="rosa" value={this.state.rosa} onClick={this.onClickCheckboxCor('rosa')}></span>
                        <span className="menu-name">Rosa</span>
					</li>
                    <li>
                        <span className="checkbox" name="verde" value={this.state.verde} onClick={this.onClickCheckboxCor('verde')}></span>
                        <span className="menu-name">Verde</span>
					</li>
                    <li>
                        <span className="checkbox" name="azul" value={this.state.azul} onClick={this.onClickCheckboxCor('azul')}></span>
                        <span className="menu-name">Azul</span>
					</li>
					
				</ul>
				

				<h3 className="title-menu">Tamanhos</h3>
				<ul className="option">
					<li className="size-option" name="P" value={this.state.p} onClick={this.onClickCheckboxTam('P')} href="#">p</li>
					<li className="size-option" name="M" value={this.state.m} onClick={this.onClickCheckboxTam('M')} href="#">m</li>
					<li className="size-option" name="G" value={this.state.g} onClick={this.onClickCheckboxTam('G')} href="#">g</li>
					
				</ul>

				<h3 className="title-menu">Faixa de preço</h3>
				<ul className="sub-menu">
					
					<li>						
                        <span className="checkbox"></span>
                        <span className="menu-name">de R$ 0 até R$ 50</span>
					</li>
					<li>
                        <span className="checkbox"></span>
                        <span className="menu-name">de R$ 50 até R$ 150</span>
					</li>
					<li>
                        <span className="checkbox"></span>
                        <span className="menu-name">de R$ 150 até R$ 300</span>
					</li>
					<li>
                        <span className="checkbox"></span>
                        <span className="menu-name">de R$ 300 até R$ 500</span>
					</li>
					<li>
                        <span className="checkbox"></span>
                        <span className="menu-name">a partir de R$ 500</span>
					</li>
				</ul>

				<div className="clear"></div>
			</div>
		</aside> 
    </section> 
    )
  }
}