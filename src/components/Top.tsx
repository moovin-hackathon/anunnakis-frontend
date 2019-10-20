import React from 'react'
import './Top.scss'

import BellIcon from '../assets/icons/bell.png'
import { getNotifications, Notification, dismissNotification } from '../API'

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

    React.useEffect(() => {
        fetchNotifications()
        setInterval(() => {
            !menuOpen && fetchNotifications()
        }, 5000)
    }, [])


    let fetchNotifications = () => {
        getNotifications()
            .then(({ data }) => setNotifications({
                notifications: data.items,
                total: data.total
            }))
    }

    let dismiss = (id: Notification['id']) => {
        dismissNotification(id)
            .then(() => setNotifications({
                notifications: notifications.notifications.filter(n => n.id !== id),
                total: notifications.total - 1
            }))
    }

    return (
        <div className="Top">
            <div onClick={() => setMenuOpen(!menuOpen)} className="bell-icon">
                <img alt="bell" src={BellIcon} />
                {!!notifications.total && (
                    <div className="notification-badge">
                        {notifications.total}
                    </div>
                )}
            </div>
            <div className={`t-notifications-container${menuOpen ? ' opened' : ''}`}>
                {notifications.notifications.map((notification, index) => (
                    <div key={index} className="tnc-notification">
                        <span onClick={() => dismiss(notification.id)}>X</span>
                        <div>
                            <img src={BellIcon} />
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