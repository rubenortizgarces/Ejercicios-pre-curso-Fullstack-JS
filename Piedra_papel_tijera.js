
var vic1=0;
var vic2=0;

function ppt1(jugador1){
var jugador1=jugador1.toUpperCase();
var jugador2=null;
jugador2= (Math.random() *3);

if(jugador2 >= 0 && jugador2 <= 1){jugador2="TIJERA"}
else if(jugador2 > 1 && jugador2 < 2){jugador2="PAPEL"}
else{jugador2="PIEDRA"}
console.log(jugador2)

if(jugador1===jugador2){console.log("empate pisha, juega otra vez(ppt2)");}

else if((jugador1==="TIJERA" && jugador2==="PAPEL") || (jugador1==="PIEDRA" && jugador2==="TIJERA") ||(jugador1==="PAPEL" && jugador2==="PIEDRA")){
	vic1=vic1 + 1;
		if(vic1>=3){console.log("congrats, u win")}
		else{console.log("u scored a point")}
}

else{vic2=vic2 + 1;
	if(vic2>=3){console.log("loooser")}
	else{console.log("he scored a point")}
	 

}
	
}

ppt1("piedra");
console.log(vic1);
console.log(vic2);