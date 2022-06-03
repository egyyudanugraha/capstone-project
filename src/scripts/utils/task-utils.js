import { isThisHour, isToday } from 'date-fns';
import ApptivityApi from '../data/apptivity-api';
import NotificationHelper from './notification-helper';

const showDeadline = () => {
  setInterval(async () => {
    const tasks = await ApptivityApi.getAllTask();
    const deadline = tasks.filter((item) => isThisHour(new Date(item.deadline)) && isToday(new Date(item.deadline)));
    if (deadline.length > 0) {
      NotificationHelper.sendNotification({
        title: 'Deadline! - Apptivity',
        options: {
          body: `${deadline.length} ${deadline.length > 1 ? 'tasks' : 'task'} to be done in the next 1 hour`,
        },
      });
    }
  }, 1800000); // 30 Minutes
};

export default showDeadline;
