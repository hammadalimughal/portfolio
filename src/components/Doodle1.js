import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const Doodle1 = ({ style, className }) => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            // const delay = 1 + i * 0.5;
            const delay = 1;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };

    return (
        <motion.svg
            initial="hidden"
            animate="visible"
            style={style}
            className={className}
            width="688"
            height="61"
            viewBox="0 0 688 61"
            fill="none"
        >
            <motion.path
                variants={draw}
                d="M10 51C113.837 26.5985 392.808 -12.4606 678 26.5152" stroke="#DFFB6D" strokeWidth="19" strokeLinecap="round" />
        </motion.svg>
    );
};

export default Doodle1;