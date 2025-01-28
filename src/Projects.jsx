import Transition from "./Transition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Projects() {
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
            duration: .3,
            ease: "power1"
        })

        timeline.to(".text-block", {
            opacity: 1,
            duration: .5,
            ease: "power1",
            stagger: .5
        })
    });

    return (
        <main className="pb-5 projects font-medium">
            <div className="title w-[100%] flex flex-col mt-5 mb-[50px]">
                <h1 className="font-bold title text-[2em] mb-5 ">
                    {" "}
                    <span className="green">/</span>
                    <div>P</div>
                    <div>r</div>
                    <div>o</div>
                    <div>j</div>
                    <div>e</div>
                    <div>c</div>
                    <div>t</div>
                    <div>o</div>
                    <div>s</div>
                </h1>
                <p className="text-block">Alguns dos trabalhos que fiz no passado:</p>
            </div>

            <div className="projects-wrapper text-block grid gap-[20px]">
                <div className="max-w-sm card border border-gray-200 rounded-lg shadow">
                    <div className="img"></div>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Felipe Bird
                        </h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Um jogo bem simples parecido com Flippy Bird...
                        </p>
                        <a
                            href="https://github.com/Zeitoo/Felipe-bird"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Code
                        </a>
                        <a
                            href="https://zeitoo.github.io/Felipe-bird/"
                            className="inline-flex mx-5  items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Transition(Projects);
