alert('connected');

var rowColor = document.getElementsByClassName("specialRow");
console.log(rowColor);//to see whether an array is created for all calsses

for(var x = 0; x < rowColor.length; x++){
	rowColor[x].style.backgroundColor= "#ffe6f2";
}	

var list = document.querySelectorAll(".list");
list[0].innerHTML = list[0].innerHTML + "<li>*item added through JS*</li>";

function loadData(data){
	if(data == "Iphn XS"){
		document.getElementById("imgOutp").src = "images/Iphone XS.jpg";
		document.getElementById("outp").innerHTML = "  <br>details of Iphone XS....";
	}
	else if(data == "Iphn XS Max"){
		document.getElementById("imgOutp").src = "images/Iphone XS Max.jpg";
		document.getElementById("outp").innerHTML = "  <br>details of Iphone XS Max....";
	}
	else if(data == "Iphn 8s plus"){
		document.getElementById("imgOutp").src = "images/Iphone 8s plus.jpg";
		document.getElementById("outp").innerHTML = "  <br>details of Iphone 8s plus....";
	}
}

function PriceForLoop(){
	//declare an array called phone 
	var phone = ["Iphone XS = RS : 150000", "Iphone XS Max = RS : 900000", "Iphone 8s Plus = RS : 390000"];
	
	//get the length of the array and assign it to a new var
	var i;
	var len = phone.length;
	var txt = "<ul>";
	document.getElementById("imgOutp").src = "";
	
	//display all the elements stored in the array using a for loop
	for(i = 0; i < len; i++){
	txt += "<li>" + phone[i] + "</li>";
	}
	document.getElementById("outp").innerHTML = txt + "</ul>";
}

function checkPassword(){
	if(document.getElementById("pwd").value != document.getElementById("cnfrmpwd").value)
	{
		alert("password Mismatch!");
		return false;
	}
	else
	{		
		alert("Success");
		return true;
	}
}
function enableButton(){
	if(document.getElementById("checkBox").checked)
	{
		document.getElementById("submitBtn").disabled = false;//make the submit button enabled 
	}
	else{
		document.getElementById("submitBtn").disabled = true;
	}
}
