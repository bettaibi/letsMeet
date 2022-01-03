import React, { useCallback, useContext, useEffect } from 'react';

import io, { Socket } from 'socket.io-client';
import { UserModel } from '../models/app.model';

interface ConnectedRooms {
    [roomId: string]: UserModel[];
}

interface ContextProps {
    socket: Socket<any, any>;
    users:  UserModel[];
}

const WS = "http://localhost:5000/meet";
const socket = io(WS);

const SocketContext = React.createContext({} as ContextProps);

export const SocketProvider = ({ children }: { children: JSX.Element }) => {
    const [users, setUsers] = React.useState<UserModel[]>([]);

    const value = {
        socket,
        users,
    };

    return (
        <SocketContext.Provider value={value}>
            <React.Fragment>
                {children}
            </React.Fragment>
        </SocketContext.Provider>
    )
};

export const useSocketContext = () => {
    const values = useContext(SocketContext);
    return values;
};