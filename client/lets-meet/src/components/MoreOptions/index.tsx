import React from 'react';
import useModal from '../../hooks/useModal';
import { Box, Modal, RoundedButton } from '../styles';
import { Dropdown } from '../styles/Dropdown.styled';

const MoreOptions = () => {
   const { ModalComponent, handleOpen, handleClose} = useModal();

   
    return (
        <React.Fragment>
            <RoundedButton background="#fff" color="primary" width="35px" height="35px" onClick={handleOpen}>
                    <img src="./images/icons/more.svg" alt="mic" />
            </RoundedButton>

            <ModalComponent>
                lorem ipsum dolor sit amet
            </ModalComponent>
        </React.Fragment>
    )
}

export default MoreOptions;
