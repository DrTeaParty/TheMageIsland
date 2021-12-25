/*Button effects to increase and decrease text size*/
function largertext() {
	txt = document.getElementById("chapter");
     fontsize = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(fontsize);
     txt.style.fontSize = (currentSize + 1) + 'px';
	 
	 lineheight = window.getComputedStyle(txt, null).getPropertyValue('line-height');
	 currentHeight = parseFloat(lineheight);
     txt.style.lineHeight = (currentHeight + 100) + 'px';
	<!--document.getElementById("chapter").style.fontSize ++ "1px";->
}

function smallertext() {
	txt = document.getElementById("chapter");
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize - 1) + 'px';
	<!--document.getElementById("chapter").style.fontSize ++ "1px";->
}


/*Navigation Bar*/
function navigation(){
	$("#nav-placeholder").load("html_includes/navigation.html");
}