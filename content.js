console.log("Skrip konten dijalankan.");

// pop up
function showPopup() {
    const popupContainer = document.createElement("div");
    popupContainer.style.position = "fixed";
    popupContainer.style.top = "10px";
    popupContainer.style.right = "10px";
    popupContainer.style.padding = "10px";
    popupContainer.style.backgroundColor = "#95a5a6";
    popupContainer.style.zIndex = "9999";
    popupContainer.style.cursor = "move"; // Menambahkan gaya kursor 'move' agar dapat digeser
  
    const popupContent = document.createElement("div");
    popupContent.style.fontSize = "12px";
  
    const popupTitle = document.createElement("div");
    popupTitle.textContent = ".:: AKSI ::.";
    popupTitle.style.fontWeight = "bold";
    popupContent.appendChild(popupTitle);
  
    const popupList = document.createElement("ul");
    popupContent.appendChild(popupList);
  
    const actions = ["Silakan lanjutkan menulis", "Tolong klarifikasi ini", "Mohon memberikan contoh", "Mohon disingkat","Tolong tuliskan ulang ini","Mohon jelaskan lebih lanjut mengenai ini", "Mohon jelaskan ini"];
  
    actions.forEach(action => {
      const listItem = document.createElement("li");
      listItem.textContent = action;
      listItem.style.cursor = "pointer";
      listItem.addEventListener("click", function() {
        const chatForm = document.querySelector("#prompt-textarea");
        if (chatForm) {
          chatForm.value = action;
  
          const enterKeyEvent = new KeyboardEvent("keydown", {
            key: "Enter",
            keyCode: 13,
            bubbles: true,
            cancelable: true,
          });
  
          chatForm.dispatchEvent(enterKeyEvent);
        }
      });
  
      popupList.appendChild(listItem);
    });
  
    // Mengatur perpindahan popup saat digeser
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    popupContainer.addEventListener("mousedown", function(event) {
    isDragging = true;
    offset = {
        x: event.clientX - popupContainer.offsetLeft,
        y: event.clientY - popupContainer.offsetTop
    };
    });

    document.addEventListener("mouseup", function() {
    isDragging = false;
    });

    document.addEventListener("mousemove", function(event) {
    if (isDragging) {
        const x = event.clientX - offset.x;
        const y = event.clientY - offset.y;

        const maxX = window.innerWidth - popupContainer.offsetWidth;
        const maxY = window.innerHeight - popupContainer.offsetHeight;

        // Memastikan popup tidak melebihi batas halaman
        const newX = Math.max(0, Math.min(x, maxX));
        const newY = Math.max(0, Math.min(y, maxY));

        popupContainer.style.top = `${newY}px`;
        popupContainer.style.left = `${newX}px`;
    }
    });
  
    popupContainer.appendChild(popupContent);
  
    document.body.appendChild(popupContainer);
  }
  
  
  
// Menjalankan fungsi saat halaman selesai dimuat
window.addEventListener("load", function() {
  // Menjalankan fungsi showPopup di halaman chat OpenAI
  if (window.location.href.includes("https://chat.openai.com/")) {
    showPopup();
  }
});
