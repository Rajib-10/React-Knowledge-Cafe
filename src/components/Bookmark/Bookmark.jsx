import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div>
            <h1 className='text-xl font-medium bg-slate-400 mx-4 rounded-xl p-4 mt-4'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;