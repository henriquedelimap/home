const card = document.querySelectorAll('card')

const primeiro = document.querySelector('#primeiro')
const segundo = document.querySelector('#segundo')
const terceiro = document.querySelector('#terceiro')
const quarto = document.querySelector('#quarto')

const btPagina = `<div class="btPagina">
<div class="circulo fechar-pagina" id="btFechar"></div>
<div class="circulo minimizar-pagina" id="btMinimiza"></div>
<div class="circulo maximizar-pagina" id="btMaximizar"></div>
</div>`



function inicializaCards(){
    segundo.innerHTML = btPagina
    terceiro.innerHTML = btPagina

    primeiro.classList.add('posicao__primeira')
    segundo.classList.add('posicao__segunda')
    terceiro.classList.add('posicao__terceira')

}

inicializaCards()


function verificaPrimeiro(){
    if (primeiro.classList.contains('posicao__segunda') && segundo.classList.contains('posicao__primeira')){
        primeiro.classList.remove('posicao__segunda')
        segundo.classList.remove('posicao__primeira')

        primeiro.classList.toggle('posicao__primeira')
        segundo.classList.toggle('posicao__segunda')
    } else if (terceiro.classList.contains('posicao__primeira') && primeiro.classList.contains('posicao__segunda')){
        terceiro.classList.remove('posicao__primeira')
        primeiro.classList.remove('posicao__segunda')

        terceiro.classList.toggle('posicao__segunda')
        primeiro.classList.toggle('posicao__primeira')
    } else if (segundo.classList.contains('posicao__primeira') && terceiro.classList.contains('posicao__segunda')){
        terceiro.classList.remove('posicao__segunda')
        segundo.classList.remove('posicao__primeira')
        primeiro.classList.remove('posicao__terceira')

        terceiro.classList.toggle('posicao__terceira')
        segundo.classList.toggle('posicao__segunda')
        primeiro.classList.toggle('posicao__primeira')
    } else if (segundo.classList.contains('posicao__segunda') && terceiro.classList.contains('posicao__primeira')){
        terceiro.classList.remove('posicao__primeira')
        segundo.classList.remove('posicao__segunda')
        primeiro.classList.remove('posicao__terceira')

        terceiro.classList.toggle('posicao__segunda')
        segundo.classList.toggle('posicao__terceira')
        primeiro.classList.toggle('posicao__primeira')
    }
}

function verificaSegundo(){
    if(primeiro.classList.contains('posicao__primeira') && segundo.classList.contains('posicao__segunda')){
        primeiro.classList.remove('posicao__primeira')
        segundo.classList.remove('posicao__segunda')

       primeiro.classList.toggle('posicao__segunda')
       segundo.classList.toggle('posicao__primeira')

    } else if (terceiro.classList.contains('posicao__primeira') && primeiro.classList.contains('posicao__segunda')){
        terceiro.classList.remove('posicao__primeira')
        primeiro.classList.remove('posicao__segunda')
        segundo.classList.remove('posicao__terceira')

        terceiro.classList.toggle('posicao__segunda')
        primeiro.classList.toggle('posicao__terceira')
        segundo.classList.toggle('posicao__primeira')
    } else if (segundo.classList.contains('posicao__segunda') && terceiro.classList.contains('posicao__primeira')){
        terceiro.classList.remove('posicao__primeira')
        segundo.classList.remove('posicao__segunda')

        terceiro.classList.toggle('posicao__segunda')
        segundo.classList.toggle('posicao__primeira')
    } else if (terceiro.classList.contains('posicao__segunda') && primeiro.classList.contains('posicao__primeira')){
        terceiro.classList.remove('posicao__segunda')
        primeiro.classList.remove('posicao__primeira')
        segundo.classList.remove('posicao__terceira')

        terceiro.classList.toggle('posicao__terceira')
        primeiro.classList.toggle('posicao__segunda')
        segundo.classList.toggle('posicao__primeira')

    }
}

function verificaTerceiro(){
    if (primeiro.classList.contains('posicao__segunda') && segundo.classList.contains('posicao__primeira')){
        primeiro.classList.remove('posicao__segunda')
        segundo.classList.remove('posicao__primeira')
        terceiro.classList.remove('posicao__terceira')

        primeiro.classList.toggle('posicao__terceira')
        segundo.classList.toggle('posicao__segunda')
        terceiro.classList.toggle('posicao__primeira')

    } else if(primeiro.classList.contains('posicao__primeira') && segundo.classList.contains('posicao__segunda')){
        primeiro.classList.remove('posicao__primeira')
        segundo.classList.remove('posicao__segunda')
        terceiro.classList.remove('posicao__terceira')

       primeiro.classList.toggle('posicao__segunda')
       segundo.classList.toggle('posicao__terceira')
       terceiro.classList.toggle('posicao__primeira')
    } else if (terceiro.classList.contains('posicao__segunda') && primeiro.classList.contains('posicao__primeira')){
        terceiro.classList.remove('posicao__segunda')
        primeiro.classList.remove('posicao__primeira')

        terceiro.classList.toggle('posicao__primeira')
        primeiro.classList.toggle('posicao__segunda')
    } else if (segundo.classList.contains('posicao__primeira') && terceiro.classList.contains('posicao__segunda')){
        terceiro.classList.remove('posicao__segunda')
        segundo.classList.remove('posicao__primeira')

        terceiro.classList.toggle('posicao__primeira')
        segundo.classList.toggle('posicao__segunda')
    }
}

primeiro.addEventListener('click', verificaPrimeiro)
segundo.addEventListener('click', verificaSegundo)
terceiro.addEventListener('click', verificaTerceiro)

