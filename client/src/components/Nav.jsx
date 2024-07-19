import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="sticky w-full top-0  bg-white shadow-2xl py-3 ">
      <div className="container  mx-auto z-[-4]">
        <div className="flex justify-between mt-4 items-center h-[5em] ">
          <div>
            <img
              src="src/assets/images/Screenshot_from_2024-06-11_09-00-02-removebg-preview.png"
              className="w-[200px] h-[10vh]"
            />
          </div>
          <div>
            <ul className="flex gap-8  text-blue-400 cursor-pointer group">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/register">
                <li>Sign Up</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
