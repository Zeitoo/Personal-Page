import Transition from "./Transition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";
import Contents from "./Contents";

function About() {
    const [isActive, setIsActive] = useState(true);

    const mouse = useRef({ x: 0, y: 0 });

    const circle = useRef();

    const manageMouseMove = (e) => {
        if (isActive) {
            const { clientX, clientY } = e;

            mouse.current = {
                x: clientX,

                y: clientY,
            };

            mouse.current.x < 200 ? (mouse.current.x += 50) : "";
            window.innerWidth - mouse.current.x < 200
                ? (mouse.current.x -= 50)
                : "";
            moveCircle(mouse.current.x, mouse.current.y);
        }
    };

    const spanMouseIn = (e) => {
        let spanNumber = e.target.id.replace("span", "");
        gsap.to(".mouse", {
            width: "250px",
            opacity: 1,
            ease: "expo",
            duration: 1,
            delay: 0.2,
        });

        setTimeout(() => {
            circle.current.innerHTML = Contents(spanNumber);
        }, 500);

        setIsActive(true);
    };

    const spanMouseOut = (e) => {
        gsap.to(".mouse", {
            width: "0px",
            opacity: 0,
            ease: "expo",
            duration: 1,
        });

        circle.current.innerHTML = "";

        setTimeout(() => {
            setIsActive(false);
        }, 400);
    };

    const moveCircle = (x, y) => {
        gsap.to(circle.current, { x, y, xPercent: -45, yPercent: -105 });
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);

        const spanElements = Array.from(document.querySelectorAll("span"));

        spanElements.forEach((element, index) => {
            element.id = `span${index}`;
            element.addEventListener("mouseenter", spanMouseIn);

            element.addEventListener("mouseleave", spanMouseOut);
        });

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);

            spanElements.forEach((element) => {
                element.removeEventListener("mouseenter", spanMouseIn);

                element.removeEventListener("mouseleave", spanMouseOut);
            });
        };
    }, [isActive, setIsActive]);

    if (!eval(import.meta.env.VITE_DEV_MODE)) {
        useGSAP(() => {
            const timeline = gsap.timeline();

            timeline.to(".title > *", {
                y: 0,
                duration: 0.8,
                ease: "expo.out",
                stagger: 0.03,
                delay: 0.5,
            });

            timeline.to(".title", {
                y: 0,
                duration: 0.5,
                ease: "power1",
            });

            timeline.to(".text-block", {
                opacity: 1,
                duration: 0.5,
                ease: "power1",
                stagger: 0.1,
            });
        });
    }
    return (
        <main className="pb-5 about text-justify relative font-medium">
            <div
                ref={circle}
                className="top-0 flex flex-col justify-between mouse left-0 fixed aspect-square rounded-md p-5 opacity-0 dark:bg-zinc-950 bg-white"
            />

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
                            Criação de scripts usando{" "}
                            <span className="green">JavaScript</span>,{" "}
                            <span className="green">PHP</span>,{" "}
                            <span className="green">Python</span> e{" "}
                            <span className="green">TypeScript</span>.
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
                            Gerenciamento de base de dados usando{" "}
                            <span className="green">MySQL</span>.
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
                        <p>Atualizado em Janeiro de 2025.</p>

                        <li>Estudando Node.JS</li>
                        <li>Mexendo neste site.</li>
                        <li>
                            Dando passeios em{" "}
                            <span className="green">Xai-Xai</span>.
                        </li>
                    </ul>
                </div>
            </article>
        </main>
    );
}

export default Transition(About);
