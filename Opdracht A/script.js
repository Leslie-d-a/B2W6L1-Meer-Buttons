const BUTTONWIDTH = 100
const COLORS = ["Green","Red","Blue"]

container.style.width = Number(BUTTONWIDTH * COLORS.length + 20) + "px"

for(i=0;i<COLORS.length;i++){
    var button = document.createElement("button");
    button.innerHTML = "Button " + Number(i + 1);
    button.id = i;
    button.setAttribute("style",`background-color: ${COLORS[i]}; width: ${BUTTONWIDTH}px;`);
    button.setAttribute('number', i);
    button.addEventListener('click', function(e){
        document.body.style.backgroundColor = COLORS[e.target.getAttribute('number')];
    })
    container.appendChild(button)
}