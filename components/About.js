import { Container, Typography, Box } from '@mui/material'
import { MotionConfig } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { me } from '../public/bakarbg.png'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <div>
        <Container sx={{height:'100vh'}}>
            <Box height={'100vh'} flexWrap={'wrap'} gap={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box textAlign={'center'}>
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ease: "easeIn", duration: 0.5}}
                    >
                        <Typography gutterBottom color={'#64dd17'} variant="h2">About Me</Typography>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                    >
                        <Typography variant='h6' maxWidth={600}>
                            My Full Name is Muhammad Abubakar and i am a Frontend Developer and a Software Engineer. I acquire many skills as an Engineer as well as a Developer.
                            My goal is to become a Full-Stack Developer and Learn latest technologies to become in future and also in present.
                        </Typography>
                    </motion.div>
                </Box>
                <Box height={'250'} width={'250px'}>
                    <Image height={'250px'} width={'250px'} src={me} alt='me'/>
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default About