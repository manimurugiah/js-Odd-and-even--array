let arrayOdd=[];
let arrayEven=[];
let a=[1,2,3,4,5,6,7,8,9,10];
console.log(a);
let b=0;
let c=0;
for(i=0;i<a.length;i++){
    if(a[i]%2===0){
        arrayOdd[b]=a[i];
        b++;
    }
    else{
        arrayEven[c]=a[i];
        c++;
    }
}
console.log(arrayOdd);
console.log(arrayEven);