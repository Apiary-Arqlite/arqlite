import React from 'react'
import {motion} from "framer-motion"

export default function Box1() {

    const littleCube = {
        start: { y: -500, opacity: 0 },
        end: { y: 0, opacity: 1 },
      }




return(
    <div>
{/*top row*/}
<motion.div className="box-container">
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{delay: 9.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 9.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 9, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 8.8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 8.6, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 8.4, duration: 2 }}>
        </motion.div>
    </motion.div>
{/*seventh from bottom row*/}
<motion.div className="box-container">
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{delay: 7.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 7.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 7.6, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 7.8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 8.2, duration: 2 }}>
        </motion.div>
    </motion.div>
{/*sixth from bottom row*/}
<motion.div className="box-container">
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{delay: 7, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 6.8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 6.6, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 6.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 6.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 6, duration: 2 }}>
        </motion.div>
    </motion.div>
{/*fifth from bottom row*/}
<motion.div className="box-container">
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{delay: 4.8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 5, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 5.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 5.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 5.6, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 5.8, duration: 2 }}>
        </motion.div>
    </motion.div>

{/*fourth from bottom row*/}
<motion.div className="box-container">
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{delay: 4.6, duration: 2 }}>
        </motion.div>
        <motion.div className="box-dark-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 4.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 4.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 3.8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 3.6, duration: 2 }}>
        </motion.div>
    </motion.div>


{/*third from bottom row*/}
<motion.div className="box-container">
        <motion.div className="box-dark-gray" initial="start" animate="end" variants={littleCube} transition={{delay: 2.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 2.6, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 2.8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 3, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 3.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 3.4, duration: 2 }}>
        </motion.div>
    </motion.div>

{/*second from bottom row*/}
<motion.div className="box-container">
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{delay: 2.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 1.8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 1.6, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 1.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 1.2, duration: 2 }}>
        </motion.div>
    </motion.div>

{/*bottom row*/}
    <motion.div className="box-container">
        <motion.div className="box-dark-gray" initial="start" animate="end" variants={littleCube} transition={{ duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 0.2, duration: 2 }}>
        </motion.div>
        <motion.div className="box-light-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 0.4, duration: 2 }}>
        </motion.div>
        <motion.div className="box-dark-gray" initial="start" animate="end" variants={littleCube} transition={{ delay: 0.6, duration: 2 }}>
        </motion.div>
        <motion.div className="box-orange" initial="start" animate="end" variants={littleCube} transition={{ delay: 0.8, duration: 2 }}>
        </motion.div>
        <motion.div className="box-blue" initial="start" animate="end" variants={littleCube} transition={{ delay: 1, duration: 2 }}>
        </motion.div>
    </motion.div>


    </div>

    
    


    )
}