"
var vic1=["x","x","x"];
var vic2=["x","x","x"];

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
				vic1.splice(vic1.indexOf("x"),1,"win");
				if(vic1[0]==="win" && vic1[1]==="win" && vic1[2]==="win"){console.log("congrats, u win")}
					else{console.log("u scored a point")}
				}

			else{vic2.splice(vic2.indexOf("x"),1,"win");
			if(vic2[0]==="win" && vic2[1]==="win" && vic2[2]==="win"){console.log("loooser")}
				else{console.log("he scored a point")}
					

			}
		
	}

	ppt1("piedra");
	console.log(vic1);
	console.log(vic2);