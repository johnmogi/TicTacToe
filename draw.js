const X = '<svg class="bi" width="52" height="52" fill="currentColor"><use xlink:href="bootstrap-icons.svg#x"/></svg>'
const O = '<svg class="bi" width="52" height="52" fill="currentColor"><use xlink:href="bootstrap-icons.svg#record"/></svg>'

const row11 = document.getElementById('row1-1');
const row12 = document.getElementById('row1-2');
const row13 = document.getElementById('row1-3');
const row21 = document.getElementById('row2-1');
const row22 = document.getElementById('row2-2');
const row23 = document.getElementById('row2-3');
const row31 = document.getElementById('row3-1');
const row32 = document.getElementById('row3-2');
const row33 = document.getElementById('row3-3');

row22.innerHTML = X;
row12.innerHTML = O;

// needs to "listen to clicks" - if click is on a box alert;

document.addEventListener("click", function(event){
    event.target == row11 ? row11.innerHTML = O : null
  });