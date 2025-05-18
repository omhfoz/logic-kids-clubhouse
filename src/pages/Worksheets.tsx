
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const worksheets = [
  {
    id: 1,
    title: "Pattern Recognition",
    description: "Practice finding and completing patterns with these fun worksheets.",
    thumbnail: "/worksheets/pattern-thumb.png",
    fileSize: "2.4 MB",
    pages: 5,
    ageRange: "8-9",
    category: "Visual Logic"
  },
  {
    id: 2,
    title: "Sequence Puzzles",
    description: "Find what comes next in each sequence to improve your logical thinking.",
    thumbnail: "/worksheets/sequence-thumb.png",
    fileSize: "1.8 MB",
    pages: 4,
    ageRange: "8-10",
    category: "Visual Logic"
  },
  {
    id: 3,
    title: "Sudoku for Kids",
    description: "Child-friendly Sudoku puzzles to boost logical reasoning skills.",
    thumbnail: "/worksheets/sudoku-thumb.png",
    fileSize: "3.2 MB",
    pages: 8,
    ageRange: "9-11",
    category: "Number Logic"
  },
  {
    id: 4,
    title: "Logic Grid Puzzles",
    description: "Use the clues to solve these challenging logic grid problems.",
    thumbnail: "/worksheets/grid-thumb.png",
    fileSize: "2.1 MB",
    pages: 6,
    ageRange: "10-11",
    category: "Deductive Logic"
  },
  {
    id: 5,
    title: "Visual Odd One Out",
    description: "Identify which item doesn't belong in each group.",
    thumbnail: "/worksheets/oddone-thumb.png",
    fileSize: "1.5 MB",
    pages: 4,
    ageRange: "8-9",
    category: "Visual Logic"
  },
  {
    id: 6,
    title: "If-Then Logic",
    description: "Practice basic conditional logic with these fun scenarios.",
    thumbnail: "/worksheets/ifthen-thumb.png",
    fileSize: "1.9 MB",
    pages: 5,
    ageRange: "9-11",
    category: "Deductive Logic"
  }
];

const categories = [
  "All Categories",
  "Visual Logic",
  "Number Logic",
  "Deductive Logic"
];

const ageRanges = [
  "All Ages",
  "8-9",
  "9-10",
  "10-11"
];

const Worksheets = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Downloadable Worksheets</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Print these fun logic worksheets for extra practice at home or in the classroom.
      </p>

      {/* Filter Section */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-bold mb-4">Find Worksheets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Category:</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={category === "All Categories" ? "default" : "outline"}
                  className={category === "All Categories" 
                    ? "bg-logic-blue hover:bg-logic-blue/90" 
                    : "border-logic-blue text-logic-blue hover:bg-logic-blue/10"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Age Range:</label>
            <div className="flex flex-wrap gap-2">
              {ageRanges.map(range => (
                <Button 
                  key={range}
                  variant={range === "All Ages" ? "default" : "outline"}
                  className={range === "All Ages" 
                    ? "bg-logic-yellow hover:bg-logic-yellow/90" 
                    : "border-logic-yellow text-logic-yellow hover:bg-logic-yellow/10"}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Worksheets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {worksheets.map(worksheet => (
          <WorksheetCard key={worksheet.id} worksheet={worksheet} />
        ))}
      </div>

      {/* Request Section */}
      <div className="bg-logic-green/10 p-8 rounded-3xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-logic-green">Can't find what you need?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We're always creating new worksheets! Let us know what topics you'd like to see, 
          and we'll add them to our list.
        </p>
        <Button className="bg-logic-green hover:bg-logic-green/90">
          Request a Worksheet
        </Button>
      </div>
    </div>
  );
};

const WorksheetCard = ({ worksheet }: { worksheet: typeof worksheets[0] }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] relative">
        <img 
          src={worksheet.thumbnail || "https://images.unsplash.com/photo-1501854140801-50d01698950b"}
          alt={worksheet.title} 
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-logic-blue">
          {worksheet.category}
        </Badge>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{worksheet.title}</h3>
        <p className="text-gray-600 mb-4">{worksheet.description}</p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{worksheet.pages} pages</span>
          <span>{worksheet.fileSize}</span>
          <span>Ages {worksheet.ageRange}</span>
        </div>
        
        <Button className="w-full bg-logic-yellow hover:bg-logic-yellow/90">
          Download PDF
        </Button>
      </div>
    </Card>
  );
};

export default Worksheets;
