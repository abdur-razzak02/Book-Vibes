import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../Utility/Utility";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import Wishlist from "../Wishlist/Wishlist";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(wishBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === 'rating') {
      const sortedList = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedList)
    }
    if (sortType === 'totalPage') {
      const sortedPageList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortedPageList)
    }
  }

  return (
    <div className="container mx-auto px-5 xl:px-0">
      <h2 className="text-2xl font-bold bg-gray-100 p-10 text-center rounded-lg my-5">
            Total Read Books: {readList.length}
      </h2>

      <div className="my-10 text-center">
      <div className="dropdown">
      <div tabIndex={0} role="button" className="bg-green-400 py-2 px-3 sm:px-8 rounded-md text-white font-semibold">Sort By  \/</div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-center">
      <li onClick={()=>handleSort('rating')}><a>Ratings</a></li>
      <li onClick={()=>handleSort('totalPage')}><a>Page Number</a></li>
      </ul>
      </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Mark As Read</Tab>
          <Tab>Add To Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="py-5">
            {readList.map((book) => (
              <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
            ))}
          </div>
        </TabPanel>
        
        <TabPanel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {
              wishList.map((book) => (
                <Wishlist key={book.bookId} book={book}></Wishlist>
              ))
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
