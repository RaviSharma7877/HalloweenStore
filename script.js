var btns = document.querySelectorAll(".btn")
var count = document.querySelector(".cartitemcount")
var arr = []
var item = "Item added to cart"


btns.forEach((btn)=>{
 btn.addEventListener("click", ()=>{
    arr.push(item)
    count.innerHTML = arr.length
})
})