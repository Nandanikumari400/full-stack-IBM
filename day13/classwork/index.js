

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

// // arr.forEach((index, element)=>{
//     // console.log(element, index)
//     // let ans =arr.forEach((el. i)=>{
//     //     return el
//     // });

// // console.log(ans)
// let ans =arr.map((el, i)=>{
//     return el*  40
// })

//  console.log(ans);

//filter
let output = arr.filter((el, i)=>{
    return el%5==0;
}).map((el, index)=>{
    return el*2;

}).reduce((acc, el)=>{
    return acc+el;

})
console.log(output)

// reduce

// let output = arr.reduce((acc,el)=>{
//     return acc+el
// }, 1);

// console.log(output)
let arr=[3,4,5,7,8,11,23,9,6];
let ans=

let data=[
    {name:"watch",price:2000,desc:"good watch",rating:4},
     {name:"shoe",price:1200,desc:"good shoe",rating:4.5},
     {name:"car",price:100000,desc:"good phone",rating:5},
     {name:"shoe",price:1200,desc:"good shoe",rating:4.5},
     {name:"car",price:100000,desc:"good phone",rating:5},
     {name:"shoe",price:1200,desc:"good shoe",rating:4.5},
      
]
data.sort((ans,b)=>{
    return ans.price-b.price

})
console.log(data)
if(nameA>nameB){
    return-1;

}
if(nameA>nameB){
    return 1;
}
if(nameA>nameB){
    return 1;
}
console.log(data);


