(function () {
  // Define the function that will be used to initialize the widget
  function myWidgetFunction(props) {
    // Extract the props
    var slug = props.slug || "default value";
    var logo = props.logo || "https://www.kili.so/logo.png";

    const CHAT_BUTTON_SIZE = 50; // size of the chat button in pixels
    const CHAT_BUTTON_RADIUS = CHAT_BUTTON_SIZE / 2; // radius of the chat button in pixels

    // Create a button element
    const button = document.createElement("button");

    // Set the button styles
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "0";
    button.setAttribute("id", "kili-bubble-button");
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

    // Function to update the widget's dimensions based on the screen size
    function updateWidgetDimensions(chat) {
      if (window.matchMedia("(max-width: 768px)").matches) {
        const padding = "40px"; // Define the desired padding for small screens
        // Mobile screen
        chat.style.width = `calc(100vw - ${padding} * 2)`; // Subtract padding from both sides
        chat.style.height = `calc(100vh - ${padding} * 6)`; // Subtract padding from top and bottom
        chat.style.top = padding; // Top position
        chat.style.left = padding; // Left position
        chat.style.right = padding; // Right position
        chat.style.bottom = padding; // Bottom position
        chat.style.margin = "auto"; // Center the widget
        chat.style.transform = "none"; // Reset the transform property
      } else {
        // Desktop screen
        chat.style.width = "400px";
        chat.style.height = "500px";
        chat.style.bottom = "80px";
        chat.style.right = "20px";
      }
    }

    // Update the widget's dimensions based on the initial screen size
    updateWidgetDimensions(chat);

    // Add an event listener for the window resize event
    window.addEventListener("resize", () => {
      updateWidgetDimensions(chat);
    });

    chat.style.boxShadow =
      "rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px";
    chat.style.display = "none";
    chat.style.borderRadius = "10px";
    chat.style.zIndex = 999999999;
    chat.style.overflow = "hidden";
    chat.style.margin = "10px";
    chat.style.overflow = "hidden";

    document.body.appendChild(chat);
    chat.innerHTML = `<iframe
    src="https://www.kili.so/widget/${slug}"
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
    image.src = logo;
    image.alt = "Button Image";
    image.style.width = CHAT_BUTTON_SIZE + "px";
    image.style.height = CHAT_BUTTON_SIZE + "px";
    button.appendChild(image);

    // Add the button to the page
    document.body.appendChild(button);
  }

  // Automatically initialize the widget when the script is loaded
  var configElement = document.getElementById("kili-widget-config");
  if (configElement) {
    // Parse the JSON data from the script element
    var configData = JSON.parse(configElement.textContent);
    // Initialize the widget with the configuration data
    myWidgetFunction(configData);
  }
})();
