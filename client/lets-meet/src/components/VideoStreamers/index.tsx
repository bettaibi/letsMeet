import React, { useEffect } from 'react'
import { UserModel } from '../../models/app.model';
import { VideoContainer, Video } from '../styles';
import Peer from "simple-peer";
import { useSocketContext } from '../../context/SocketContext';
import { useAppContext } from '../../context';

const VideoStreamers = ({st, roomId}:{st: MediaStream, roomId: string}) => {
    let myPeer: Peer.Instance;
    const { socket } = useSocketContext();
    const { user } = useAppContext();
    const {email, name, imageUrl} = user;

    useEffect(() => {
        socket.on('roomMembers', (members: UserModel[])=> {
            console.log(members);
        });
        
        return () => {
            socket.off('roomMembers');
        }
    }, []);

    useEffect(() => {
        myPeer = new Peer({ initiator: true, stream: st, trickle: false });
        myPeer.on('signal', data => {
            socket.emit('dataSignal', roomId, {email, name, imageUrl, stream: st});
        });

        

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
        </React.Fragment>
    )
}

export default VideoStreamers;
