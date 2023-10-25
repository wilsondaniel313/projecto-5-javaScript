let esqueleto = "Off";
let esqueletoQuieto = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ("audio/auidio1.mp3");
let botonAudio = new Audio ("audio/auidio2.mp3"); 


function bailar(){
    if(esqueleto == "off" ){
        esqueleto ="on"
        esqueletoQuieto.classList.add("on");
        esqueletoQuieto.addEventListener('click',()=>{
            botonAudio.play()
            botonSonido.play()
        })
        console.log("On")

    }
    else{
        esqueleto="off";
        esqueletoQuieto.classList.remove("on")
        esqueletoQuieto.addEventListener('click',()=>{
            botonAudio.pause()
        })
        console.log("off")
    }

}
