import { motion } from "framer-motion";
import Project from "./Project";
import { useMediaQuery } from 'react-responsive';


function Portfolio () {
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });

    return (
        <div id= "portfolio-wrapper">
            <motion.div id="portfolio" class={!isDesktop ? "overflow-main" : "mobile-portfolio"}
                initial={{y: 5, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 2, type: 'spring', stiffness: 30}}
                exit={{opacity: 0}}
            >
                <Project 
                    title={'Szade Sunglasses Website'}
                    subtitle={'Shopify ecommerce website'} 
                    link={'https://www.szade.jp/'}
                />
                <Project
                    title={'Responsive Coding Challenge'}
                    subtitle={'fully responsive pure html/css'} 
                    link={'https://competent-dijkstra-7a8fca.netlify.app/'}
                    // width={'50vw'}
                />
                <Project
                    title={'Witches And Science'}
                    subtitle={'Interactive landing page made using HTML/CSS/JavsScript'} 
                    link={'https://www.witchesandscience.com/'}
                />
                <Project
                    title={'Portfolio Website'}
                    subtitle={'3D Rendered Portfolio made using React/ThreeJS'} 
                    link={'https://gabrielrangel.dev'}
                    // width={'50vw'}
                />
                

            </motion.div>
        </div>
    )
}

export default Portfolio;