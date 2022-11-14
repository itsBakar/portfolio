import { Box, Icon, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

const Herosection = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <Box height={"100vh"} display={'flex'} justifyContent={"center"} alignItems={"center"} flexDirection={'column'}>
                <Typography variant="h2">Hi </Typography>
                <Typography color={'#64dd17'} variant="h2">its Bakar </Typography>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 5.0,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}>
                    <Typography variant="h2">I am Developer</Typography></motion.div>
        </Box>
    </motion.div>
  )
}

export default Herosection