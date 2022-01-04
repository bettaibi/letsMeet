import React, { useEffect, useState } from "react";
import { Box, Overlay, Typography} from "../../components/styles";
import { useParams } from "react-router-dom";
import { validate } from 'uuid';
import { useSocketContext } from "../../context/SocketContext";
import VideoChat from "./VideoChat";

const Room = React.memo(() => {
    let { roomId } = useParams();
    const {socket} = useSocketContext();
    const [show, setShow] = useState<boolean>(true);
    var timer: NodeJS.Timeout;

    useEffect(()=> {
        socket.once('onRoomJoined', ({isJoined}: {isJoined: boolean})=> {
            if(isJoined) {
                timer = setTimeout(()=>{
                    handleClose();
                },2000);
            }
        });
        socket.emit('joinRoom', roomId);

        return () => {
            if(timer)
            clearTimeout(timer);
            socket.off('onRoomJoined');
            socket.emit('leaveRoom', roomId);
        };
    }, []);

    function handleClose(){
        setShow(false);
    }

    // Invalid Room Id
    if (!validate(roomId || '')) {
        return (
            <Box p={3}>
                <p>
                    This room meeting is not exist!
                </p>
            </Box>
        );
    }

    if(show){
        return (
            <Overlay show={show} background = 'rgba(0,0,0,0.93)'>
               <Typography as="h3" color="muted">
                    Joining...
               </Typography>
            </Overlay>
        )
    }

    return (
       <React.Fragment>
           <VideoChat roomId={roomId || ''} />
       </React.Fragment> 
    )
});


export default Room;