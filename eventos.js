let gntClicks = 0;
function clicarNoBotão(){
    gntClicks++;
    console.log(gntClicks)
}

function textKey(event){
    console.log(event)
    console.log(event.key)
}
function textCharger(event){
   console.log(event)
    console.log(event.target.value)
}



console.log("Obrigado pelo acesso")
console.log("Espero que tenha gostado")

