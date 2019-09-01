import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, dispatchProps } from './CartComponent';

class ProductTable extends React.PureComponent {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            items: [
                { id: 0, name: 'Wasif', price: 21, sector: 'wasif@email.com' },
                { id: 2, name: 'Ali', price: 19, sector: 'ali@email.com' },
                { id: 3, name: 'Saad', price: 16, sector: 'saad@email.com' },
                { id: 4, name: 'Asad', price: 25, sector: 'asad@email.com' }
            ]
        }
    }

    handleOnRemoveProduct() {

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
        const {addToCart, removeFromCart} = this.props;
        return (
            <tbody>
                {
                    this.state.items.map((item, index) => {
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

    render() {
        return (
            <div className="wrapper" style={{ flex: 2 }}>
                <table className="table-el">
                    {this.renderTableHeader()}
                    {this.renderTableData()}
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps, dispatchProps)(ProductTable);