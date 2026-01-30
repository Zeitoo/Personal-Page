import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";
import Jorney from "./Jorney";

import { AnimatePresence } from "framer-motion";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Notes from "./Notes";
import NotesViewer from "./notesViewer";

export default function HomeLayout() {
    const location = useLocation();

    useGSAP(() => {
        gsap.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1.5 });
    });

    useEffect(() => {
        console.log(
            "O quê está fazendo aqui? curioso \n Seja como for se você encontrar um bug, peculiaridade ou irregularidade, fique a vontade para me notificar no meu email: josezeito@outlook.com"
        );

        const htmlELement = document.getElementsByTagName("html");

        switch (localStorage.getItem("theme")) {
            case "light":
                htmlELement[0].classList.remove("dark");
                break;

            case "dark":
                htmlELement[0].classList.add("dark");
                break;
        }
    }, []);

    const themeSwitch = () => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            SetDarkMode(!darkMode);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            SetDarkMode(!darkMode);
        }
    };

    const [darkMode, SetDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    return (
        <>
            <header className="my-10 header flex items-center justify-between">
                <nav role="navigation" aria-label="Main Navigation">
                    <ul className="flex gap-2 text-sm font-semibold">
                        <li>
                            <NavLink tabIndex={0} to="./">
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink tabIndex={0} to="./about">
                                Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink tabIndex={0} to="./jorney">
                                Jornada
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <button
                    tabIndex={0}
                    onClick={() => {
                        themeSwitch();
                    }}
                    className="theme-toggler w-[25px] relative dark:invert transition-[filter] duration-1000"
                    aria-label="Switch Theme"
                ></button>
            </header>

            <div className="content my-10 ">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />

                        <Route path="/jorney" element={<Jorney />} />
                        <Route path="/notes" element={<Notes />}></Route>
                        <Route path="notes/:id" element={<NotesViewer />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </>
    );
}
