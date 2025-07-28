import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, UserCheck, Globe, Heart, Code, FileText, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Clock,
      title: "Temporary Staffing",
      description: "Flexible staffing solutions for short-term projects and seasonal demands. Quick deployment with vetted professionals.",
      features: ["Same-day placement", "Flexible contracts", "Pre-screened candidates"],
      color: "text-blue-600"
    },
    {
      icon: UserCheck,
      title: "Direct Hire",
      description: "Permanent placement services for key positions. We find the perfect cultural and skill fit for your organization.",
      features: ["90-day guarantee", "Cultural fit assessment", "Executive search"],
      color: "text-green-600"
    },
    {
      icon: Globe,
      title: "Remote Talent",
      description: "Access global talent pool for remote positions. Specialized in tech and administrative roles with timezone flexibility.",
      features: ["Global reach", "Time zone matching", "Remote onboarding"],
      color: "text-purple-600"
    }
  ];

  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Nurses, medical assistants, healthcare administrators, and specialized medical professionals.",
      openings: "150+ positions"
    },
    {
      icon: Code,
      title: "Information Technology",
      description: "Developers, system administrators, cybersecurity experts, and IT support specialists.",
      openings: "200+ positions"
    },
    {
      icon: FileText,
      title: "Administrative",
      description: "Office managers, executive assistants, data entry specialists, and customer service representatives.",
      openings: "100+ positions"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Staffing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive recruitment services tailored to your business needs. 
            From temporary coverage to permanent placements, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industries Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Industries We Serve
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise across key sectors with deep understanding of industry-specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/30">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-secondary-dark" />
                  </div>
                  <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="bg-secondary/10 rounded-lg px-4 py-2">
                    <span className="text-secondary-dark font-semibold">{industry.openings}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;