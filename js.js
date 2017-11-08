
Them.onclick = MucMoi;

XoaHet.onclick = function() {
    var ul = document.getElementById('list');
    if (ul) {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
    }
}

function MucMoi() {
    var li = document.createElement("li");
    var DuLieu = document.getElementById("Content").value;
    var t = document.createTextNode(DuLieu);
    li.appendChild(t);
    if (DuLieu === '') {
      alert("Không có dữ liệu nhập vào");
    } else {
        document.getElementById("list").appendChild(li);
      }
    document.getElementById("Content").value = "";
    var delbut = document.createElement("BUTTON");
    delbut.className = 'nutxoa';
    var xoa = document.createTextNode("Xóa");
    delbut.appendChild(xoa); 
    delbut.className = "nutxoa";
    li.appendChild(delbut);
    var close = document.getElementsByClassName("nutxoa");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

