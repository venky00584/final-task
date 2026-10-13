let apiLink = "https://fakestoreapi.com/products/";

fetch(apiLink).then((data) => {

    return data.json();

}).then((data1) => {

    let productContainer = document.getElementById("productContainer");

    data1.forEach((a) => {

        let card = document.createElement("div");
        card.className = "card";

        let image = document.createElement("img");
        image.src = a.image;

        let title = document.createElement("h2");
        title.textContent = a.title.slice(0, 60);

        let category = document.createElement("p");
        category.textContent = a.category;

        let description = document.createElement("p");
        description.textContent = a.description.slice(0, 120);

        card.append(image);
        card.append(title);
        card.append(category);
        card.append(description);

        productContainer.append(card);
    });

}).catch((error) => {

    let errorMessage = document.getElementById("error");
    errorMessage.textContent = error.message;

}).finally(() => {

    console.log("API called");

});