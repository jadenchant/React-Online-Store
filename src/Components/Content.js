import React from 'react';
import Section from './Section';
import '../css/content.css';
const Content=() => {
    const data=(
        <div className="box">
            <h2>Div Content</h2>
        </div>
    );
    return (
        <main className="content">
            {data}
            {data}
            {data}
            <Section name="suggested" />
            
        </main>
    );
}

export default Content;