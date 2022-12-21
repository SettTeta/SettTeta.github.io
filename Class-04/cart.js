var products = [
    {
        name: "Chang Beer Bottle",
        quantity: 20,
        ppu: 80
    },
    {
        name: "Golden Stag 1L",
        quantity: 3,
        ppu: 400
    },
    {
        name: "Soju Peach",
        quantity: 15,
        ppu: 100
    },
    {
        name: "Sparkling Water",
        quantity: 30,
        ppu: 20
    }
]

function addToCart(){
    // let elProdct =document.getElementById("products")
    // let pVal = elProdct.value
    // console.log(pVal)

    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val()
    }

    // let productList = document.getElementById("productList")
    // for (let x = 0; x < products.length; x++) {
    //     productList.deleteRow(1)
    // }
    
    $('#productBody').html("")

    products.push(productObj)
    loadData()
}

function deleteProduct(index) {
    console.log("deleteProduct", index)
    delete products[index]
    $('#productBody').html("")
    loadData()
}

function loadData() {
    let allRows = ""
    let gross = 0
    for (let p in products) {
        let cellName = `<td class="text_left"><img class='icon' src='icon-delete.png' onclick='deleteProduct("${p}")'>` + products[p].name + "</td>"
        let cellQuantity = '<td class="text_right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text_right">' + products[p].ppu + "</td>"
        let total = products[p].ppu * products[p].quantity
        gross += total
        let cellTotal = '<td class="text_right">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellTotal}</tr>`
        allRows += row
    }
    $('#productBody').html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))

}

// Before jquery update
// function loadDataOld() {    
//     //let productList = document.getElementById("productList");
//     let productList = $('productList')
//     let gross = 0

//     for (let p in products) {
//         let row = document.createElement("tr");
//         let productName = document.createElement("td");
//         let quantity = document.createElement("td");
//         let ppu = document.createElement("td");
//         let total = document.createElement("td");

//         productName.innerHTML = products[p].name;
//         quantity.innerHTML = products[p].quantity;
//         ppu.innerHTML = products[p].ppu;
//         total.innerHTML = products[p].quantity * products[p].ppu;

//         productName.classList.add("text_center");
//         quantity.classList.add("text_center");
//         ppu.classList.add("text_center");
//         total.classList.add("text_right");

//         gross += products[p].ppu * products[p].quantity

//         row.appendChild(productName);
//         row.appendChild(quantity);
//         row.appendChild(ppu);
//         row.appendChild(total);

//         productList.appendChild(row);
//     }

//     let grossElem = document.getElementById("gross")
//     grossElem.innerHTML = gross

//     let vat = gross * 0.07
//     let net = gross - vat

//     document.getElementById("vat").innerHTML = vat.toFixed(2)
//     document.getElementById("net").innerHTML = net.toFixed(2)

// }