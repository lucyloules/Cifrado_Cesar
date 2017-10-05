   
// la funcion cifradoCesar codifica la frase ingresada por usuario
function cifradoCesar(option){
	do{
		// Mediante prompt le pediremos al usuario que ingrese una opcion
		var result = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Decifrar");
	
			if(result != ""){
				if( result== "1") {
					// Mediante prompt le pediremos al usuario que ingrese una frase
					var phrase=prompt("Ingrese una frase:");
					Cipher();
				} else if (result == "2") {
					desCipher();
				} else {
					alert("Ingrese una opción válida");
				}
			}
	} while (option == "" || (option != "1" && option != "2"));
}


/function Cipher(phrase){
	var numbers='0123456789';
	if(phrase != ""){
		for (var i = 0; i <phrase.length; i++) {
			   if (numbers.indexOf(phrase.charAt(i),0)!=-1)
         return "Ingrese una frase sin números";
		}
	}else{
		for (var i = 0; i < phrase.length; i++) {
			var code = phrase.charCodeAt(i);

			// Letras mayusculas
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Letras minusculas
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
	}
}*/
		

/*function desCipher(){
	// Mediante prompt le pediremos al usuario que ingrese una frase
	alert("Su frase descifrada es: "+result);
	return
}

cifradoCesar();
