import Header from "../components/Header.jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";

export default function NGORegistration() {
  const [formData, setFormData] = useState({
    organizationName: "",
    missionStatement: "",
    servicesOffered: "",
    contactEmail: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    logo: null,
    documents: []
  });

  const logoInputRef = useRef(null);
  const documentsInputRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field, files) => {
    if (field === 'documents') {
      setFormData(prev => ({
        ...prev,
        [field]: [...prev[field], ...Array.from(files)]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: files[0]
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, field) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileChange(field, files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("NGO Form submitted:", formData);
    // Handle form submission here
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
              NGO Registration
            </h1>
          </div>

          {/* Registration Form */}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Organization Name */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Organization Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter organization name"
                    value={formData.organizationName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Mission Statement */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Mission Statement
                  </Label>
                  <Textarea
                    placeholder="Describe your organization's mission and goals"
                    value={formData.missionStatement}
                    onChange={(e) => handleInputChange('missionStatement', e.target.value)}
                    className="min-h-[144px] bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB] resize-none"
                  />
                </div>
              </div>

              {/* Services Offered */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Services Offered
                  </Label>
                  <Textarea
                    placeholder="List the services your organization provides to elderly individuals"
                    value={formData.servicesOffered}
                    onChange={(e) => handleInputChange('servicesOffered', e.target.value)}
                    className="min-h-[144px] bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB] resize-none"
                  />
                </div>
              </div>

              {/* Contact Email */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Contact Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter contact email"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
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
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
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
                    placeholder="Enter organization address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* City */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    City
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* State */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    State
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Zip Code */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Zip Code
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter zip code"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <Label className="text-[#0D141C] text-base font-normal">
                    Country
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter country"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="h-14 bg-[#F7FAFC] border-[#D1DBE8] text-base placeholder:text-[#4F7396] focus-visible:ring-1 focus-visible:ring-[#4799EB]"
                  />
                </div>
              </div>

              {/* Upload Logo */}
              <div className="p-4">
                <div 
                  className="flex flex-col items-center justify-center py-14 px-6 border-2 border-dashed border-[#D1DBE8] rounded-lg bg-white cursor-pointer hover:border-[#4799EB] transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, 'logo')}
                  onClick={() => logoInputRef.current?.click()}
                >
                  <div className="text-center space-y-2 mb-6">
                    <h3 className="text-[#0D141C] text-lg font-bold">
                      Upload Logo
                    </h3>
                    <p className="text-[#0D141C] text-sm max-w-md">
                      Drag and drop or browse to upload your organization's logo.
                    </p>
                  </div>
                  <Button 
                    type="button"
                    variant="secondary"
                    className="h-10 px-4 bg-[#E8EDF2] hover:bg-[#d1dbe6] text-[#0D141C] font-bold text-sm rounded-lg border-0"
                  >
                    Upload
                  </Button>
                  <input
                    ref={logoInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange('logo', e.target.files)}
                    className="hidden"
                  />
                  {formData.logo && (
                    <p className="text-sm text-[#4F7396] mt-2">
                      Selected: {formData.logo.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Upload Documents */}
              <div className="p-4">
                <div 
                  className="flex flex-col items-center justify-center py-14 px-6 border-2 border-dashed border-[#D1DBE8] rounded-lg bg-white cursor-pointer hover:border-[#4799EB] transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, 'documents')}
                  onClick={() => documentsInputRef.current?.click()}
                >
                  <div className="text-center space-y-2 mb-6">
                    <h3 className="text-[#0D141C] text-lg font-bold">
                      Upload Documents
                    </h3>
                    <p className="text-[#0D141C] text-sm max-w-md">
                      Drag and drop or browse to upload relevant documents (e.g., certifications).
                    </p>
                  </div>
                  <Button 
                    type="button"
                    variant="secondary"
                    className="h-10 px-4 bg-[#E8EDF2] hover:bg-[#d1dbe6] text-[#0D141C] font-bold text-sm rounded-lg border-0"
                  >
                    Upload
                  </Button>
                  <input
                    ref={documentsInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    multiple
                    onChange={(e) => handleFileChange('documents', e.target.files)}
                    className="hidden"
                  />
                  {formData.documents.length > 0 && (
                    <div className="text-sm text-[#4F7396] mt-2 text-center">
                      {formData.documents.length} file(s) selected:
                      <ul className="mt-1">
                        {formData.documents.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="px-4 py-3">
                <Button 
                  type="submit"
                  className="w-full h-10 bg-[#4799EB] hover:bg-[#3a7bc2] text-[#0D141C] font-bold text-sm rounded-lg border-0"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
