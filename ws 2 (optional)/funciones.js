function ampliarBarra(id,nm){
	var pt=document.getElementById(id);
	var rec=pt.getElementsByTagName("rect");
	var lp=rec[0].height;
	rec[0].height=lp+nm;
}
function reducirBarra(id,nm){
	var pt=document.getElementById(id);
	var rec=pt.getElementsByTagName("rect");
	var lp=rec[0].height;
	rec[0].height=lp-nm;
}
function neodat(id){
	var randnm;
	var val;
	var pt=document.getElementById(id);
	var rec=pt.getElementsByTagName("rect");
	var nm=rec[0].height;
	randnm=Math.floor(Math.random()*26);
	val=Math.floor(Math.random()*100+1);
	if(val%2==0){
		ampliarBarra(id,randnm);
	}else{
		reducirBarra(id,randnm);
	}
}
function elec(){
	var list=document.getElementsByTagName("svg");
	var id;
	for (x=0;x<list.length;x++){
		id=list[x].id;
		neodat(id);
	}
}

setInterval(elec,5000);


