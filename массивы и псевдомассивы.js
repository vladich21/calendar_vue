//Массивы это структуры которые содержат элементы по порядку

const arr = [1, 2, 3, 6, 8];

arr.pop()
console.log(arr)

// для того чтобы перебрать массив нужно сделать следующее

const arr = [2, 3, 6, 8];

//  for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//  }

 for(let value of arr) {
    console.log(value)
 }


 //Метод forEach метод позволяет перебрать все элементы массива
 const arr = [2, 3, 6, 8];

 arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
 })

const str = prompt("","")
const products = str.split(", ") // указываем разделитель через какой будет товар 
products.sort(); //метод сортирует в алфавитном порядке и сортирует все как строки, например 10,12,2,26,8
console.log(products.join(';')) //метод обьединяет эелементы массива и буду выводится на страницу

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr)

function compare(a,b) {
   return a - b;
}

//Псевдомасиивы - это обьект, структура который совпадает с массивом 
//и в нем не будет всех методов которая хранит данные по порядку 