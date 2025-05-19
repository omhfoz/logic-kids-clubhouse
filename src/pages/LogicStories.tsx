
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Terminal from "@/components/Terminal";

const LogicStories = () => {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  
  const stories = [
    {
      id: 1,
      title: "BYTE QUEST: THE LOGICAL AWAKENING",
      description: "Enter the digital realm where young coder Alex discovers the power of basic logic operations while restoring a corrupted program.",
      difficulty: "easy",
      ageGroup: "8-9",
      imageUrl: "/stories/byte-quest.png",
      level: "Level 1: Basic Logic Principles",
      terminalPrompt: "Welcome to Byte Quest! Type 'start' to begin your logical awakening..."
    },
    {
      id: 2,
      title: "PATTERN PATROL: SEQUENCE DEFENDERS",
      description: "Join the Pattern Patrol squad as they identify missing sequences and restore order to the Pattern Kingdom.",
      difficulty: "easy",
      ageGroup: "8-9",
      imageUrl: "/stories/pattern-patrol.png",
      level: "Level 2: Pattern Recognition",
      terminalPrompt: "PATTERN KINGDOM SECURITY SYSTEM\nIdentify the missing sequence to proceed. Type 'help' for instructions."
    },
    {
      id: 3,
      title: "LOGIC LORDS: THE DEDUCTION DIMENSION",
      description: "Step into the Deduction Dimension where only the most logical minds can solve the mysteries of the ancient castle.",
      difficulty: "medium",
      ageGroup: "9-10",
      imageUrl: "/stories/logic-lords.png",
      level: "Level 3: Deductive Reasoning",
      terminalPrompt: "Welcome to the Castle of Logical Deduction.\nSolve the mystery using the clues provided. Type 'clues' to begin."
    },
    {
      id: 4,
      title: "BOOLEAN BANDITS: TRUE OR FALSE TRIALS",
      description: "Track down the Boolean Bandits by determining which statements are true and which are false in this wild west adventure.",
      difficulty: "medium",
      ageGroup: "9-10",
      imageUrl: "/stories/boolean-bandits.png",
      level: "Level 4: Boolean Logic",
      terminalPrompt: "WANTED: BOOLEAN BANDITS\nDetermine which statements are TRUE or FALSE to find the bandits. Type 'wanted' to see the first poster."
    },
    {
      id: 5,
      title: "ALGORITHM ARCHIPELAGO: ISLAND OF ORDER",
      description: "Navigate the mysterious Algorithm Archipelago by creating step-by-step solutions to reach the Island of Order.",
      difficulty: "hard",
      ageGroup: "10-11",
      imageUrl: "/stories/algorithm-archipelago.png",
      level: "Level 5: Algorithmic Thinking",
      terminalPrompt: "Ship's Navigation Terminal\nYou must chart a course through Algorithm Archipelago. Type 'navigate' to begin your journey."
    },
    {
      id: 6,
      title: "QUANTUM QUANDARIES: LOGIC MULTIVERSE",
      description: "Explore the mind-bending Quantum Multiverse where multiple logical systems interact in fascinating ways.",
      difficulty: "hard",
      ageGroup: "11",
      imageUrl: "/stories/quantum-quandaries.png",
      level: "Level 6: Advanced Logical Systems",
      terminalPrompt: "QUANTUM LOGIC INTERFACE v6.0\nMultiple logical systems detected. Type 'quantum' to initiate cross-system analysis."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Logic Stories</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Embark on text-based adventures that teach logical thinking through interactive storytelling.
      </p>

      {selectedStory === null ? (
        <>
          {/* Retro CRT Effect Header */}
          <div className="bg-black text-green-400 rounded-3xl p-8 mb-12 border-2 border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.5)] retro-crt">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-green-400 retro-text">INTERACTIVE LOGIC TERMINAL</h2>
                <p className="text-lg mb-6 text-green-400 font-mono">
                  &gt; SELECT A STORY TO BEGIN YOUR TEXT-BASED ADVENTURE<br />
                  &gt; EACH STORY TEACHES DIFFERENT LOGIC SKILLS<br />
                  &gt; PROGRESS THROUGH ALL SIX LEVELS TO MASTER LOGICAL THINKING
                </p>
                <div className="flex gap-4">
                  <Badge className="bg-green-800 text-green-200 text-sm font-mono border border-green-500">TEXT-BASED</Badge>
                  <Badge className="bg-green-800 text-green-200 text-sm font-mono border border-green-500">RETRO-STYLE</Badge>
                  <Badge className="bg-green-800 text-green-200 text-sm font-mono border border-green-500">CLI-ADVENTURE</Badge>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="h-full bg-black p-4 rounded-lg border border-green-500 font-mono text-green-400 flex items-center justify-center text-center">
                  <div>
                    <div className="text-2xl mb-4">[SELECT A STORY]</div>
                    <div className="text-sm blink-cursor">█</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map(story => (
              <StoryCard 
                key={story.id} 
                story={story} 
                onClick={() => setSelectedStory(story.id)}
              />
            ))}
          </div>
        </>
      ) : (
        // Story Terminal View
        <StoryTerminalView 
          story={stories.find(s => s.id === selectedStory)!}
          onBack={() => setSelectedStory(null)} 
        />
      )}

      {/* Logic Levels Description */}
      <div className="bg-blue-50 rounded-3xl p-8 mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">The Six Levels of Logic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-blue">Level 1: Basic Logic Principles</h3>
            <p>Introduction to foundational concepts of logic: statements, truth values, and simple deductions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-purple">Level 2: Pattern Recognition</h3>
            <p>Developing the ability to identify sequences, relationships, and recurring structures in information.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-orange">Level 3: Deductive Reasoning</h3>
            <p>Using clues and premises to draw logical conclusions through structured thinking.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-green-600">Level 4: Boolean Logic</h3>
            <p>Understanding AND, OR, NOT operations and using them to evaluate complex logical expressions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-pink-600">Level 5: Algorithmic Thinking</h3>
            <p>Creating step-by-step procedures to solve problems efficiently and systematically.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Level 6: Advanced Logical Systems</h3>
            <p>Exploring complex logical frameworks, multi-dimensional reasoning, and abstract logical concepts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StoryCard = ({ 
  story, 
  onClick 
}: { 
  story: any; 
  onClick: () => void;
}) => {
  const difficultyColor = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800"
  }[story.difficulty];

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer retro-card"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={story.imageUrl || "https://placehold.co/600x400?text=Logic+Story"} 
          alt={story.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 w-full bg-black/70 p-2">
          <span className="font-mono text-green-400 text-sm">{story.level}</span>
        </div>
      </div>
      <div className="p-6 retro-card-body">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold retro-title">{story.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor}`}>
            {story.difficulty.charAt(0).toUpperCase() + story.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{story.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Ages {story.ageGroup}</span>
          <Badge variant="outline" className="cursor-pointer hover:bg-black hover:text-green-400 retro-badge">
            &gt; ENTER TERMINAL
          </Badge>
        </div>
      </div>
    </Card>
  );
};

const StoryTerminalView = ({ 
  story, 
  onBack 
}: { 
  story: any; 
  onBack: () => void;
}) => {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{story.title}</h2>
        <Badge 
          variant="outline" 
          className="cursor-pointer hover:bg-logic-blue hover:text-white"
          onClick={onBack}
        >
          &lt; Back to Stories
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1">
          <Card className="p-4 h-full">
            <img 
              src={story.imageUrl || "https://placehold.co/600x400?text=Logic+Story"} 
              alt={story.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-logic-blue mb-2">{story.level}</h3>
            <p className="text-sm text-gray-600 mb-2">{story.description}</p>
            <div className="flex justify-between">
              <span className={`text-xs px-2 py-1 rounded-full ${
                {
                  easy: "bg-green-100 text-green-800",
                  medium: "bg-yellow-100 text-yellow-800",
                  hard: "bg-red-100 text-red-800"
                }[story.difficulty]
              }`}>
                {story.difficulty.charAt(0).toUpperCase() + story.difficulty.slice(1)}
              </span>
              <span className="text-xs text-gray-500">Ages {story.ageGroup}</span>
            </div>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Terminal initialMessage={story.terminalPrompt} />
        </div>
      </div>
    </div>
  );
};

export default LogicStories;
