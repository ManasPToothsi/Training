function dispValid(){
	var fname = document.getElementById('fname').value;
	var mname = document.getElementById('mname').value;
	var lname = document.getElementById('lname').value;
	if (fname.length==0 || mname.length==0 || lname.length==0) {
		alert("Please fill all the fields!");
	}
	else{
		alert("Details of "+fname+" "+mname+" "+lname+" saved!");
	}
}

function clearAll(){
	let reset = document.querySelector('button');
	let inputs = document.querySelectorAll('input');
	reset.addEventListener('click',() => {
	inputs.forEach(input => input.value='');
	});
	inputs.forEach(input => input.checked=false);
}
