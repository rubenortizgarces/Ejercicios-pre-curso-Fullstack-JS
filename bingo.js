//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha chai sinon sinon-chai moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug
var line1=[1,2,3,4,5];
var line2=[6,7,8,9,10];
var line3=[11,12,13,14,60];
var bola=null;
var indice=null;

var line11= 0;
var line22= 0;
var line33= 0;

var bombo=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
var out=[];

var bingo = function(){
    indice = Math.floor(Math.random()*bombo.length);
    bola = bombo[indice];
    out.push(bola);
    bombo.splice(bombo.indexOf(bola), 1);
    for(var i=0; i<=line1.length; i++)
        if(bola===line1[i]){
            line1.splice(i,1,"x");
            ++line11;
            if(line11===5 && line22===5 && line33===5)
                {console.log("BINGO!!")}
            else if(line11===5){console.log("linea!!")}
                else {console.log("has marcado un numero")}
            }
        
        else if (bola===line2[i]){
            line2.splice(i,1,"x");
            ++line22;
            if(line11===5 && line22===5 && line33===5)
                {console.log("BINGO!!")}
            else if(line22===5){console.log("linea!!")}
                else {console.log("has marcado un numero")}
            }
        else if (bola===line3[i]){
            line3.splice(i,1,"x");
            ++line33;
            if(line11===5 && line22===5 && line33===5)
                {console.log("BINGO!!")}
            else if(line33===5){console.log("linea!!")}
                else {console.log("has marcado un numero")}
            }
        
        else {console.log("Try again")}
    }




console.log(line1);
console.log(line2);    
console.log(line3);

bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();
bingo();



console.log(line1);
console.log(line2);    
console.log(line3);

console.log(line11);
console.log(line22);
console.log(line33);


console.log(bombo);
console.log(out);



//falta el codigo de las arrays 2 y 3 y el contador 2 y 3 y random