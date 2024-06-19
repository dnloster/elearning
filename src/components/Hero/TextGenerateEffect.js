import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { stagger } from "framer-motion/dom";

const TextGenerateEffect = ({ words, className }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.05),
            }
        );
    }, [animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span key={word + idx} className="text-white opacity-0">
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div className={`font-bold ${className}`}>
            <div className="my-4">
                <div className=" text-white text-2xl leading-snug tracking-wide">{renderWords()}</div>
            </div>
        </div>
    );
};

export default TextGenerateEffect;
