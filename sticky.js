const firebaseConfig = {
    apiKey: "AIzaSyCzpfAl_Ply9633sHKlSHaUcJPFllXFUw0",
    authDomain: "anonymous-prompt.firebaseapp.com",
    projectId: "anonymous-prompt",
    storageBucket: "anonymous-prompt.appspot.com",
    messagingSenderId: "87371571897",
    appId: "1:87371571897:web:0701ad1d7885ddb3507168",
    measurementId: "G-QHRCX7GHGH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before attaching event listeners.

    // Get references to HTML elements
    var messageInput = document.getElementById("messageInput");
    var addNoteButton = document.getElementById("addNoteButton");
    var stickyNotesContainer = document.getElementById("stickyNotesContainer");

    // Attach event listener to the "Add Sticky Note" button
    addNoteButton.addEventListener("click", function () {
        addStickyNote();
    });

    function addStickyNote() {
        var message = messageInput.value.trim();

        if (message !== "") {
            var stickyNote = document.createElement("div");
            stickyNote.className = "sticky-note " + getRandomColor();
            stickyNote.textContent = message;
            stickyNotesContainer.appendChild(stickyNote);
            messageInput.value = "";
        } else {
            alert("Please enter a message before adding a sticky note.");
        }
    }

    function getRandomColor() {
        var colors = ["yellow", "blue", "pink", "green"];
        var randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    function addStickyNote() {
        var message = messageInput.value.trim();
    
        if (message !== "") {
            var stickyNote = document.createElement("div");
            stickyNote.className = "sticky-note " + getRandomColor();
            stickyNote.textContent = message;
            stickyNotesContainer.appendChild(stickyNote);
    
            // Save the message to Firebase
            firebase.database().ref('messages').push({
                text: message,
                color: getRandomColor()
            });
    
            messageInput.value = "";
        } else {
            alert("Please enter a message before adding a sticky note.");
        }
    }
    
});

    function addStickyNote() {
        var message = messageInput.value.trim();
    
        if (message !== "") {
            var stickyNote = document.createElement("div");
            stickyNote.className = "sticky-note " + getRandomColor();
            stickyNote.textContent = message;
            stickyNotesContainer.appendChild(stickyNote);
    
            // Save the message to Firebase
            firebase.database().ref('messages').push({
                text: message,
                color: getRandomColor()
            });
    
            messageInput.value = "";
        } else {
            alert("Please enter a message before adding a sticky note.");
        }
    }
    
});
