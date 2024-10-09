import { motion } from "framer-motion";
import Project from "./Project";
import { useMediaQuery } from 'react-responsive';


function Portfolio () {
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });

    return (
        <motion.div id="portfolio" class={!isDesktop && "overflow-main"}
            initial={{y: 5, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2, type: 'spring', stiffness: 30}}
            exit={{opacity: 0}}
        >
            <Project 
                title={'Portfolio Website'}
                subtitle={'made using react + threeJS'} 
                link={'https://www.gabrielrangel.dev/'}
            />
            <Project
                title={'Responsive Coding Challenge'}
                subtitle={'fully responsive pure html/css'} 
                link={'https://competent-dijkstra-7a8fca.netlify.app/'}
                width={'50vw'}
            />
            <Project
                title={'Witches And Science'}
                subtitle={'Interactive landing page made using HTML/CSS/JavsScript'} 
                link={'https://www.witchesandscience.com/'}
                width={'65vw'}
            />
        </motion.div>
    )
}

export default Portfolio;