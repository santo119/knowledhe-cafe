import PropTypes from 'prop-types'; 
import { MdOutlineCollectionsBookmark } from "react-icons/md"

const Blug = ({ blog, handleAddToBookMark, markAsRead}) => {
    const { title,cover,author,author_img,reading_time,posted_date,hashtags} = blog
    console.log(blog)
    return (
        <div className='blug mb-20'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center justify-center space-x-3 p-4'>
                        <img className='w-[90px] rounded-xl' src={author_img} alt="" />
                        <div>
                                <h3>{author}</h3>
                                <h3>{posted_date}</h3>
                        </div>
                </div>
                <div className='p-3 space-x-3'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookMark(blog)} className='text-red-500'><MdOutlineCollectionsBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className='p-4 space-x-3'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => markAsRead(reading_time)} className='text-[purple] underline'>Mark as read</button>
        </div>
    );
};

Blug.PropTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func
}

export default Blug;