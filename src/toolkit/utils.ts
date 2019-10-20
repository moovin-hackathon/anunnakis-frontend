import CollapseIcon from '../assets/icons/collapse.png'
import HomeIcon from '../assets/icons/home.png'
import AccessesIcon from '../assets/icons/accesses.png'
import SalesIcon from '../assets/icons/sales.png'
import SearchIcon from '../assets/icons/search.png'
import StockIcon from '../assets/icons/stock.png'

export const MenuOptions: Option[] = [
    {
        name: 'dashboard',
        label: 'View Geral'
    },
    {
        name: 'accesses',
        label: 'Acessos'
    }, {
        name: 'stock',
        label: 'Estoque'
    }, {
        name: 'sales',
        label: 'Vendas'
    }
]

export const OptionIcons: Options = {
    accesses: AccessesIcon,
    search: SearchIcon,
    sales: SalesIcon,
    stock: StockIcon,
    collapse: CollapseIcon,
    dashboard: HomeIcon
}

export type OptionName = (
    'accesses' | 'search' | 'stock' | 'sales' | 'collapse' | 'dashboard'
)

export type Options = {
    [key in OptionName]: string
}

export interface Option {
    name: OptionName
    label: string
}