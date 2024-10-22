import SingleBook from "../SingleBook/SingleBook";


const BookMark = ({booksMarks, readingTime}) => {
   
    return (
        <div className="md:w-1/3 bg-gray-100 p-4 rounded-xl">
            <div className="border-cyan-300 shadow-lg rounded-lg bg-zinc-300 mb-5">
                <h3 className="text-3xl text-center m-4 p-4">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">BooksMark: {booksMarks.length}</h2>

            <div>
                {
                  booksMarks.map((book) => <SingleBook
                  book={book}
                  key={book.id}
                  ></SingleBook>)  
                }
            </div>
           
        </div>
    );
};

export default BookMark;