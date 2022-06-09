// 1. API URL
const url = 'https://jsonplaceholder.typicode.com/users'

//2.0  fetch Usersfrom API: url
function fetchUsers(){

    // 2.1 make use of the browser fetch API
    fetch(url).then((response)=>response.json())
    .then((data) => {
        console.log(data)
    // 2.2 Passing the user data to the renderUsers function 
        renderUsers(data);
});
}

// 3 Render the User in the DOM
function renderUsers(usersData){
    const ul = document.getElementById('users-list-container') 

     // 3.1 Render an li tag for each 
     usersData.forEach((user, index) =>{
     const li =document.createElement('li');
     li.innerHTML= `
     <span>${index + 1}.</span>
     <span class="name">${user.name}</span>
     <span>-</span>
     <span class="username">${user.username}</span>
    `;

    // 3.2. append the currect user li tag
    ul.appendChild(li);
    
});
    
}

//4.  Add a search function to the DOM

function searchUsersByUsername(){
    const input = document.getElementById("search");
    const     ul = document.getElementById('users-list-container');
    const    inputValue= input.value.toUpperCase();
    const     usersList = ul.querySelectorAll('li');  //array of tags

 
// 4.1 loop through all the users and render the ones tht match the search
    for( let index = 0; index < usersList.length; index++){
        const nameTag = usersList[index].querySelector('.name') /* this will aid search by name */
        const usernameSpanTag = usersList[index].querySelector('.username');
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const nameSpanTagValue = nameTag.innerText.toUpperCase(); 
   
    if(usernameSpanTagValue.indexOf(inputValue) > -1 ||  nameSpanTagValue.indexOf(inputValue) > -1){
        usersList[index].style.display = 'block';
    }
    else{
        usersList[index].style.display ='none';
    }
}
}

// calling the fetch function
fetchUsers();