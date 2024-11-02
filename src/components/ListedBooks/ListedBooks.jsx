import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/Utility";
import ListedBookCard from "../ListedBookCard/ListedBookCard";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div className="container mx-auto px-5 xl:px-0">
      <h2 className="text-2xl font-bold bg-gray-100 p-10 text-center rounded-lg my-5">
            Total Read Books: {readList.length}
      </h2>
      <div className="my-10 text-center">
      <a className="bg-green-400 py-2 px-3 sm:px-5 rounded-md text-white font-semibold mb-8">Sort By</a>
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
          <h2>Add To Wishlist details </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
