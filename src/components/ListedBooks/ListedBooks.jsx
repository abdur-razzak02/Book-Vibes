import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/Utility";
import Book from "../Book/Book";

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([])

    // console.log(readList);
    

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, [])
    
  return (
    <div className="container mx-auto px-5 xl:px-0">
      <Tabs>
        <TabList>
          <Tab>Mark As Read</Tab>
          <Tab>Add To Wishlist</Tab>
        </TabList>

        <TabPanel>
                  <h2 className="text-2xl font-bold">Total Read Books: {readList.length}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
                  {
                      readList.map(book => <Book key={book.bookId} book={book}></Book>)
                  }
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
