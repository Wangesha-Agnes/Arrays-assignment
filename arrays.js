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
//let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

let arr = ["apple","mango","orange","apple","orange"]
let originalFruits = [];
let duplicates = [];
arr.forEach(fruit=>{
    if(!originalFruits.includes(fruit)){
        originalFruits.push(fruit);
    }
    else(duplicates.push(fruit));
});
console.log({originalFruits});
console.log({duplicates});



//Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
let word1 = word.split("").sort().join();
console.log(word1)

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5=["the","way","x",4];
let array = ["the","way","x",4]
const words = "food"
const wordsIndex = array.indexOf(words);
if(words==array[1]){console.log({words})};
{console.log("the search was not found")};

//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let arrOfFruits = ["Mango","watermelon","kiwi","orange","apple","blueberry","grape","apricot","banana","avocado"]
let newarrOfFruits= arrOfFruits.slice(0,4)+"Tomato"+arrOfFruits.slice(4);
console.log(newarrOfFruits)


