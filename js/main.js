const iut = document.querySelector('input');
const btn = document.querySelector('button');
let phoneKg = /^\+996\s\d{3}\s\d{2}\s\d\d\s\d{2}/;
let phoneUa = /^\+380\s\d{3}\s\d{2}\s\d{2}\s\d{2}/;
let p_first = document.querySelector('.Give_hi')
let p_second = document.querySelector('.Give_hey')

iut.addEventListener('change', e => {
    if(phoneKg.test(e.target.value)) {
        console.log('- KG номер');
        p_first.classList.remove('Give_hi')
    }else if(phoneUa.test(e.target.value)) {
        console.log('- UA номер');
        p_second.classList.remove('Give_hey')
    }else {
        console.log('Ничего не найдено');
    }
})

let i = 0;
function printArrayValues() {
    i++;
    console.log(i, 'Array');
    if(i === 20) {
        return ;
    }else {
        return printArrayValues();
    }
}
printArrayValues();

let arr = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [7,8,9];
let arr4 = [10];
console.log([arr2[0], arr2[1],arr2[2],arr[0],arr[1],arr[2],arr3[0],arr3[1],arr3[2],arr4[0]]);
let array = [1,2,3,4,5];
console.log(array[4]);

function countChar() {
    console.log('loremipsumdolor'.match(/o/g ).length);
}
countChar()
