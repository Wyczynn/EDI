function GetHeaders(){
    return ["Picture", "ID", "First Name", "Last Name", "email", "Gender", "IP"];
}

function LoadData(){
    fetch("https://my.api.mockaroo.com/users?key=72028210")
    .then(response => response.json())
    .then(data =>{
        //get headers for the data
        const headers = GetHeaders();

        let tableHTML = "<table>";
        
        //add headers to the table
        tableHTML += "<thead>";
        tableHTML += "<tr>";
        headers.forEach(header =>{
            tableHTML += `<th class="header">${header}</th>`;
        })
        tableHTML += "</tr>";
        tableHTML += "</thead>";

        tableHTML += "<tbody>";
        //iterate through every object of data
        data.forEach(list => {
            tableHTML += "<tr>";
            tableHTML += "<td><img src='tyre.png' alt=''></td>"
            //add every property value of the current list to the table
            for(let id in list){
                tableHTML += `<td class="value">${list[id]}</td>`
            }
            tableHTML += "</tr>";

        });
        tableHTML += "</tbody>";
        //end table
        tableHTML += "</table>";

        document.getElementById("tablediv").innerHTML = tableHTML;
    })
    .catch(error => console.error("Error", error));
}

LoadData();