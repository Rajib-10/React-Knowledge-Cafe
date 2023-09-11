import {  FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    const{id,title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img  className='w-full mb-8 rounded-xl' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='mr-2'>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog)}><FaBookmark /></button>
                </div>
            </div>
            <h1 className='text-4xl mt-6'>{title}</h1>
           <p className='mt-3 mb-2'>
           {
                hashtags.map((hash,index)=> <span className='mr-6 text-gray-500 font-semibold' key={index} ><a href="">#{hash}</a></span> )
            }
           </p>
            <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-purple-700 underline font-bold '>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;