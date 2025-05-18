
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const puzzles = [
  {
    id: 1,
    title: "Find the Pattern",
    description: "Can you spot what comes next in the sequence?",
    image: "/puzzles/pattern1.png",
    difficulty: "easy",
    ageGroup: "8-9"
  },
  {
    id: 2,
    title: "Spot the Odd One Out",
    description: "One of these shapes doesn't belong. Can you find it?",
    image: "/puzzles/oddone1.png",
    difficulty: "easy",
    ageGroup: "8-9"
  },
  {
    id: 3,
    title: "Complete the Grid",
    description: "Figure out which image belongs in each empty space.",
    image: "/puzzles/grid1.png",
    difficulty: "medium",
    ageGroup: "9-10"
  },
  {
    id: 4,
    title: "Rotation Challenge",
    description: "Which shape would you get if you rotate the one shown?",
    image: "/puzzles/rotation1.png",
    difficulty: "medium",
    ageGroup: "9-10"
  },
  {
    id: 5,
    title: "Visual Series Completion",
    description: "What comes next in this complex visual pattern?",
    image: "/puzzles/series1.png",
    difficulty: "hard",
    ageGroup: "10-11"
  },
  {
    id: 6,
    title: "Shape Transformation",
    description: "How does the shape change from start to finish?",
    image: "/puzzles/transform1.png",
    difficulty: "hard",
    ageGroup: "10-11"
  }
];

const Puzzles = () => {
  const [filter, setFilter] = useState({
    difficulty: "all",
    ageGroup: "all"
  });

  const filteredPuzzles = puzzles.filter(puzzle => {
    return (filter.difficulty === "all" || puzzle.difficulty === filter.difficulty) && 
           (filter.ageGroup === "all" || puzzle.ageGroup === filter.ageGroup);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Non-verbal Reasoning Puzzles</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        These fun puzzles will help you practice your pattern recognition and logical thinking skills. 
        Can you solve them all?
      </p>

      {/* Filters */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Find Puzzles</h2>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block mb-2 font-medium">Difficulty:</label>
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={filter.difficulty === "all"}
                onClick={() => setFilter({...filter, difficulty: "all"})}
              >
                All
              </FilterButton>
              <FilterButton 
                active={filter.difficulty === "easy"}
                onClick={() => setFilter({...filter, difficulty: "easy"})}
              >
                Easy
              </FilterButton>
              <FilterButton 
                active={filter.difficulty === "medium"}
                onClick={() => setFilter({...filter, difficulty: "medium"})}
              >
                Medium
              </FilterButton>
              <FilterButton 
                active={filter.difficulty === "hard"}
                onClick={() => setFilter({...filter, difficulty: "hard"})}
              >
                Hard
              </FilterButton>
            </div>
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Age Group:</label>
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={filter.ageGroup === "all"}
                onClick={() => setFilter({...filter, ageGroup: "all"})}
              >
                All Ages
              </FilterButton>
              <FilterButton 
                active={filter.ageGroup === "8-9"}
                onClick={() => setFilter({...filter, ageGroup: "8-9"})}
              >
                8-9 Years
              </FilterButton>
              <FilterButton 
                active={filter.ageGroup === "9-10"}
                onClick={() => setFilter({...filter, ageGroup: "9-10"})}
              >
                9-10 Years
              </FilterButton>
              <FilterButton 
                active={filter.ageGroup === "10-11"}
                onClick={() => setFilter({...filter, ageGroup: "10-11"})}
              >
                10-11 Years
              </FilterButton>
            </div>
          </div>
        </div>
      </div>

      {/* Puzzles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredPuzzles.map(puzzle => (
          <PuzzleCard key={puzzle.id} puzzle={puzzle} />
        ))}
      </div>

      {filteredPuzzles.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-2">No puzzles found</h3>
          <p className="mb-4">Try changing your filter settings to see more puzzles.</p>
          <Button 
            onClick={() => setFilter({ difficulty: "all", ageGroup: "all" })}
            className="bg-logic-blue hover:bg-logic-blue/90"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

const FilterButton = ({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <Button 
    variant={active ? "default" : "outline"} 
    onClick={onClick}
    className={active ? "bg-logic-blue hover:bg-logic-blue/90" : "border-logic-blue text-logic-blue hover:bg-logic-blue/10"}
  >
    {children}
  </Button>
);

const PuzzleCard = ({ puzzle }: { puzzle: typeof puzzles[0] }) => {
  const difficultyColor = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800"
  }[puzzle.difficulty];

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={puzzle.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"} 
        alt={puzzle.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{puzzle.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor}`}>
            {puzzle.difficulty.charAt(0).toUpperCase() + puzzle.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{puzzle.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Ages {puzzle.ageGroup}</span>
          <Button className="bg-logic-blue hover:bg-logic-blue/90">Try Puzzle</Button>
        </div>
      </div>
    </Card>
  );
};

export default Puzzles;
