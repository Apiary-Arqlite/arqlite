import React from 'react'
import {motion} from "framer-motion"

export default function Box1() {

    const littleCube = {
        start: { opacity: 0 },
        end: { y: 500, opacity: 1 },
      }

return(
    <div className="box-container">
        <motion.div className="box-blue" 
        initial ={{opacity: 0}}
        animate={{ y: 500, opacity: 1 }} 
        transition={{ duration: 2 }}>

        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube}>

        </motion.div>

    </div>
    )
}