import { motion } from "framer-motion";

function Contact () {
    return (
        <motion.div id="contact"
            initial={{y: 5, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2, type: 'spring', stiffness: 30}}
            exit={{opacity: 0}}
            style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
        >
            <h1>Contact</h1>
            <p>email</p>
            <p>glrangel25@gmail.com</p>
            <p>github</p>
            <p>glrangel25@gmail.com</p>

            
        </motion.div>
    )
}

export default Contact;