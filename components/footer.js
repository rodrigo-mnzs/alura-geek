class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <div class="rodape container">
          <img class="rodape__logo" src="/alura-geek/assets/images/logo.png" alt="Logo Alura Geek">
          <nav class="rodape__navegacao">
            <ul>
              <li class="rodape__navegacao--link"><a href="#">Quem somos nós</a></li>
              <li class="rodape__navegacao--link"><a href="#">Política de privacidade</a></li>
              <li class="rodape__navegacao--link"><a href="#">Programa fidelidade</a></li>
              <li class="rodape__navegacao--link"><a href="#">Nossas lojas</a></li>
              <li class="rodape__navegacao--link"><a href="#">Quero ser franqueado</a></li>
              <li class="rodape__navegacao--link"><a href="#">Anuncie aqui</a></li>
            </ul>
          </nav>
          <form class="rodape__formulario">
            <label class="rodape__formulario--label">Fale conosco</label>
            <input class="rodape__formulario--nome formulario" type="text" placeholder="Nome">
            <textarea class="rodape__formulario--mensagem formulario" placeholder="Escreva sua mensagem" cols="30" rows="10"></textarea>
            <button class="rodape__formulario--botao botao__azul">Enviar mensagem</button>
          </form>
        </div>
        <div class="info">
          <p>Desenvolvido por Rodrigo Menezes</p>
          <p>2022</p>
        </div>
      </footer>
        `;
    }
}

customElements.define('main-footer', Footer);