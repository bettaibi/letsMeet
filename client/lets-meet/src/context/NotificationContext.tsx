import React, { createContext, useContext, useState} from 'react';
import { Snackbar } from '../components/styles';

interface ContextProps{
    showMsg: (msg: string) => void;
}
interface SnackbarProps{
    content: string;
    isShown: boolean;
}

const Context = createContext({} as ContextProps);

export const NotificationProvider = ({children}: {children: JSX.Element}) => {
    const [msg, setMsg] = useState<SnackbarProps>({content: '', isShown: false});

    function showMsg(message: string){
        setMsg({content: message, isShown: true});

        setTimeout(()=> {
            setMsg({content: '', isShown: false});
        }, 3000);
    }

    const value = {
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

export const useNotificationContext = () => {
    const value: ContextProps = useContext(Context);

    return {
        ...value,
    };
};