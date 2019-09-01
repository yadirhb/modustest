import React from 'react';
import '../styles/App.css';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';
import CartComponent from './CartComponent';

class DefaultLayer extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = { showCart: props.showCart };
    }

    toggleCartOnClick = () => {
        this.setState({ showCart: !this.state.showCart });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MenuBar>
                        {[
                            {
                                text: "Cart",
                                click: this.toggleCartOnClick
                            }
                        ]}
                    </MenuBar>
                    <SearchBar />
                </header>
                <div className="app-body">
                    <ProductTable />
                    {this.state.showCart && <CartComponent />}
                </div>
            </div>
        );
    }
}

export default DefaultLayer;