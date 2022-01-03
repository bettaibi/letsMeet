import React from "react";
import Auth from "../../components/Auth";
import { Box, Container, Typography, BasicInput } from "../../components/styles";
import { SubButtonLeft, SubButtonRight } from "../../components/styles/Button.styled";
import { v4, validate } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../../context";
import { useNotificationContext } from "../../context/NotificationContext";
import { useSocketContext } from "../../context/SocketContext";

const Home = React.memo(() => {

    return (

        <main>

            <Box background="accent" style={{ minHeight: '100vh', height: '100%' }}>
                <Container>
                    <Box zIndex={10} className="flex-sm-column py-1" py={3} display="flex" direction="row" alignItems="center" justifyContent="space-between">
                        <Box display="flex" gap="0.5rem" direction="row" alignItems="center" justifyContent="space-between">
                            <img src="./logo40.png" alt="logo" />
                            <Typography className="m-0" as="h2" color="primary">
                                <strong>Lets</strong><strong style={{ color: "#fd998f" }}>Meet</strong>
                            </Typography>
                        </Box>

                        <Auth />

                    </Box>

                    <Box zIndex={10} className="flex-sm-column text-center" display="flex" direction="row" alignItems="center" justifyContent="space-between" gap="2rem">
                        <Box flex={1}>
                            <Typography as="h3" color="primary">
                                Get a code that you can share
                            </Typography>
                            <Typography as="p" color="muted">
                                We re-engineered the service that we built for secure business meetings, Lets Meet makes it free and available for all. <br />
                                Click on the button below to get a link code that you can send to people that you want to meet with.
                            </Typography>

                            <InputController />
                        </Box>
                        <Box width="375px" mt={3} className="d-sm-none">
                            <img src="./images/illustration-mockups.svg" width="100%" height="100%" />
                        </Box>
                    </Box>

                </Container>

                <Box position="absolute" bottom="-15px" width="100%" className="d-sm-none">
                    <img src="./images/wave.svg" alt="waves" width="100%" />
                </Box>

                <Box position="absolute" right="20px" bottom="8px" >
                    <Typography as="small" color="muted">
                        &copy;2021, Created by Nidhal Bettaibi
                    </Typography>
                </Box>

            </Box>

        </main>

    )
});

const InputController = () => {
    const [value, setValue] = React.useState<string>('');
    const navigate = useNavigate();
    const { user } = useAppContext();
    const { showMsg } = useNotificationContext();
    const { socket } = useSocketContext();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    function getCode(){
        setValue(v4());
    }

    function joinRoom(){
       if(user.hasOwnProperty('name')){
           if(validate(value)){
             socket.emit('joinRoom', value);

             setTimeout(() =>{
                navigate(`/room/${value}`);
             },1000);
           }
           else{
               // Code is not Valid
               showMsg("couldn't find the meeting that you are trying to join");
           }
       }
       else{
           // User is not authenticated
           showMsg('User is not authenticated, you might not be signed in with the correct account.');
       }

    }

    return (
        <Box display="flex" direction="column" mt={2} gap="1rem" justifyContent="center" alignItems="center">
            <BasicInput value={value} required type="text" onChange={changeHandler}
            placeholder="Enter a code" style={{ width: '100%' }} />
            <Box display="flex" direction="row" justifyContent="center" alignItems="center" mt={0.5}>
                <SubButtonLeft color="muted" background="#fff" onClick={getCode}>
                    Get a link
                </SubButtonLeft>
                <SubButtonRight color="#fff" background="secondary" disabled={!value} onClick={joinRoom}>
                    Join
                </SubButtonRight>
            </Box>
        </Box>
    )
};

export default Home;