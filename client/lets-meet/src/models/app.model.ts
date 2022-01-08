import Peer from "simple-peer";

export interface UserProps{
    email: string;
    name: string;
    imageUrl: string;
    isLoggedIn: boolean;
}

export interface UserModel{
    name: string;
    email: string;
    imageUrl: string;
    socketId: string;
    stream: Peer.SignalData;
}