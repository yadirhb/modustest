import React from 'react';
import '../styles/App.css';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function DefaultLayer(props) {
    return (
        <div className="App">
        <header className="App-header">
            <div className="app-menubar">
                <span>A</span>
                <span>B</span>
            </div>
            <SearchBar/>
        </header>
        <div className="app-body">
            <ProductTable/>
        </div>
        </div>
    );
}
                    
export default DefaultLayer;