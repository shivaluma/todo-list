
Add.onclick = MucMoi;
DeleteAll.onclick = function() {
    var ul = document.getElementById('list');
    if (ul) {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
    }
}



function MucMoi() {
    var li = document.createElement("li");
    var data = document.getElementById("Content").value;
    var t = document.createTextNode(data);
    li.appendChild(t);
    if (data === '') {
      alert("Không có dữ liệu nhập vào");
    } else {
        document.getElementById("list").appendChild(li);
      }
    document.getElementById("Content").value = "";
    var delbut = document.createElement("BUTTON");  
    delbut.className = "Delbtn";
    li.appendChild(delbut);
   
    var close = document.getElementsByClassName("Delbtn");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
      

  }

// replace
var upbtn = document.createElement("BUTTON"); 
var downbtn = document.createElement("BUTTON");
 upbtn.className = "up";
 downbtn.className = "down";
 li.appendChild(upbtn);
 li.appendChild(downbtn);
}


var ul = document.querySelector('ul');

ul.addEventListener('click', function(e){
  let clicked = e.target;
  let li		= clicked.parentNode;
  let next    = li.nextElementSibling;               
    if (next != null) next = next.nextElementSibling; 
   let prev    = li.previousElementSibling;
    
    if (clicked.className === 'down') {
      ul.insertBefore(li, next);
    } else if (clicked.className === 'up') {
      if (prev) ul.insertBefore(li, prev);
    }
});
//gettext
 // end

