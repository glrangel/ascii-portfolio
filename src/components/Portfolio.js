import { motion } from "framer-motion";
import Project from "./Project";

function Portfolio () {
    return (
        <motion.div id="portfolio"
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
            />
            <Project 
                title={'Witches And Science'}
                subtitle={'Interactive landing page made using HTML/CSS/JavsScript'} 
                link={'https://www.witchesandscience.com/'}
            />
        </motion.div>
    )
}

export default Portfolio;