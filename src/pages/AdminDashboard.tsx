
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Users, FileText, BarChart, CreditCard } from "lucide-react";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    toast.success("Question image uploaded successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2 text-logic-blue">Admin Dashboard</h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Manage content, users, classes, and monitor progress.
      </p>
      
      <Tabs defaultValue="questions" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="questions">
            <FileText className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Questions</span>
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Users</span>
          </TabsTrigger>
          <TabsTrigger value="classes">
            <Users className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Classes</span>
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <BarChart className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="payments">
            <CreditCard className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Payments</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Questions Tab Content */}
        <TabsContent value="questions" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Upload New Question</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Upload a Question Image</h3>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="w-full" onClick={() => document.getElementById("admin-question-upload")?.click()}>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                    <input 
                      id="admin-question-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Question Type</h3>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Pattern Recognition</option>
                    <option>Series Completion</option>
                    <option>Analogies</option>
                    <option>Classification</option>
                    <option>Spatial Visualization</option>
                    <option>Matrices</option>
                  </select>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Correct Answer</h3>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                    <option value="e">E</option>
                  </select>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Explanation</h3>
                  <textarea 
                    className="w-full border border-gray-300 rounded-md p-2 min-h-[100px]"
                    placeholder="Enter explanation for the correct answer..."
                  ></textarea>
                </div>
                
                <Button className="w-full">Save Question</Button>
              </div>
            </Card>
            
            <Card className="p-6 lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Question Preview</h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-6 min-h-[300px] flex items-center justify-center">
                {uploadedImage ? (
                  <img 
                    src={uploadedImage} 
                    alt="Question preview" 
                    className="max-w-full max-h-[400px] object-contain"
                  />
                ) : (
                  <p className="text-gray-500">Upload an image to preview</p>
                )}
              </div>
            </Card>
          </div>
          
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Question Library</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Answer</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pattern Recognition</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">B</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-05-10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                    </td>
                  </tr>
                  {/* Sample entries */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Series Completion</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-05-12</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
        
        {/* Users Tab Content */}
        <TabsContent value="users">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <p className="text-gray-500 mb-6">This section will allow you to manage users, their permissions, and their progress.</p>
            <div className="p-8 text-center text-gray-500">
              <p>User management features coming soon.</p>
            </div>
          </Card>
        </TabsContent>
        
        {/* Classes Tab Content */}
        <TabsContent value="classes">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Class Groups</h2>
            <p className="text-gray-500 mb-6">Organize users into classes and manage group assignments.</p>
            <div className="p-8 text-center text-gray-500">
              <p>Class management features coming soon.</p>
            </div>
          </Card>
        </TabsContent>
        
        {/* Analytics Tab Content */}
        <TabsContent value="analytics">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Performance Analytics</h2>
            <p className="text-gray-500 mb-6">Track user and class progress with detailed analytics.</p>
            <div className="p-8 text-center text-gray-500">
              <p>Analytics features coming soon.</p>
            </div>
          </Card>
        </TabsContent>
        
        {/* Payments Tab Content */}
        <TabsContent value="payments">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <p className="text-gray-500 mb-6">Manage subscription payments and billing information.</p>
            <div className="p-8 text-center text-gray-500">
              <p>Payment management features coming soon.</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
