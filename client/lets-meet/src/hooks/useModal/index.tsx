import { useCallback } from "react";
import { Modal, Overlay } from "../../components/styles";
import useToggle from "../useToggle";

const useModal = () => {
    const {show, handleClose, handleOpen} = useToggle();

    const ModalComponent = useCallback(({children}) =>{
        return(
            <Overlay show={show} onClick={handleClose}>
                 <Modal show={show} onClick={e => {e.stopPropagation()}}>
                    {children}
                </Modal>
            </Overlay>
        )
    }, [show]);

    return {
        handleOpen,
        handleClose,
        ModalComponent
    }

};

export default useModal;