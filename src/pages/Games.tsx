
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const games = [
  {
    id: 1,
    title: "Detective Logic",
    description: "Use clues to solve the mystery. Who committed the crime?",
    image: "/games/detective.png",
    level: "Beginner",
    ageRecommended: "10+"
  },
  {
    id: 2,
    title: "Logic Maze",
    description: "Navigate through a text-based maze using logical commands.",
    image: "/games/maze.png",
    level: "Beginner",
    ageRecommended: "10+"
  },
  {
    id: 3,
    title: "Code Breaker",
    description: "Decrypt secret messages using logical patterns.",
    image: "/games/codebreaker.png",
    level: "Intermediate",
    ageRecommended: "10-11"
  },
  {
    id: 4,
    title: "Logic Puzzler",
    description: "Solve complex logical statements and find the truth.",
    image: "/games/puzzler.png",
    level: "Advanced",
    ageRecommended: "11+"
  }
];

const Games = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Logic Games</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Text-based logic games for older kids (10-11 years) to strengthen critical thinking and deductive reasoning.
      </p>

      {/* Featured Game */}
      <div className="bg-gradient-to-r from-logic-blue to-logic-purple text-white rounded-3xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Featured Game: Logic Master Challenge</h2>
            <p className="text-lg mb-6">
              Test your logic skills with our most popular game! Solve a series of increasingly difficult logical puzzles 
              with text-based clues. Can you become a Logic Master?
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

      {/* Games Grid */}
      <h2 className="text-2xl font-bold mb-6">All Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

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

const GameCard = ({ game }: { game: typeof games[0] }) => {
  let levelColor;
  switch (game.level) {
    case "Beginner":
      levelColor = "bg-green-100 text-green-800 border-green-200";
      break;
    case "Intermediate":
      levelColor = "bg-yellow-100 text-yellow-800 border-yellow-200";
      break;
    case "Advanced":
      levelColor = "bg-red-100 text-red-800 border-red-200";
      break;
    default:
      levelColor = "bg-gray-100 text-gray-800 border-gray-200";
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <img 
        src={game.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"} 
        alt={game.title} 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{game.title}</h3>
          <Badge variant="outline" className={levelColor}>
            {game.level}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm mb-4">{game.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Recommended: {game.ageRecommended}</span>
          <Button size="sm" className="bg-logic-green hover:bg-logic-green/90">
            Play
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Games;
