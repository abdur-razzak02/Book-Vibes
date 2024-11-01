
import { key } from "localforage";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, category, tags,rating } = book;

  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 border shadow-sm p-5 h-full">
        <figure className="px-5 bg-gray-100 rounded-xl">
          <img src={image} alt="book-image" className="rounded-xl h-60 xl:h-64 py-5" />
        </figure>
        <div className="card-body p-0 pt-5">
          <div className="flex mb-2">
            {tags.map((tag,index) =>(<button key={index} className="mr-2 bg-green-50 text-green-500 py-1 px-5 rounded-full">{tag}
            </button>))}
          </div>
          <h2 className="card-title title text-2xl font-semibold">
            {bookName}
          </h2>
          <p className="border-b border-dashed pb-4">{author}</p>
          <div className="flex justify-between">
            <span>{category}</span>
            <span className="flex items-center gap-2">
                          { rating}
              <img
                src={`https://cdn-icons-png.flaticon.com/128/2956/2956792.png`}
                alt="star"
                className="w-5 h-5"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
