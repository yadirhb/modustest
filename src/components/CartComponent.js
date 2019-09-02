import React from 'react';
import { connect } from 'react-redux';
import cartActions from '../redux/actions/cart';

class CartComponent extends React.PureComponent {
    renderTableData() {
        const { cart, addToCart, removeFromCart } = this.props;
        return (
            <tbody>
                {
                    cart.map((item, index) => {
                        const { name, price, sector, amount } = item //destructuring
                        return (
                            <tr key={index}>
                                <td><button onClick={() => addToCart(item)}>+</button> <button onClick={() => removeFromCart(item, false)}>-</button></td>
                                <td>{amount}</td>
                                <td>{name}</td>
                                <td>{sector}</td>
                                <td>{price * amount}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        );
    }
    renderTableHeader() {
        return (
            <thead>
                <tr>
                    <th>ACTIONS</th>
                    <th>AMOUNT</th>
                    <th>NAME</th>
                    <th>SECTOR</th>
                    <th>PRICE</th>
                </tr>
            </thead>
        );
    }

    render() {
        const { cart, cartError } = this.props;

        if(cartError) {
            alert(cartError);
        }

        if(cart.length == 0) {
            return (
                <div className="wrapper list">
                    <table className="table-el">
                        {this.renderTableHeader()}
                        <tbody>
                            <tr>
                                <td colSpan="5"><p>Empty cart</p></td>
                            </tr>
                        </tbody>                        
                    </table>
                </div>
            )
        }
        let sum = 0.0;
        cart.forEach(item => sum += item.amount * item.price);
        return (
            <div className="wrapper list">
                <table className="table-el">
                    {this.renderTableHeader()}
                    {this.renderTableData()}
                    <tfoot>
                        <tr>
                            <td style={{textAlign:'right'}} colSpan="4">Total:</td>                            
                            <td>${sum}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export const mapStateToProps = ({ cart }) => ({
    cart: Object.values(cart.data),
    cartError : cart.error
});

export const dispatchProps = dispatch => ({
    addToCart: (item) => dispatch({ type: cartActions.ADD_TO_CART, product: item }),
    removeFromCart: (item, all) => dispatch({ type: cartActions.REMOVE_FROM_CART, product: item, all }),
});

export default connect(mapStateToProps, dispatchProps)(CartComponent);