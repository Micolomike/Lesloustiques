const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");


sendButton.addEventListener("click", function() {
  const message = messageInput.value;
  if (message !== "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageInput.value = "";
  }
});

messageInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendButton.click();
  }
});