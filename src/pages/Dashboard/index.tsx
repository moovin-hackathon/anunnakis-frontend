import React from 'react'
import './style.scss'
import Card from '../../components/Card'
import { OptionIcons } from '../../toolkit/utils'

let seila = [1, 1, 1, 1, 1, 1, 1, 1]

const Dashboard: React.FC = () => (
    <div className="Dashboard">
        <AccessesCard />
        <div className="row-cards">
            <SearchesCard />
            <StockCard />
        </div>
        <SalesCard />
    </div>
)

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
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                </div>
            </div>
            <div className="category-review">
                <div className="cr-title">
                    <span>análise de categorias</span>
                </div>
                <div className="cr-cards">
                    <div className="crc-card">
                        <div className="crcc-title">
                            <span>Feminino</span>
                        </div>
                        <div className="crcc-content">
                            1.000
                        </div>
                    </div>
                    <div className="crc-card">
                        <div className="crcc-title">
                            <span>Feminino</span>
                        </div>
                        <div className="crcc-content">
                            1.000
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-controller">
                <button onClick={() => window.location.href="/accesses"}>Ver +</button>
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
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                    <div className="mapp-prod">
                        <img />
                        <span>Nome do Produto</span>
                        <a href='#'>Acessar</a>
                    </div>
                </div>
            </div>
            <div className="card-controller">
                <button>Ver +</button>
            </div>
        </div>
    </Card>
)

export default Dashboard