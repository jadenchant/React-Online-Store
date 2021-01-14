import React from 'react';
import Section from './Section';
import Product from './Product';
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
            {/* <Section>
                <Product />
            </Section> */}
        </main>
    );
}

export default Content;