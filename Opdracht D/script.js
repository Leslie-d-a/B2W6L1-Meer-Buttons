const COLORS = ["green","red", "black"]

for(i=0;i<30;i++){
    var button = document.createElement("button");
    var number = i+1;
    button.innerHTML = number
    button.id = number
    button.setAttribute('number', number);
    button.setAttribute('color', 0);
    button.setAttribute("style",`background-color: ${COLORS[0]}`);
    button.addEventListener('click', function(e){
        if (e.target.getAttribute('color')<COLORS.length-1){
            e.target.setAttribute('color', Number(e.target.getAttribute('color'))+1)
            document.getElementById(e.target.getAttribute('number')).style.backgroundColor = COLORS[e.target.getAttribute('color')]
        }else{
            e.target.remove()
        }
    })
    container.appendChild(button)
}