function createTable() {
    // Get user input for rows and columns
    let rows = window.prompt("Input number of rows");
    let cols = window.prompt("Input number of columns");

    // Ensure input is not null (in case user cancels)
    if (rows === null || cols === null) {
        alert("Table creation canceled.");
        return;
    }

    // Convert inputs to numbers
    rows = parseInt(rows, 10);
    cols = parseInt(cols, 10);

    // Validate input
    if (isNaN(rows) || isNaN(cols)) {
        alert("Please enter valid numeric values.");
        return;
    }
    if (rows <= 0 || cols <= 0) {
        alert("Number of rows and columns must be greater than 0.");
        return;
    }

    // Get the table element
    let table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = "";

    // Create table rows and columns
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
