import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { UserModel } from '../../models/app.model';
import { VideoContainer, Video } from '../styles';
import Peer from "simple-peer";
import { useSocketContext } from '../../context/SocketContext';
import { useAppContext } from '../../context';
import stream from 'stream';

const VideoStreamers = ({st, roomId}:{st: MediaStream, roomId: string}) => {
    let myPeer: Peer.Instance;
    const [peers, setPeers] = useState<UserModel[]>([]);
    const { socket } = useSocketContext();
    const { user } = useAppContext();
    const {email, name, imageUrl} = user;

    useEffect(() => {
        socket.on('roomMembers', (members: UserModel[])=> {
            console.log(members);
            createNewPeers(members);
        });
        
        return () => {
            socket.off('roomMembers');
        }
    }, []);

    useEffect(() => {
        myPeer = new Peer({ initiator: true, stream: st, trickle: false });
        myPeer.on('signal', data => {
            socket.emit('dataSignal', roomId, {email, name, imageUrl, stream: data});
        });

        myPeer.on('stream', stream => {
            console.log("on Stream Event");
            console.log(stream);
            // setPeers(state => [{...state, }]);

            // if (videoContainerRef.current) {
                
            //     if ("srcObject" in partnerRefStream.current) {
            //         partnerRefStream.current.srcObject = stream;
            //     } else {
            //         partnerRefStream.current.src = window.URL.createObjectURL(stream);
            //     }
            //     partnerRefStream.current.onloadedmetadata = function (e) {
            //         partnerRefStream.current?.play();
            //     };
            // }
        });
        
        return () => {
            if (myPeer) {
                myPeer.destroy();
            }
        };
    }, []);

    function createNewPeers(members: UserModel[]) {
        for(let item of members) {
            myPeer.signal(item.stream)
        }
    }

    return (
        <div>
            {
                peers.map((item: UserModel) =>(
                    <NewVideo key={item.socketId} peer={item} />
                ))
            }
        </div>
    )
}

interface NewVideoProps{
    peer: UserModel;
}

const NewVideo: React.FC<NewVideoProps> = ({peer}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useLayoutEffect(()=> {
        if(videoRef.current){

        }
    }, []);

    return (
        <VideoContainer width="120px" height="120px" background="secondary" active={true} radius="4px">
            <Video muted autoPlay ref={videoRef} />
        </VideoContainer>
    )
}

export default VideoStreamers;
