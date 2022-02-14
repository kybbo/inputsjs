function mayorMenor(){
	var edad=document.getElementById("ola").value;
	var nombre=document.getElementById("ola2").value;
	if(edad>=18){
		alert(nombre+" eres mayor de edad");
	}if(edad<18){	
		alert(nombre+" eres menor de edad")
	};
}