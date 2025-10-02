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

export default function ElderlyRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    medicalInformation: "",
    communicationMethod: "",
    accessibilityNeeds: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register/elder`, {
        name: formData.fullName,
        contact: formData.contactNumber,
        address: formData.address,
        // You may need to add other fields to your backend model
        // For now, we'll send the core fields
        password: "defaultPassword", // You need a password field
      });
      console.log("Elderly registration successful:", response.data);
      // TODO: Handle success (e.g., show a success message, redirect to login)
    } catch (error) {
      if (error.response) {
        console.error("Registration failed:", error.response.data.error);
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
      // TODO: Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Header />
      
      {/* Main Content */}
      <main className="py-5 px-4 md:px-8 lg:px-40">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="px-4 py-4">
            <h1 className="text-[#0D141C] text-2xl md:text-3xl font-bold leading-tight">
              Elderly User Registration
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

              {/* Contact Number */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Contact Number
                  </Label>
                  <Input
                    type="tel"
                    placeholder="Enter your contact number"
                    value={formData.contactNumber}
                    onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Address
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Emergency Contact Name */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Emergency Contact Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter emergency contact name"
                    value={formData.emergencyContactName}
                    onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Emergency Contact Number */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Emergency Contact Number
                  </Label>
                  <Input
                    type="tel"
                    placeholder="Enter emergency contact number"
                    value={formData.emergencyContactNumber}
                    onChange={(e) => handleInputChange('emergencyContactNumber', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Medical Information */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Medical Information
                  </Label>
                  <Textarea
                    placeholder="Please share any relevant medical information, allergies, or conditions we should know about"
                    value={formData.medicalInformation}
                    onChange={(e) => handleInputChange('medicalInformation', e.target.value)}
                    className="min-h-[144px] bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB] resize-none"
                  />
                </div>
              </div>

              {/* Preferred Communication Method */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Preferred Communication Method
                  </Label>
                  <Select value={formData.communicationMethod} onValueChange={(value) => handleInputChange('communicationMethod', value)}>
                    <SelectTrigger className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base text-[#0D141C] focus:ring-1 focus:ring-[#4799EB]">
                      <SelectValue placeholder="Select method" className="text-[#0D141C]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="text">Text Message</SelectItem>
                      <SelectItem value="mail">Physical Mail</SelectItem>
                      <SelectItem value="in-person">In-Person Visit</SelectItem>
                      <SelectItem value="family-contact">Through Family/Emergency Contact</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Accessibility Needs */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Accessibility Needs
                  </Label>
                  <Select value={formData.accessibilityNeeds} onValueChange={(value) => handleInputChange('accessibilityNeeds', value)}>
                    <SelectTrigger className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base text-[#0D141C] focus:ring-1 focus:ring-[#4799EB]">
                      <SelectValue placeholder="Select needs" className="text-[#0D141C]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No special needs</SelectItem>
                      <SelectItem value="mobility">Mobility assistance needed</SelectItem>
                      <SelectItem value="vision">Vision impairment</SelectItem>
                      <SelectItem value="hearing">Hearing impairment</SelectItem>
                      <SelectItem value="cognitive">Cognitive support needed</SelectItem>
                      <SelectItem value="language">Language assistance needed</SelectItem>
                      <SelectItem value="wheelchair">Wheelchair accessible spaces needed</SelectItem>
                      <SelectItem value="multiple">Multiple accessibility needs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="px-4 py-3">
                <Button 
                  type="submit"
                  className="w-full h-10 bg-[#4799EB] hover:bg-[#3a7bc2] text-[#0D141C] font-bold text-sm rounded-lg border-0"
                >
                  Submit Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
