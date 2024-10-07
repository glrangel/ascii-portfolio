import { motion } from "framer-motion";

function Home () {
    return (
        <motion.div id="home"
            initial={{y: -5, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2, type: 'spring', stiffness: 30}}
            exit={{opacity: 0}}
        >
            {/* <h1 style={{width: "fit-content"}}>Home</h1> */}
            <div>
                <p style={{fontSize: '20px'}}>Developing websites <br></br>and tinkering with tech.</p>
                <p style={{fontSize: '12px'}}>based in los angeles 🌴</p>
            </div>
        </motion.div>
    )
}

export default Home;