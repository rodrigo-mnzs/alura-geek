class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="cabecalho container">
            <a href="/alura-geek/index.html"><img class="cabecalho__logo" src="/alura-geek/assets/images/logo.png" alt="Logo Alura Geek" /></a>
            <div class="cabecalho__pesquisa">
                <input id="pesquisa-campo" class="cabecalho__pesquisa--campo" type="text"placeholder="O que deseja encontrar?" />
                <label for="pesquisa-campo"><i class="fa-solid fa-magnifying-glass cabecalho__pesquisa--icone"></i></label>
            </div>
            <a href="/alura-geek/pages/login.html"><button class="cabecalho__botao secondary--button cabecalho__botao--login">Login</button></a>
            <a href="#"><button class="cabecalho__botao secondary--button cabecalho__botao--admin">Menu administrador</button></a>
        </header>
        `;
    }
}

customElements.define('main-header', Header);