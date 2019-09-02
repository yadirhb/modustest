import React from 'react';
import { connect } from 'react-redux';
import itemActions from '../redux/actions/items';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            criteria: props.criteria
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //this.setState({ criteria: event.target.value });
        const value = event.target.value;
        value ? this.props.search(value) : this.props.getItems()
    }

    render() {
        return (
            <div className="search-bar-cmp">
                <input type="text" placeholder="Search (eg. 'Metal')" onChange={this.handleChange} value={this.state.criteria} />
                <button onClick={() => this.props.search(this.state.criteria)}>Search</button>
            </div>
        );
    }
};

const mapStateToProps = ({ items }) => ({
    items: Object.values(items.data),
});

const dispatchProps = dispatch => ({
    search: (criteria) => dispatch({ type: itemActions.SEARCH_ITEMS, criteria }),
    getItems: () => dispatch({ type: itemActions.GET_ITEMS }),
});

export default connect(mapStateToProps, dispatchProps)(SearchBar);