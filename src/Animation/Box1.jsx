import React from 'react'
import {motion} from "framer-motion"

export default function Box1() {

    const littleCube = {
        start: { y: -500, opacity: 0 },
        end: { y: 0, opacity: 1 },
      }




return(
    <div>
{/*second from bottom row*/}
<motion.div className="box-container">
        <motion.div className="box-dark-gray" initial="start" animate="end" variants={littleCube} transition={{delay: 1.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-dark-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 1.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 1, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 0.8, duration: 2 }}>
        </motion.div>
    </motion.div>


{/*bottom row*/}
    <motion.div className="box-container">
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 0.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-dark-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 0.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 0.6, duration: 2 }}>
        </motion.div>
    </motion.div>







    </div>

    
    


    )
}