function verificar() {
    var data = new Date()
    var anoat = data.getFullYear()
    var ano = window.document.getElementById('nascimento')
    var msg = window.document.querySelector('div#msg')
    var imagens = window.document.getElementById('foto')

    if (ano.value.length == 0 || ano.value > anoat){
        window.alert('Verifique os dados e tente novamente')
    } else{
        var sexo = window.document.getElementsByName('radsex')
        var idade = anoat - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/criancamasc.jpg')
            }else if(idade < 22){
                //jovem
                img.setAttribute('src', 'imagens/jovemmasc.jpg')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'imagens/homemadulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosomasc.jpg')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/criancafem.jpg')
            }else if(idade < 22){
                //jovem
                img.setAttribute('src', 'imagens/jovemfem.jpg')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'imagens/mulheradulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosafem.jpg')
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`
        msg.appendChild(img)
    }
}