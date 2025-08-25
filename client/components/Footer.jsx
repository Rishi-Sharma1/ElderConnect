const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            <a 
              href="#privacy" 
              className="text-[#4F7396] text-base leading-6 hover:text-[#4799EB] transition-colors text-center min-w-[160px]"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-[#4F7396] text-base leading-6 hover:text-[#4799EB] transition-colors text-center min-w-[160px]"
            >
              Terms of Service
            </a>
            <a 
              href="#contact" 
              className="text-[#4F7396] text-base leading-6 hover:text-[#4799EB] transition-colors text-center min-w-[160px]"
            >
              Contact Us
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-[#4F7396] text-base leading-6">
              @2024 ElderConnect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
