import { motion } from "framer-motion";

function Project (props) {
    let title = props.title;
    let subtitle = props.subtitle;
    let link = props.link;

    return (
        <motion.a id={'portfolio-card'} href={link} whileHover={{ translateY: '-10px'}} transition={{duration: '1'}} target="_blank" rel="noopener noreferrer">
            <div>
                <p style={{fontSize: '20px', backgroundColor: 'blue', width: 'min-content', padding: '10px'}}>{title}</p>
                <p style={{fontSize: '15px'}}>{subtitle}</p>
            </div>
        </motion.a>
    )
}

export default Project;