import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 gap-10">
            <h1>blog post: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} blogs={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;