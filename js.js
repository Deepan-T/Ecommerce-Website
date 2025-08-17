// Main function to get data and show cards
async function loadData() {
  try {
    // 1. Fetch data from app.json
    const response = await fetch("./app.json");
    const users = await response.json();  // Convert response into JS object
    console.log(users); // Just to check in console

    // 2. Find the main container where we want to put our cards
    const mainDiv = document.getElementById("mainDiv");

    // 3. Loop through each user and create a card
    users.forEach(user => {
      // Create a card container
      const card = document.createElement("div");
      card.className = "cardDiv"; // add CSS class

      // Put content inside the card
      card.innerHTML = `
        <h3>Product No : ${user.id}</h3>
        <img src="${user.image}" alt="${user.login}">
        <button class="viewButton">View Info</button>
      `;

      // Add the card to the page
      mainDiv.appendChild(card);

      // Add a click event for the "View Info" button
      const button = card.querySelector(".viewButton");
      button.addEventListener("click", () => {
        showPopup(user); // Call popup function
      });
    });

  } catch (error) {
    console.error("Something went wrong while fetching data:", error);
  }
}

// Function to show popup with user details
function showPopup(user) {
  // Create a popup container
  const popup = document.createElement("div");
  popup.className = "popup";

  // Put content inside the popup
  popup.innerHTML = `
    <h3>Product Id : ${user.id}</h3>
    <img src="${user.image}" alt="${user.login}">
    <p>${user.description}</p>
    <button id="closeButton">Close</button>
  `;

  // Add popup to the page
  document.body.appendChild(popup);

  // Close button functionality
  const closeButton = popup.querySelector("#closeButton");
  closeButton.addEventListener("click", () => {
    popup.remove(); // Remove popup from page
  });
}

// Call the main function
loadData();
