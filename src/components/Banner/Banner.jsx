import book from "./../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero container mx-auto bg-base-200 rounded-lg my-5 lg:my-8">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center my-5 lg:my-10 p-5 lg:p-16 gap-8">
        <img
          src={book}
          className="rounded-lg shadow-2xl md:w-2/5"
        />
        <div className="space-y-10 py-5 text-center lg:text-left md:w-3/5">
          <h1 className="text-4xl sm:text-5xl font-bold title">Books to freshen up your bookshelf</h1>
          <button className="py-3 px-5 rounded-lg bg-green-400 text-white font-semibold">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
