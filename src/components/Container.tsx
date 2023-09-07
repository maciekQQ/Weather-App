const Cointainer = () => {
  return (
    <div
      id="background"
      className=" w-screen h-screen flex items-center justify-center bg-slate-900 "
    >
      <div
        id="container-main"
        className=" border-solid border-2 border-sky-500 rounded-3xl  h-2/4 w-72 bg-gradient-to-br from-sky-950 to-sky-700"
      >
        <div
          id="container-main"
          className="flex items-center justify-center mt-5"
        >
          <input
            type="string"
            className="  px-5 text-gray-700   items-center h-12 w-64 rounded-xl "
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Cointainer;
