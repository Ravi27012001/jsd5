console.log("working...")

for (let i=0; i<10;i++){
    console.log(i);
}


let a=10;
while(a>0){
    console.log(a);
    a--;
}

for(let i=2; i<21; (i=i+2)){
    console.log(i);
}
let d=2;
while(d<21){
    console.log(d);
    d=d+2;
}

let x=1;
while (x<11){
    console.log(x*2);
    x++;
}

let c=3;
do{
    console.log(c);
    c=c+3;
}while(c<=30);


let place=["ranchi","delhi","kota","haryana"];
for(let keys in place){
    console.log(keys);
}

// for(let values of place){
//     console.log(values);
// }values,index
 

// forEach loop
place.forEach((values,index)=>{
    console.log(values,index);
})