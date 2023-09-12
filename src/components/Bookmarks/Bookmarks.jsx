import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks}) => {

    return (
        <div className="md:w-1/3">
            <h1 className='font-bold text-2xl'>Bookmarked Blogs : {bookmarks.length}</h1>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}
export default Bookmarks;