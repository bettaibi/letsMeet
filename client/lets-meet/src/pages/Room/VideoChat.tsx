import React, { useLayoutEffect, useRef, useState,useEffect } from "react";
import MoreOptions from "../../components/MoreOptions";
import { Box, Container, RoundedButton, VideoContainer, Video } from "../../components/styles";
import VideoWrapper from "../../components/VideoWrapper";

import { useSocketContext } from "../../context/SocketContext";

let stream: any;  
const VideoChat = React.memo(({ roomId }: { roomId: string }) => {
    const [isVideoStarted, setIsVideoStarted] = useState<boolean>(false);
    const myVideoRefStream = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        loadMedia();

        return () => {
            try {
                console.log("component has been destroyed");
                console.log(stream)
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(function (track: any) {
                        track.stop();
                    });
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

    function gotMedia(st: MediaStream) {
        try {
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

                stream = st;
                setIsVideoStarted(true);
              
            }
        }
        catch (err) {
            throw err;
        }
    }


    return (
        <Box background="primary" height="100vh">
            <Box display="flex" direction="column" justifyContent="space-between" height="100%">
                <Container style={{ flex: '1', position: "relative", height: 'calc(100vh - 55px)' }}>

                    {isVideoStarted && <VideoWrapper st={stream} roomId = {roomId} />}
                    {!isVideoStarted && <VideoContainer width="120px" height="120px">
                        <img src="/images/spinner.svg" />    
                    </VideoContainer>}

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

export default VideoChat;
