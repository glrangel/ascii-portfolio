import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';


function Project (props) {
    let title = props.title;
    let subtitle = props.subtitle;
    let link = props.link;
    let width = props.width;
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <motion.a 
            id={'portfolio-card'} 
            href={link} whileHover={{ translateY: '-10px'}} 
            transition={{duration: '1'}} 
            target="_blank" 
            rel="noopener noreferrer"
            style={isMobile && {width: width, marginTop: '5px'}}
        >
            <div id={'portfolio-content-container'}>
                <div>
                    <p style={{fontSize: '20px', backgroundColor: 'rgba(255, 191, 0, 0.3)', width: 'min-content', padding: '10px'}}>{title}</p>
                </div>
                <div>
                    <p style={{fontSize: '15px'}}>{subtitle}</p>
                </div>
            </div>
        </motion.a>
    )
}

export default Project;