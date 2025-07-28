import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "HR Director",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Hiringbuddy found us the perfect software developer within 48 hours. Their understanding of our technical requirements and company culture was impressive."
    },
    {
      name: "Dr. James Rodriguez",
      role: "Chief Medical Officer",
      company: "Metro Health System",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "The quality of healthcare professionals Hiringbuddy provides is outstanding. They've been our trusted staffing partner for over 3 years."
    },
    {
      name: "Lisa Chen",
      role: "Operations Manager",
      company: "Global Enterprises",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "From temporary coverage to permanent placements, Hiringbuddy consistently delivers exceptional administrative talent that fits our needs perfectly."
    },
    {
      name: "Michael Thompson",
      role: "Software Engineer",
      company: "Recently Placed",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "The team at Hiringbuddy didn't just find me a job - they found me a career. Their guidance throughout the process was invaluable."
    },
    {
      name: "Jennifer Davis",
      role: "Registered Nurse",
      company: "Family Care Clinic",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Hiringbuddy helped me transition from hospital work to clinic work seamlessly. They understood exactly what I was looking for in my next role."
    },
    {
      name: "David Park",
      role: "Executive Assistant",
      company: "Regional Bank",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Professional, responsive, and results-driven. Hiringbuddy made my job search stress-free and landed me in the perfect executive support role."
    }
  ];

  const stats = [
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "1000+", label: "Successful Placements" },
    { number: "48hrs", label: "Average Match Time" },
    { number: "500+", label: "Partner Companies" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what employers and job seekers have to say about their experience with Hiringbuddy.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-secondary/30" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-secondary-dark font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our success stories?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-light transition-colors"
            >
              Start Your Success Story
            </a>
            <a
              href="#positions"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-base font-medium rounded-lg text-secondary-dark hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Browse Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;