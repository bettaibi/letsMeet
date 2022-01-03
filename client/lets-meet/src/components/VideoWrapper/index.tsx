import React, {useRef, useLayoutEffect} from 'react';
import { ActionButton, Box } from '../styles';
import VideoStreamers from '../VideoStreamers';

interface VideoWrapperProps{
   
}

const VideoWrapper: React.FC<VideoWrapperProps> = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const rightBtnRef = useRef<HTMLButtonElement>(null);
    const leftBtnRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(()=> {
        if(boxRef.current && rightBtnRef.current){
           if(boxRef.current.offsetWidth - boxRef.current.scrollWidth < 0 ){
             rightBtnRef.current.style.transform = "scale(1)";
           }
        }
    }, []);

    function scrolToRight(){
        if(boxRef.current && rightBtnRef.current && leftBtnRef.current){
            if((boxRef.current.offsetWidth + boxRef.current.scrollLeft + 240) >= boxRef.current.scrollWidth){
                rightBtnRef.current.style.transform = "scale(0)";
                leftBtnRef.current.style.transform = "scale(1)";
            }
            else{ leftBtnRef.current.style.transform = "scale(1)";}
            boxRef.current.scrollLeft += 240;
        }
    }

    function scrolToLeft(){
        if(boxRef.current && leftBtnRef.current && rightBtnRef.current){
            if((boxRef.current.scrollLeft - 240) <= 0){
                leftBtnRef.current.style.transform = "scale(0)";
                rightBtnRef.current.style.transform = "scale(1)";
            }
            else{ rightBtnRef.current.style.transform = "scale(1)";}
            boxRef.current.scrollLeft -= 240;
        }
    }


    return (
        <Box ref={boxRef} py={2} display="flex" direction="row" justifyContent="flex-start" alignItems="center" gap="0.5rem" 
          style={{overflowX: 'auto', overflowY: 'hidden'}} wrap="no-wrap" width="100%" className="scrolling-wrapper">
        
          <VideoStreamers />

          <ActionButton ref={rightBtnRef} background="#fff" color="primary" onClick={scrolToRight}
          style={{position: "absolute", top:'50px', right:'5px'}}>
                <img src="/images/icons/navigate_next.svg" alt="mic" />
          </ActionButton>

          <ActionButton ref={leftBtnRef} background="#fff" color="primary" onClick={scrolToLeft}
          style={{position: "absolute", top:'50px', left:'5px'}}>
                <img src="/images/icons/chevron_left.svg" alt="mic" />
          </ActionButton>
        </Box>
    )
}

export default VideoWrapper;
