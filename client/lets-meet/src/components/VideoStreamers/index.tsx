import React, { useEffect } from 'react'
import { UserModel } from '../../models/app.model';
import { VideoContainer, Video } from '../styles';
import Peer from "simple-peer";
import { useSocketContext } from '../../context/SocketContext';

const VideoStreamers = ({st}:{st: MediaStream}) => {
    let myPeer: Peer.Instance;
    const { socket } = useSocketContext();

    useEffect(() =>{
        console.log(st)
        
        return () => {
            if (myPeer) {
                myPeer.destroy();
            }
        }
    }, []);

    function onInit(){
        
    }

    return (
        <React.Fragment>
            <VideoContainer width="120px" height="120px" background="secondary" active={true} radius="4px">
                <Video muted autoPlay />
            </VideoContainer>
            <VideoContainer width="120px" height="120px" background="accent" radius="4px">Box 1</VideoContainer>
        </React.Fragment>
    )
}

export default VideoStreamers;
