
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Combining puzzles and games into one page
const puzzles = [
  {
    id: 1,
    title: "Find the Pattern",
    description: "Can you spot what comes next in the sequence?",
    image: "/puzzles/pattern1.png",
    difficulty: "easy",
    ageGroup: "8-9",
    type: "puzzle"
  },
  {
    id: 2,
    title: "Spot the Odd One Out",
    description: "One of these shapes doesn't belong. Can you find it?",
    image: "/puzzles/oddone1.png",
    difficulty: "easy",
    ageGroup: "8-9",
    type: "puzzle"
  },
  {
    id: 3,
    title: "Complete the Grid",
    description: "Figure out which image belongs in each empty space.",
    image: "/puzzles/grid1.png",
    difficulty: "medium",
    ageGroup: "9-10",
    type: "puzzle"
  },
  {
    id: 4,
    title: "Rotation Challenge",
    description: "Which shape would you get if you rotate the one shown?",
    image: "/puzzles/rotation1.png",
    difficulty: "medium",
    ageGroup: "9-10",
    type: "puzzle"
  },
  {
    id: 5,
    title: "Visual Series Completion",
    description: "What comes next in this complex visual pattern?",
    image: "/puzzles/series1.png",
    difficulty: "hard",
    ageGroup: "10-11",
    type: "puzzle"
  },
  {
    id: 6,
    title: "Shape Transformation",
    description: "How does the shape change from start to finish?",
    image: "/puzzles/transform1.png",
    difficulty: "hard",
    ageGroup: "10-11",
    type: "puzzle"
  },
  {
    id: 7,
    title: "Detective Logic",
    description: "Use clues to solve the mystery. Who committed the crime?",
    image: "/games/detective.png",
    difficulty: "medium",
    ageGroup: "10-11",
    type: "game"
  },
  {
    id: 8,
    title: "Logic Maze",
    description: "Navigate through a text-based maze using logical commands.",
    image: "/games/maze.png",
    difficulty: "easy",
    ageGroup: "10-11",
    type: "game"
  },
  {
    id: 9,
    title: "Code Breaker",
    description: "Decrypt secret messages using logical patterns.",
    image: "/games/codebreaker.png",
    difficulty: "medium",
    ageGroup: "10-11",
    type: "game"
  },
  {
    id: 10,
    title: "Logic Puzzler",
    description: "Solve complex logical statements and find the truth.",
    image: "/games/puzzler.png",
    difficulty: "hard",
    ageGroup: "11",
    type: "game"
  }
];

const Games = () => {
  const [filter, setFilter] = useState({
    difficulty: "all",
    ageGroup: "all",
    type: "all"
  });

  const filteredGames = puzzles.filter(game => {
    return (filter.difficulty === "all" || game.difficulty === filter.difficulty) && 
           (filter.ageGroup === "all" || game.ageGroup === filter.ageGroup) &&
           (filter.type === "all" || game.type === filter.type);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Logic Games</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Explore our collection of puzzles and games to challenge your logical thinking skills.
      </p>

      {/* Featured Game */}
      <div className="bg-gradient-to-r from-logic-blue to-logic-purple text-white rounded-3xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Featured Game: Logic Master Challenge</h2>
            <p className="text-lg mb-6">
              Test your logic skills with our most popular game! Solve a series of increasingly difficult logical puzzles 
              with visual and text-based clues. Can you become a Logic Master?
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-logic-blue hover:bg-blue-50">
              Play Now
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/games/featured.png" 
              alt="Logic Master Challenge" 
              className="rounded-xl shadow-lg max-h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Find Games</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto">
            <label className="block mb-2 font-medium">Type:</label>
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={filter.type === "all"}
                onClick={() => setFilter({...filter, type: "all"})}
              >
                All Types
              </FilterButton>
              <FilterButton 
                active={filter.type === "puzzle"}
                onClick={() => setFilter({...filter, type: "puzzle"})}
              >
                Visual Puzzles
              </FilterButton>
              <FilterButton 
                active={filter.type === "game"}
                onClick={() => setFilter({...filter, type: "game"})}
              >
                Text Games
              </FilterButton>
            </div>
          </div>
          
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
        {filteredGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-2">No games found</h3>
          <p className="mb-4">Try changing your filter settings to see more games.</p>
          <Button 
            onClick={() => setFilter({ difficulty: "all", ageGroup: "all", type: "all" })}
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
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={game.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"} 
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
            <Badge variant="outline" className="text-xs">{game.type === "puzzle" ? "Visual" : "Text"}</Badge>
          </div>
          <Button className="bg-logic-blue hover:bg-logic-blue/90">Try Now</Button>
        </div>
      </div>
    </Card>
  );
};

export default Games;
