import PropTypes from 'prop-types';

const SearchResult = ({ keyword }) => {
    return (
        <div>SearchResult for {keyword}</div>
    );
};

SearchResult.propTypes = {
    keyword: PropTypes.string,
};

export default SearchResult;
