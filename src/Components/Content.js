import React from 'react';
import Section from './Section2';
import PushDownContent from './PushDownContent';
import '../css/content.css';
const Content=() => {

    return (
        <main className="content">
            <PushDownContent />
            <Section name="suggested" />
            <Section name="popular" />
        </main>
    );
}

export default Content;