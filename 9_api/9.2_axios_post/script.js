const url = "https://jsonplaceholder.typicode.com/users";
const identifier = document.querySelector("#identifier")
document.querySelector("#create").addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");

    axios.post(url, {
        name: name,
        email: email
    })
        .then(res => {
            console.log(res);
            identifier.innerHTML += res.data.id;
        })
        .catch(err => console.log(err))
})
