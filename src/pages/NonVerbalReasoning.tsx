
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowDown, Check, Info, Upload } from "lucide-react";
import { toast } from "sonner";

const NonVerbalReasoning = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHints, setShowHints] = useState(false);
  
  // Sample question data - in a real app, this would come from a database
  const sampleQuestions = [
    {
      id: 1,
      image: "/lovable-uploads/2bf7f3cb-4afc-4b2a-8bec-5901ad7a94eb.png",
      correctAnswer: "b",
      explanation: "This question tests pattern recognition. The rule is that triangles rotate 180° moving from left to right. The top triangle moves down and the bottom triangle moves up in each step. Option B continues this pattern correctly.",
      hints: [
        "Look at how the triangles are positioned in each figure",
        "Notice the rotation patterns from left to right",
        "Consider how the triangles change position relative to each other"
      ]
    },
    // More questions would be added here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(sampleQuestions[0]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result as string);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowExplanation(false);
    };
    reader.readAsDataURL(file);
    toast.success("Question image uploaded successfully!");
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
    setIsCorrect(null);
    setShowExplanation(false);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) {
      toast.error("Please select an answer first");
      return;
    }
    
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      toast.success("Correct! Well done!");
    } else {
      toast.error("Incorrect. Try again or check the explanation.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Non-Verbal Reasoning</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Practice non-verbal reasoning problems by uploading question images or using our sample questions.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="p-6 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Question Controls</h2>
          
          <div className="space-y-6">
            {/* Upload Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Upload a Question</h3>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="w-full" onClick={() => document.getElementById("question-upload")?.click()}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
                <input 
                  id="question-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            
            {/* Sample Questions */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Sample Questions</h3>
              <div className="space-y-2">
                {sampleQuestions.map((q) => (
                  <Button 
                    key={q.id}
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      setCurrentQuestion(q);
                      setUploadedImage(null);
                      setSelectedAnswer(null);
                      setIsCorrect(null);
                      setShowExplanation(false);
                    }}
                  >
                    Question {q.id}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Question Display</h2>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6 min-h-[200px] flex items-center justify-center">
            {uploadedImage ? (
              <img 
                src={uploadedImage} 
                alt="Uploaded question" 
                className="max-w-full max-h-[400px] object-contain"
              />
            ) : (
              <img 
                src={currentQuestion.image} 
                alt={`Question ${currentQuestion.id}`} 
                className="max-w-full max-h-[400px] object-contain"
              />
            )}
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Select Your Answer:</h3>
          
          <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect} className="mb-6">
            <div className="grid grid-cols-5 gap-4">
              {['a', 'b', 'c', 'd', 'e'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${option}`} />
                  <Label htmlFor={`option-${option}`} className="capitalize">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button onClick={handleCheckAnswer}>
              <Check className="mr-2 h-4 w-4" />
              Check Answer
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                onClick={() => setShowHints(!showHints)}
                className="flex-1 sm:flex-none"
              >
                <Info className="mr-2 h-4 w-4" />
                {showHints ? "Hide Hints" : "Show Hints"}
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => setShowExplanation(!showExplanation)}
                className="flex-1 sm:flex-none"
              >
                <ArrowDown className={`mr-2 h-4 w-4 transition-transform ${showExplanation ? 'rotate-180' : ''}`} />
                {showExplanation ? "Hide Explanation" : "Show Explanation"}
              </Button>
            </div>
          </div>
          
          {isCorrect !== null && (
            <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <p className="font-semibold">
                {isCorrect ? 'Correct answer!' : 'Incorrect answer.'}
              </p>
            </div>
          )}
          
          {showHints && (
            <div className="mt-4 p-4 rounded-lg bg-blue-50">
              <h4 className="font-semibold mb-2">Hints:</h4>
              <ul className="list-disc list-inside space-y-1">
                {currentQuestion.hints.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            </div>
          )}
          
          <Collapsible open={showExplanation} onOpenChange={setShowExplanation} className="mt-4">
            <CollapsibleContent>
              <div className="p-4 rounded-lg bg-yellow-50">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p>{currentQuestion.explanation}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      </div>
      
      <div className="bg-blue-50 rounded-3xl p-8 mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Types of Non-Verbal Reasoning Problems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-blue">Pattern Recognition</h3>
            <p>Identifying the rules that determine how shapes, symbols or figures relate to each other and continue the pattern.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-purple">Series Completion</h3>
            <p>Determining which image logically completes a sequence based on transformations like rotation, reflection or progression.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-logic-orange">Analogies</h3>
            <p>Understanding the relationship between one pair of figures and applying the same relationship to complete another pair.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-green-600">Classification</h3>
            <p>Identifying which figure does not belong in a group based on common characteristics or rules.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-pink-600">Spatial Visualization</h3>
            <p>Mentally manipulating shapes or understanding how 2D patterns fold into 3D objects.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-cyan-600">Matrices</h3>
            <p>Analyzing grid-based problems where figures follow rules across rows and columns to determine the missing element.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonVerbalReasoning;
