var path = document.location.href
var tittle = document.querySelector("#postTittle")

console.log(path)
console.log(tittle)


let lis = document.querySelectorAll("a.resp-sharing-button__link");
lis.forEach(li => {
    if (li) {
        var href = li.attributes["href"];
        href.value = href.value.replace(/postUrl/g, encodeURIComponent(path)) 
        href.value = href.value.replace(/postTittle/g, encodeURIComponent(tittle.textContent))
    }
});