let i = 0;
for (i = 0; i < 240; i++) {
    let div = document.createElement("div");
    div.style.height = "30px";
    div.style.width = "30px";
    div.style.background = "white";
    div.style.border = "1px solid black";
    
    div.addEventListener("mouseover",(event)=>{
        div.style.background='#381704';
    });
    document.getElementById("container").appendChild(div);
}

function reset() {
    const divs = document.querySelectorAll("#container div");
    divs.forEach(div => {
        div.style.background = 'white';
    });
}