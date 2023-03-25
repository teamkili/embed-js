// Create a button element
const button = document.createElement("button");

// Set the button styles
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.padding = "0";

// Create an iframe element
const iframe = document.createElement("iframe");
iframe.src = "https://kili.so/widget/kili";
iframe.style.display = "none";
iframe.style.width = "400px";
iframe.style.height = "300px";

// Function to handle button click
function handleClick() {
  iframe.style.display = "block";
}

// Add the iframe to the page
document.body.appendChild(iframe);

// Set the button click handler
button.addEventListener("click", handleClick);

// Add the image to the button
const image = document.createElement("img");
image.src = "path/to/your/image.png";
image.alt = "Button Image";
button.appendChild(image);

// Add the button to the page
document.body.appendChild(button);
