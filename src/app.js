//part 1
const logging = document.querySelector(".original-container")

logging.addEventListener("click", (evt) => {
    const cloneArea = document.querySelector(".copy-container")
    cloneArea.insertAdjacentHTML("beforeend", evt.target.innerHTML)
});
