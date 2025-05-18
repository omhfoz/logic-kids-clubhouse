
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-logic-blue text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4 font-bold">We Love Logic</h3>
            <p className="text-blue-100">
              Fun logic puzzles and games for kids aged 8-11.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:underline text-blue-100 hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/puzzles" className="hover:underline text-blue-100 hover:text-white">
                  Puzzles
                </NavLink>
              </li>
              <li>
                <NavLink to="/games" className="hover:underline text-blue-100 hover:text-white">
                  Logic Games
                </NavLink>
              </li>
              <li>
                <NavLink to="/worksheets" className="hover:underline text-blue-100 hover:text-white">
                  Worksheets
                </NavLink>
              </li>
              <li>
                <NavLink to="/resources" className="hover:underline text-blue-100 hover:text-white">
                  Resources
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-bold">Contact</h3>
            <p className="text-blue-100">
              Email: <a href="mailto:info@welovelogic.com" className="hover:underline">info@welovelogic.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-6 pt-6 text-center text-sm text-blue-100">
          &copy; {new Date().getFullYear()} We Love Logic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
