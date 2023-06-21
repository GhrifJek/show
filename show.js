function show() {
	var std = document.querySelector(".pic");
	std.style.display="block";
	
}
.port { 
box-shadow: 0px 10px 50px -5px #29668f;
background:linear-gradient(to bottom, #6eaf81 5%, #feb960 100%);
background-color:#6eaf81;
border-radius:42px;
border:3px solid #9f6eba;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:20px;
font-weight:bold;
padding:32px 76px;
text-decoration:none;
text-shadow:0px 2px 5px #3d768a;
}

.port:hover {
background:linear-gradient(to bottom, #feb960 5%, #6eaf81 100%);
background-color:#feb960;

box-shadow: 0px 15px 60px -5px #29668f;
}

.port:active {
position:relative;
top:1px;
}

.pic{
display: none;
}

input[type="text"]:focus {
  border: 1px solid #000000;
}
