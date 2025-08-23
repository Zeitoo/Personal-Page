import Transition from "./Transition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Jorney() {
    if (!eval(import.meta.env.VITE_DEV_MODE)) {
        useGSAP(() => {
            const timeline = gsap.timeline();

            timeline.to(".title > *", {
                y: 0,
                duration: 1,
                ease: "expo.out",
                stagger: 0.03,
            });

            timeline.to(".title", {
                y: 0,
                duration: 0.3,
                ease: "power1",
            });

            timeline.to(".text-block", {
                opacity: 1,
                duration: 0.5,
                ease: "power1",
                stagger: 0.3,
            });
        });
    }

    const roadmap = [
        {
            phase: "Início: Fundamentos da Web e da Programação",
            topics: [
                {
                    title: "Internet",
                    description:
                        "Compreender como a Internet funciona, o que é HTTP, DNS, hospedagem e como navegadores interpretam e renderizam páginas.",
                    status: "done",
                },
                {
                    title: "HTML",
                    description:
                        "Aprender marcação semântica, formulários, acessibilidade e boas práticas de SEO para estruturar corretamente páginas web.",
                    status: "done",
                },
                {
                    title: "CSS",
                    description:
                        "Estudar layouts, design responsivo, posicionamento, Flexbox, Grid e arquiteturas de estilo. Explorar também CSS-in-JS, CSS Modules e Styled Components.",
                    status: "done",
                },
                {
                    title: "JavaScript",
                    description:
                        "Dominar fundamentos da linguagem, manipulação do DOM, eventos, tipagem dinâmica e requisições HTTP com Fetch API/Ajax.",
                    status: "done",
                },
            ],
        },
        {
            phase: "Intermediário: Ferramentas e Frameworks",
            topics: [
                {
                    title: "Git & Versionamento",
                    description:
                        "Usar Git para controle de versão e serviços como GitHub, GitLab para colaboração em projetos.",
                    status: "done",
                },
                {
                    title: "Gerenciadores de Pacotes",
                    description:
                        "Aprender npm e pnpm para instalar, atualizar e organizar dependências de projetos frontend.",
                    status: "done",
                },
                {
                    title: "Frameworks de Frontend",
                    description:
                        "Explorar frameworks modernos como React, Vue.js ou Angular para criar interfaces reativas e escaláveis.",
                    status: "done",
                },
                {
                    title: "Ferramentas de Build",
                    description:
                        "Compreender como funcionam bundlers de módulo como Vite, esbuild, Webpack e Rollup para otimizar aplicações.",
                    status: "done",
                },
            ],
        },
        {
            phase: "Avançado: Tópicos Essenciais",
            topics: [
                {
                    title: "Autenticação",
                    description:
                        "Aprender estratégias como JWT, OAuth, Single Sign-On (SSO), Basic Auth e Session Auth para proteger aplicações.",
                    status: "learning",
                },
                {
                    title: "Testes",
                    description:
                        "Diferenciar testes de unidade, integração e funcionais. Usar ferramentas como Jest, Vitest, Cypress ou Playwright.",
                    status: "learning",
                },
                {
                    title: "Segurança Web",
                    description:
                        "Estudar CORS, HTTPS, Content Security Policy, certificados SSL/TLS e entender os riscos listados no OWASP Top 10.",
                    status: "todo",
                },
                {
                    title: "Server-Side Rendering (SSR)",
                    description:
                        "Explorar frameworks que suportam SSR, como Next.js, Remix ou Nuxt.js, para melhor performance e SEO.",
                    status: "todo",
                },
                {
                    title: "APIs Web",
                    description:
                        "Utilizar APIs do navegador: geolocalização, notificações, pagamentos online, cache storage e service workers.",
                    status: "learning",
                },
                {
                    title: "PWA (Progressive Web Apps)",
                    description:
                        "Criar aplicações que funcionam offline, com push notifications e instalação em dispositivos móveis.",
                    status: "todo",
                },
            ],
        },
        {
            phase: "Conteúdo Bônus",
            topics: [
                {
                    title: "Aplicativos Móveis",
                    description:
                        "Construir apps para Android/iOS com React Native ou Flutter, aproveitando conhecimentos de frontend.",
                    status: "todo",
                },
                {
                    title: "Aplicativos Desktop",
                    description:
                        "Explorar o desenvolvimento desktop com Electron ou Tauri, integrando tecnologias web em apps nativos.",
                    status: "todo",
                },
            ],
        },
    ];

    const statusStyles = {
        done: "bg-green-500",
        learning: "bg-yellow-200",
        todo: "bg-red-500",
    };

    return (
        <main className="pb-5 projects relative font-medium">
            <div className="title w-[100%] flex flex-col mt-5 mb-[50px]">
                <h1 className="font-bold title text-[2em] mb-5 ">
                    <span className="green mr-1">/</span>
                    <div>J</div>
                    <div>o</div>
                    <div>r</div>
                    <div>n</div>
                    <div>a</div>
                    <div>d</div>
                    <div>a</div>
                </h1>
                <p className="text-block">
                    Minha jornada "estudantil" como programador desde 2022:
                </p>

                <ul className="m-3 mb-0 text-block flex flex-col gap-1">
                    <li>Verde significa "finalizado";</li>
                    <li className="yellow">Amarelo significa "em curso";</li>
                    <li className="red">Vermelho significa "pendente";</li>
                </ul>
            </div>

            <div className="text-block">
                <section className="pl-6">
                    <div className="relative left-[-15px] border-l max-w-3xl mx-auto">
                        {roadmap.map((step, i) => (
                            <div key={i} className="mb-10 ml-6">
                                {/* Timeline dot */}
                                <div className="absolute w-4 h-4 bg-black dark:bg-white rounded-full -left-2"></div>

                                {/* Phase */}
                                <time className="mb-2 text-lg green font-semibold leading-none ">
                                    {step.phase}
                                </time>

                                {/* Topics */}
                                <div className="space-y-4 mt-3">
                                    {step.topics.map((topic, j) => (
                                        <div
                                            key={j}
                                            className={`sm:p-2 text-block max-sm:w-[72vw]`}
                                        >
                                            <div>
                                                <div
                                                    className={`absolute w-3 h-3 rounded-full  -left-1.5 ${
                                                        statusStyles[
                                                            topic.status
                                                        ]
                                                    }`}
                                                ></div>

                                                <h3 className="font-semibold text-base my-1.5">
                                                    {topic.title}
                                                </h3>
                                                <p className="text-sm font-normal sm:text-justify">
                                                    {topic.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Jorney;
