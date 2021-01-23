import React from 'react';
import Section from './Section2';
import PushDownContent from './PushDownContent';
import '../css/content.css';
const Content=() => {

    // let x=['content'];
    // if(props.scrolled){
    //     x.push('content-scrolled');
    // }

    const data=(
        <div className="box">
            <h2>Div Content</h2>
        </div>
    );

    return (
        <main className="content">
            <PushDownContent />
            {data}
            {data}
            {data}
            {data}
            {data}
            {data}
            <Section name="suggested" />
            <Section name="popular" />
        </main>
    );
}

export default Content;