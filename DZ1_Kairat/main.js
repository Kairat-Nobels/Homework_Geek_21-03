let fio = prompt('Введите ваше ФИО')
let password = prompt('Введите пароль')
if ((fio === 'Kairat' || fio === 'Кайрат') && password === 'data17') alert('Здраствуйте Кайрат, доступ разрешен');
else alert('Неправильное Имя пользователя или пароль!')
let month = Number(prompt('Введите месяц рождения'))
let day = Number(prompt('Введите день рождения'))
if (isNaN(month) || isNaN(day)) alert('Неправильные данные')
else {
    if ((month === 3 && (day >= 21 && day <= 31)) || (month === 4 && (day >= 1 && day <= 20))) alert('Овен')
    else if ((month === 4 && (day >= 21 && day <= 30)) || (month === 5 && (day >= 1 && day <= 20))) alert('Телец')
    else if ((month === 5 && (day >= 21 && day <= 31)) || (month === 6 && (day >= 1 && day <= 20))) alert('Близнецы')
    else if ((month === 6 && (day >= 21 && day <= 30)) || (month === 7 && (day >= 1 && day <= 22))) alert('Рак')
    else if ((month === 7 && (day >= 23 && day <= 31)) || (month === 8 && (day >= 1 && day <= 22))) alert('Лев')
    else if ((month === 8 && (day >= 23 && day <= 31)) || (month === 9 && (day >= 1 && day <= 22))) alert('Дева')
    else if ((month === 9 && (day >= 23 && day <= 30)) || (month === 10 && (day >= 1 && day <= 22))) alert('Весы')
    else if ((month === 10 && (day >= 23 && day <= 31)) || (month === 11 && (day >= 1 && day <= 21))) alert('Скорпион')
    else if ((month === 11 && (day >= 22 && day <= 30)) || (month === 12 && (day >= 1 && day <= 21))) alert('Стрелец')
    else if ((month === 12 && (day >= 22 && day <= 31)) || (month === 1 && (day >= 1 && day <= 19))) alert('Козерог')
    else if ((month === 1 && (day >= 20 && day <= 31)) || (month === 2 && (day >= 1 && day <= 18))) alert('Водолей')
    else if ((month === 2 && (day >= 19 && day <= 29)) || (month === 3 && (day >= 1 && day <= 20))) alert('Водолей')
    else alert('Неправильные данные')
}