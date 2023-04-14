let colors = ["red","blue","yellow","orange"]

let button = document.getElementById("button")


button.addEventListener("click",function(){
    let randomcolor = colors[Math.floor(Math.random()*colors.length)]
    let container = document.getElementById("container")
    container.style.background = randomcolor;

})