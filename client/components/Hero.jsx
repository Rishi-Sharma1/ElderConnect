import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[480px] md:min-h-[640px] w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/5576e12b6314d96c28801451e891ae4d65211bcd?width=1856')`
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end items-center min-h-[480px] md:min-h-[640px] px-4 py-8 md:px-8 lg:px-48">
        <div className="w-full max-w-[896px] text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Connecting Generations, Enriching Lives
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-white text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              ElderConnect is a platform dedicated to enhancing the well-being of elderly individuals by connecting them with volunteers and NGOs. We strive to create a supportive community where seniors can access resources, engage in activities, and receive assistance.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto h-12 px-5 bg-[#4799EB] hover:bg-[#3a7bc2] text-[#0D141C] font-bold text-base rounded-lg border-0"
              >
                For Seniors
              </Button>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto h-12 px-5 bg-[#E8EDF2] hover:bg-[#d1dbe6] text-[#0D141C] font-bold text-base rounded-lg border-0"
                >
                  For Volunteers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
