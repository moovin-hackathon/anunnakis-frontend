import React from 'react'
import './style.scss'
import Card from '../../components/Card'
import { OptionIcons } from '../../toolkit/utils'
import { Product, getNeedBuyProducts, getNeedSellProducts } from '../../API'

interface State {
    needBuy: Product[]
    needSell: Product[]
}

export default class Stock extends React.Component<{}, State> {

    state: State = {
        needBuy: [],
        needSell: []
    }

    componentDidMount() {
        getNeedBuyProducts()
            .then(res => this.setState({
                needBuy: res.data.items
            }))
        getNeedSellProducts()
            .then(res => this.setState({
                needSell: res.data.items
            }))
    }

    render() {
        return (
            <div className="Stock">
                <Card title="Estoque" icon={OptionIcons['stock']}>
                    <div className="StockCard">
                        <div className="sc-header">
                            <div className="sch-category-search">
                                <select>
                                    <option>Categoria</option>
                                </select>
                            </div>
                            <div className="sch-size-changer">
                                <span>Visualizar</span>
                                <select>
                                    <option>50</option>
                                </select>
                            </div>
                        </div>
                        <div className="sc-content">
                            <div className="scc-col">
                                <div className="sc-title">
                                    <span>O que você precisa comprar</span>
                                </div>
                                <div className="sc-list">
                                    <div className="scl-header">
                                        <div className="col-1">
                                            <span>Quantidade</span>
                                        </div>
                                        <div className="col-2">
                                            <span>Produtos</span>
                                        </div>
                                    </div>
                                    <div className="scl-body">
                                        {this.state.needBuy.map(prod => (
                                            <div className="sb-item" key={prod.id}>
                                                <div className="col-1">
                                                    <span>{prod.variations[0].totalQuantity}</span>
                                                </div>
                                                <div className="col-2">
                                                    <div className="sb-prod">
                                                        <div className="sbp-photo">
                                                            <img src={prod.variations[0].images[0]} alt="photo" />
                                                        </div>
                                                        <div className="sbp-info">
                                                            <div className="si-name">
                                                                <span>{prod.title}</span>
                                                            </div>
                                                            <div className="si-link">
                                                                <a href="#">Acessar</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="scc-col">
                                <div className="sc-title">
                                    <span>O que você precisa vender</span>
                                </div>
                                <div className="sc-list">
                                    <div className="scl-header">
                                        <div className="col-1">
                                            <span>Quantidade</span>
                                        </div>
                                        <div className="col-2">
                                            <span>Produtos</span>
                                        </div>
                                    </div>
                                    <div className="scl-body">
                                        {this.state.needSell.map(prod => (
                                            <div className="sb-item" key={prod.id}>
                                                <div className="col-1">
                                                    <span>{prod.variations[0].totalQuantity}</span>
                                                </div>
                                                <div className="col-2">
                                                    <div className="sb-prod">
                                                        <div className="sbp-photo">
                                                            <img src={prod.variations[0].images[0]} alt="photo" />
                                                        </div>
                                                        <div className="sbp-info">
                                                            <div className="si-name">
                                                                <span>{prod.title}</span>
                                                            </div>
                                                            <div className="si-link">
                                                                <a href="#">Acessar</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-controller">
                        <button>Baixar Relatório</button>
                    </div>
                </Card>
            </div>
        )
    }

}