import { motion } from "framer-motion";
function Transition(OgComponent) {
    return () => (
        <>
            <OgComponent />
                <motion.div
                    className="slide-in slides"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0}}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.4, 0.1, 0.3] }}
                />

                <motion.div
                    className="slide-out slides"
                    initial={{ opacity: 1}}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: [ 0.3, 0.4, 0.1, 0.3] }}
                />
        </>
    );
}

export default Transition;
