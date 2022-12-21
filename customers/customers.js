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
            let dataStr = `<tr>
                <td>${data[d].name}</td>
                <td>${data[d].rating}</td>
                <td>${data[d].country}</td>
            </tr>`
            $("#data-table tr:last").after(dataStr)
        }

        console.log(customers)
    });
});