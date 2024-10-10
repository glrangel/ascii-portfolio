import { motion } from "framer-motion";
import React from 'react';
import { useLocation } from "react-router-dom";



class AnimatedRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text}; 
    }

    componentDidMount() {
        this.setState({
            text: this.state.text
        })
      }

    render () {
        return (
        <div id="route-name">
            {this.state.text.map((el, i) => (
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 1,
                delay: i / 20
                }}
                key={i}
            >
                {el}{" "}
            </motion.h1>
            ))}
        </div>
        )
    }
}

export default AnimatedRoute;