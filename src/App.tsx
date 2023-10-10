import './App.css';
import { notificationAPI } from './services/NotificationService';
import NotificationItem from './components/NotificationItem/NotificationItem';
import { useAppDispatch } from './hooks/redux';
import Button from './components/Button/Button';
import IconMessage from './assets/Icons/mail.svg'
import IconCross from './assets/Icons/cross.svg';

const LIMIT_NOTIFICATIONS = 10;

function App() {

  const dispatch = useAppDispatch()
  const { data: notifications } = notificationAPI.useFetchAllNotificationQuery(LIMIT_NOTIFICATIONS);
  const clearNotifications = () => {
    dispatch(notificationAPI.util.upsertQueryData('fetchAllNotification', LIMIT_NOTIFICATIONS, null))
  };

  const showNotifications = () => {
    if (!notifications) {

      return (
        <div className='container-notifications_img'>
          <img src={IconMessage} alt="Конверт сообщения" />
          <p>Сообщений пока нет...</p>
        </div>)
    }

    return notifications?.map((notification =>
      <NotificationItem key={notification.id} notification={notification} />
    ))
  };

  return (
    <div className="modal">
      <div className='container'>
        <div className='container-title'>
          <div className='container-title_text'>
            <h1>Уведомления</h1>
          </div>
          <div className='container-title_button'>
            <button>
              <img src={IconCross} alt="Крест" />
            </button>
          </div>
        </div>
        <div className='container-notifications'>
          {showNotifications()}
        </div>
        <footer className='container-footer'>
          <div className='container-footer_button'>
            <Button disabled={!notifications} onClick={clearNotifications} >
              Отметить все как прочитанные
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
