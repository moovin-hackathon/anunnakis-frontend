import React from 'react'
import './style.scss'
import Card from '../../components/Card'
import { OptionIcons } from '../../toolkit/utils'
import { getMostAccessedProducts, Product, getMostAccessedCategory, getLessAccessedCategory, getMostSaledProducts, Variation } from '../../API'

let seila = [1, 1, 1, 1, 1, 1, 1, 1]

interface State {
    mostSaledProducts: Product[]
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

export default class Dashboard extends React.Component<{}, State> {

    state: State = {
        mostSaledProducts: [],
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
        getMostSaledProducts()
            .then(res => this.setState({ mostSaledProducts: res.data.items }))
    }

    render() {

        const SearchesCard: React.FC = () => (
            <Card title="Pesquisas" icon={OptionIcons['search']}>
                <div className="SearchesCard">
                    <div className="list-container">
                        <div className="lc-header">
                            <span>Principais Buscas</span>
                        </div>
                        <div className="lc-items">
                            {seila.map((sla, index) => (
                                <div key={index} className="lc-item">
                                    <span>Exemplo de Busca</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card-controller">
                        <button>Relatório Completo</button>
                    </div>
                </div>
            </Card>
        )

        const StockCard: React.FC = () => (
            <Card title="Estoque" icon={OptionIcons['stock']}>
                <div className="StockCard">
                    <div className="list-container">
                        <div className="lc-header">
                            <div>
                                <span>Produto</span>
                            </div>
                            <div>
                                <span>Quantidade</span>
                            </div>
                        </div>
                        <div className="lc-items">
                            {seila.map((sla, index) => (
                                <div key={index} className="lc-item">
                                    <span>Exemplo de Busca</span>
                                    <span>20</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card-controller">
                        <button>Relatório Completo</button>
                    </div>
                </div>
            </Card>
        )

        const AccessesCard: React.FC = () => (
            <Card title="Acessos" icon={OptionIcons['accesses']}>
                <div className="AccessesCard">
                    <div className="most-accessed-prods">
                        <div className="map-title">
                            <span>produtos mais acessados</span>
                        </div>
                        <div className="map-prods">
                            {this.state.mostAccessedProducts.map(prod => (
                                <div key={prod.id} className="mapp-prod">
                                    <img src={prod.variations[0].images[0]} alt={prod.id} />
                                    <span>{prod.title}</span>
                                    <a href='#'>Acessar</a>
                                </div>
                            ))}
                        </div>
                    </div>
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
                                    {this.state.mostAccessedCategory.accessCount}
                                </div>
                            </div>
                            <div className="crc-card">
                                <div className="crcc-title">
                                    <span>{this.state.lessAccessedCategory.category}</span>
                                </div>
                                <div className="crcc-content">
                                    {this.state.lessAccessedCategory.accessCount}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-controller">
                        <button onClick={() => window.location.href = "/accesses"}>Ver +</button>
                    </div>
                </div>
            </Card>
        )

        const SalesCard: React.FC = () => (
            <Card title="Vendas" icon={OptionIcons['sales']}>
                <div className="AccessesCard">
                    <div className="most-accessed-prods">
                        <div className="map-title">
                            <span>produtos mais vendidos</span>
                        </div>
                        <div className="map-prods">
                            {this.state.mostSaledProducts.map(prod => (
                                <div key={prod.id} className="mapp-prod">
                                    <img src={prod.variations[0].images[0]} alt={prod.title} />
                                    <span>{prod.title}</span>
                                    <a href='#'>Acessar</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card-controller">
                        <button>Ver +</button>
                    </div>
                </div>
            </Card>
        )

        return (
            <div className="Dashboard">
                <AccessesCard />
                <div className="row-cards">
                    <SearchesCard />
                    <StockCard />
                </div>
                <SalesCard />
            </div>
        )
    }
}