const apiURL='https://gorest.co.in/public/v2/users'
fetch(apiURL).then(response => response.json())
.then(data =>{
    console.log(data);
    const cards = document.getElementById("main");
    cards.innerHTML=''
    data.map((user,index) => {
      cards.innerHTML += `
        <div class="card" key='${index}' style="width: 18rem; margin-right: 20px; margin-bottom: 20px;">
            <div class="card-body">
              <h5 class="card-title">Name:\n${user.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Email:\n${user.email}</h6>
              <p class="card-text">Gender: ${user.gender}</p>
              <p class="card-text">Status: ${user.status}</p>

            </div>
        </div>
      `;
    });
})