import React from 'react'
import './style.scss'
import Card from '../../components/Card'
import { OptionIcons } from '../../toolkit/utils'

let seila = [1, 1, 1, 1, 1, 1, 1]

const Stock: React.FC = () => (
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
                                {seila.map((sla, index) => (
                                    <div className="sb-item" key={index}>
                                        <div className="col-1">
                                            <span>100</span>
                                        </div>
                                        <div className="col-2">
                                            <div className="sb-prod">
                                                <div className="sbp-photo">
                                                    <img />
                                                </div>
                                                <div className="sbp-info">
                                                    <div className="si-name">
                                                        <span>Nome do Produto</span>
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
                                {seila.map((sla, index) => (
                                    <div className="sb-item" key={index}>
                                        <div className="col-1">
                                            <span>100</span>
                                        </div>
                                        <div className="col-2">
                                            <div className="sb-prod">
                                                <div className="sbp-photo">
                                                    <img />
                                                </div>
                                                <div className="sbp-info">
                                                    <div className="si-name">
                                                        <span>Nome do Produto</span>
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

export default Stock