const Avatar = {
    name: 'The last Airbender',
    releaseDate: '21/02/2005',
    mainActors: 'Aang, Katara, Sokka, Toph, Zuko',
    episodes: 61,
    creaters: {
        director: 'Аарон Эхаз, Лорен Макмалпан',
        producer: 'Nickelodion',
        siptwriter: 'Майкл Данте Димартино, Брайан Кониецко'
    }
}
console.log('Сериал: ', Avatar.name, '\nБыл выпущен: ', Avatar.releaseDate, '\nВ главных ролях: ', Avatar.mainActors, '\nКоличесво эпизодов: ', Avatar.episodes, '\n\tСоздатели сериала\nРежиссеры: ', Avatar.creaters.director, '\nСценаристы: ', Avatar.creaters.siptwriter, '\nПродюссер: ', Avatar.creaters.producer);
let day = prompt('Enter the day of week:').toLowerCase()
switch (day) {
    case 'monday':
        alert('Понедельник');
        break;
    case 'tuesday':
        alert('Вторник');
        break;
    case 'wednesday':
        alert('Среда');
        break;
    case 'thursday':
        alert('Четверг');
        break;
    case 'friday':
        alert('Пятница');
        break;
    case 'saturday':
        alert('Суббота');
        break;
    case 'sunday':
        alert('Воскресенье');
        break;
    default:
        alert('Error');
        break;
}