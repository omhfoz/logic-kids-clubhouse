
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-logic-blue text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl mb-4 font-bold">We Love Logic</h3>
            <p className="text-blue-100">
              Fun logic puzzles and games for kids aged 8-11.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:underline text-blue-100 hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/puzzles" className="hover:underline text-blue-100 hover:text-white">
                  Logic Games
                </NavLink>
              </li>
              <li>
                <NavLink to="/stories" className="hover:underline text-blue-100 hover:text-white">
                  Logic Stories
                </NavLink>
              </li>
              <li>
                <NavLink to="/worksheets" className="hover:underline text-blue-100 hover:text-white">
                  Worksheets
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl mb-4 font-bold">Contact Us</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Email: <a href="mailto:info@welovelogic.com" className="hover:underline">info@welovelogic.com</a></li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Logic Lane, Thinking City, TC 12345</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl mb-4 font-bold">Logic Areas</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Relationships</li>
              <li>Analogies</li>
              <li>Sequences</li>
              <li>Deduction</li>
              <li>Inference</li>
            </ul>
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
