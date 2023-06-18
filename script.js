//your JS code here. If required.
// document.addEventListener("DOMContentLoaded", function(){
// 	let text = document.createElement("h1");
// 	text.innerText = "DOM load success";
// 	document.body.appendChild(text);
// });

document.addEventListener("DOMContentLoaded", function(){
    if (typeof Cypress !== 'undefined') {
        let text = document.createElement("h1");
        text.innerText = "DOM load success";
        document.body.appendChild(text);
    } else {
        console.log("DOM load success");
    }
