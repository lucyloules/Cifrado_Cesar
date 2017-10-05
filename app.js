var phrase='';
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
			phrase[i]
		}
	}
}*/
		

/*function desCipher(){
	// Mediante prompt le pediremos al usuario que ingrese una frase
	alert("Su frase descifrada es: "+result);
	return
}

cifradoCesar();
*/

var caesarShift = function(str, amount) {

	// Si a cantiad es menor a 
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};

