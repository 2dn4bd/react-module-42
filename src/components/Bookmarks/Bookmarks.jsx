import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 rounded-lg ml-4 mt-4 pt-4">
            <div className='border-2 border-[#6047EC] py-3 px-4 text-center font-bold rounded-md bg-[#6047EC1A]' >
                <h2 className='text-[#6047EC]'>
                    Spend time on read: {readingTime} min
                </h2>
            </div>
            <h1 className='font-bold text-2xl text-center'>Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;