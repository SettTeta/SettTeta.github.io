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

function loadDataBody() {
    var elem = document.getElementById("myName");
    elem.innerHTML = "Buy pls";

    var productList = document.getElementById("productList");
    let gross = 0

    for (let p in products) {
        let row = document.createElement("tr");
        let productName = document.createElement("td");
        let quantity = document.createElement("td");
        let ppu = document.createElement("td");
        let total = document.createElement("td");

        productName.innerHTML = products[p].name;
        quantity.innerHTML = products[p].quantity;
        ppu.innerHTML = products[p].ppu;
        total.innerHTML = products[p].quantity * products[p].ppu;

        productName.classList.add("text_center");
        quantity.classList.add("text_center");
        ppu.classList.add("text_center");
        total.classList.add("text_right");

        gross += products[p].ppu * products[p].quantity

        row.appendChild(productName);
        row.appendChild(quantity);
        row.appendChild(ppu);
        row.appendChild(total);

        productList.appendChild(row);
    }

    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let vat = gross * 0.07
    let net = gross - vat

    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)

}