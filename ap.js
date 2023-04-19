const myFun = () =>{
    const btn = document.querySelector(".fa-bars");
    const box = document.querySelector(".box4");
    const li = document.querySelectorAll("a")

    //togli nav
    li.forEach(item =>{
        btn.addEventListener("click", () =>{
        box.classList.toggle("box2");   
        btn.classList.toggle("box3");   
        item.classList.toggle("a2");
    })
    })
    
}
myFun()