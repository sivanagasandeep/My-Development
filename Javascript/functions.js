// ------basic----------------
function myfunc(val){
    console.log(val);
}
myfunc("sandeep");

// ------sum func---------
function sum(parm1,parm2){
    console.log(parm1+parm2);


}
sum(100,300);
// ---------mul func using return key------------
function mul(num1,num2){
    s=num1**num2;
    return s;
}
let val= mul(5,2)
console.log(val);
// ----------mul using arrow---------
let arrowSum = (p1,p2)=>{
    console.log(p1*p2);

}
arrowSum(9,8);
// ------------------print vowels----------
function myVowels(str){
    let count =0;
    for(let char of str){
        if(char == "a" || char =="e" || char == "i" || char == "o" ||char =="u"){
            count++;
        }
    }
    console.log("Myvowels is:-",count);
}
myVowels("praveen");
// ---------------for each is used for tor eturn the value and to perform any action//

let arr =[1,2,3,4,5];
let myarr=["sandeep","raju","kishan"];
arr.forEach((val)=>{
    console.log(val);
})
// ------print to uppercase
myarr.forEach((val,i,arr)=>{
    console.log(val.toUpperCase(),i,arr);
})
// ---------array filter----------
arr.filter((val)=>{
  console.log(val**2);
})

