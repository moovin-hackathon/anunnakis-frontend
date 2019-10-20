import React from 'react'
import './Top.scss'

import BellIcon from '../assets/icons/bell.png'

let notifications = ['sadhashid', 'dsaihdoiashdoasihd', 'dsahdoiahdoiahdosaihd', 'idhsadoihsadoihoaihsd']

const Top: React.FC<{}> = () => {

    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

    return (
        <div className="Top">
            <div onClick={() => setMenuOpen(!menuOpen)} className="bell-icon">
                <img alt="bell" src={BellIcon} />
            </div>
            <div className={`t-notifications-container${menuOpen ? ' opened' : ''}`}>
                {notifications.map((notification, index) => (
                    <div key={index} className="tnc-notification">
                        <span onClick={() => alert('fodasi')}>X</span>
                        <div>
                            <img />
                        </div>
                        <div>
                            {notification}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}


export default Top