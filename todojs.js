function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input-box").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  var span=document.createElement("span");
  var te=document.createTextNode("x");
  span.className+="close";
  span.appendChild(te);
  li.appendChild(span);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list-item").appendChild(li);
  }
  
    var clear = document.getElementsByClassName("close");
    console.log(clear);
    for(var i = 0; i < clear.length; i++) {
      clear[i].onclick = function() {
        var li = this.parentElement;
        var itemname=this.parentElement.firstChild.nodeValue;
        var delarr=[];
        delarr.push(itemname);
        console.log(delarr[2]);
        li.style.display = "none";
      }
    }
}


