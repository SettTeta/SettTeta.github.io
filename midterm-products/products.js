var products = [
    {
        name: "Chang Beer Bottle",
        quantity: 6,
        ppu: 80,
        discount: 80
    },
    {
        name: "Golden Stag 1L",
        quantity: 6,
        ppu: 400,
        discount: 400
    },
    {
        name: "Soju Peach",
        quantity: 6,
        ppu: 100,
        discount: 100
    },
    {
        name: "Sparkling Water",
        quantity: 24,
        ppu: 20,
        discount: 80
    },
    {
        name: "Coca Cola",
        quantity: 20,
        ppu: 15,
        discount: 30
    }
]

function loadData() {
    let allRows = ""
    let gross = 0
    let totalDis = 0

    for (let p in products) {
        let cellDel = `<td><img class='icon' src='icon-delete.png' onclick='deleteProduct("${p}")' style='width: 30px'>` + "</td>"
        let cellName = `<td class="text_right">` + products[p].name + "</td>"
        let cellQuantity = '<td class="text_right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text_right">' + products[p].ppu + "</td>"
        let cellDiscount = '<td class="text_right">' + products[p].discount + "</td>"
        let total = products[p].ppu * products[p].quantity - products[p].discount
        gross += total
        let cellTotal = '<td class="text_right">' + total + "</td>"
        let row = `<tr>${cellDel}${cellName}${cellQuantity}${cellPPU}${cellDiscount}${cellTotal}</tr>`
        allRows += row
        totalDis += products[p].discount
    }
    $('#productBody').html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#totalDiscount").html(totalDis.toFixed(2))
    $("#net").html(net.toFixed(2))

}

function deleteProduct(index) {
    // console.log("deleteProduct", index)
    delete products[index]
    $('#productBody').html("")
    loadData()
}

function addToProduct() {
    let productObj = {
        name: $('#item').val(),
        quantity: $('#quantity').val(),
        ppu: $('#ppu').val(),
        discount: $('#discount').val()
    }

    $('#productBody').html("")
    products.push(productObj)
    loadData()

}

function clearData() {
    products = []
    loadData()
}

;