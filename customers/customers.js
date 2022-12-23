var customers = [];

$(document).ready(function () {
    console.log("ready")
    // load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE", data)
        for (let d in data) {
            customers.push(data[d])
            // add rows to table
            // let dataStr = `<tr>
            //     <td>${data[d].name}</td>
            //     <td>${data[d].rating}</td>
            //     <td>${data[d].country}</td>
            //     <td><img class='deleteIcon' src='footBallNoIcon.png' onClick='deleteCustomer("${d}")'></td>
            // </tr>`
            // $("#data-table tr:last").after(dataStr)
        }
        loadCustomers()
        console.log(customers)
    });
});

function addToCustomer(){
    let customerObj = {
        name: $('#name').val(),
        rating: $('#rating').val(),
        country: $('#country').val()
    }
    
    $('#customerBody').html("")
    customers.push(customerObj)
    loadCustomers()

};

function loadCustomers(){
    let allRows = ""

    for (let c in customers){
        let cellName = `<td>` + customers[c].name + `</td>`
        let cellRating = `<td>` + customers[c].rating + `</td>`
        let cellCountry = `<td>` + customers[c].country + `</td>`
        let deleteIcon = `<td><img class='deleteIcon' src='footBallNoIcon.png' onClick='deleteCustomer("${c}")'>` + `</td>`
        let row = `<tr>${cellName}${cellRating}${cellCountry}${deleteIcon}</r>`
        allRows += row
    }
    $('#customerBody').html(allRows)
}

function deleteCustomer(index){
    console.log("deleteCustomer", index)
    delete customers[index]
    $('#customerBody').html("")
    loadCustomers()
}