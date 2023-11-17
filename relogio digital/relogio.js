function clock(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    // Adiciona um zero à esquerda se for menor que 10
    hora = hora < 10 ? "0" + hora : hora
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

    var relogio = hora + ":" + min + ":" + sec
    var tempo = document.getElementById('digital')
    tempo.innerHTML = relogio
}
setInterval(clock,1000)