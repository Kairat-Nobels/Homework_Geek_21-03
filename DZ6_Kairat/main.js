const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const restart = document.querySelector('.restart')
const rez = document.getElementById('count')
plus.onclick = (e) =>
{
    rez.value++
    rez.style.color = 'green'
}
minus.onclick = (e) =>
{
    rez.value--
    rez.style.color = 'red'
}
restart.onclick = () => { rez.value = 0; rez.style.color = 'rgb(47, 78, 132)' }