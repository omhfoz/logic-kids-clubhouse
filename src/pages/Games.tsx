
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Game categories
const categories = [
  {
    id: 1,
    title: "Pattern Recognition",
    description: "Identify patterns, sequences, and relationships between objects.",
    image: "/games/pattern.png",
    color: "bg-gradient-to-r from-logic-blue to-blue-400"
  },
  {
    id: 2,
    title: "Deductive Reasoning",
    description: "Use clues to eliminate possibilities and arrive at logical conclusions.",
    image: "/games/deductive.png",
    color: "bg-gradient-to-r from-purple-500 to-logic-purple"
  },
  {
    id: 3,
    title: "Spatial Reasoning",
    description: "Visualize and manipulate objects in your mind to solve puzzles.",
    image: "/games/spatial.png",
    color: "bg-gradient-to-r from-logic-green to-green-400"
  },
  {
    id: 4,
    title: "Mathematical Logic",
    description: "Apply mathematical principles to solve logical problems.",
    image: "/games/math.png",
    color: "bg-gradient-to-r from-logic-orange to-orange-400"
  },
  {
    id: 5,
    title: "Boolean Logic",
    description: "Work with true/false statements, AND/OR operations, and conditionals.",
    image: "/games/boolean.png",
    color: "bg-gradient-to-r from-pink-500 to-rose-400"
  },
  {
    id: 6,
    title: "Algorithmic Thinking",
    description: "Create step-by-step solutions to solve complex problems.",
    image: "/games/algorithm.png",
    color: "bg-gradient-to-r from-cyan-500 to-teal-400"
  }
];

// Game data
const puzzles = [
  {
    id: 1,
    title: "Find the Pattern",
    description: "Can you spot what comes next in the sequence?",
    image: "/puzzles/pattern1.png",
    difficulty: "easy",
    ageGroup: "8-9",
    category: "Pattern Recognition"
  },
  {
    id: 2,
    title: "Spot the Odd One Out",
    description: "One of these shapes doesn't belong. Can you find it?",
    image: "/puzzles/oddone1.png",
    difficulty: "easy",
    ageGroup: "8-9",
    category: "Pattern Recognition"
  },
  {
    id: 3,
    title: "Complete the Grid",
    description: "Figure out which image belongs in each empty space.",
    image: "/puzzles/grid1.png",
    difficulty: "medium",
    ageGroup: "9-10",
    category: "Spatial Reasoning"
  },
  {
    id: 4,
    title: "Rotation Challenge",
    description: "Which shape would you get if you rotate the one shown?",
    image: "/puzzles/rotation1.png",
    difficulty: "medium",
    ageGroup: "9-10",
    category: "Spatial Reasoning"
  },
  {
    id: 5,
    title: "Visual Series Completion",
    description: "What comes next in this complex visual pattern?",
    image: "/puzzles/series1.png",
    difficulty: "hard",
    ageGroup: "10-11",
    category: "Pattern Recognition"
  },
  {
    id: 6,
    title: "Shape Transformation",
    description: "How does the shape change from start to finish?",
    image: "/puzzles/transform1.png",
    difficulty: "hard",
    ageGroup: "10-11",
    category: "Spatial Reasoning"
  },
  {
    id: 7,
    title: "Detective Logic",
    description: "Use clues to solve the mystery. Who committed the crime?",
    image: "/games/detective.png",
    difficulty: "medium",
    ageGroup: "10-11",
    category: "Deductive Reasoning"
  },
  {
    id: 8,
    title: "Logic Maze",
    description: "Navigate through a visual maze using logical rules.",
    image: "/games/maze.png",
    difficulty: "easy",
    ageGroup: "10-11",
    category: "Algorithmic Thinking"
  },
  {
    id: 9,
    title: "Code Breaker",
    description: "Decrypt secret messages using logical patterns.",
    image: "/games/codebreaker.png",
    difficulty: "medium",
    ageGroup: "10-11",
    category: "Boolean Logic"
  },
  {
    id: 10,
    title: "Logic Puzzler",
    description: "Solve complex logical statements and find the truth.",
    image: "/games/puzzler.png",
    difficulty: "hard",
    ageGroup: "11",
    category: "Mathematical Logic"
  }
];

const Games = () => {
  const [filter, setFilter] = useState({
    difficulty: "all",
    ageGroup: "all",
    category: "all"
  });

  const filteredGames = puzzles.filter(game => {
    return (filter.difficulty === "all" || game.difficulty === filter.difficulty) && 
           (filter.ageGroup === "all" || game.ageGroup === filter.ageGroup) &&
           (filter.category === "all" || game.category === filter.category);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Logic Games</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Explore our collection of interactive games designed to develop logical thinking skills through fun challenges.
      </p>

      {/* Logic Categories */}
      <h2 className="text-2xl font-bold mb-6">Logic Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map(category => (
          <div 
            key={category.id}
            className={`${category.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
            onClick={() => setFilter({...filter, category: category.title})}
          >
            <div className="flex flex-col items-center text-white">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-center text-white/90">{category.description}</p>
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
              {categories.map(cat => (
                <FilterButton 
                  key={cat.id}
                  active={filter.category === cat.title}
                  onClick={() => setFilter({...filter, category: cat.title})}
                >
                  {cat.title}
                </FilterButton>
              ))}
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
            <Badge variant="outline" className="text-xs">{game.category}</Badge>
          </div>
          <Button className="bg-logic-blue hover:bg-logic-blue/90">Play Now</Button>
        </div>
      </div>
    </Card>
  );
};

export default Games;
