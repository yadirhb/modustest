import React from 'react';

export default function MenuBar(props) {
    let items = props.children || [];
    return (
        <div className="app-menubar">
            {
                items.map((item,i) => <button key={i} onClick={item.click} className={`app-menubar-button ${item.styleClass}`}>{item.text}</button>)
            }
        </div>
    );
}