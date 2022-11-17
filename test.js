// const fs = require('fs');
// const { CLIENT_RENEG_LIMIT } = require('tls');
// const tempData = fs.readFileSync('data.json');
// const apiData = JSON.parse(tempData);

// const obj = apiData.filter((el)=>el.classes[el.classes.length-1]["lang"]==='en');
//   console.log(obj);



// function alphabet_order(str){
//   return str.split('').sort().join('');
// }
// console.log(alphabet_order("webmaster"));

// function alphabetOrder(str) {
//     let arr = str.split('')
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (arr[i] < arr[j])
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//     return arr.join('')
// }
// console.log(alphabetOrder("webmaster"))

// function numberCharacters(string) {
//   let str = " ";
//   for (let i = 0; i < string.length; i++) {
//   for (let j = 1; j <= string.length; j++) {
//   if (i != j && i < j) {
//   let btr = string.substring(i, j);
//   str += btr + "\n";
//   }
//   }
//   }
//   return str;
//   }
//   console.log(numberCharacters("dog"))

// let str = "dog";
// const x = (strArg) => {
// for (let i = 1; i <= strArg.length; ++i) {
// console.log(strArg.slice(0, i));
// }
// strArg = strArg.slice(1);
// if (strArg.length > 0) {
// x(strArg);
// }
// };
// x(str);


// var Fruits = [
//     {name:"Mango", quantity:10},
//     {name:"Apple", quantity:8},
//     {name:"Banana", quantity:15},
//     {name:"Watermelon", quantity:2},
//     {name:"Peach", quantity:5},
//     {name:"Grapes", quantity:2}
// ]
// for (var i=Fruits.length-1;i>0;i--){
//     for(var j=0;j<i;j++){
//         if(Fruits[j]["quantity"]>Fruits[j+1]["quantity"]){
//             temp=Fruits[j]
//             Fruits[j]=Fruits[j+1]
//             Fruits[j+1]=temp
//         }
//     }
// }
// console.log(Fruits);
// var a1=[]
// var a2=[]
// for(var i in Fruits){
//     if(Fruits[i]['quantity']>=10){
//         a1.push(Fruits[i]['name']+'-'+Fruits[i]['quantity'])
//     }
//     else{
//         a2.push(Fruits[i]['name']+'-'+Fruits[i]['quantity'])

//     }
// }
// console.log(a1);
// console.log(a2);

// let sequence = Math.floor(Math.random() * 1000 + 1);
// console.log(sequence)

const aob = 
[
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'Python', website: 'Google' },
    { framework: 'JavaScript', website: 'inblack67' },
    { framework: 'JavaScript', website: 'inblack68' },
    { framework: 'JavaScript', website: 'inblack69' },

]
const superAob = (data, framework) => {
    const obj = {};
    data.forEach((data) => {
        if(data.hasOwnProperty(framework)){
            if(obj[data[framework]]){
                obj[data[framework]]++;
            }
            else{
                obj[data[framework]] = 1;
            }
        }
    })  
    let superArrayOfObjects = [];
    for (const key in obj) {
        superArrayOfObjects = [...superArrayOfObjects, { framework: key, count: obj[key]}];
    }
    return superArrayOfObjects;
}
console.log(superAob(aob, 'framework'));


// output==
// [
//   { framework: 'React.JS', count: 2 },
//   { framework: 'Angular', count: 1 },
//   { framework: 'Vue.JS', count: 1 },
//   { framework: 'JavaScript', count: 3 }
// ]

// afterthat={ key1: 2, key2: 1, key3: 3 } 
// afterthat=[ { key1: 2 }, { key2: 1 }, { key3: 3 } ]