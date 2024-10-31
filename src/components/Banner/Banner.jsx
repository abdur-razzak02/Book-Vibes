import book from "./../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse bg-base-200 rounded-lg my-10 p-20">
        <img
          src={book}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn bg-green-400">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
