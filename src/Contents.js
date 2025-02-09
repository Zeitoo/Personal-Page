export default function Contents(id) {
    const content = [
            //HTML  
            `
            <div class="figure">
                <img
                    style="width: 65px; translate: -5px 10px;"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
                    alt="HTML logo"
                />
            </div>
            <div class="contents">
                HTML é a linguagem de marcação usada para estruturar o conteúdo
                de páginas da web. Ele organiza elementos como textos, imagens,
                links e vídeos, definindo a estrutura da página.
            </div>
            `, 
            //CSS 
            `
            <div class="figure">
                <img
                    style="translate: 5px 0px;width: 55px;"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"
                    alt="CSS logo"
                />
            </div>
            <div class="contents">
                CSS (Cascading Style Sheets) é uma linguagem usada para
                estilizar páginas web, controlando layout, cores, fontes e
                outros aspectos visuais, separando o conteúdo (HTML) da
                apresentação.
            </div>
            `, 
            //Javascript 
            `
            <div class="figure">
                <img
                    style="width: 65px;"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                    alt="Javascript logo"
                />
            </div>
            <div class="contents">
                JavaScript é uma linguagem de programação que cria
                interatividade em páginas web, permitindo funcionalidades
                dinâmicas como animações, validações e atualizações de conteúdo
                sem recarregar a página.
            </div>
            `, 
            //PHP 
            `
            <div class="figure">
                <img
                    style="width: 90px;"
                    src="https://www.php.net/images/logos/new-php-logo.svg"
                    alt="PHP logo"
                />
            </div>
            <div class="contents">
                PHP é uma linguagem de script open source, usada principalmente
                para desenvolvimento web. Permite criar páginas dinâmicas,
                interagir com bancos de dados e processar formulários. É fácil
                de aprender e amplamente utilizada.
            </div>
            `, 
            //Python 
            `
            <div class="figure">
                <img
                style="width: 75px; translate: 0px 5px;"
                    src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                    alt="Python logo"
                />
            </div>
            <div class="contents">
                Python é uma linguagem de programação de alto nível,
                interpretada, de propósito geral, conhecida por sua sintaxe
                clara e legibilidade, amplamente usada em desenvolvimento web,
                ciência de dados, automação e IA.
            </div>
            `, 
            //Typescript 
            `
            <div class="figure">
                <img
                    style="width: 80px;"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png"
                    alt="Typescript logo"
                />
            </div>
            <div class="contents">
                TypeScript é um superset de JavaScript que adiciona tipagem
                estática, facilitando a detecção de erros e melhorando a
                manutenção do código em projetos grandes.
            </div>
            `, //REACT 
            `
            <div class="figure">
                <img
                    style="width: 75px; translate: 0px 10px;"
                    src="//upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/512px-React_Logo_SVG.svg.png"
                    alt="React logo"
                />
            </div>
            <div class="contents">
                React é uma biblioteca JavaScript para construir interfaces de
                usuário interativas e reativas, baseada em componentes
                reutilizáveis que atualizam eficientemente a interface conforme
                os dados mudam.
            </div>
            `, //Angular 
            `
            <div class="figure">
                <img
                    style="width: 125px; translate: 0px 10px;"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Angular_Logo_SVG.svg/1920px-Angular_Logo_SVG.svg.png"
                    alt="Angular logo"
                />
            </div>
            <div class="contents">
                Angular é um framework de desenvolvimento web mantido pelo
                Google, usado para criar aplicações single-page dinâmicas e
                escaláveis com TypeScript, HTML e CSS. Oferece recursos como
                data binding, diretivas e injeção de dependência.
            </div>
            `, //Tailwind
            `
            <div class="figure">
                <img
                    style="width: 100px; translate: 10px 10px;"
                    src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"
                    alt="Tailwind logo"
                />
            </div>
            <div class="contents">
                Tailwind CSS é um framework CSS utilitário que permite criar
                designs personalizados diretamente no HTML, usando classes
                pré-definidas para estilização rápida e responsiva.
            </div>
            `, //Bootstrap
            `
            <div class="figure">
                <img
                    style="width: 80px; translate: 0 10px;"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                    alt="Bootstrap logo"
                />
            </div>
            <div class="contents">
                Bootstrap CSS é um framework front-end que facilita a criação de
                sites responsivos e modernos, com componentes pré-estilizados e
                um sistema de grid para layouts flexíveis.
            </div>
            `, 
            //MySQL
            `
            <div class="figure">
                <img
                    style="width: 90px;"
                    src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                    alt="MySQL logo"
                />
            </div>
            <div class="contents">
                MySQL é um sistema de gerenciamento de banco de dados relacional
                de código aberto, usado para armazenar, organizar e recuperar
                dados de forma eficiente em aplicações web e outros softwares.
            </div>
            `, //GIT
            `
            <div class="figure">
                <img
                    style="width: 75px;"
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"
                    alt="GIT logo"
                />
            </div>
            <div class="contents">
                Git é um sistema de controle de versão distribuído, usado para
                rastrear mudanças em arquivos, facilitar a colaboração em
                projetos de software e gerenciar diferentes versões do
                código-fonte.
            </div>
            `, 
            `
            <div class="figure">
                <img
                    style="width: 300px; border-radius: 5px;"
                    src="https://i0.wp.com/xaixai-mozambique.com/wp-content/uploads/2021/09/beach-xzzx.jpg?fit=1832%2C1374&ssl=1"
                />
            </div>
            <div class="contents">
            Xai-Xai é uma cidade costeira de Moçambique, capital da província de Gaza. Conhecida por suas praias, agricultura e comércio, é um importante centro econômico e turístico na região sul do país.
            </div>
            `, 
    ];
    return content[id];
}
