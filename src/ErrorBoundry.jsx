import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function ErrorBoundry() {
    return (
        <>
            <header className="my-10 flex items-center justify-between">
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
                            <NavLink tabIndex={0} to="./projects">
                                Projetos
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <button
                    tabIndex={0}
                    onClick={() => {
                        themeSwitch();
                    }}
                    className="theme-toggler w-[25px] dark:invert transition-[filter] duration-1000"
                    aria-label="Switch Theme"
                ></button>
            </header>
            <h1 className="Error font-bold text-[3em]">
                Erro<span className="green">.</span>
            </h1>

            <p className="my-5 error-p">
                <span>Alguma</span>
                <span>coisa</span>
                <span>deu</span>
                <span>muito</span>
                <span>muito</span>
                <span>errado</span>
                <span></span>
                <span>😢</span>
                <span>...</span>
                <span>Tente</span>
                <span>recarregar</span>
                <span>a</span>
                <span>pagina</span>
            </p>
        </>
    );
}
