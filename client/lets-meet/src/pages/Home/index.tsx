import React from "react";
import Header from "../../components/Header";
import { Box, Container, Typography, Button } from "../../components/styles";


const Home = () => {

    return(
        <main>
           <Box background="accent" height="100vh">
                <Container>
                    <Box py={3} display="flex" direction="row" alignItems="center" justifyContent="space-between">
                        <Typography className="m-0" as="h2" color="primary">LetsMeet</Typography>

                        <Button color="primary" background="#fff">
                            Try it free
                        </Button>
                    </Box>

                    <Box display="flex" direction="row" alignItems="center" justifyContent="space-between" gap="2rem">
                        <Box flex={1}>
                          <Typography as="h3" color="primary">
                              Get a link That you can Share
                          </Typography>
                          <Typography as="p" color="muted">
                             We re-engineered the service that we built for secure business meetings, Lets Meet makes it free and available for all. <br />
                             Click on the button below to get a link that you can send to people that you want to meet with.
                          </Typography>
                        </Box>
                        <Box width="375px" mt={3}>
                            <img src="./images/illustration-mockups.svg" width="100%" height="100%" />
                        </Box>
                    </Box>
                </Container>
           </Box>
           <img src="./images/wave.svg" alt="waves" width="100%" style={{marginTop: '-500px'}} />
           
           <Container>
            <Box pb={4} display="flex" direction="row" alignItems="center" justifyContent="space-between" gap="2rem">
                <Box width="375px">
                    <img src="./images/illustration-your-users.svg" width="100%" height="100%" />
                </Box>

                <Box flex={1}>
                    <Typography as="h3" color="primary">
                        Your meeting is safe
                    </Typography>
                    <Typography as="p" color="primary">
                        Authenticate with your Google account in order to be able to join a meeting.<br />
                        No one can join the meeting unless invited or admitted by the host.
                    </Typography>
                    <Typography as="small" color="muted">
                    &copy;2021, Created by Nidhal Bettaibi
                    </Typography>
                </Box>
            </Box>
           </Container>
        </main>
    )
};

export default Home;