const people = document.querySelector('#people');
const identifier = document.querySelector('#identifier');
const height = document.querySelector('#height');
const mass = document.querySelector('#mass');
const skin = document.querySelector('#skin');
const starships = document.querySelector('#starships');
const error = document.querySelector('#error');

fetch("https://swapi.dev/api/people/14/")
    .then(responsePeople => responsePeople.json()) //
    .then(peopleObj => {
        people.innerHTML += peopleObj.name
        identifier.innerHTML += peopleObj.url
        height.innerHTML += peopleObj.height
        mass.innerHTML += peopleObj.mass
        skin.innerHTML += peopleObj.skin_color

        return peopleObj.starships
    })
    .then(starshipsUrls => Promise.all(starshipsUrls.map(url => fetch(url))))
    .then(responsesStarships => Promise.all(responsesStarships.map(r => r.json())))
    .then(starshipsObjs => starships.innerHTML += "<br/>" + starshipsObjs.map(s => `${s.name} (${s.model})`).join("<br/>"))
    .catch(err => error.innerHTML += err)
    .finally(() => error.innerHTML += "<br/> Fetches done !")
