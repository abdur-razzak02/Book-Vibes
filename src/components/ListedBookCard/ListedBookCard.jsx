import { Link, NavLink } from "react-router-dom";

const ListedBookCard = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  console.log(bookId);
  

  return (
    <div className="rounded-xl border mb-5 p-5">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="sm:w-1/5 bg-gray-100 items-center flex justify-center p-5 rounded-xl">
          <img
            src={image}
            className=" rounded-lg shadow-2xl h-40 lg:h-52 bg-gray-100"
          />
        </div>
        <div className="sm:w-4/5 space-y-2">
          <h1 className="text-4xl font-bold title">{bookName}</h1>
          <p className="font-semibold">By: {author}</p>
          
         
          <h4 className="font-bold mr-3 inline items-center text-sm">Tag</h4>
          {tags.map((tag, index) => (
            <button
              key={index}
              className=" bg-green-50 text-green-500 py-1 px-5 mr-2 rounded-full font-semibold text-sm"
            >
              #{tag}
            </button> 
          ))}
            <span className="text-gray-500 font-medium block sm:inline">Year of Publishing: {yearOfPublishing}</span>

          <h2 className="border-b pb-5 space-x-5">Publisher: {publisher}<span className="ml-5">Page  { totalPages}</span></h2>
          <div className="pt-2 space-x-1 sm:space-x-3 text-sm sm:text-base">
            <span className="bg-indigo-100 p-2 rounded-full px-2 sm:px-4 text-indigo-500">Category { category}</span>
            <span className="bg-orange-100 p-2 rounded-full px-4 text-orange-500">Rating {rating}</span>
            <Link to={`/books/${bookId}`}>
            <button className="bg-green-400 p-2 rounded-full px-2 sm:px-4 text-white font-semibold text-sm inline">View Details</button>
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
