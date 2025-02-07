fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    let card = ""
    console.log(data)

    data.forEach(user => {
        card += `
            <div class="col">
                <div class="card">
                    <img src="https://www.cavsi.com/espanol/wp-content/uploads/informatica/usuario-de-computadoras.jpg" class="card-img-top" alt="Usuario">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <strong>Usuario: </strong>${user.username}
                        </li>
                        <li class="list-group-item">
                            <strong>Email: </strong>${user.email}
                        </li>
                        <li class="list-group-item">
                            <strong>Dirección: </strong>${user.address.street}, ${user.address.city}
                        </li>
                        <li class="list-group-item">
                            <strong>Teléfono: </strong>${user.phone}
                        </li>
                        <li class="list-group-item">
                            <strong>Compañía: </strong>${user.company.name}
                        </li>
                    </ul>
                </div>
            </div>
        `;
    });

    document.getElementById("cardList").innerHTML = card
})