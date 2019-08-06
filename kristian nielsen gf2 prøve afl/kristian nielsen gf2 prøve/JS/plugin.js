// JavaScript Document3

// Virker ikke pt---- er under udvikling//
function validateForm() {
		var a = document.forms["tilmelding"]["navn"].value;
		var b = document.forms["tilmelding"]["email"].value;
		var c = document.forms["tilmelding"]["navn"].value;
	  	if (a == "") {
	    	besked += "Navn skal udfyldes\n";
		}
		if (b == "") {
		    besked += "Vigtigt! E-mail skal udfyldes\n";
		}
		  if (c == "") {
		   besked += "Din besked skal udfyldes\n";
		}		
		if(besked !="")
			{
  		alert(besked); 
		}
		else{
		document.getElementById("succes").style.display = "block";
		}
	}

function mobilmenu() {
	var x = document.getElementById("mobilMenu");
		if (x.style.display === "block") {
		x.style.display = "none";
		} 
		else {
			x.style.display = "block";
			}
		};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.documentElement.style.scrollBehavior = "smooth";




