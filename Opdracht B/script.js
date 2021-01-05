for(i=0;i<30;i++){
    var button = document.createElement("button");
    var number = i+1;
    button.innerHTML = number
    button.id = number
    button.setAttribute('number', number);
    button.addEventListener('click', function(e){
        document.getElementById(e.target.getAttribute('number')).style.backgroundColor = "red"
    })
    container.appendChild(button)
}