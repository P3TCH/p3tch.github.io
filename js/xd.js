function hackme(){
	let email = document.getElementById("in1").value;
	let password = document.getElementById("in2").value;
	let wrong = document.getElementById("wrong");

	if(email === atob("cGV0Y2g=") && password === atob("aGN0ZXA=")){
		window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	}else{
		wrong.innerHTML = "Wrong email or password";
	}
}

function change(){
	wrong.innerHTML = "";
}
