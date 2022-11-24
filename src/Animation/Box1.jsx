import React from 'react'
import {motion} from "framer-motion"

export default function Box1() {
return(
    <div className="box-container">
        <motion.div className="box" 
        initial ={{opacity: 0}}
        animate={{ y: 500, opacity: 1 }} 
        transition={{ duration: 2 }}>

        </motion.div>

    </div>
    )
}