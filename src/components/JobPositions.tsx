import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, DollarSign, Search, Filter, Briefcase, Users, Heart, Code, FileText } from "lucide-react";

const JobPositions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Positions", icon: Briefcase },
    { id: "healthcare", name: "Healthcare", icon: Heart },
    { id: "it", name: "Information Technology", icon: Code },
    { id: "administrative", name: "Administrative", icon: FileText }
  ];

  const jobs = [
    {
      id: 1,
      title: "Registered Nurse - ICU",
      company: "Metro Health System",
      category: "healthcare",
      type: "Full-time",
      location: "Downtown Medical Center",
      salary: "$75,000 - $95,000",
      description: "Seeking experienced ICU nurse for fast-paced environment. Critical care certification preferred.",
      requirements: ["BSN required", "2+ years ICU experience", "ACLS certification"],
      posted: "2 days ago",
      urgency: "urgent"
    },
    {
      id: 2,
      title: "Senior Software Developer",
      company: "TechFlow Solutions",
      category: "it",
      type: "Full-time",
      location: "Remote / Hybrid",
      salary: "$90,000 - $130,000",
      description: "Lead development of cutting-edge applications using modern tech stack. Flexible remote work options.",
      requirements: ["5+ years experience", "React/Node.js", "Team leadership skills"],
      posted: "1 day ago",
      urgency: "normal"
    },
    {
      id: 3,
      title: "Executive Assistant",
      company: "Global Enterprises",
      category: "administrative",
      type: "Full-time",
      location: "Corporate Headquarters",
      salary: "$55,000 - $70,000",
      description: "Support C-level executives with administrative tasks, scheduling, and project coordination.",
      requirements: ["3+ years executive support", "Excellent communication", "Project management skills"],
      posted: "3 days ago",
      urgency: "normal"
    },
    {
      id: 4,
      title: "Medical Assistant",
      company: "Family Care Clinic",
      category: "healthcare",
      type: "Part-time",
      location: "Suburban Location",
      salary: "$18 - $25/hour",
      description: "Assist physicians with patient care in friendly family practice. Great work-life balance.",
      requirements: ["Medical assistant certification", "Patient care experience", "EMR knowledge"],
      posted: "1 week ago",
      urgency: "normal"
    },
    {
      id: 5,
      title: "IT Support Specialist",
      company: "Regional Bank",
      category: "it",
      type: "Contract",
      location: "Multiple Branches",
      salary: "$25 - $35/hour",
      description: "Provide technical support across multiple bank locations. Hardware/software troubleshooting.",
      requirements: ["CompTIA A+ preferred", "Customer service skills", "Banking experience plus"],
      posted: "4 days ago",
      urgency: "normal"
    },
    {
      id: 6,
      title: "Data Entry Clerk",
      company: "Insurance Partners",
      category: "administrative",
      type: "Temporary",
      location: "Office Park East",
      salary: "$16 - $20/hour",
      description: "Temporary data entry position with potential for permanent placement. Fast-paced environment.",
      requirements: ["Strong typing skills", "Attention to detail", "Microsoft Office proficiency"],
      posted: "5 days ago",
      urgency: "normal"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-primary/10 text-primary";
      case "Part-time": return "bg-secondary/10 text-secondary-dark";
      case "Contract": return "bg-purple-100 text-purple-700";
      case "Temporary": return "bg-orange-100 text-orange-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="positions" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Open Positions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover your next career opportunity with our current openings. 
            From healthcare to technology, find the perfect role for your skills and aspirations.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-background rounded-xl p-6 shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold">{filteredJobs.length}</span> positions
            {selectedCategory !== "all" && (
              <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
            )}
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      {job.urgency === "urgent" && (
                        <Badge className="bg-red-100 text-red-700">Urgent</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="cta" size="sm">
                      Apply Now
                    </Button>
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge className={getTypeColor(job.type)}>
                      {job.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{job.description}</p>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More / Contact */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see the perfect position? We're always adding new opportunities.
          </p>
          <Button variant="outline" size="lg" className="mr-4">
            View More Jobs
          </Button>
          <Button variant="cta" size="lg">
            Submit Your Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobPositions;