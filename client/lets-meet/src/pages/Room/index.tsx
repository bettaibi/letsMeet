import MoreOptions from "../../components/MoreOptions";
import { Box, Container, Grid, RoundedButton, GridItem } from "../../components/styles";


const Room = () => {

    return(
        <Box background="primary" height="100vh">
                <Box display="flex" direction="column" justifyContent="space-between" height="100%" >
                    <Grid gap="0.5rem" radius="4px">
                        <GridItem background="secondary" active={true}>Box 1</GridItem>
                        <GridItem background="accent">Box 1</GridItem>
                        <GridItem background="#fff">Box 2</GridItem>
                        <GridItem background="#fff">Box 3</GridItem>
                        <GridItem background="#fff">Box 4</GridItem>
                        <GridItem background="#fff">Box 5</GridItem>
                        <GridItem background="#fff">Box 6</GridItem>
                        <GridItem background="#fff">Box 6</GridItem>
                        <GridItem background="#fff">Box 6</GridItem>
                        <GridItem background="#fff">Box 6</GridItem>
                        <GridItem background="#fff">Box 6</GridItem>
                        <GridItem background="#fff">Box 6</GridItem>
                    </Grid>

                    <Box height="55px" display="flex" direction="row" justifyContent="center" alignItems="center" gap="0.3rem">
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
        </Box>
    )
};

export default Room;