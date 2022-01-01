import { useCallback } from "react";
import { Sidenav, Overlay } from "../../components/styles";
import useToggle from "../useToggle";

const useSidenav = () => {
    const {show, handleClose, handleOpen} = useToggle();

    const SidenavComponent = useCallback(({children}) =>{
        return(
            <Overlay show={show} onClick={handleClose}>
                 <Sidenav onClick={e => {e.stopPropagation()}}>
                    {children}
                </Sidenav>
            </Overlay>
        )
    }, [show]);

    return {
        handleOpen,
        handleClose,
        SidenavComponent
    }

};

export default useSidenav;