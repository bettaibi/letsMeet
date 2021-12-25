import React from 'react';
import GoogleLogin from 'react-google-login';
import { useAppContext } from '../../context';
import { Box, Button, Typography } from '../styles';


const CLIENTID = process.env.REACT_APP_CLIENT_ID;

const Auth = () => {
    const { user, updateUserDetails } = useAppContext();

    const successHandler = (response: any) => {
        console.log(response);
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
            <React.Fragment>
                <Box shadow="sm" radius="25px" display="flex" direction="row" position="relative"
                    alignItems='center' justifyContent="center" gap="0.5rem" background='#fff' style={{ padding: '0.35rem 1rem 0.35rem 0.5rem', cursor: 'pointer' }}>
                    <img src={user.imageUrl} alt="user avatar" width="30" height="30"
                        style={{ borderRadius: '50%' }} />

                    <Typography as="h6" className="m-0">
                        {user.name}
                    </Typography>

                    {/* Dropdown menu */}
                    <Box shadow="md" zIndex={999} position="absolute" bottom="-200px" left="0" p={1.5} pt={3} radius="25px" width="200px"
                        background='#fff' display="flex" direction="column" alignItems='center' justifyContent="center" gap="0.5rem">

                        <img src={user.imageUrl} alt="user avatar" width="60" height="60"
                            style={{ borderRadius: '50%' }} />

                        <Typography as="h5" className="m-0">
                            {user.name}
                        </Typography>

                        <Typography as="small" className="m-0">
                        {user.email}
                    </Typography>

                    <hr />
                    <Button color="#fff" background="#dd4b39">
                        Logout
                    </Button>
                    </Box>

                </Box>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <GoogleLogin
                clientId={CLIENTID || ''}
                onSuccess={successHandler}
                onFailure={failureHandler}
                render={renderProps => (
                    <Button color="primary" onClick={renderProps.onClick} background="#fff">
                        Try it free
                    </Button>
                )}
            />
        </React.Fragment>
    )
}

export default Auth;
