
var selectedProduct = -1;
var demoOrders = [];

function showMarkets() {
    var list = document.getElementById("marketList");
    list.innerHTML = "";

    for (var i = 0; i < markets.length; i++) {
        var market = markets[i];
        var card = document.createElement("div");
        card.className = "card";
        var title = document.createElement("h3");
        title.textContent = market.name;
        var address = document.createElement("p");
        address.textContent = market.location;
        var link = document.createElement("a");
        link.href = "#products";
        link.textContent = "View products";
        link.dataset.id = market.id;
        link.onclick = function () {
            document.getElementById("marketFilter").value = this.dataset.id;
            showProducts();
        };
        card.append(title, address, link);
        list.appendChild(card);
    }
}

function showProducts() {
    var search = document.getElementById("search").value.toLowerCase();
    var market = document.getElementById("marketFilter").value;
    var list = document.getElementById("productList");
    var count = 0;
    list.innerHTML = "";

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (!product.name.toLowerCase().includes(search)) continue;
        if (market !== "" && product.market !== market) continue;
        count++;

        var card = document.createElement("div");
        card.className = "card";
        var name = document.createElement("h3");
        name.textContent = product.name;
        var details = document.createElement("p");
        details.textContent = product.vendor + " | $" + product.price.toFixed(2);
        var place = document.createElement("p");
        for (var j = 0; j < markets.length; j++) {
            if (markets[j].id === product.market) place.textContent = markets[j].name;
        }
        var link = document.createElement("a");
        link.href = "#checkout";
        link.textContent = "Pre-order";
        link.dataset.index = i;
        link.onclick = function () { chooseProduct(Number(this.dataset.index)); };
        card.append(name, details, place, link);
        list.appendChild(card);
    }
    document.getElementById("productCount").textContent = count + " products found";
}

function chooseProduct(index) {
    selectedProduct = index;
    var product = products[index];
    document.getElementById("chosenProduct").textContent = product.name + " from " + product.vendor;
    document.getElementById("quantity").max = product.stock;
    document.getElementById("quantity").value = 1;
    document.getElementById("message").textContent = "";
    showTotal();
}

function showTotal() {
    if (selectedProduct === -1) return;
    var quantity = Number(document.getElementById("quantity").value);
    var total = products[selectedProduct].price * quantity;
    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}

function placeOrder(event) {
    event.preventDefault();
    if (selectedProduct === -1) return;
    var quantity = Number(document.getElementById("quantity").value);
    var product = products[selectedProduct];
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > product.stock) {
        document.getElementById("message").textContent = "Enter an available quantity.";
        return;
    }
    var customerList = document.getElementById("customer");
    var customerName = customerList.options[customerList.selectedIndex].text;
    demoOrders.push({
        customer: customerName,
        product: product.name,
        market: product.market,
        vendor: product.vendor,
        quantity: quantity
    });
    showOrders();
    location.hash = "#orders";
}

function showOrders() {
    var list = document.getElementById("orderList");
    list.innerHTML = "";
    for (var i = 0; i < existingOrders.length; i++) {
        var order = existingOrders[i];
        var line = document.createElement("p");
        line.textContent = order.customer + " - " + order.product + " - " + order.market;
        list.appendChild(line);
    }
    for (var j = 0; j < demoOrders.length; j++) {
        var demo = demoOrders[j];
        var item = document.createElement("p");
        item.textContent = "DEMO: " + demo.customer + " - " + demo.product + " (" + demo.quantity + ")";
        list.appendChild(item);
    }
}

// Fill in drop-down lists when the page opens.
for (var i = 0; i < markets.length; i++) {
    var option = document.createElement("option");
    option.value = markets[i].id;
    option.textContent = markets[i].name;
    document.getElementById("marketFilter").appendChild(option);
}

for (var j = 0; j < customers.length; j++) {
    var option = document.createElement("option");
    option.value = customers[j].id;
    option.textContent = customers[j].name;
    document.getElementById("customer").appendChild(option);
}

document.getElementById("search").oninput = showProducts;
document.getElementById("marketFilter").onchange = showProducts;
document.getElementById("quantity").oninput = showTotal;
document.getElementById("orderForm").onsubmit = placeOrder;
showMarkets();
showProducts();
showOrders();
if (!location.hash || location.hash === "#checkout") location.hash = "#home";
