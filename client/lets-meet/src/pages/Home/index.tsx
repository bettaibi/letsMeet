import React from "react";
import Header from "../../components/Header";
import { Box, Container, Typography, Button } from "../../components/styles";
import useModal from "../../hooks/useModal";


const Home = () => {
    const { ModalComponent, handleOpen, handleClose } = useModal();

    return (
     
        <main style={{position: 'relative'}}>
               <ModalComponent>
                <p>this is a modal text</p>
            </ModalComponent>
            <Box background="accent" style={{minHeight: '100vh'}}>
                <Container>
                    <Box className="flex-sm-column" py={3} display="flex" direction="row" alignItems="center" justifyContent="space-between">
                        <Box display="flex" gap="0.5rem" direction="row" alignItems="center" justifyContent="space-between">
                            <img src="./images/logo48.svg" alt="logo" />
                            <Typography className="m-0" as="h2" color="primary">
                                <strong>Lets</strong><strong style={{ color: "#fd998f" }}>Meet</strong>
                            </Typography>
                        </Box>

                        <Button color="primary" background="#fff" onClick={handleOpen}>
                            Try it free
                        </Button>
                    </Box>

                    <Box className="flex-sm-column-reverse" display="flex" direction="row" alignItems="center" justifyContent="space-between" gap="2rem">
                        <Box flex={1}>
                            <Typography as="h3" color="primary">
                                Get a link That you can Share
                            </Typography>
                            <Typography as="p" color="muted">
                                We re-engineered the service that we built for secure business meetings, Lets Meet makes it free and available for all. <br />
                                Click on the button below to get a link that you can send to people that you want to meet with.
                            </Typography>
                        </Box>
                        <Box width="375px" mt={3} className="d-sm-none">
                            <img src="./images/illustration-mockups.svg" width="100%" height="100%" />
                        </Box>
                    </Box>

                </Container>
                
            </Box>
            <Box position="absolute" bottom="-20px" width="100%">
                    <img src="./images/wave.svg" alt="waves" width="100%" />
                </Box>

                <Box position="absolute" right="20px" bottom="20px" >
                    <Typography as="small" color="muted">
                        &copy;2021, Created by Nidhal Bettaibi
                    </Typography>
                </Box>
        </main>
     
    )
};

export default Home;