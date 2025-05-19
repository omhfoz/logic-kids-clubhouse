
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LogicStories = () => {
  const stories = [
    {
      id: 1,
      title: "The Mystery of the Missing Logic Key",
      description: "Follow Detective Logic as he uses deductive reasoning to find the missing key that unlocks the city's central computer.",
      difficulty: "easy",
      ageGroup: "8-9",
      imageUrl: "/stories/mystery.png"
    },
    {
      id: 2,
      title: "Patterns and Puzzles",
      description: "Join Ada on her journey through the Pattern Palace where every door requires solving a unique sequence puzzle.",
      difficulty: "medium",
      ageGroup: "9-10",
      imageUrl: "/stories/patterns.png"
    },
    {
      id: 3,
      title: "The Logic Castle",
      description: "Help Prince Leo navigate the castle where each room contains a logical challenge that must be solved to progress.",
      difficulty: "hard",
      ageGroup: "10-11",
      imageUrl: "/stories/castle.png"
    },
    {
      id: 4,
      title: "Coding Cats",
      description: "A fun adventure where cats use simple coding principles to solve everyday problems in their neighborhood.",
      difficulty: "easy",
      ageGroup: "8-9",
      imageUrl: "/stories/cats.png"
    },
    {
      id: 5,
      title: "The Algorithm Adventure",
      description: "Follow Allie as she discovers how algorithms work through a series of exciting challenges in the digital world.",
      difficulty: "medium",
      ageGroup: "9-10",
      imageUrl: "/stories/algorithm.png"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Logic Stories</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Explore our collection of interactive stories that teach logical thinking through adventure and fun.
      </p>

      {/* Featured Story */}
      <div className="bg-gradient-to-r from-logic-blue to-logic-purple text-white rounded-3xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Featured Story: The Binary Forest</h2>
            <p className="text-lg mb-6">
              Join Maya and her robot friend Bit as they journey through the Binary Forest, 
              where every tree has either a 0 or 1 on it. Learn the basics of binary numbers 
              while helping them find their way home through exciting logic puzzles!
            </p>
            <Badge className="bg-white text-logic-blue text-sm">New Release!</Badge>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/stories/binary.png" 
              alt="The Binary Forest" 
              className="rounded-xl shadow-lg max-h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      {/* How Logic Stories Help */}
      <div className="bg-blue-50 rounded-3xl p-8 mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">How Logic Stories Help Children Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-blue">Engagement</h3>
            <p>Stories capture children's imagination and make learning logic concepts more memorable and fun.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-orange">Context</h3>
            <p>Stories provide real-world context for abstract logical concepts, making them easier to understand.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-green">Problem-Solving</h3>
            <p>Following characters through challenges helps children develop critical thinking and problem-solving skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StoryCard = ({ story }: { story: any }) => {
  const difficultyColor = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800"
  }[story.difficulty];

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={story.imageUrl || "https://placehold.co/600x400?text=Logic+Story"} 
        alt={story.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{story.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor}`}>
            {story.difficulty.charAt(0).toUpperCase() + story.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{story.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Ages {story.ageGroup}</span>
          <Badge variant="outline" className="cursor-pointer hover:bg-logic-blue hover:text-white">Read Now</Badge>
        </div>
      </div>
    </Card>
  );
};

export default LogicStories;
