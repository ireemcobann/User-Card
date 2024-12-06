const userCardContent = document.querySelector('.userCardContent')
let filteredText = "";

 async function init() {
    const data = await fetch('https://dummyjson.com/users')
    // console.log(data);
    .then(response => response.json())
    // console.log(data.users)


    userCardContent.innerHTML = ""; 
    for (const user of data.users) {
            if(!user.username.toLowerCase().includes(filteredText)) {
                continue;
            }

        userCardContent.innerHTML += `
        <li class = "user-card" style="background-color: ${user.age > 18 && user.age < 25 ? 'lightgreen' : user.age > 26 && user.age < 40 ? 'lightblue' : 'lightgrey'}">
        <h3>Username: ${user.username}</h3>
        <p><strong>Name:</strong>  ${user.firstName} ${user.lastName}</p>
         <img src="${user.image}" >
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
         <p><strong>Company Name-Department:</strong> ${user.company.name}</p>
         <p><strong>Address:</strong> ${user.address.address} - ${user.address.city}/${user.address.state} </p>
         </li>
        `;
    }

}
init();

filterForm.addEventListener("submit", handleSubmit);


function handleSubmit(e) {
   e.preventDefault();
   filteredText = filterForm.filteredText.value.trim().toLowerCase();
    init();
}




