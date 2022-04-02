//part 1
const logging = document.querySelectorAll(".original-container div") 
const cloneArea = document.querySelector(".copy-container")
logging.forEach(element => element.addEventListener("click", (evt) => {
    if (!evt.target.parentElement.classList.contains("original-container")){
        cloneArea.insertAdjacentHTML("beforeend", evt.target.parentElement.outerHTML)
}}));
//part 2
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    cloneArea.innerHTML = ''
})
