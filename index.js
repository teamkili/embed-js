const chat = document.createElement("div");
chat.setAttribute("id", "kili-window");

document.body.appendChild(chat);

chat.innerHTML = `<iframe
src="https://www.kili.so/popup/${scriptTag.id}"
width="100%"
height="100%"
frameborder="0"
></iframe>`;
