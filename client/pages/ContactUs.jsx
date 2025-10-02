import { useState } from "react";
import Header from "../components/Header.jsx";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        userType: ""
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D141C] mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-[#4F7396] leading-relaxed">
            We're here to help! Reach out to us with any questions, suggestions, 
            or if you need assistance with ElderConnect.
          </p>
        </div>
      </section>

      <div className="px-4 md:px-8 lg:px-40 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0D141C] mb-6">
                  Send us a Message
                </h2>
                
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-[#0D141C] font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2 h-12 bg-[#F7FAFC] border-[#D1DBE8] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-[#0D141C] font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2 h-12 bg-[#F7FAFC] border-[#D1DBE8] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  {/* User Type */}
                  <div>
                    <Label htmlFor="userType" className="text-[#0D141C] font-medium">
                      I am a...
                    </Label>
                    <select
                      id="userType"
                      value={formData.userType}
                      onChange={(e) => handleInputChange('userType', e.target.value)}
                      className="mt-2 w-full h-12 bg-[#F7FAFC] border border-[#D1DBE8] rounded-md px-3 text-[#0D141C] focus:outline-none focus:ring-1 focus:ring-[#4799EB]"
                    >
                      <option value="">Select your role</option>
                      <option value="elderly">Elderly Individual</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="ngo">NGO Representative</option>
                      <option value="family">Family Member</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-[#0D141C] font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="mt-2 h-12 bg-[#F7FAFC] border-[#D1DBE8] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                      placeholder="What is your message about?"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-[#0D141C] font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-2 min-h-[120px] bg-[#F7FAFC] border-[#D1DBE8] focus-visible:ring-1 focus-visible:ring-[#4799EB] resize-none"
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[#4799EB] hover:bg-[#3a7bc2] text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0D141C] mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4799EB] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D141C] mb-1">Email</h3>
                      <p className="text-[#4F7396]">contact@elderconnect.com</p>
                      <p className="text-[#4F7396]">support@elderconnect.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4799EB] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D141C] mb-1">Phone</h3>
                      <p className="text-[#4F7396]">+1 (555) 123-4567</p>
                      <p className="text-sm text-[#4F7396]">Mon-Fri, 9 AM - 6 PM</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4799EB] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D141C] mb-1">Office</h3>
                      <p className="text-[#4F7396]">123 Community Street</p>
                      <p className="text-[#4F7396]">Care City, CC 12345</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0D141C] mb-6">
                  Quick Questions?
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#0D141C] mb-2">
                      How do I register as a volunteer?
                    </h4>
                    <p className="text-[#4F7396] text-sm">
                      Visit our registration page and select "Volunteer" to get started with the application process.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#0D141C] mb-2">
                      Is ElderConnect free to use?
                    </h4>
                    <p className="text-[#4F7396] text-sm">
                      Yes, ElderConnect is completely free for elderly individuals, volunteers, and participating NGOs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#0D141C] mb-2">
                      How do you ensure safety?
                    </h4>
                    <p className="text-[#4F7396] text-sm">
                      All volunteers undergo background checks, and we have safety protocols in place for all interactions.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-[#D1DBE8]">
                  <p className="text-[#4F7396] text-sm">
                    Have more questions? Feel free to reach out using the contact form.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}