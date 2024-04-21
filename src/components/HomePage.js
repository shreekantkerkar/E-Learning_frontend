import Home from "./Home";
import Body from "./Body";
// import Navbar from "./Navbar";
const HomePage = () => {
  return (
    <div>
      <div className="mt-28">
        {/* <Navbar/> */}
        <Home />
        <hr class="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <Body />
      </div>
    </div>
  );
};

export default HomePage;
