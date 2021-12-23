import { useCallback } from "react";
import { Modal, Overlay } from "../../components/styles";
import useToggle from "../useToggle";

const useModal = () => {
    const {show, handleClose, handleOpen} = useToggle();

    const ModalComponent = useCallback(({children}) =>{
        return(
            <Overlay>
                 <Modal 
                
                >
                    {children}
                </Modal>
            </Overlay>
        )
    }, []);

    return {
        handleOpen,
        handleClose,
        ModalComponent
    }

};

export default useModal;