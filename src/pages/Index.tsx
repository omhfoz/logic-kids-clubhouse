
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/SectionCard";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-16">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/ef01dac6-96ed-4fb1-8226-d23286de2788.png" 
            alt="We Love Logic Logo"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-logic-blue">
          We Love Logic
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Fun logic puzzles and games for curious minds aged 8-11
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-logic-green hover:bg-logic-green/90 text-white text-lg px-6 py-6 rounded-xl btn-bounce">
            Start Exploring
          </Button>
          <Button variant="outline" className="border-logic-blue text-logic-blue hover:bg-logic-blue/10 text-lg px-6 py-6 rounded-xl btn-bounce">
            Learn More
          </Button>
        </div>
      </section>
      
      {/* Featured Sections */}
      <h2 className="text-3xl font-bold text-center mb-8 text-logic-blue">Explore Our Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <SectionCard 
          title="Puzzles" 
          description="Fun visual brain teasers to challenge your mind"
          icon="/icons/puzzle.svg"
          bgColor="bg-logic-blue"
          to="/puzzles"
        />
        <SectionCard 
          title="Logic Games" 
          description="Text-based logic games for older kids"
          icon="/icons/gamepad.svg"
          bgColor="bg-logic-green"
          to="/games"
        />
        <SectionCard 
          title="Worksheets" 
          description="Downloadable logic activities for practice"
          icon="/icons/download.svg"
          bgColor="bg-logic-yellow"
          to="/worksheets"
        />
        <SectionCard 
          title="Resources" 
          description="Videos, books and learning materials"
          icon="/icons/book.svg"
          bgColor="bg-logic-orange"
          to="/resources"
        />
      </div>
      
      {/* How It Works */}
      <section className="bg-blue-50 rounded-3xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-logic-blue">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-logic-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Choose an Activity</h3>
            <p>Pick from puzzles, games, or worksheets that look fun to you</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-logic-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Solve the Challenge</h3>
            <p>Use your logic skills to find the solution</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-logic-yellow rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Level Up</h3>
            <p>Try harder challenges as you improve your skills</p>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="bg-logic-purple/10 rounded-3xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-logic-purple">What Kids Say</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-center text-lg italic">
            "I love solving the puzzles! They're challenging but fun, and I feel so smart when I get one right!"
          </blockquote>
          <p className="text-center mt-4 font-bold">- Emma, age 9</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
