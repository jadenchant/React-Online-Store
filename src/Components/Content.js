import React from 'react';
import '../content.css';
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
        </main>
    );
}

export default Content;