import { useState } from 'react';

const useToggle = () => {
    const [show, setShow] = useState<boolean>(false);

    function handleClose(){
        setShow(false);
    }

    function handleOpen(){
        setShow(true);
    }

    function handleToggle(){
        setShow(!show);
    }

    return {
        show,
        handleClose,
        handleOpen,
        handleToggle
    };

};

export default useToggle;