
var selectedProduct = -1;
var demoOrders = [];

async function showMarkets() {
    var list = document.getElementById("marketList");
    var filter = document.getElementById("marketFilter");

    try {
        var response = await fetch("/markets");

        if (!response.ok) {
            throw new Error("Could not load markets");
        }

        var data = await response.json();

        markets = [];
        list.innerHTML = "";
        filter.innerHTML = '<option value="">All markets</option>';

        for (var i = 0; i < data.length; i++) {
            var market = {
                id: data[i].MarketID,
                name: data[i].Name,
                location: data[i].Location
            };

            markets.push(market);

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
                filter.value = this.dataset.id;
                showProducts();
            };

            card.append(title, address, link);
            list.appendChild(card);

            var option = document.createElement("option");
            option.value = market.id;
            option.textContent = market.name;
            filter.appendChild(option);
        }

        await loadProducts();

    } catch (error) {
        list.textContent = "Unable to load markets from the database.";
        console.error(error);
    }
}

async function loadProducts() {
    try {
        var productResponse = await fetch("/products");
        var vendorResponse = await fetch("/vendors");
        var priceResponse = await fetch("/vendor-products");
        var marketResponse = await fetch("/market-vendors");

        if (!productResponse.ok || !vendorResponse.ok ||
            !priceResponse.ok || !marketResponse.ok) {
            throw new Error("Could not load product information");
        }

        var productData = await productResponse.json();
        var vendorData = await vendorResponse.json();
        var priceData = await priceResponse.json();
        var marketData = await marketResponse.json();

        products = [];

        for (var i = 0; i < priceData.length; i++) {
            var item = priceData[i];

            var productName = "";
            var vendorName = "";

            for (var j = 0; j < productData.length; j++) {
                if (productData[j].ProductID === item.ProductID) {
                    productName = productData[j].Name;
                }
            }

            for (var k = 0; k < vendorData.length; k++) {
                if (vendorData[k].VendorID === item.VendorID) {
                    vendorName = vendorData[k].Name;
                }
            }

            for (var m = 0; m < marketData.length; m++) {
                if (marketData[m].VendorID === item.VendorID) {
                    products.push({
                        id: item.ProductID,
                        vendorId: item.VendorID,
                        name: productName,
                        vendor: vendorName,
                        market: marketData[m].MarketID,
                        price: Number(item.Price),
                        stock: Number(item.Quantity)
                    });
                }
            }
        }

        showProducts();

    } catch (error) {
        document.getElementById("productList").textContent =
            "Unable to load products from the database.";
        console.error(error);
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
        item.textContent = order.customer + " - " + order.product + " (" + order.quantity + ")";
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

async function loadCustomers() {
    try {
        var response = await fetch("/customers");

        if (!response.ok) {
            throw new Error("Could not load customers");
        }

        var data = await response.json();

        customers = [];

        for (var i = 0; i < data.length; i++) {
            customers.push({
                id: data[i].CustomerID,
                name: data[i].Name,
                email: data[i].Email
            });
        }

        showCustomers();

    } catch (error) {
        console.error("Error loading customers:", error);
    }
}

async function loadCustomers() {
    try {
        var response = await fetch("/customers");

        if (!response.ok) {
            throw new Error("Could not load customers");
        }

        var data = await response.json();
        var list = document.getElementById("customer");

        list.innerHTML = "";

        for (var i = 0; i < data.length; i++) {
            var option = document.createElement("option");

            option.value = data[i].CustomerID;
            option.textContent = data[i].Name;

            list.appendChild(option);
        }

    } catch (error) {
        console.error(error);
        document.getElementById("message").textContent =
            "Unable to load customers.";
    }
}

document.getElementById("search").oninput = showProducts;
document.getElementById("marketFilter").onchange = showProducts;
document.getElementById("quantity").oninput = showTotal;
document.getElementById("orderForm").onsubmit = placeOrder;
showMarkets();
showProducts();
showOrders();
loadCustomer();
if (!location.hash || location.hash === "#checkout") location.hash = "#home";
