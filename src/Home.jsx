import profileImg from "/profile.jpg";
import Transition from "./Transition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {

    useGSAP(() => {
        const timeline = gsap.timeline({repeat: 0, repeatDelay: 0})

        timeline.to(".nome > *", {y: 0, duration: .5, delay: .3, ease: "expo.out", stagger: 0.03});

        timeline.to(".nome", {
            y: 0,
            duration: .5,
            ease: "power1"
        })

        timeline.to(".text-block", {
            y: 0,
            opacity: 1,
            duration: .5, 
            ease: "power2.in",
            stagger: .2,
        })
    })

    return (
        <main className="pb-5 overflow-hidden">
            <article role="article">
                <div className="flex gap-10 items-end justify-between">
                    <div className="flex flex-col gap-6">
                        <div>
                            <img
                                className="w-[150px] min-[500px]:hidden foto text-block rounded-full"
                                src={profileImg}
                                alt="A picture of myself"
                            />
                            <div>
                                <h1
                                    style={{overflow: "hidden"}}
                                    className="font-bold nome  my-3 text-[2.2em]"
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
                            <p className="block text-block">
                                Olá, meu nome é José Zeito, também conhecido
                                como Jozeito. Nos últimos dois anos, tenho me
                                dedicado ao estudo do mundo da Engenharia de
                                Software e programação.
                            </p>
                        </div>
                    </div>
                    <img
                        className="w-[150px] text-block max-[499px]:hidden foto rounded-lg"
                        src={profileImg}
                        alt="A picture of myself"
                    />
                </div>

                <div className="my-10 flex flex-col gap-5">
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
