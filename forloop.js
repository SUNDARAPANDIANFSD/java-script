for (let i = 0; i < 5; i++) {
    console.log("add :" + i);  
}                                // output   //add :0
                                             //add :1
                                             //add :2
                                             //add :3
                                             //add :4
//scope 
let globalvar = "i am global" ;
function scopeTest() {
    let localVar = "i am local" ;       //output i am global
    console.log(globalvar);                    // i am local
    console.log(localVar);                     // i am global
}                                              // error not defined
scopeTest();
console.log(globalvar);
console.log(localVar);