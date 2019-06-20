function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var x = document.getElementsByTagName("p")[0]
  
    msg.innerText = `Agora são ${hora} horas.`
    x.innerText = `oloko`
    if (hora >= 0 && hora < 12){
        x.innerHTML = 'Manhã'
        img.src = 'img/manha.png'
        document.body.style.background = 'rgb(240, 156, 1)'
    } else if( hora >= 12 && hora < 18){
        x.innerHTML = 'Tarde'
        img.src = 'img/tarde.png'
        document.body.style.background = 'rgb(122, 122, 118)'
    } else{
        x.innerHTML = 'Noite'
        img.src = 'img/noite.png'
        document.body.style.background = 'rgb(0, 17, 43)'
    }
}
