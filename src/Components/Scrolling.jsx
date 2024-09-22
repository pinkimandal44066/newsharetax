





// import { motion } from "framer-motion";
// import '../index.css';

// const calculateRandomBlockDelay = (rowIndex, totalRows) => {
//     const blockDelay = Math.random() * 0.5;
//     const rowDelay = (totalRows - rowIndex - 1) * 0.05;
//     return blockDelay + rowDelay;
// };

// const Scrolling = (Page) => {
//     return function TransitionComponent() {
//         return (
//             <>
//                 <Page />

//                 <div className="blocks-container transition-in">
//                     {Array.from({ length: 10 }).map((_, rowIndex) => (
//                         <div className="row" key={rowIndex}>
//                             {Array.from({ length: 11 }).map((_, blockIndex) => (
//                                 <motion.div
//                                     key={blockIndex}
//                                     className="block"
//                                     initial={{ scaleY: 1 }}
//                                     animate={{ scaleY: 0 }}
//                                     exit={{ scaleY: 0 }}
//                                     transition={{
//                                         duration: 1,
//                                         ease: [0.22, 1, 0.36, 1],
//                                         delay: calculateRandomBlockDelay(rowIndex, 10),
//                                     }}
//                                 />
//                             ))}
//                         </div>
//                     ))}
//                 </div>

//                 <div className="blocks-container transition-out">
//                     {Array.from({ length: 10 }).map((_, rowIndex) => (
//                         <div className="row" key={rowIndex}>
//                             {Array.from({ length: 11 }).map((_, blockIndex) => (
//                                 <motion.div
//                                     key={blockIndex}
//                                     className="block"
//                                     initial={{ scaleY: 0 }}
//                                     animate={{ scaleY: 0 }}
//                                     exit={{ scaleY: 1 }}
//                                     transition={{
//                                         duration: 1,
//                                         ease: [0.22, 1, 0.36, 1],
//                                         delay: calculateRandomBlockDelay(rowIndex, 10),
//                                     }}
//                                 />
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </>
//         );
//     };
// };

// export default Scrolling;












import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import '../index.css';

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
    const blockDelay = Math.random() * 0.5;
    const rowDelay = (totalRows - rowIndex - 1) * 0.05;
    return blockDelay + rowDelay;
};

const Scrolling = (Page) => {
    return function TransitionComponent() {
        const [isTransitioning, setIsTransitioning] = useState(false);

        useEffect(() => {
            const handleTransition = () => {
                setIsTransitioning(true);
                // Set a timeout to reset the transitioning state after the animation duration
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 1000); // Match this with your animation duration
            };

            // Add an event listener for navigation or some state change
            // Replace this with your actual transition trigger
            window.addEventListener('beforeunload', handleTransition);

            return () => {
                window.removeEventListener('beforeunload', handleTransition);
            };
        }, []);

        return (
            <>
                {isTransitioning && (
                    <div className="blocks-container transition-in">
                        {Array.from({ length: 10 }).map((_, rowIndex) => (
                            <div className="row" key={rowIndex}>
                                {Array.from({ length: 11 }).map((_, blockIndex) => (
                                    <motion.div
                                        key={blockIndex}
                                        className="block"
                                        initial={{ scaleY: 1 }}
                                        animate={{ scaleY: 0 }}
                                        exit={{ scaleY: 0 }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.22, 1, 0.36, 1],
                                            delay: calculateRandomBlockDelay(rowIndex, 10),
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                <Page />

                {isTransitioning && (
                    <div className="blocks-container transition-out">
                        {Array.from({ length: 10 }).map((_, rowIndex) => (
                            <div className="row" key={rowIndex}>
                                {Array.from({ length: 11 }).map((_, blockIndex) => (
                                    <motion.div
                                        key={blockIndex}
                                        className="block"
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 0 }}
                                        exit={{ scaleY: 1 }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.22, 1, 0.36, 1],
                                            delay: calculateRandomBlockDelay(rowIndex, 10),
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </>
        );
    };
};

export default Scrolling;
