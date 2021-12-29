import MoreOptions from "../../components/MoreOptions";
import { Box, Container, RoundedButton } from "../../components/styles";


const Room = () => {

    return(
        <Box background="primary" height="100vh">
            <Container style={{height:'100%'}}>
                <Box display="flex" direction="column" justifyContent="space-between" height="100%">
                    <Box>Box 1</Box>

                    <Box display="flex" direction="row" justifyContent="center" alignItems="center" py={2} gap="0.3rem">
                         <RoundedButton background="#fff" color="primary" width="35px" height="35px">
                             <img src="./images/icons/mic.svg" alt="mic" />
                         </RoundedButton>
                         <RoundedButton background="#fff" color="primary" width="35px" height="35px">
                             <img src="./images/icons/videocam.svg" alt="mic" />
                         </RoundedButton>
                         <MoreOptions /> 
                         <RoundedButton background="#dd4b39" color="#fff" width="35px" height="35px">
                             <img src="./images/icons/call_end.svg" alt="mic" />
                         </RoundedButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default Room;