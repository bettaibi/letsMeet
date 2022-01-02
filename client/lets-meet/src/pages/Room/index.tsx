import React, { useLayoutEffect, useRef, useState } from "react";
import MoreOptions from "../../components/MoreOptions";
import { Box, Container, RoundedButton, VideoContainer, Video } from "../../components/styles";
import VideoWrapper from "../../components/VideoWrapper";
import { useParams } from "react-router-dom";
import { validate } from 'uuid';

const Room = React.memo(() => {
    const [stream, setStream] =  useState<any>(null);
    const myVideoRefStream = useRef<HTMLVideoElement>(null);
    let params = useParams();

    useLayoutEffect(() => {
        //  loadMedia();

        return () => {
            try {
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(function (track: any) {
                        track.stop();
                    });

                    // if (myPeer) {
                    //     myPeer.destroy();
                    // }
                }
            }
            catch (err) {
                console.error(err);
            }
        }
    }, []);

    function loadMedia() {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(gotMedia).catch((err) => { console.error(err) });
    }

    async function gotMedia(st: MediaStream) {
        try{
            if (myVideoRefStream.current) {
                if ("srcObject" in myVideoRefStream.current) {
                    myVideoRefStream.current.srcObject = st;
                } else {
                    // Avoid using this in new browsers, as it is going away.
                    // @ts-ignore
                    myVideoRefStream.current.src = window.URL.createObjectURL(st);
                }
                myVideoRefStream.current.onloadedmetadata = function (e) {
                    myVideoRefStream.current?.play();
                };
            }
            // stream = st;
            setStream(st)
        }
        catch (err) {
            throw err;
        }
    }

    if(params && !validate(params.roomId || '')){
        return (
            <Box p={3}>
                <p>
                    This room meeting is not exist!
                </p>
            </Box>
        );
    }

    return(
        <Box background="primary" height="100vh">
                <Box display="flex" direction="column" justifyContent="space-between" height="100%">
                    <Container style={{flex: '1' , position: "relative", height: 'calc(100vh - 55px)'}}>
                     
                     <VideoWrapper streams = {[stream, stream]} />
                 
                    <VideoContainer width="100%" height="calc(100% - 160px)" background="secondary" active={true} radius="4px">
                      <Video ref={myVideoRefStream} muted autoPlay />
                    </VideoContainer>
                    
                    </Container>

                    <Box height="55px" display="flex" direction="row" justifyContent="center" alignItems="center" gap="0.3rem">
                         <RoundedButton background="#fff" color="primary" width="35px" height="35px">
                             <img src="/images/icons/mic.svg" alt="mic" />
                         </RoundedButton>
                         <RoundedButton background="#fff" color="primary" width="35px" height="35px">
                             <img src="/images/icons/videocam.svg" alt="mic" />
                         </RoundedButton>
                         <MoreOptions /> 
                         <RoundedButton background="#dd4b39" color="#fff" width="35px" height="35px">
                             <img src="/images/icons/call_end.svg" alt="mic" />
                         </RoundedButton>
                    </Box>
                </Box>
        </Box>
    )
});

export default Room;