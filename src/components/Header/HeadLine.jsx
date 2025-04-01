import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
 
export default function AnimatedHeadline({
  texts,
  duration = 0.7,
  delay = 2.5,
  className = "",
  loop = true,
  fontSize = "text-sm",
//   md:text-5xl lg:text-6xl
  color = "text-gray-400",
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (texts.length <= 1) return

    const interval = setInterval(
      () => {
        setIsVisible(false)

        setTimeout(() => {
          setCurrentIndex((prevIndex) => {
            if (prevIndex === texts.length - 1) {
              return loop ? 0 : prevIndex
            }
            return prevIndex + 1
          })
          setIsVisible(true)
        }, duration * 1000)
      },
      duration * 1000 + delay * 1000,
    )

    return () => clearInterval(interval)
  }, [texts, duration, delay, loop])

  return (
    <div className={`relative w-full text-left z-[100] ${className}`}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.h1
            key={currentIndex}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              duration: duration,
              ease: "easeInOut",
            }}
            className={`absolute ps-7 w-full text-left ${fontSize} ${color}`}
          >
           Search "{texts[currentIndex]}"
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  )
}

