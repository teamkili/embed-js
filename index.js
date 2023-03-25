const CHAT_BUTTON_SIZE = 50; // size of the chat button in pixels
const CHAT_BUTTON_RADIUS = CHAT_BUTTON_SIZE / 2; // radius of the chat button in pixels

// Create a button element
const button = document.createElement("button");

// Get the script tag with the URL prop
const scriptTag = document.currentScript;

// Set the button styles
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.padding = "0";
button.setAttribute("id", "kili-bubble-button");
button.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
button.style.cursor = "pointer";
button.style.zIndex = 999999999;
button.style.transition = "all .2s ease-in-out";
button.style.maxWidth = "100%";
button.style.maxHeight = "100%";
button.style.border = "none";
button.style.background = "none";
button.style.borderRadius = CHAT_BUTTON_RADIUS + "px";

button.addEventListener("mouseenter", (event) => {
  button.style.transform = "scale(1.05)";
});
button.addEventListener("mouseleave", (event) => {
  button.style.transform = "scale(1)";
});

// Create an iframe element
const chat = document.createElement("div");
chat.setAttribute("id", "kili-bubble-window");

chat.style.position = "fixed";
chat.style.flexDirection = "column";
chat.style.justifyContent = "space-between";
chat.style.bottom = "80px";
chat.style.right = "20px";
chat.style.width = "400px";
chat.style.height = "70vh";
chat.style.boxShadow =
  "rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px";
chat.style.display = "none";
chat.style.borderRadius = "10px";
chat.style.zIndex = 999999999;
chat.style.overflow = "hidden";
chat.style.margin = "10px";
chat.style.overflow = "auto";

document.body.appendChild(chat);
chat.innerHTML = `<iframe
src="https://www.kili.so/widget/kili"
width="100%"
height="100%"
frameborder="0"
></iframe>`;

// Function to handle button click
function handleClick() {
  // toggle the chat component
  if (chat.style.display === "none") {
    chat.style.display = "block";
  } else {
    chat.style.display = "none";
  }
}

// Add the iframe to the page
document.body.appendChild(chat);

// Set the button click handler
button.addEventListener("click", handleClick);

// Add the image to the button
const image = document.createElement("img");
image.src = "https://www.kili.so/logo.png";
image.alt = "Button Image";
image.style.width = CHAT_BUTTON_SIZE + "px";
image.style.height = CHAT_BUTTON_SIZE + "px";
button.appendChild(image);

// Add the button to the page
document.body.appendChild(button);
