const container = document.getElementById("container");
const button = document.querySelector('button');

let size;

button.addEventListener('click',function(){
  size =(prompt("How many squares?",16*16))
 
  container.innerHTML ="";
  
  for (let i =0; i < size; i ++){
     const div = document.createElement("div");
     div.addEventListener("mousemove",function(){
        this.classList.add('hovered')
      })
      container.appendChild(div)
   }
})