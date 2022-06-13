export const showMonth = (timestamp) => {
  const date = new Date(timestamp).getMonth();
  switch (date) {
    case 0:
      return "Января";
    case 1:
      return "Февраля";
    case 2:
      return "Марта";
    case 3:
      return "Апреля";
    case 4:
      return "Мая";
    case 5:
      return "Июня";
    case 6:
      return "Июля";
    case 7:
      return "Августа";
    case 8:
      return "Сентября";
    case 9:
      return "Октября";
    case 10:
      return "Ноября";
    case 11:
      return "Декабря";
  }
};

export const showDay = (timestamp) => {
  const date = new Date(timestamp).getDay();
  switch (date) {
    case 0:
      return "Воскресенье";
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
  }
};
