import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
import './BLog.css'
const Blog = ({blogs, handleAddToBookmark}) => {
    const {cover,title,author,author_img,posted_date,reading_time,hashtags} = blogs
    return (
        <div className='mb-20'>
            <img className='mb-8 rounded-md' src={cover} alt="" />
            <div className=' flex justify-between items-center mb-4'>
                <div className='author-image flex items-center'>
                <img src={author_img} alt="" />
                <div className='ml-5'>
                <span className='font-bold text-2xl'>{author}</span> <br />
                <p>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read
                    <button onClick={()=>handleAddToBookmark(blogs)} className='ml-2'><FaBookmark></FaBookmark></button>
                    </span>
                </div>
            </div>
            <h2 className=' text-4xl font-bold'>{title}</h2>
            <div className='mt-4'>
                <span>
                    {
                        hashtags.map((hash, idx) => <span className='ml-2' key={idx}><a href="">{hash}</a></span>)
                    }
                </span>
            </div>

        </div>
    );
};
Blog.propTypes = {
    blogs:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}
export default Blog;