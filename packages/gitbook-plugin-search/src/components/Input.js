const GitBook = require('gitbook-core');
const { React } = GitBook;

const search = require('../actions/search');

const SearchInput = React.createClass({
    propTypes: {
        query:    React.PropTypes.string,
        dispatch: React.PropTypes.func
    },

    onChange(event) {
        const { dispatch } = this.props;
        const { value } = event.currentTarget;

        dispatch(search.query(value));
    },

    render() {
        const { query } = this.props;

        return (
            <div className="Search/Input">
                <input type="text" value={query} onChange={this.onChange} />
            </div>
        );
    }
});

const mapStateToProps = state => {
    const { query } = state.search;
    return { query };
};

module.exports = GitBook.connect(SearchInput, mapStateToProps);
