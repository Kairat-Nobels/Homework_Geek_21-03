for (let i = 0; i <= 20; i++) if (i % 2 === 0 && i !== 0) console.log(i);

const summa = function ()
{
    let i = sum = 0;
    while(i>=0) {
        i = Number(prompt('Введите число'))
        if (isNaN(i)) {
            console.log('error\nВы должны были ввести числа');
            break;
        }
        else {
            if (i < 0) break;
            else sum += i;
        } 
    } 
    return sum
}
console.log('Summa = ', summa());