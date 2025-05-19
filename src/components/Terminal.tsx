
import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface TerminalProps {
  initialMessage?: string;
}

const Terminal = ({ initialMessage = "Welcome to the Logic Games Terminal!\nType 'help' to see available commands." }: TerminalProps) => {
  const [history, setHistory] = useState<{type: 'input' | 'output', text: string}[]>([
    { type: 'output', text: initialMessage }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    // Add the command to history
    setHistory(prev => [...prev, { type: 'input', text: command }]);
    
    // Process command
    let response = '';
    const lowerCommand = command.toLowerCase().trim();
    
    if (lowerCommand === 'help') {
      response = `Available commands:
- help: Display this help message
- clear: Clear the terminal
- game detective: Start the detective game
- game maze: Start the logic maze game
- game codebreaker: Start the code breaker game
- game puzzler: Start the logic puzzler game
- exit: Exit the current game`;
    } 
    else if (lowerCommand === 'clear') {
      setHistory([{ type: 'output', text: initialMessage }]);
      return;
    }
    else if (lowerCommand.startsWith('game')) {
      const gameName = lowerCommand.split(' ')[1];
      
      if (gameName === 'detective') {
        response = `Detective Logic Game started!
        
You are a detective investigating a robbery. There are three suspects:
- Alice: I was at the library all day
- Bob: I was with Charlie at the café
- Charlie: I was alone at the park

One of them is lying. Who committed the crime?

Type your answer: "Alice", "Bob", or "Charlie"`;
      } 
      else if (gameName === 'maze') {
        response = `Logic Maze Game started!
        
You are in a maze. You can go:
- north
- east
- south
- west

Where do you want to go?`;
      }
      else if (gameName === 'codebreaker') {
        response = `Code Breaker Game started!
        
Decode this message: ORJLF JDPH
Hint: Caesar cipher with shift of 3

Type your answer:`;
      }
      else if (gameName === 'puzzler') {
        response = `Logic Puzzler Game started!
        
If all Blips are Blops, and some Blops are Bloops, then:

a) All Blips are Bloops
b) Some Blips are Bloops
c) No Blips are Bloops
d) Cannot be determined

Type your answer (a, b, c, or d):`;
      }
      else {
        response = `Unknown game: "${gameName}". Type 'help' to see available games.`;
      }
    }
    else if (lowerCommand === 'alice' || lowerCommand === 'bob' || lowerCommand === 'charlie') {
      if (lowerCommand === 'charlie') {
        response = "Correct! Charlie was lying. Good detective work!";
        toast({
          title: "Game Complete!",
          description: "You solved the detective mystery!",
        });
      } else {
        response = "That's not the right culprit. Try again!";
      }
    }
    else if (['north', 'east', 'south', 'west'].includes(lowerCommand)) {
      if (lowerCommand === 'east') {
        response = "You found the exit! Congratulations!";
        toast({
          title: "Game Complete!",
          description: "You escaped the logic maze!",
        });
      } else {
        response = "You hit a wall. Try another direction.";
      }
    }
    else if (lowerCommand === 'logic game') {
      response = "Correct! You deciphered the code!";
      toast({
        title: "Game Complete!",
        description: "You cracked the code!",
      });
    }
    else if (['a', 'b', 'c', 'd'].includes(lowerCommand)) {
      if (lowerCommand === 'b') {
        response = "Correct! Some Blips are Bloops is the logical conclusion.";
        toast({
          title: "Game Complete!",
          description: "You solved the logic puzzle!",
        });
      } else {
        response = "That's not the correct logical conclusion. Try again!";
      }
    }
    else if (lowerCommand === 'exit') {
      response = "Exited the current game. Type 'help' to see available commands.";
    }
    else {
      response = `Command not recognized: "${command}". Type 'help' for available commands.`;
    }
    
    // Add the response to history
    setHistory(prev => [...prev, { type: 'output', text: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount and when clicked anywhere in terminal
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col bg-black text-green-400 rounded-lg border-2 border-gray-700 overflow-hidden h-[500px]">
      <div className="flex items-center bg-gray-800 px-4 py-2">
        <TerminalIcon size={18} className="mr-2" />
        <div className="text-sm font-bold">Logic Games Terminal</div>
      </div>
      
      <div 
        ref={terminalRef}
        className="flex-grow overflow-y-auto p-4 font-mono text-sm whitespace-pre-wrap"
        onClick={focusInput}
      >
        {history.map((item, index) => (
          <div key={index} className={`mb-2 ${item.type === 'input' ? 'text-blue-300' : ''}`}>
            {item.type === 'input' ? '> ' : ''}{item.text}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex border-t border-gray-700 bg-gray-900">
        <div className="text-blue-300 p-2 select-none">{'>'}</div>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent outline-none text-green-400 p-2 font-mono"
          placeholder="Type a command..."
        />
        <Button type="submit" variant="ghost" className="text-green-400 hover:text-white hover:bg-gray-800">
          Enter
        </Button>
      </form>
    </div>
  );
};

export default Terminal;
