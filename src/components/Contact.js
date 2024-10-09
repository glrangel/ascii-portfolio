import { motion } from "framer-motion";

function Contact () {
    return (
        <motion.div id="contact"
            initial={{y: 5, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2, type: 'spring', stiffness: 30}}
            exit={{opacity: 0}}
            
        >
            <div style={{backgroundColor: 'rgba(0,0,0,0.85)', padding: '10px'}}>
                <p class="contact-title">email</p>
                <p class="contact-data">glrangel25@gmail.com</p>
                <p class="contact-title">github</p>
                <p class="contact-data">glrangel</p>
            </div>

            
        </motion.div>
    )
}

export default Contact;