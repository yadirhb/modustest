import React from 'react';
import { connect } from 'react-redux';
import cartActions from '../redux/actions/cart';
import itemActions from '../redux/actions/items';

class ProductTable extends React.PureComponent {
    componentDidMount() {
        this.props.getItems();
    }

    renderTableHeader() {
        return (
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>SECTOR</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
        );
    }

    renderTableData() {
        const { addToCart, removeFromCart, items } = this.props;

        return (
            <tbody>
                {
                    items.map((item, index) => {
                        const { id, name, price, sector } = item //destructuring
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{sector}</td>
                                <td><button onClick={() => addToCart(item)}>+</button> <button onClick={() => removeFromCart(item, false)}>-</button></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        );
    }

    renderMessage(message) {
        return (
            <tbody>
                <tr>
                    <td colSpan="4">
                        <p>{message}</p>
                    </td>
                </tr>
            </tbody>
        );
    }

    render() {
        const { items, error, loadingItems } = this.props;
        let message = error;
        
        if (items.length == 0 && !error) message = "There is no items";
        if (loadingItems) message = "Searching...";
        return (
            <div className="wrapper" style={{ flex: 2 }}>
                <table className="table-el">
                    {this.renderTableHeader()}
                    {!message ? this.renderTableData() : this.renderMessage(message)}
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({ cart, items }) => ({
    cart: Object.values(cart.data),
    cartError: cart.error,
    items: Object.values(items.data),
    error: items.error,
    loadingItems: items.loading
});

const dispatchProps = dispatch => ({
    getItems: () => dispatch({ type: itemActions.GET_ITEMS }),
    addToCart: (item) => dispatch({ type: cartActions.ADD_TO_CART, product: item }),
    removeFromCart: (item, all) => dispatch({ type: cartActions.REMOVE_FROM_CART, product: item, all }),
});

export default connect(mapStateToProps, dispatchProps)(ProductTable);