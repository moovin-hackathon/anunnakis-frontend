import React from 'react'
import './style.scss'
import Card from '../../components/Card'
import { OptionIcons } from '../../toolkit/utils'

let seila = [1, 1, 1, 1, 1, 1, 1]

const Search: React.FC = () => (
    <div className="Search">
        <Card title="Pesquisa" icon={OptionIcons['search']}>
            <div className="SearchCard">
                <div className="sc-col">
                    <div className="scc-title">
                        <span>Principais buscas no seu site</span>
                    </div>
                    <div className="scc-list">
                        {seila.map((sla, index) => (
                            <div className="sccl-item">
                                <span>Exemplo de Busca</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sc-col">
                    <div className="scc-header">
                        <div className="scch-select">
                            <select>
                                <option>Categoria</option>
                            </select>
                        </div>
                        <div className="scch-size-changer">
                            <span>Visualizar</span>
                            <select>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                            </select>
                        </div>
                    </div>
                    <div className="scc-balloon-container">
                        <div className="sbc-balloon">
                            <div className="sbcb-icon">
                                <img />
                            </div>
                            <div className="sbcb-content">
                                <div className="sc-title">
                                    <span>Dica!</span>
                                </div>
                                <div className="sc-text">
                                    <span>As principais buscas no seu site são a oportunidade de você melhorar acertar ainda mais na divulgação do seu produto.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-controller">
                <button>Baixar Relatório</button>
            </div>
        </Card>
        <div className="SalexSearchContainer">
            <div className="titles">
                <span>Buscas x vendas</span>
                <span>Selecione pelo menos uma opção de cada bloco</span>
            </div>
            <div className="cards">
                <div className="card">
                    <button>mais vendidas</button>
                    <button>menos vendidas</button>
                </div>
            </div>
            <div className="list">
                <div className="list-header">
                    <span>Resultado</span>
                </div>
                <div className="list-body">
                    {seila.map((sla, index) => (
                        <div key={index} className="lb-item">
                            <span>Exemplo de Busca</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

export default Search