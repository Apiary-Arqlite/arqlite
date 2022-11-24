import React from 'react'
import {motion} from "framer-motion"

export default function Box1() {
return(
    <div className="box-container">
        <motion.div className="box" animate={{
        x: 500
        }}>

        </motion.div>

    </div>
    )
}