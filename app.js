function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartao__conteudo">
                    <h3>Música</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é um atabaque</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>Um instrumento musical</p>
                    </div>
                </div>
    `
    container.appendChild(cartao)

}