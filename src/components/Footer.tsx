import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Send
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "For Employers",
      links: [
        "Post a Job",
        "Search Candidates",
        "Staffing Solutions",
        "Client Portal",
        "Success Stories"
      ]
    },
    {
      title: "For Job Seekers",
      links: [
        "Browse Jobs",
        "Upload Resume",
        "Career Resources",
        "Candidate Portal",
        "Interview Tips"
      ]
    },
    {
      title: "Industries",
      links: [
        "Healthcare Staffing",
        "IT Recruitment",
        "Administrative Support",
        "Temporary Services",
        "Direct Hire"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Certifications",
        "Privacy Policy",
        "Terms of Service"
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const quickContacts = [
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "info@hiringbuddy.com", href: "mailto:info@hiringbuddy.com" },
    { icon: MapPin, text: "123 Business District, Suite 500", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-primary-foreground/80 text-lg">
                Get the latest job opportunities and industry insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
              <Button variant="secondary" className="group">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-2xl font-bold">Hiringbuddy</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Connecting exceptional talent with forward-thinking companies. 
              Your trusted partner for healthcare, IT, and administrative staffing solutions.
            </p>

            {/* Quick Contact */}
            <div className="space-y-3">
              {quickContacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{contact.text}</span>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-4 items-center text-sm text-primary-foreground/80">
            <div>
              © 2024 Hiringbuddy. All rights reserved.
            </div>
            <div className="text-center">
              Licensed & Insured Staffing Agency
            </div>
            <div className="md:text-right">
              <span className="mr-4">Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;