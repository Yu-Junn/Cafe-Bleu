// Fetch Daily Special
fetch('js/special.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch daily special.");
        }
        return response.json();
    })
    .then(data => {
        const specialContainer = document.getElementById("specialContainer");

        const itemImage = document.createElement("img");
        itemImage.src = data.image;
        itemImage.alt = data.item;
        itemImage.style.maxWidth = "300px";
        itemImage.style.borderRadius = "10px";

        const itemName = document.createElement("h4");
        itemName.textContent = data.item;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = data.description;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: ${data.price}`;

        specialContainer.appendChild(itemImage);
        specialContainer.appendChild(itemName);
        specialContainer.appendChild(itemDescription);
        specialContainer.appendChild(itemPrice);
    })
    .catch(error => console.error("Error fetching daily special:", error));
