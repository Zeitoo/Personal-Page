import Transition from "./Transition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function About() {
    useGSAP(() => {
        const timeline = gsap.timeline();

        timeline.to(".title > *", {
            y: 0,
            duration: .7,
            ease: "expo.out",
            stagger: 0.03,
        });

        timeline.to(".title", {
            y: 0,
            duration: .5,
            ease: "power1"
        })

        timeline.to(".text-block", {
            opacity: 1,
            duration: .5,
            ease: "power1",
            stagger: .1
        })
    });

    return (
        <main className="pb-5 font-medium">
            <article>
                <h1 className="font-bold title my-10 text-[2em]">
                    <div className="green">/</div>
                    <div>S</div>
                    <div>o</div>
                    <div>b</div>
                    <div>r</div>
                    <div>e</div>
                    <div className="green">_</div>
                    <div>m</div>
                    <div>i</div>
                    <div>m</div>
                </h1>
                <div className="text-content">
                    <p className="block my-5 text-block">
                        Olá, meu nome é José Zeito, também conhecido como
                        Jozeito. Nos últimos dois anos, tenho me dedicado ao
                        estudo do mundo da Engenharia de Software e programação,
                        explorando desde conceitos básicos de Python até tópicos
                        avançados como:
                    </p>

                    <ul className="ms-10 text-block my-5 flex flex-col gap-2">
                        <li>
                            Criação de páginas usando{" "}
                            <span className="green">HTML</span>.
                        </li>
                        <li>
                            Estilização de páginas usando{" "}
                            <span className="green">CSS</span>.
                        </li>
                        <li>
                            Criação de aplicações Web usando{" "}
                            <span className="green">React</span> e{" "}
                            <span className="green">Angular</span>.
                        </li>
                        <li>
                            Estilização de páginas usando CSS frameworks como{" "}
                            <span className="green">Tailwind</span> e{" "}
                            <span className="green">Bootstrap</span>.
                        </li>
                        <li>
                            Criação de scripts usando{" "}
                            <span className="green">JavaScript</span>,{" "}
                            <span className="green">Python</span> e{" "}
                            <span className="green">TypeScript</span>.
                        </li>
                        <li>
                            Controle de versão usando{" "}
                            <span className="green">Git</span>.
                        </li>
                    </ul>

                    <p className="my-5 text-block">
                        Ao longo da minha jornada como desenvolvedor Front-end,
                        mergulhei de cabeça na arte da codificação, aprimorando
                        constantemente minhas habilidades em HTML, CSS e
                        JavaScript.
                    </p>

                    <p className="my-5 text-block">
                        Estou entusiasmado para compartilhar algumas das minhas
                        criações mais recentes. Se você procura um desenvolvedor
                        Front-end dedicado e criativo para colaborar em seu
                        próximo projeto, estou pronto para fazer parte da sua
                        equipe e transformar sua visão em uma realidade digital
                        impressionante.
                    </p>
                </div>

                <div className="text-block my-10 flex flex-col gap-5">
                    <h2 className="text-[1.8em] font-semibold">Contato</h2>
                    <hr />
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center">
                            <a
                                href="https://github.com/Zeitoo"
                                aria-label="Link para GitHub de José Zeito"
                            >
                                GitHub
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                href="https://www.instagram.com/tech__wrld/"
                                aria-label="Link para o Instagram de José Zeito"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="flex items-center">
                            Email:{" "}
                            <a
                                className="mx-2"
                                href="mailto:josezeito@outlook.com"
                                aria-label="Enviar email para josezeito@outlook.com"
                            >
                                josezeito@outlook.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-block my-10 flex flex-col gap-5">
                    <h2 className="text-[1.8em] font-semibold">
                        O que estou fazendo agora
                    </h2>
                    <hr />
                    <ul className="flex flex-col gap-2">
                        <p>
                            Atualizado em{" "}
                            <span className="green">Janeiro de 2025</span>.
                        </p>

                        <li>
                            Estudando gerenciamento de Base de Dados
                            relacionais;
                        </li>
                        <li>Aprendendo PHP;</li>
                        <li>Mexendo neste site.</li>
                        <li>Dando voltas em Xai-Xai.</li>
                    </ul>
                </div>
            </article>
        </main>
    );
}

export default Transition(About);
