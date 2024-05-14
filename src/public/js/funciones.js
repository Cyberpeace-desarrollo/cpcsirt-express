document.getElementById("telefono").addEventListener("keypress", function(evt) {
  valideKey(evt);
});

function valideKey(evt){
  // code is the decimal ASCII representation of the pressed key.
  let code = (evt.which) ? evt.which : evt.keyCode;
  if(code==8) { // backspace.
    return true;
  } else if(code>=48 && code<=57) { // is a number.
    return true;
  } else{ // other keys.
    return false;
  }
}

