function f1(){
    console.log('hello');
}

f1();

const f2 =  function(){
    console.log('hello');
}

f2();


function run(pram){
    pram();
}

run(function hello(){
    console.log('hello1');
});




/////////////////////
setTimeout(function(){//set time run in much millisecond
    console.log('helloadf');
}, 3000);

console.log('hummm');
setInterval(function(){//set a variable run in millisecond
    console.log('hellohg');
}, 3000);
