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

let body = document.querySelector(".cardcontainer")

let shopdata = [{"img": "/assets/cardimg1.jpg", "title": "Horror Doll", "price": "65.00"},{"img": "/assets/cardimg2.jpg", "title": "Horror Dress", "price": "75.00"},{"img": "/assets/cardimg3.jpg", "title": "Horror Costume", "price": "85.00"},{"img": "/assets/cardimg1.jpg", "title": "Horror Doll", "price": "65.00"},{"img": "/assets/cardimg2.jpg", "title": "Horror Dress", "price": "75.00"},{"img": "/assets/cardimg3.jpg", "title": "Horror Costume", "price": "85.00"},{"img": "/assets/cardimg1.jpg", "title": "Horror Doll", "price": "65.00"},{"img": "/assets/cardimg2.jpg", "title": "Horror Dress", "price": "75.00"},{"img": "/assets/cardimg3.jpg", "title": "Horror Costume", "price": "85.00"},]

Dispaly()

function Dispaly() {
    shopdata.map((item)=> {
        let card = document.createElement("div")
        card.classList.add('card')

        let cardimg = document.createElement("div")
        cardimg.classList.add('cardimg')

        let img = document.createElement("img")
        img.src = item.img

        cardimg.append(img)

        let carddetails = document.createElement("div")
        carddetails.classList.add('carddetails')

        let stars = document.createElement("div")
        stars.classList.add('stars')

        let i1 = document.createElement('i')
        i1.classList.add('bx')
        i1.classList.add('bxs-star')
        let i2 = document.createElement('i')
        i2.classList.add('bx')
        i2.classList.add('bxs-star')
        let i3 = document.createElement('i')
        i3.classList.add('bx')
        i3.classList.add('bxs-star')
        let i4 = document.createElement('i')
        i4.classList.add('bx')
        i4.classList.add('bxs-star')
        let i5 = document.createElement('i')
        i5.classList.add('bx')
        i5.classList.add('bxs-star')

        stars.append(i1,i2,i3,i4,i5)

        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.innerText = item.title


        let price = document.createElement('div')
        price.classList.add('price')
        price.innerText = item.price

        let btn = document.createElement("button")
        btn.classList.add('btn')
        btn.innerText = 'Add To Cart'


        div.append(h3,price,btn)
        carddetails.append(stars,div)

        card.append(cardimg,carddetails)
        body.append(card)
    })
}