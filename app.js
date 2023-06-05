var input = document.getElementById("inp");
var list = document.getElementById("uval");

function addval(){
    var li = document.createElement("li");
    var lival =document.createTextNode(input.value);
    li.appendChild(lival);
    list.appendChild(li);
    input.value = "";

    var del = document.createElement("Button");
    var delText = document.createTextNode("Delet");
    del.appendChild(delText);
    del.setAttribute("class", "btn");
    del.setAttribute ("onclick", "delRow(this)");
    li.appendChild(del);

    var editbutton =document.createElement("Button");
    var editText = document.createTextNode("Edit");
    editbutton.appendChild(editText);
    editbutton.setAttribute("class", "btn");
    editbutton.setAttribute("onclick", "editRow(this)")
    li.appendChild(editbutton);
}

function delRow(btn){
    btn.parentNode.remove();

}

function editRow(btn){
    btn.parentNode.firstChild.nodeValue = prompt("enter your Text");

}