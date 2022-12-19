const container = document.getElementById("container");

const size = 16 * 16

for (let i =0; i < size; i ++){
   const div = document.createElement("div");
   div.addEventListener("mousemove",function(){
        this.classList.add('hovered')
       })
   container.appendChild(div)
}