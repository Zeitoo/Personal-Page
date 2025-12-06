import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function NotesViewer() {
    const contents = [
        {
            title: "html",
            description:
                "HTML é a espinha dorsal da web, a linguagem de marcação que estrutura o conteúdo das páginas...",
            data: "2024-06-01",
            innerContent: `
            <h1 class="font-bold text-xl">HTML</h1>
        <p class="my-5 text-justify"> HTML é a espinha dorsal da web, a linguagem de marcação que estrutura o conteúdo das páginas. Compreender HTML é essencial para qualquer desenvolvedor web, pois permite criar documentos bem organizados e semanticamente corretos, facilitando a acessibilidade e o SEO</p>
        <h2 class="font-bold">Introdução ao HTML</h2>
        <p class="my-3">HperText Markup Language é uma linguagem de marcacao de utilizada para dizer ao navegador como estruturar uma pagina web.</p>
        <p>HTML consiste em uma serie de elementos anexados, envolvidos em diferentes partes do conteudo para que um site apareca ou se comporte de certa maneira.</p>
        
        `,
        },
    ];

    const divRef = useRef(null);
    const { id } = useParams();
    useEffect(() => {
        for (let content of contents) {
            if (content.title.toLowerCase() == id.toLowerCase()) {
                divRef.current.innerHTML = content.innerContent;
                break;
            }
        }
    });

    return <div ref={divRef}>Conteudo nao encontrado</div>;
}
