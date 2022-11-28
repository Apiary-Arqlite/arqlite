import React from 'react'
import {motion} from "framer-motion"

export default function Box1() {

    const littleCube = {
        start: { opacity: 0 },
        end: { y: 500, opacity: 1 },
      }



return(
    <motion.div className="box-container" >
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ duration: 2 }}>
        </motion.div>
        <motion.div className="box-dark-gray" initial="start" animate="end" variants={littleCube} transition={{ duration: 2 }}>
        </motion.div>

    </motion.div>
    )
}