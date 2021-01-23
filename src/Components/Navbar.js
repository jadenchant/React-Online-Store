import React, {useEffect} from 'react';
import '../css/navbar.css';

const Navbar=() => {

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

    let x=['navbar'];
    if(scrolled){
        x.push('navbar-scrolled');
    }
    return (
        <header className={x.join(" ")}>
            <div className="logo">
                {/* <img src={Logo} alt="Logo" title="Logo" /> */}
            </div>

            <nav className="navigation">
                <ul>
                    <li><a href="#post1">Home</a></li>
                    <li><a href="#post2">Home</a></li>
                    <li><a href="#post3">Home</a></li>
                    <li><a href="#post4">Home</a></li>
                </ul>
            </nav>

        </header>
    )
};

export default Navbar;