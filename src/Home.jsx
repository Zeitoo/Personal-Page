import profileImg from "/profile.jpg";
import Transition from "./Transition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
    if (!eval(import.meta.env.VITE_DEV_MODE)) {
        useGSAP(() => {
            const timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });

            timeline.to(".nome > *", {
                y: 0,
                duration: 0.5,
                delay: 0.3,
                ease: "expo.out",
                stagger: 0.03,
            });

            timeline.to(".nome", {
                y: 0,
                duration: 0.5,
                ease: "power1",
            });

            timeline.to(".text-block", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.in",
                stagger: 0.2,
            });
        });
    }

    return (
        <main className="pb-5 relative overflow-hidden">
            <article role="article">
                <div className="flex gap-10 items-end justify-between">
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="relative left-4 top-2 min-[500px]:hidden">
                                <svg className="absolute text-block circle"
                                    id="Component_1_1"
                                    data-name="Component 1 – 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="190px"
                                    height="190px"
                                    viewBox="0 0 62 62"
                                >
                                    <g
                                        id="Ellipse_1"
                                        data-name="Ellipse 1"
                                        fill="#ffffff00"
                                    >
                                        <circle
                                            cx="31"
                                            cy="31"
                                            r="31"
                                            stroke="none"
                                        />
                                        <circle
                                            cx="31"
                                            cy="31"
                                            r="30.5"
                                            fill="none"
                                        
                                            strokeWidth="1"
                                        />
                                    </g>
                                </svg>
                                <img
                                    className="w-[180px] min-[500px]:hidden foto text-block rounded-full"
                                    src={profileImg}
                                    alt="A picture of myself"
                                />
                            </div>
                            <div>
                                <h1
                                    style={{ overflow: "hidden" }}
                                    className="font-bold nome mt-10 text-[2.2em]"
                                >
                                    <span>J</span>
                                    <span>o</span>
                                    <span>Z</span>
                                    <span>e</span>
                                    <span>i</span>
                                    <span>t</span>
                                    <span>o</span>
                                    <span className="green">.</span>
                                    <span>d</span>
                                    <span>e</span>
                                    <span>v</span>
                                </h1>

                                <h2 className="font-bold green text-[1.2em] text-block">
                                    Front-end developer.
                                </h2>
                            </div>
                        </div>
                        <div>
                            <p className="block font-medium text-block">
                                Olá, meu nome é José Zeito, também conhecido por
                                Jozeito. Nos últimos dois anos, tenho me
                                dedicado ao estudo do mundo da Engenharia de
                                Software e programação.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <img
                            className="w-[350px] text-block max-[499px]:hidden foto rounded-lg"
                            src={profileImg}
                            alt="A picture of myself"
                        />
                    </div>
                </div>

                <div className="my-10 font-medium flex flex-col gap-5">
                    <p className="block text-block">
                        Por mais de dois anos, tenho estudado o mundo da
                        Engenharia de Software mais concretamente Front-end
                        Development, estou comprometido em transformar conceitos
                        criativos em realidade digital, combinando design
                        impressionante com funcionalidades robustas.
                    </p>

                    <p className="block text-block">
                        Como desenvolvedor frontend, possuo sólida experiência
                        em HTML, CSS e JavaScript, bem como em frameworks
                        modernos como React, Vue.js e Angular. Garanto layouts
                        responsivos e colaboro eficientemente em equipe.
                        Priorizo a acessibilidade e estou sempre actualizado com
                        as últimas tendências da área. Além de ser proficiente
                        em frameworks como Tailwind e Bootstrap. Também estou
                        confortável com o uso do Git e GitHub para controle de
                        versão e colaboração em projetcos.
                    </p>
                </div>
            </article>
        </main>
    );
}

export default Transition(Home);
