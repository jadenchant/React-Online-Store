import React, { useState } from 'react';
import Section from './Section2';
import PushDownContent from './PushDownContent';
import '../css/content.css';
const Content=() => {
    // const [isDark, setIsDark] = useState('light');

    // const toggleMode = () => {
    //     isDark ? setIsDark('dark') : setIsDark('light');
    // }

    return (
        <main className="content">
            <PushDownContent />
            <Section name="suggested" />
            <Section name="popular" />
            {/* <button onClick={toggleMode()}>{isDark === 'dark' ? 'Light' : 'Dark'}</button> */}
        </main>
    );
}

export default Content;