// This file contains the functionality for the WhatsApp consultation button, providing a floating consultation entry point.

document.addEventListener("DOMContentLoaded", function() {
    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/8619969882825"; // WhatsApp link
    whatsappButton.target = "_blank"; // Open in a new tab
    whatsappButton.classList.add("fixed", "bottom-5", "right-5", "bg-green-500", "text-white", "p-3", "rounded-full", "shadow-lg", "hover:bg-green-600", "transition", "duration-300");
    whatsappButton.innerHTML = "💬";

    document.body.appendChild(whatsappButton);
});