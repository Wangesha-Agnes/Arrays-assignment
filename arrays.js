//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
 let arr1=[3,7,34,90,12]
 console.log('last element',arr1.slice(-1));
 let arr2 = [true,"green","where",12,56];
 console.log('last item', arr2.slice(-1))

//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

let myPets= ["Cow",,"Bird","Snake","Dog"];
let newSentence= myPets.toString();
console.log({newSentence})

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let arr3 = [-5,9,5,3,2,-3,6,8,4,1]
let newArr3 = arr3.sort();
console.log({newArr3})

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl",            "school", "girl", "woman"];