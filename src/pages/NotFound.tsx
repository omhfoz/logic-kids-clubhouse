
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8 animate-bounce-slight">
          <h1 className="text-8xl font-bold text-logic-blue mb-2">404</h1>
          <span className="text-2xl font-bold text-logic-orange">Oops! Page not found</span>
        </div>
        
        <p className="text-xl text-gray-600 mb-8">
          We can't seem to find the page you're looking for. Let's get you back to the fun!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-logic-blue hover:bg-logic-blue/90 text-lg px-6 py-6">
            <Link to="/">Back to Home</Link>
          </Button>
          
          <Button asChild variant="outline" className="border-logic-blue text-logic-blue hover:bg-logic-blue/10 text-lg px-6 py-6">
            <Link to="/puzzles">Try Some Puzzles</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
