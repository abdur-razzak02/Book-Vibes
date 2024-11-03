import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/Utility";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id)
  }

  const handleAddToWishList = (id) => {
    addToStoredReadList(id)
  }

  return (
    <div className="container mx-auto py-5 flex flex-col md:flex-row gap-8 justify-between px-5 lg:px-0">
      <div className="md:w-1/2 flex justify-center items-center w-full bg-gray-100 rounded-xl">
        <img
          src={image}
          alt="book-image"
          className="p-5 md:p-10 lg:p-16 xl:p-5 h-60 sm:h-auto xl:h-[550px]"
        />
      </div>
      <div  className="md:w-1/2 space-y-4">
        <h1 className="title text-5xl font-bold">{bookName}</h1>
        <h2 className="border-b font-semibold text-2xl pb-3">By: {author}</h2>
        <h3 className="border-b pb-4">{category}</h3>
        <p><strong>Review: </strong> {review}</p>
        <div className="border-b flex gap-2 items-center pb-3">
          <h4 className="font-bold mr-3">Tag</h4>
          {tags.map((tag,index) =>(<button key={index} className=" bg-green-50 text-green-500 py-1 px-5 rounded-full font-semibold">#{tag}
            </button>))} 
              </div>
              <p>Number of Pages: <strong>{ totalPages}</strong></p>
              <p>Publisher: <strong>{ publisher}</strong></p>
              <p>Year of Publishing: <strong>{ yearOfPublishing}</strong></p>
              <p>Rating: <strong>{rating}</strong></p>
              <div className="flex gap-3">
                  <button onClick={()=> handleMarkAsRead(bookId) } className="px-5 py-2 border rounded-lg font-semibold">Mark As Read</button>
                  <button onClick={()=> handleAddToWishList(bookId)} className="px-5 py-2 border rounded-lg bg-teal-600 text-white font-semibold">Add To Wishlist</button>
              </div>
      </div>
    </div>
  );
};

export default BookDetails;
