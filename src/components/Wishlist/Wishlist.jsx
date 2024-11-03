const Wishlist = ({book}) => {
    const {
        bookName,
        author
    } = book;


    return (
        <div className="bg-gray-100 p-5 rounded-xl">
            <h1 className="title font-semibold text-4xl">{bookName}</h1>
            <p className="text-xl text-gray-500">Author: { author}</p>
        </div>
    );
};

export default Wishlist;