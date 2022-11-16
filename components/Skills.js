import { Card, Container, Typography, Box, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import {html} from '../public/HTML5.svg'

const Skills = () => {
  return (
    <div>
        <Container sx={{height:'100%'}}>
            <Box paddingY={5}>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ease: "easeIn", duration: 0.5}}
            >
                <Typography gutterBottom textAlign={'center'} color={'#64dd17'} variant="h2">Skills</Typography>
            </motion.div>
            <Box display={"flex"} gap={2} flexWrap={'wrap'} justifyContent={'center'}>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                >
                    <Card elevation={3} sx={{bgcolor:'#393E46', maxWidth:350}}>
                    <CardMedia
                    component={'img'}
                    height="140"
                    image="../public/HTML5.svg"
                    alt="html"
                    />
                    <CardContent>
                        <Typography gutterBottom color={'#64dd17'} variant={'h5'} textAlign={'center'} >HTML5</Typography>
                        <Typography variant='body2' textAlign={'justify'}>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='success'>Learn More</Button>
                    </CardActions>
                </Card>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                >
                    <Card elevation={3} sx={{bgcolor:'#393E46', maxWidth:350}}>
                    <CardMedia
                    component={'img'}
                    height="140"
                    image="../public/CSS3.svg"
                    alt="CSS3"
                    />
                    <CardContent>
                        <Typography gutterBottom color={'#64dd17'} variant={'h5'} textAlign={'center'} >CSS3</Typography>
                        <Typography variant='body2' textAlign={'justify'}>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='success'>Learn More</Button>
                    </CardActions>
                </Card>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                >
                    <Card elevation={3} sx={{bgcolor:'#393E46', maxWidth:350}}>
                    <CardMedia
                    component={'img'}
                    height="140"
                    image="../public/javascript.png"
                    alt="JavaScript"
                    />
                    <CardContent>
                        <Typography gutterBottom color={'#64dd17'} variant={'h5'} textAlign={'center'} >JavaScript</Typography>
                        <Typography variant='body2' textAlign={'justify'}>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='success'>Learn More</Button>
                    </CardActions>
                </Card>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                >
                    <Card elevation={3} sx={{bgcolor:'#393E46', maxWidth:350}}>
                    <CardMedia
                    component={'img'}
                    height="140"
                    image="../public/React.svg"
                    alt="React"
                    />
                    <CardContent>
                        <Typography gutterBottom color={'#64dd17'} variant={'h5'} textAlign={'center'} >React</Typography>
                        <Typography variant='body2' textAlign={'justify'}>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='success'>Learn More</Button>
                    </CardActions>
                </Card>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                >
                    <Card elevation={3} sx={{bgcolor:'#393E46', maxWidth:350}}>
                    <CardMedia
                    component={'img'}
                    height="140"
                    image="../public/tailwind.jpg"
                    alt="TailwindCSS"
                    />
                    <CardContent>
                        <Typography gutterBottom color={'#64dd17'} variant={'h5'} textAlign={'center'} >Tailwind CSS</Typography>
                        <Typography variant='body2' textAlign={'justify'}>Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='success'>Learn More</Button>
                    </CardActions>
                </Card>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                >
                    <Card elevation={3} sx={{bgcolor:'#393E46', maxWidth:350}}>
                    <CardMedia
                    component={'img'}
                    height="140"
                    image="../public/mui.png"
                    alt="MUI"
                    />
                    <CardContent>
                        <Typography gutterBottom color={'#64dd17'} variant={'h5'} textAlign={'center'} >Material UI</Typography>
                        <Typography variant='body2' textAlign={'justify'}>Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='success'>Learn More</Button>
                    </CardActions>
                </Card>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                >
                    <Card elevation={3} sx={{bgcolor:'#393E46', maxWidth:350}}>
                    <CardMedia
                    component={'img'}
                    height="140"
                    image="../public/nextjs.png"
                    alt="next.js"
                    />
                    <CardContent>
                        <Typography gutterBottom color={'#64dd17'} variant={'h5'} textAlign={'center'} >Next.js</Typography>
                        <Typography variant='body2' textAlign={'justify'}>Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='success'>Learn More</Button>
                    </CardActions>
                </Card>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ease: "easeIn", duration: 0.5, delay: 0.5}}
                >
                    <Card elevation={3} sx={{bgcolor:'#393E46', maxWidth:350}}>
                    <CardMedia
                    component={'img'}
                    height="140"
                    image="../public/framermotion.png"
                    alt="framermotion"
                    />
                    <CardContent>
                        <Typography gutterBottom color={'#64dd17'} variant={'h5'} textAlign={'center'} >Framer Motion</Typography>
                        <Typography variant='body2' textAlign={'justify'}>Framer Motion is a production-ready motion library for React from Framer. It's simple yet powerful, allowing you to express complex user interactions with robust, semantic markup.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='success'>Learn More</Button>
                    </CardActions>
                </Card>
                </motion.div>
                
                </Box>
                </Box>
        </Container>
    </div>
  )
}

export default Skills