import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useAppContext } from '../../context';
import { UserProps } from '../../models/app.model';
import { Box, Button, Typography } from '../styles';


const CLIENTID = process.env.REACT_APP_CLIENT_ID;

const Auth = () => {
    const { user, updateUserDetails } = useAppContext();

    const successHandler = (response: any) => {
        if (response) {
            updateUserDetails({
                email: response.profileObj.email,
                name: response.profileObj.name,
                imageUrl: response.profileObj.imageUrl,
                isLoggedIn: true
            });
        }
    }

    const failureHandler = (response: any) => {
        console.log(response);
    }

    if (user && user.isLoggedIn) {
        return (
            <UserDetails user={user} updateUserDetails = {updateUserDetails} />
        )
    }

    return (
        <React.Fragment>
            <GoogleLogin
                clientId={CLIENTID || ''}
                onSuccess={successHandler}
                onFailure={failureHandler}
                isSignedIn={true}
                render={renderProps => (
                    <Button color="primary" onClick={renderProps.onClick} background="#fff">
                        Sign in
                    </Button>
                )}
            />
        </React.Fragment>
    )
}


export const UserDetails = ({ user, updateUserDetails }: { user: UserProps, updateUserDetails: (u: UserProps)=> void }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(()=> {
        window.addEventListener('click', handleWindowClick);

        return () => {
            window.removeEventListener('click', handleWindowClick);
        }
    }, []);

    function handleWindowClick(event: any){
        console.log(event.target)
        if(!event.target.matches('.dropbtn') && !event.target.matches('.dropContent')){
            setIsOpen(false);
        }
    }

    function handleMenu() {
        setIsOpen(true);
    }

    function logout() {
        localStorage.clear();
        sessionStorage.clear();
        updateUserDetails({} as UserProps);
    }

    return (
        <React.Fragment>
            <Box shadow="sm" radius="25px" display="flex" direction="row" position="relative"
                alignItems='center' justifyContent="center" gap="0.5rem" background='#fff' style={{ padding: '0.35rem 1rem 0.35rem 0.5rem', cursor: 'pointer' }}
                onClick={handleMenu} className="dropbtn">
                <img src={user.imageUrl} alt="user avatar" width="30" height="30"
                    style={{ borderRadius: '50%' }} />

                <Typography as="h6" className="m-0">
                    {user.name}
                </Typography>

                {/* Dropdown menu */}
                <Box shadow="md" zIndex={999} position="absolute" bottom="-222px" left="0" p={1.5} pt={3} radius="25px" width="200px"
                    background='#fff' display={isOpen ? 'flex' : 'none'} direction="column" alignItems='center' justifyContent="center" gap="0.5rem"
                    onClick={e => e.stopPropagation()} className="dropContent">

                    <img src={user.imageUrl} alt="user avatar" width="60" height="60"
                        style={{ borderRadius: '50%' }} />

                    <Typography as="h5" className="m-0">
                        {user.name}
                    </Typography>

                    <Typography as="small" className="m-0">
                        {user.email}
                    </Typography>

                    <hr />


                    <GoogleLogout
                        clientId={CLIENTID || ''}
                        onLogoutSuccess={logout}
                        render={renderProps => (
                            <Button color="#fff" background="#dd4b39" onClick={renderProps.onClick}
                                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <img src="./images/logout.svg" alt="logout" />
                                <span>Sign out</span>
                            </Button>
                        )}
                    >
                    </GoogleLogout>

                </Box>

            </Box>
        </React.Fragment>
    )
}

export default Auth;
