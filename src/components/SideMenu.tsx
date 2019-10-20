import React from 'react'
import './SideMenu.scss'

import { Option, OptionIcons, OptionName } from '../toolkit/utils'

const SideMenu: React.FC<Props> = (props) => {

    let initialState: State = {
        menuOpened: true
    }

    const [state, setState] = React.useState<State>(initialState)

    let url = window.location.href.split('/')
    let currentPage = url[url.length - 1]

    return (
        <div className={`SideMenu${state.menuOpened ? ' opened' : ''}`}>
            <div className="sm-toggle-menu-container">
                <div onClick={() => setState({ ...state, menuOpened: !state.menuOpened })}>
                    <img src={OptionIcons['collapse']} alt="Collapse Icon" />
                </div>
            </div>
            {props.options.map((option, index) => (
                <a key={index} className={`sm-dashboard-menu-option${currentPage === option.name ? ' active' : ''}`} href={`/${option.name}`}>
                    <img alt={option.label} src={OptionIcons[option.name as OptionName]} />
                    <span>{option.label}</span>
                </a>
            ))}
        </div>
    )

}

interface State {
    menuOpened: boolean
}

interface Props {
    options: Option[]
}

export default SideMenu