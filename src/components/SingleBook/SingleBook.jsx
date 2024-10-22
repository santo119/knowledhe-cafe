
import PropTypes from "prop-types";

const SingleBook = ({book}) => {
    const {title} = book
    return (
        <div className=":w-1/3">
       
            <div className="">
                <h3 className="bg-slate-200 p-4 m-4 gap-3 shadow-xl rounded-xl">{title}</h3>
            </div>
        </div>
    );
};

SingleBook.propTypes = {
    book: PropTypes.array
}
export default SingleBook;