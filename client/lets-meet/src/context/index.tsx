import React, { createContext, useContext, useState} from 'react';
import { UserProps } from '../models/app.model';


interface ContextProps{
    user: UserProps;
    updateUserDetails: (payload: UserProps) => void;
}

const Context = createContext({} as ContextProps);

export const ContextProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<UserProps>({} as UserProps);

    function updateUserDetails(payload: UserProps){
        setUser(payload);
    }

    const value = {
        user,
        updateUserDetails
    }

    return (
        <Context.Provider value={value}>
            <React.Fragment>
                {children}
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