import React from 'react'
import './style.scss'
import Card from '../../components/Card'
import { OptionIcons } from '../../toolkit/utils'

let seila = [1, 1, 1, 1, 1, 1, 1, 1]

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

const Accesses: React.FC = () => (
    <div className="Accesses">
        <Card title="Acessos" icon={OptionIcons['accesses']}>
            <div className="AccessesCard">
                <div className="ac-header">
                    <div className="ach-icon-title">
                        <img />
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
                                {seila.map((aham, index) => (
                                    <div key={index} className="apgb-item">
                                        <div className="col-1">
                                            <span>100</span>
                                        </div>
                                        <div className="col-2">
                                            <div className="apgb-prod">
                                                <div className="ap-photo">
                                                    <img alt="" />
                                                </div>
                                                <div className="ap-info">
                                                    <div className="api-name">
                                                        <span>Nome do Produto</span>
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
                                <img alt="" />
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

export default Accesses