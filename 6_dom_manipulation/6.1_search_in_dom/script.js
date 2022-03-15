// "#special-content"
console.log("#special-content", document.getElementById("special-content"));
// ".important"
console.log(".important", document.getElementsByClassName("important"));
// "article"
console.log("article", document.getElementsByTagName("article"));
// li dans ul.important dans article
const elmts = document.querySelector("article > ul.important > li");
console.log("article > ul.important > li", elmts);
// li suivant
console.log("nextElementSibling", elmts.nextElementSibling);