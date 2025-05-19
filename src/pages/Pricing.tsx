
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    childAge: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    toast({
      title: "Enquiry Submitted",
      description: "We'll be in touch soon regarding your one-to-one lesson request.",
    });
    setFormData({
      name: "",
      email: "",
      childAge: "",
      message: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-logic-blue">Pricing Plans</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Choose the perfect plan to help your child develop their logical thinking skills.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Free Plan */}
        <Card className="p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-2 text-center">Free Access</h2>
          <p className="text-4xl font-bold text-center mb-6">
            $0<span className="text-base font-normal">/month</span>
          </p>
          
          <Badge className="mx-auto mb-6 bg-logic-green">Get Started</Badge>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="mr-2 text-logic-green">✓</span>
              Access to basic logic games
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-logic-green">✓</span>
              Downloadable worksheets
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-logic-green">✓</span>
              Progress tracking
            </li>
            <li className="flex items-center text-gray-400">
              <span className="mr-2">✗</span>
              One-to-one lessons
            </li>
            <li className="flex items-center text-gray-400">
              <span className="mr-2">✗</span>
              Advanced learning materials
            </li>
          </ul>
          
          <Button className="w-full bg-logic-blue hover:bg-logic-blue/90">
            Sign Up Free
          </Button>
        </Card>
        
        {/* Premium Plan */}
        <Card className="p-8 border-2 border-logic-blue hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-2 text-center">One-to-One Lessons</h2>
          <p className="text-4xl font-bold text-center mb-6">
            $50<span className="text-base font-normal">/lesson</span>
          </p>
          
          <Badge className="mx-auto mb-6 bg-logic-blue">Personalized Learning</Badge>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="mr-2 text-logic-blue">✓</span>
              Everything in Free plan
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-logic-blue">✓</span>
              Personalized one-to-one lessons
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-logic-blue">✓</span>
              Custom learning path
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-logic-blue">✓</span>
              Advanced learning materials
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-logic-blue">✓</span>
              Progress reports
            </li>
          </ul>
          
          <Button className="w-full bg-logic-blue hover:bg-logic-blue/90">
            Book a Lesson
          </Button>
        </Card>
      </div>
      
      {/* Enquiry Form */}
      <div className="max-w-2xl mx-auto bg-blue-50 rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Enquire About One-to-One Lessons</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="childAge" className="block mb-1 font-medium">Child's Age</label>
            <select
              id="childAge"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">Select age...</option>
              <option value="8">8 years</option>
              <option value="9">9 years</option>
              <option value="10">10 years</option>
              <option value="11">11 years</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Tell us about your child's needs and when you'd like to schedule lessons."
            ></textarea>
          </div>
          
          <Button type="submit" className="w-full bg-logic-blue hover:bg-logic-blue/90">
            Submit Enquiry
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Pricing;
