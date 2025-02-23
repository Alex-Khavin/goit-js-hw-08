const categories = document.querySelectorAll("#categories .item");

console.log("Number of categories:", categories.length)

categories.forEach(el => {
    const heading = el.querySelector("h2").textContent;
    const listLength = el.querySelectorAll("ul > li").length;
    console.log(`Category: ${heading}`);
    console.log(`Elements: ${listLength}`);
})

