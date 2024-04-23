// Get references to the button and the image container
const viewAll = document.getElementById('view_all');
const showcase = document.getElementsByClassName('showcase');

// Define an array of image URLs
const imageUrls = [
    "photos/image12.png",
    "photos/image13.png",
    "photos/image14.png",
    "photos/image15.png"
];

const titles = [
    "Football boots",
    "Baseball",
    "Basketball",
    "Rollers"
]

const descriptions = [
    "Pro",
    "Standard",
    "Size 7",
    "Adult"
]

const prices = [
    "199.99$",
    "29.99$",
    "149.99$",
    "179.00$"
]
function addImages() {
    for(let i = 0; i < prices.length; i++) {
        const itemDiv = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h4');
        const description = document.createElement('p');
        const price = document.createElement('h4');
        img.src = imageUrls[i];
        title.textContent = titles[i];
        description.textContent = descriptions[i];
        price.textContent = prices[i];
        itemDiv.appendChild(img);
        itemDiv.appendChild(title);
        itemDiv.appendChild(description);
        itemDiv.appendChild(price);
        itemDiv.classList.add('item');
        showcase[0].appendChild(itemDiv);
    }
    viewAll.remove();
}

viewAll.addEventListener('click', addImages);