document.querySelector(".article__header").textContent = "Welcome to Ronnie's Blog"

const articleHeader = document.querySelectorAll(".article__header")
for (let i = 0; i < articleHeader.length; i++) {
    articleHeader[i].classList.add("important")
}

document.querySelector(".dashed").remove("dashed")

document.querySelector(".article__footer").add("goldenrod")