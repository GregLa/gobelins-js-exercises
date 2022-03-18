let avatars = null;
window.onload = () => {
    avatars = JSON.parse(localStorage.getItem("avatars")) || [];
    message.innerHTML = avatars.join(`<br>`);
};
const message = document.querySelector("#message");
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");
    const weapon = formData.get("weapon");
    const race = formData.get("race");
    const skills = formData.getAll("skills");
    let desc = `The marvelous ${name} is a mighty ${race} who used ${weapon} from ${age} long years. `;
    desc += `Impressive skills : ${(skills.length) ? skills.join(" ,") : "...nope"} `;
    desc += `Send love 😘 to his creator at ${email}`;

    message.innerHTML = desc;

    avatars.push(desc);
    localStorage.setItem("avatars", JSON.stringify(avatars));
    message.innerHTML = avatars.join(`<br>`);
});
