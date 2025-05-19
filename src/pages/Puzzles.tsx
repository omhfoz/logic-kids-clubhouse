
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Logic areas
const logicAreas = [
  {
    id: 1,
    title: "Relationships",
    description: "Understand how objects, ideas, or concepts relate to each other.",
    image: "/puzzles/relationships.png",
    color: "bg-gradient-to-r from-logic-blue to-blue-400"
  },
  {
    id: 2,
    title: "Analogies",
    description: "Recognize similarities between pairs of concepts and apply them to new situations.",
    image: "/puzzles/analogies.png",
    color: "bg-gradient-to-r from-purple-500 to-logic-purple"
  },
  {
    id: 3,
    title: "Sequences",
    description: "Identify patterns and predict what comes next in a series.",
    image: "/puzzles/sequences.png",
    color: "bg-gradient-to-r from-logic-green to-green-400"
  },
  {
    id: 4,
    title: "Deduction",
    description: "Use clues to eliminate possibilities and arrive at logical conclusions.",
    image: "/puzzles/deduction.png",
    color: "bg-gradient-to-r from-logic-orange to-orange-400"
  },
  {
    id: 5,
    title: "Inference",
    description: "Draw conclusions based on evidence and reasoning.",
    image: "/puzzles/inference.png",
    color: "bg-gradient-to-r from-pink-500 to-rose-400"
  }
];

const puzzles = [
  {
    id: 1,
    title: "Find the Pattern",
    description: "Can you spot what comes next in the sequence?",
    image: "/puzzles/pattern1.png",
    difficulty: "easy",
    ageGroup: "8-9",
    category: "Sequences"
  },
  {
    id: 2,
    title: "Spot the Odd One Out",
    description: "One of these shapes doesn't belong. Can you find it?",
    image: "/puzzles/oddone1.png",
    difficulty: "easy",
    ageGroup: "8-9",
    category: "Relationships"
  },
  {
    id: 3,
    title: "Complete the Grid",
    description: "Figure out which image belongs in each empty space.",
    image: "/puzzles/grid1.png",
    difficulty: "medium",
    ageGroup: "9-10",
    category: "Relationships"
  },
  {
    id: 4,
    title: "Rotation Challenge",
    description: "Which shape would you get if you rotate the one shown?",
    image: "/puzzles/rotation1.png",
    difficulty: "medium",
    ageGroup: "9-10",
    category: "Sequences"
  },
  {
    id: 5,
    title: "Logic Mystery",
    description: "Use the clues to solve who did what, when, and where.",
    image: "/puzzles/mystery1.png",
    difficulty: "hard",
    ageGroup: "10-11",
    category: "Deduction"
  },
  {
    id: 6,
    title: "Word Connections",
    description: "Find the relationship between these word pairs.",
    image: "/puzzles/words1.png",
    difficulty: "medium",
    ageGroup: "9-11",
    category: "Analogies"
  },
  {
    id: 7,
    title: "What Happens Next?",
    description: "Based on the story, what's the most logical outcome?",
    image: "/puzzles/next1.png",
    difficulty: "medium",
    ageGroup: "9-11",
    category: "Inference"
  },
  {
    id: 8,
    title: "Picture Logic",
    description: "What can you infer from these visual clues?",
    image: "/puzzles/picture1.png",
    difficulty: "hard",
    ageGroup: "10-11",
    category: "Inference"
  },
  {
    id: 9,
    title: "Analogy Builder",
    description: "Complete the analogy: A is to B as C is to...",
    image: "/puzzles/analogy1.png",
    difficulty: "hard",
    ageGroup: "10-11",
    category: "Analogies"
  },
  {
    id: 10,
    title: "Detective Logic",
    description: "Solve the mystery using the clues provided.",
    image: "/puzzles/detective1.png",
    difficulty: "hard",
    ageGroup: "10-11",
    category: "Deduction"
  }
];

const Puzzles = () => {
  const [filter, setFilter] = useState({
    difficulty: "all",
    ageGroup: "all",
    category: "all"
  });

  const filteredPuzzles = puzzles.filter(puzzle => {
    return (filter.difficulty === "all" || puzzle.difficulty === filter.difficulty) && 
           (filter.ageGroup === "all" || puzzle.ageGroup === filter.ageGroup) &&
           (filter.category === "all" || puzzle.category === filter.category);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Logic Games</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Explore our collection of interactive games designed to develop logical thinking skills through fun challenges.
      </p>

      {/* Logic Areas */}
      <h2 className="text-2xl font-bold mb-6">Logic Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {logicAreas.map(area => (
          <div 
            key={area.id}
            className={`${area.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
            onClick={() => setFilter({...filter, category: area.title})}
          >
            <div className="flex flex-col items-center text-white">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <img 
                  src={area.image || `https://placehold.co/200x200?text=${area.title}`} 
                  alt={area.title}
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{area.title}</h3>
              <p className="text-center text-white/90">{area.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Find Games</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto">
            <label className="block mb-2 font-medium">Category:</label>
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={filter.category === "all"}
                onClick={() => setFilter({...filter, category: "all"})}
              >
                All Categories
              </FilterButton>
              {logicAreas.map(area => (
                <FilterButton 
                  key={area.id}
                  active={filter.category === area.title}
                  onClick={() => setFilter({...filter, category: area.title})}
                >
                  {area.title}
                </FilterButton>
              ))}
            </div>
          </div>
          
          {/* Difficulty filter */}
          <div className="w-full md:w-auto">
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
          
          {/* Age Group filter */}
          <div className="w-full md:w-auto">
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

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredPuzzles.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {filteredPuzzles.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-2">No games found</h3>
          <p className="mb-4">Try changing your filter settings to see more games.</p>
          <Button 
            onClick={() => setFilter({ difficulty: "all", ageGroup: "all", category: "all" })}
            className="bg-logic-blue hover:bg-logic-blue/90"
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* How to Play */}
      <div className="bg-blue-50 rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">How to Play Our Logic Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="w-12 h-12 bg-logic-green rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Read Carefully</h3>
            <p>Take your time to understand all the clues and information given in the game.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="w-12 h-12 bg-logic-yellow rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Make Logical Deductions</h3>
            <p>Use reasoning to eliminate impossible options and narrow down the solution.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="w-12 h-12 bg-logic-orange rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Check Your Answer</h3>
            <p>Review your solution to make sure it satisfies all the conditions of the puzzle.</p>
          </div>
        </div>
      </div>
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

const GameCard = ({ game }: { game: typeof puzzles[0] }) => {
  const difficultyColor = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800"
  }[game.difficulty];

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
      <img 
        src={game.image || `https://placehold.co/400x200?text=${game.title}`} 
        alt={game.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{game.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor}`}>
            {game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{game.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className="text-sm text-gray-500">Ages {game.ageGroup}</span>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{game.category}</span>
          </div>
          <Button className="bg-logic-blue hover:bg-logic-blue/90">Play Now</Button>
        </div>
      </div>
    </Card>
  );
};

export default Puzzles;
