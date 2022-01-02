import React, { createContext, useContext, useState} from 'react';
import { Snackbar } from '../components/styles';
import { UserProps } from '../models/app.model';


interface ContextProps{
    user: UserProps;
    updateUserDetails: (payload: UserProps) => void;
    showMsg: (msg: string) => void;
}
interface SnackbarProps{
    content: string;
    isShown: boolean;
}

const Context = createContext({} as ContextProps);

export const ContextProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [msg, setMsg] = useState<SnackbarProps>({content: '', isShown: false});

    function updateUserDetails(payload: UserProps){
        setUser(payload);
    }

    function showMsg(message: string){
        setMsg({content: message, isShown: true});

        setTimeout(()=> {
            setMsg({content: '', isShown: false});
        }, 3000);
    }

    const value = {
        user,
        updateUserDetails,
        showMsg
    }

    return (
        <Context.Provider value={value}>
            <React.Fragment>
                {children}

                <Snackbar p={2} radius="4px" shadow="sm" background="primary" show={msg.isShown}>
                    {msg.content}
                </Snackbar>
            </React.Fragment>
        </Context.Provider>
    );
};

export const useAppContext = () => {
    const value: ContextProps = useContext(Context);

    return {
        ...value,
    };
};