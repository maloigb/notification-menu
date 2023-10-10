import React, {FC} from 'react';
import { Inotification } from '../../store/models/Inotification';
import './NotificationItem.css';

interface NotificationItemProps {
    notification: Inotification;
}

const NotificationItem: FC<NotificationItemProps> = ({ notification }) => {

    const date = new Date().toLocaleDateString();

    return (
        <div key={notification.id} className='container-notification'>
            <div className='container-notification_item'>
                <h5>Администрация</h5>
                <p>{notification.body}</p>
            </div>
            <div className='container-notification_date'>{date}</div>
        </div>
    )
}


export default NotificationItem;