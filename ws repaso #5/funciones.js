function mkli(){
	var txt=document.getElementById("txt");
	var lst=document.getElementById("lst");
	var item=document.createElement("li");
	item.innerHTML=txt.value;
	lst.appendChild(item);
}
function addrow(pos){
	var prd=document.getElementById("tb");
	var row=document.createElement("tr");
	var it;
	var list=prd.getElementsByTagName("tr");
	var lsttd=list[0].getElementsByTagName("td");
	var txt;
	var x;
	for (x=1;x<=lsttd.length;x++){
		it=document.createElement("td");
		txt=document.createTextNode("tt"+x);
		it.appendChild(txt);
		row.appendChild(it);
	}
	list.insertBefore(row,list[pos-1]);
}
fuction switchcont(rw,cl,cad){
	var prd=document.getElementById("tb");
	var row=prd.getElementsByTagName("tr");
	var col=row[rw-1].getElementsByTagName("td");
	col[cl-1].innerHTML=cad;
}
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function hide(e){
	if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function valrad(id){
	return document.getElementById("id").value;
}
//ejercicio 1
/*var btn=document.getElementById("btn");
btn.addEventListener("click",mkli);*/
//ejercicio 2
//ejercicio 4
//document.body.addEventListener("click",hide);