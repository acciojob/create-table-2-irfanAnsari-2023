function createTable() {
    //Write your code here
	let rn = prompt("Input number of rows");
	let cn = prompt("Input number of columns");
	//  parsing the inputs
		rn = parseInt(rn,10);
		cn = parseInt(cn,10);
	// Validate input
    if (isNaN(rn) || isNaN(cn)) {
        alert("Please enter valid numeric values.");
        return;
	if(rn <= 0 || cn <= 0){
		alert("Number of rows and columns must be greater than 0.");
		return;
	}

	let table = document.getElementById("myTable");
	table.innerHTML = "";
		for(let i= 0; i< rn; i++){
			let tr = document.createElement("tr");
			for(let j=0; j<cn; j++){
				let td = document.createElement("td");
				td.textContent = `Row-${i} Col-${j}`;
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}
		
  
}
