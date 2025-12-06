import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Notes() {
    const [searchValue, setsearchValue] = useState("");

    const topics = [
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
    ];

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const submitSearch = (e) => {
        e.preventDefault();

        setsearchValue(e.target.value);
    };

    if (!eval(import.meta.env.VITE_DEV_MODE)) {
        useGSAP(() => {
            const timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });

            timeline.to(".nome > *", {
                y: 0,
                duration: 0.5,
                delay: 1,
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
        <div className="font-medium dark:text-white text-gray-900">
            <h1 className="font-bold nome title mt-10 text-[2em]">
                <div className="green">/</div>
                <div>_</div>
                <div>N</div>
                <div>o</div>
                <div>t</div>
                <div>a</div>
                <div>s</div>
            </h1>

            <div className="my-6">
                <p className="text-block">
                    Algumas das minhas anotações sobre o que aprendi — ou penso
                    que aprendi — sobre programação.
                </p>
            </div>

            <form onSubmit={(e) => submitHandler(e)} action="">
                <div className="text-block relative gap-4 flex justify-between">
                    <input
                        placeholder="Tente escrver algo aqui!"
                        onChange={(e) => submitSearch(e)}
                        className="w-full rounded p-3 search-input"
                        type="text"
                        name="nome"
                        id="nome"
                        maxLength={40}
                    />
                    <button className="search absolute right-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 search"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </div>
            </form>

            <div className="results text-block grid justify-center max-[600px]:grid-cols-1 grid-cols-2 gap-4 mt-4 items-center">
                {topics
                    .filter((element) =>
                        element.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    )
                    .map((topic, index) => (
                        <div key={topic + index} className="relative rounded-xl overflow-hidden">
                            <div
                                style={{
                                    animationDuration: `${Math.floor(
                                        2600 + Math.random() * 1500
                                    )}ms`,
                                    animationDelay: `${
                                        100 + Math.random() * 1000
                                    }ms`,
                                }}
                                className="bg-ball top-2/4 left-1/2  w-32 h-32
                                bg-black dark:bg-white absolute"
                            ></div>
                            <a
                                href="#"
                                className="content-block max-w-sm p-6 border 
                                border-gray-400
                                dark:last:border-gray-800 rounded-xl shadow-xs "
                            >
                                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                                    {topic.title}
                                </h5>
                                <p className="dark:text-gray-300 text-gray-900">
                                    {topic.description}
                                </p>
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    );
}
