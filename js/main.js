function nuevoElemento() {

  var inputValue = document.getElementById("input").value;
  if (inputValue === '') {
    alert("Debes escribir algo!");
  } else {

  var liNodo = document.createElement("li");
  
  liNodo.innerHTML = 
  `
  <div>
      <input type="checkbox" id="checkbox">
      <span>${inputValue}</span>
      </div>

  `;

  var listadoUl = document.querySelector("#Ul");
  listadoUl.insertBefore(liNodo, listadoUl.childNodes[0]);
 
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liNodo.appendChild(span);

  var close = document.getElementsByClassName("close");
  var i;

  for (i = 0; i < close.length; i++) {
    close[i].onclick =  function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

}