import React, { useState, useEffect } from 'react'
import { UserModel } from '../../models/app.model';
import { VideoContainer, Video } from '../styles';

const VideoStreamers = () => {
    const [streamers, setStreams] = useState<UserModel[]>([]);


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
