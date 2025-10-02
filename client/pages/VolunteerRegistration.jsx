import Header from "../components/Header.jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import axios from "axios";

export default function VolunteerRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    bio: "",
    profilePicture: null,
    identity: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('name', formData.fullName);
    postData.append('contact', formData.phone);
    postData.append('skills', formData.skills);
    postData.append('availability', formData.availability);
    postData.append('password', 'defaultPassword'); // Add a password field
    if (formData.profilePicture) {
      postData.append('profilePicture', formData.profilePicture);
    }
    if (formData.identity) {
      postData.append('identity', formData.identity);
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register/volunteer`, postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Volunteer registration successful:", response.data);
      // TODO: Handle success
    } catch (error) {
      if (error.response) {
        console.error("Registration failed:", error.response.data.error);
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
      // TODO: Handle error
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Header />
      
      {/* Main Content */}
      <main className="py-5 px-4 md:px-8 lg:px-40">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center py-5 px-4 mb-3">
            <h1 className="text-[#0D141C] text-2xl md:text-3xl font-bold leading-tight">
              Volunteer Registration
            </h1>
          </div>

          {/* Registration Form */}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Skills
                  </Label>
                  <Select value={formData.skills} onValueChange={(value) => handleInputChange('skills', value)}>
                    <SelectTrigger className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base text-[#0D141C] focus:ring-1 focus:ring-[#4799EB]">
                      <SelectValue placeholder="Select your skills" className="text-[#0D141C]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="companionship">Companionship</SelectItem>
                      <SelectItem value="transportation">Transportation</SelectItem>
                      <SelectItem value="medical-assistance">Medical Assistance</SelectItem>
                      <SelectItem value="technology-help">Technology Help</SelectItem>
                      <SelectItem value="cooking">Cooking</SelectItem>
                      <SelectItem value="cleaning">House Cleaning</SelectItem>
                      <SelectItem value="gardening">Gardening</SelectItem>
                      <SelectItem value="reading">Reading/Writing</SelectItem>
                      <SelectItem value="exercise">Exercise/Physical Activity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Availability */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Availability
                  </Label>
                  <Textarea
                    placeholder="Please describe your availability (days, times, frequency)"
                    value={formData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value)}
                    className="min-h-[144px] bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB] resize-none"
                  />
                </div>
              </div>

              {/* Brief Bio */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Brief Bio
                  </Label>
                  <Textarea
                    placeholder="Tell us about yourself and why you want to volunteer"
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="min-h-[144px] bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB] resize-none"
                  />
                </div>
              </div>

              {/* Profile Picture */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Profile Picture
                  </Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange('profilePicture', e.target.files[0])}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#4799EB] file:text-[#0D141C] hover:file:bg-[#3a7bc2] focus-visible:ring-1 focus-visible:ring-[#4799EB] file:cursor-pointer cursor-pointer"
                    title="Upload a profile picture"
                  />
                  {formData.profilePicture && (
                    <p className="text-sm text-[#4F7396] mt-1">
                      Selected: {formData.profilePicture.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Identity Verification */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Identity Verification
                  </Label>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange('identity', e.target.files[0])}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#4799EB] file:text-[#0D141C] hover:file:bg-[#3a7bc2] focus-visible:ring-1 focus-visible:ring-[#4799EB] file:cursor-pointer cursor-pointer"
                    title="Verify your identity (PDF, JPG, PNG)"
                  />
                  {formData.identity && (
                    <p className="text-sm text-[#4F7396] mt-1">
                      Selected: {formData.identity.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="px-4 py-3">
                <Button 
                  type="submit"
                  className="w-full h-10 bg-[#4799EB] hover:bg-[#3a7bc2] text-[#0D141C] font-bold text-sm rounded-lg border-0"
                >
                  Complete Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
