import React from 'react'
import './Top.scss'

import BellIcon from '../assets/icons/bell.png'
import { getNotifications, Notification } from '../API'

let notifications = ['sadhashid', 'dsaihdoiashdoasihd', 'dsahdoiahdoiahdosaihd', 'idhsadoihsadoihoaihsd']

interface INotification {
    notifications: Notification[]
    total: number
}

const Top: React.FC<{}> = () => {

    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

    const [notifications, setNotifications] = React.useState<INotification>({
        notifications: [],
        total: 0
    })

    setInterval(() => {
        !menuOpen && fetchNotifications()
    }, 5000)

    let fetchNotifications = () => {
        getNotifications()
            .then(({ data }) => setNotifications({
                notifications: data.items,
                total: data.total
            }))
    }

    return (
        <div className="Top">
            <div onClick={() => setMenuOpen(!menuOpen)} className="bell-icon">
                <img alt="bell" src={BellIcon} />
            </div>
            <div className={`t-notifications-container${menuOpen ? ' opened' : ''}`}>
                {notifications.notifications.map((notification, index) => (
                    <div key={index} className="tnc-notification">
                        <span onClick={() => alert('fodasi')}>X</span>
                        <div>
                            <img />
                        </div>
                        <div>
                            {`${notification.code}: ${notification.message}`}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}


export default Top