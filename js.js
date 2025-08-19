async function loadData(params) {
    try {
        // ! fetch data
        const response = await fetch('./app.json')
        const users = await response.json(); // response converted in json
        console.log(users)
        
        // main div target
        let mainDiv = document.getElementById('mainDiv')

        users.forEach(user => {

            // create element 
            const card = document.createElement('div')
            // console.log(card)
            card.className = 'cardDiv'

            // ? adding data inside every div
            mainDiv.append(card)


            // ? update content
            card.innerHTML = `
            <h2>Product No: ${user.id}</h2>
            <img src="${user.image}">
            <button class="viewButton">view info</button>
            `

            //  click events - popup 
            const button1 = card.querySelector('.viewButton')
            button1.addEventListener('click', function () {
                showPopup(user);
            })
        });

    } catch (error) {
        
        console.log('something not right', error)
    }
}
//?  showpopUp

function showPopup(user) {
    // ? popup container
    console.log('click')
    const popup = document.createElement('div')
    popup.className = 'popup'
   
    // ? updating the content
    popup.innerHTML = `
     <h2>Product No: ${user.id}</h2>
            <img src="${user.image}"  alt="${user.login}">
            <p>${user.description}</p>
            <button id="closeButton">Close</button>
    `

    document.body.append(popup)
    
  // Close button functionality
  const closeButton = popup.querySelector("#closeButton");
  closeButton.addEventListener("click", () => {
    popup.remove(); // Remove popup from page
  });

}




loadData()