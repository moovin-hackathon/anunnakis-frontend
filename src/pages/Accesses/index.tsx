import React from 'react'
import './style.scss'
import Card from '../../components/Card'
import { OptionIcons } from '../../toolkit/utils'
import { Product, getMostAccessedProducts, Variation, getMostAccessedCategory, getLessAccessedCategory } from '../../API'

import IdeaIcon from '../../assets/icons/idea.png'
import ChampIcon from '../../assets/icons/champion.png'

let seila2 = [{
    category: 'Feminino',
    views: 1000,
    rate: 100
},
{
    category: 'Feminino',
    views: 1000,
    rate: 60
},
{
    category: 'Feminino',
    views: 1000,
    rate: 40
}]

interface State {
    mostAccessedProducts: Product[]
    mostAccessedCategory: {
        category: string
        accessCount: Variation['accessCount']
    }
    lessAccessedCategory: {
        category: string
        accessCount: Variation['accessCount']
    }
}

export default class Accesses extends React.Component<{}, State> {

    componentDidMount() {
        getMostAccessedProducts()
            .then(res => this.setState({ mostAccessedProducts: res.data.items }))
        getMostAccessedCategory()
            .then(res => this.setState({
                mostAccessedCategory: {
                    accessCount: res.data[0].variation.accessCount,
                    category: res.data[0].category
                }
            }))
        getLessAccessedCategory()
            .then(res => this.setState({
                lessAccessedCategory: {
                    accessCount: res.data[0].variation.accessCount,
                    category: res.data[0].category
                }
            }))
    }

    state: State = {
        mostAccessedProducts: [],
        mostAccessedCategory: {
            category: 'Carregando...',
            accessCount: '0'
        },
        lessAccessedCategory: {
            category: 'Carregando...',
            accessCount: '0'
        }
    }

    render() {
        return (
            <div className="Accesses">
                <Card title="Acessos" icon={OptionIcons['accesses']}>
                    <div className="AccessesCard">
                        <div className="ac-header">
                            <div className="ach-icon-title">
                                <img src={ChampIcon} alt="alt" />
                                <span>Produtos Mais Acessados</span>
                            </div>
                            <div className="ach-size-changer">
                                <span>Produtos</span>
                                <select>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                </select>
                            </div>
                        </div>
                        <div className="ac-content">
                            <div className="acc-column">
                                <div className="accc-prods-grid">
                                    <div className="apg-header">
                                        <div className="col-1">
                                            <span>Views</span>
                                        </div>
                                        <div className="col-2">
                                            <span>Produtos</span>
                                        </div>
                                    </div>
                                    <div className="apg-body">
                                        {this.state.mostAccessedProducts.map(prod => (
                                            <div key={prod.id} className="apgb-item">
                                                <div className="col-1">
                                                    <span>{prod.variations[0].accessCount}</span>
                                                </div>
                                                <div className="col-2">
                                                    <div className="apgb-prod">
                                                        <div className="ap-photo">
                                                            <img src={prod.variations[0].images[0]} alt={prod.title} />
                                                        </div>
                                                        <div className="ap-info">
                                                            <div className="api-name">
                                                                <span>{prod.title}</span>
                                                            </div>
                                                            <div className="api-link">
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
                            <div className="acc-column">
                                <div className="ac-tip-balloon">
                                    <div className="atb-icon">
                                        <img src={IdeaIcon} alt="dica" />
                                    </div>
                                    <div className="atb-content">
                                        <div className="atbc-title">
                                            <span>Dica!</span>
                                        </div>
                                        <div className="atbc-text">
                                            <span>Aproveite para colocar em destaque os produtos mais acessados do seu site.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-controller">
                            <button>Baixar Relatório</button>
                        </div>
                    </div>
                </Card>
                <div className="category-review">
                    <div className="cr-title">
                        <span>análise de categorias</span>
                    </div>
                    <div className="cr-cards">
                        <div className="crc-card">
                            <div className="crcc-title">
                                <span>{this.state.mostAccessedCategory.category}</span>
                            </div>
                            <div className="crcc-content">
                                <span>{this.state.mostAccessedCategory.accessCount}</span>
                            </div>
                        </div>
                        <div className="crc-card">
                            <div className="crcc-title">
                                <span>{this.state.lessAccessedCategory.category}</span>
                            </div>
                            <div className="crcc-content">
                                <span>{this.state.lessAccessedCategory.accessCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-chart">
                    <div className="cc-header">
                        <div className="col-1">
                            <span>Categorias</span>
                        </div>
                        <div className="col-2">
                            <span>Views</span>
                        </div>
                        <div className="col-3">
                            {/* TODO: Pegar arrows do font awesome */}
                        </div>
                    </div>
                    <div className="cc-body">
                        {seila2.map((naosei, index) => (
                            <div className="ccb-item">
                                <div className="col-1">
                                    {naosei.category}
                                </div>
                                <div className="col-2">
                                    {naosei.views}
                                </div>
                                <div style={{ width: `${naosei.rate}%` }} className="col-3"></div>
                            </div>
                        ))}
                    </div>
                    <div className="card-controller">
                        <button>Baixar Relatório</button>
                    </div>
                </div>
            </div>
        )
    }
}