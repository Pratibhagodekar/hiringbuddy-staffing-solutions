import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Matching",
      description: "We don't just fill positions – we create perfect matches between talent and opportunity."
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Fast turnaround times without compromising on quality. Average placement in 48 hours."
    },
    {
      icon: Users,
      title: "Human-Centered Approach",
      description: "Every candidate and client receives personalized attention and dedicated support."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous screening process ensures only the best candidates reach your desk."
    }
  ];

  const achievements = [
    { number: "7+", label: "Years Experience" },
    { number: "1000+", label: "Successful Placements" },
    { number: "500+", label: "Partner Companies" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const certifications = [
    "Certified Staffing Professional (CSP)",
    "Society for Human Resource Management (SHRM)",
    "National Association of Personnel Services (NAPS)",
    "Equal Employment Opportunity Certified"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Hiringbuddy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that the right connection can transform careers and businesses, 
            Hiringbuddy has been connecting exceptional talent with forward-thinking companies since 2017.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              What started as a small recruitment firm has grown into a trusted partner for hundreds of 
              companies across healthcare, IT, and administrative sectors. Our success comes from understanding 
              that behind every resume is a person with dreams, and behind every job posting is a company with goals.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We've built our reputation on transparency, integrity, and results. Our team of experienced 
              recruiters combines industry expertise with cutting-edge technology to deliver unmatched 
              staffing solutions.
            </p>
            <Button variant="cta" size="lg" className="group">
              Join Our Network
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="text-4xl font-bold text-secondary mr-6">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-medium text-primary">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-secondary-dark" />
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-muted/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">Certifications & Memberships</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;