function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src="Modelo/fotomanha4.jpg"
        document.body.style.background = '#FFFF00'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src="Modelo/fototarde4.jpg"
        document.body.style.background = '#FFA500'
    } else {
        //boa noite
        img.src="Modelo/fotonoite4.jpg"
        document.body.style.background = '#808080'
    }
}



