//part 1
const logging = document.querySelector(".original-container")
const cloneArea = document.querySelector(".copy-container")
logging.addEventListener("click", (evt) => {
    if (evt.target.localName != "div.copy-container") {
        cloneArea.insertAdjacentHTML("beforeend", evt.target.innerHTML)
    }
});
//part 2
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    cloneArea.innerHTML = ''
})
