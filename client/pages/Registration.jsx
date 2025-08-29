import Header from "../components/Header.jsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Header />
      
      {/* Main Content */}
      <main className="py-5 px-4 md:px-8 lg:px-40">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center py-5 px-4 mb-3">
            <h1 className="text-[#0D141C] text-2xl md:text-3xl font-bold leading-tight">
              Choose your registration type
            </h1>
          </div>

          {/* Registration Options */}
          <div className="space-y-4">
            {/* Volunteer Registration */}
            <div className="p-4">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 rounded-lg">
                <div className="flex-1 max-w-[608px] space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-[#0D141C] text-base font-bold leading-5">
                      Volunteer
                    </h2>
                    <p className="text-[#4F7396] text-sm leading-relaxed">
                      Sign up as a volunteer to offer your time and skills to support the elderly.
                    </p>
                  </div>
                  <Link to="/register/volunteer">
                    <Button
                      variant="secondary"
                      className="h-8 px-4 bg-[#E8EDF2] hover:bg-[#d1dbe6] text-[#0D141C] font-normal text-sm rounded-lg border-0"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 max-w-sm">
                  <img 
                    src="/volunteer.png"
                    alt="Volunteer helping elderly person"
                    className="w-full h-[171px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* NGO Registration */}
            <div className="p-4">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 rounded-lg">
                <div className="flex-1 max-w-[608px] space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-[#0D141C] text-base font-bold leading-5">
                      NGO
                    </h2>
                    <p className="text-[#4F7396] text-sm leading-relaxed">
                      Register your non-profit organization to connect with volunteers and resources.
                    </p>
                  </div>
                  <Link to="/register/ngo">
                    <Button
                      variant="secondary"
                      className="h-8 px-4 bg-[#E8EDF2] hover:bg-[#d1dbe6] text-[#0D141C] font-normal text-sm rounded-lg border-0"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 max-w-sm">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/a2e518df3a7a645fbeaf7a881d8b1ceb4a523f84?width=640"
                    alt="Community group illustration"
                    className="w-full h-[171px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Elderly Registration */}
            <div className="p-4">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 rounded-lg">
                <div className="flex-1 max-w-[608px] space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-[#0D141C] text-base font-bold leading-5">
                      Elderly
                    </h2>
                    <p className="text-[#4F7396] text-sm leading-relaxed">
                      Register as an elderly person to access support services and connect with volunteers.
                    </p>
                  </div>
                  <Link to="/register/elderly">
                    <Button
                      variant="secondary"
                      className="h-8 px-4 bg-[#E8EDF2] hover:bg-[#d1dbe6] text-[#0D141C] font-normal text-sm rounded-lg border-0"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 max-w-sm">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c344e71f6356b898975d45b6fcf346ae57db25f3?width=640"
                    alt="Elderly person waving"
                    className="w-full h-[171px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
