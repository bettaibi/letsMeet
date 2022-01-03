import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import MoreOptions from "../../components/MoreOptions";
import { Box, Container, RoundedButton, VideoContainer, Video } from "../../components/styles";
import VideoWrapper from "../../components/VideoWrapper";
import Peer from "simple-peer";

const VideoChat = React.memo(() => {
    let stream: any;
    let myPeer: Peer.Instance;
    const myVideoRefStream = useRef<HTMLVideoElement>(null);

    useLayoutEffect(() => {
        //  loadMedia();

        return () => {
            try {
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(function (track: any) {
                        track.stop();
                    });

                    if (myPeer) {
                        myPeer.destroy();
                    }
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
            }
            stream = st;
        }
        catch (err) {
            throw err;
        }
    }

    return (
        <Box background="primary" height="100vh">
            <Box display="flex" direction="column" justifyContent="space-between" height="100%">
                <Container style={{ flex: '1', position: "relative", height: 'calc(100vh - 55px)' }}>

                    <VideoWrapper/>

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
