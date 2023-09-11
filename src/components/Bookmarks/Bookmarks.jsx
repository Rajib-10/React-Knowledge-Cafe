import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,reading}) => {
    return (
        <div className="w-1/3  bg-gray-300 ml-4 mt-6 rounded-t-lg">
            <div className='text-2xl text-center font-semibold mt-4 text-blue-500'>
            <h1>Reading Time: {reading}</h1>
            </div>
            <h1 className='text-2xl text-center font-bold mt-4 '>bookmarked Blogs: {bookmarks.length}</h1>
            {bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark={bookmark} />)}
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    reading: PropTypes.number.isRequired
    
}

export default Bookmarks;