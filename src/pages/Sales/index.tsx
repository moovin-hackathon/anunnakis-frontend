import React from 'react'
import './style.scss'
import Card from '../../components/Card'
import { OptionIcons } from '../../toolkit/utils'
import { getManager, Product } from '../../API'

let seila: any[] = [1, 1]

interface State {
	products: Product[]
}

export default class Sales extends React.Component<{}, State> {

	componentDidMount() {
		getManager()
			.then(res => this.setState({ products: res.data.items }))
	}

	state: State = {
		products: []
	}

	render() {
		return (
			<div className="Sales">
				<Card title="Vendas" icon={OptionIcons['sales']}>
					<div className="SalesCard">
						<div className="sc-header">
							<div className="sch-filter-select">
								<select>
									<option>nuzei</option>
								</select>
							</div>
							<div className="sch-category-select">
								<select>
									<option>nuzei2</option>
								</select>
							</div>
							<div className="sch-size-changer">
								<span>Visualizar</span>
								<select>
									<option>nuzei3</option>
								</select>
							</div>
						</div>
						<div className="sc-content">
							<div className="scc-title">
								<span>Controle de Vendas</span>
							</div>
							<div className="scc-grid">
								<div className="sg-header">
									<div className="col-1">
										<span>Estoque</span>
									</div>
									<div className="col-2">
										<span>Produto</span>
									</div>
									<div className="col-3">
										<span>Categoria</span>
									</div>
									<div className="col-4">
										<span>Views</span>
									</div>
									<div className="col-5">
										<span>Vendas</span>
									</div>
								</div>
								<div className="sg-body">
									{seila.map((sla, index) => (
										<div className="sgb-item" key={index}>
											<div className="col-1">
												<span>100</span>
											</div>
											<div className="col-2">
												<div className="si-prod">
													<div className="sp-photo">
														<img />
													</div>
													<div className="sp-info">
														<div className="si-name">
															<span>Nome do Produto</span>
														</div>
														<div className="si-link">
															<a href="#">Acessar</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-3">
												<span>Sapatos</span>
											</div>
											<div className="col-4">
												<span>500</span>
											</div>
											<div className="col-5">
												<span>10</span>
											</div>
										</div>
									))}
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