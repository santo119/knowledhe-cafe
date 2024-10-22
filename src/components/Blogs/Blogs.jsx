import { useEffect } from "react";
import { useState } from "react";
import Blug from "../Blug/Blug";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookMark, markAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            <div>
                {
                    blogs.map(blog => <Blug
                    key={blog.id}
                    blog = {blog}
                    handleAddToBookMark = {handleAddToBookMark}
                    markAsRead = {markAsRead}
                    ></Blug>)
                }
            </div>
        </div>
    );
};

Blogs.prototype ={
    handleAddToBookMark: PropTypes.func
}

export default Blogs;