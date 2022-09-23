const markAllRead = document.getElementById('mark-all-read');
const unreadNotifications = document.getElementsByClassName('unread');
const notificationsCount = document.getElementById('notifications-count');

notificationsCount.textContent = unreadNotifications.length;

markAllRead.addEventListener('click', function () {
  while (unreadNotifications.length > 0) {
    unreadNotifications[0].classList.remove('unread');
  }
  notificationsCount.textContent = unreadNotifications.length;
});