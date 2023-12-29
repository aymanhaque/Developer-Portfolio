export const Contact = () => {
  return (
    <>
      <div className="max-w-md w-full mx-auto">
        <div className="my-8">
          <h1 className="flex text-7xl font-semibold justify-center">
            Contact
          </h1>
        </div>
        <form action="">
          <div className="mb-4">
            <label className="block text---sm font-semibold mb-2" htmlFor="">
              Your Name
            </label>
            <input
              placeholder="Muhd Haque"
              className=" border-gray-500 w-full px-3 py-2 border rounded-lg bg-gray focus:border-blue-500 dark:text-black"
              required
              type="name"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text---sm font-semibold mb-2 " htmlFor="">
              Your Email
            </label>
            <input
              placeholder="example@gmail.com"
              className=" border-gray-500 w-full px-3 py-2 border rounded-lg bg-gray focus:border-blue-500 dark:text-black"
              required
              type="email"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text---sm font-semibold mb-2" htmlFor="">
              Send Message
            </label>
            <textarea
              placeholder="Hi my name is....."
              className=" border-gray-500 w-full px-3 py-2 border rounded-lg bg-gray focus:border-blue-500 dark:text-black"
              required
            ></textarea>
          </div>
          <div className="justify-center flex mb-1">
            <button
              type="submit"
              className=" transition-all text-lg bg-black dark:bg-blue-900 dark:text-white rounded-2xl text-white px-3 py-2 font-semibold hover:bg-gray-600 hover:text-xl focus:outline-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
