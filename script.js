const article = document.querySelector("article");
const indi = document.querySelector(".indicator");
window.addEventListener("scroll", () => {
    let scrollProgress = window.scrollY;
    let articleHt = article.clientHeight - window.innerHeight;
    let progressPercent =(scrollProgress/articleHt) *100;
    indi.style.width = progressPercent + "%";
});