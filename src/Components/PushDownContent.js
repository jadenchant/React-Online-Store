import React, {useEffect} from 'react';
import '../css/index.css';

const PushDownContent=() => {

    const [scrolled,setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 5){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    }, [scrolled]);

    return (
        <div className={scrolled ? 'slideAction invisible-slide' : 'invisible-slide'}></div>
    )
}

export default PushDownContent;