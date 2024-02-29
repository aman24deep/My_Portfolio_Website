import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { technologies } from "../constants/constants"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from '../styles'



const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Tech stack</p>
        <h2 className={styles.sectionHeadText}>Tech Arsenal</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 pt-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key = {technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")