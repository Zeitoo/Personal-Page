import Transition from "./Transition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NotFound() {

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
        <>
            <h1
                style={{ overflow: "hidden" }}
                className="font-medium nome  my-3 text-[2.2em]"
            >
                <span className="green">/</span>
                <span>E</span>
                <span>r</span>
                <span>r</span>
                <span>o</span>
                <span>{" "}</span>{" "}
                <span className="green">4</span>
                <span className="green">0</span>
                <span className="green">4</span>
            </h1>

            <p className="my-5 text-block flex gap-[1em]">
                A página que você está procura não exite. Tente verificar a sua
                URL ou <a href="./">volte para o inicio</a>
            </p>
        </>
    );
}

export default Transition(NotFound);