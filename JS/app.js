// let c ='application';
// if(c.length>3 && c[0]=='a'){
//     console.log("Good String");
// }
// else{
//     console.log("NA");
// }

// let newArr =['cars','maruti','audi'];
// console.log(newArr);

// for(let i=1; i<=10; i=i+2){
//     console.log(i);
// }

// const favMovie ="Avatar";
// let guess =prompt("Guess the movie !")
// while((guess!= favMovie) && (guess !="quit"))
// {
//     guess=prompt("Wrong ! try again.");
// }
// if(guess==favMovie){
//     console.log("Correct!!!!!!");
// }
// else{
//     console.log("Come Again!!!!!!!!!!");
// }


//  todo 

// let todo=[];

// let req=prompt("Enter Request....");

// while(true){

//     if(req=='quit'){
//         console.log("Exit.");
//         break;
//     }

//     if(req=='list'){
//         console.log("----------------------");
//         for(let i=0; i<=todo.length; i++){
//              console.log(i, todo[i]);
//         }
//         console.log("----------------------");
//     }

//     else if(req=='add'){
//         let task=prompt("enter todo:");
//         todo.push(task);
//         console.log("Todo Added");
//     }

//     else if(req=='delete'){
//         let idx=prompt("enter index : ");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("Wrong Request");
//     }

//     req=prompt("Enter new request..");
// }


// object litrals

// const studentInfo={
//     aman :{
//         grade :"A",
//         gender:"Male"
//     },
//     abhishek:{
//         grade:"C",
//         gender :"Male"
//     }
// };


// let words =['hello','there','!'];

// function conCat(words){
//     let res;
//     for(let i=0; i<words.length; i++)
//     {
//         res+=words[i]; 
//     }
//     return res;
// }


// console.log("Hello");
// console.log("Hello2");
// console.log("Hello3");
// try{
//     console.log(a);
// }
// catch{
//     console.log("a is not defined.");
// }
// console.log("Hello4");
// console.log("Hello5");


// const sum=(arg1,arg2)=>{
//     console.log(arg1+arg2);
// };

// console.log("hi there!");

// setTimeout(  ()=>{
//     console.log("Welcome.."),4000
// },4000);

// console.log("hwllo2");


// reduce function 

// let arr=[2,4,3,5,7,8,9,0]
// let ans = arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(ans);


let smallimages = document.getElementsByClassName("oldimage");

for(i=0; i<smallimages.length; i++)
{
    smallimages[i].src="practiceAssets/spiderman.jpg.jpg";
    console.log(`value of image ${i} is changed.`);
}

