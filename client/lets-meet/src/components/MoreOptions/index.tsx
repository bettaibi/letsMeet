import React from 'react';
import useSidenav from '../../hooks/useSidenav';
import { Box, RoundedButton } from '../styles';

const MoreOptions = () => {
   const { SidenavComponent, handleOpen, handleClose} = useSidenav();

   
    return (
        <React.Fragment>
            <RoundedButton background="#fff" color="primary" width="35px" height="35px" onClick={handleOpen}>
                    <img src="./images/icons/more.svg" alt="mic" />
            </RoundedButton>

            <SidenavComponent>
                lorem ipsum dolor sit amet
            </SidenavComponent>
        </React.Fragment>
    )
}

export default MoreOptions;
