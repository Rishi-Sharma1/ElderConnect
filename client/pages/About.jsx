import Header from "../components/Header.jsx";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D141C] mb-6">
            About ElderConnect
          </h1>
          <p className="text-lg text-[#4F7396] leading-relaxed">
            Bridging the gap between elderly individuals and the care they deserve, 
            connecting communities through compassion and technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 md:px-8 lg:px-40">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#0D141C] mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-[#4F7396] leading-relaxed text-center max-w-3xl mx-auto">
                ElderConnect is dedicated to creating meaningful connections between elderly individuals 
                and caring volunteers, while partnering with NGOs to provide comprehensive support services. 
                We believe that every senior deserves companionship, assistance, and dignity in their daily lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-4 md:px-8 lg:px-40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0D141C] mb-12 text-center">
            How ElderConnect Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Elderly */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4799EB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0D141C] mb-4">For Elderly</h3>
                <p className="text-[#4F7396] leading-relaxed">
                  Register to connect with volunteers and access services from trusted NGOs. 
                  Get the support and companionship you need.
                </p>
              </CardContent>
            </Card>

            {/* Volunteers */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4799EB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0D141C] mb-4">For Volunteers</h3>
                <p className="text-[#4F7396] leading-relaxed">
                  Join our community of caring individuals. Share your skills and time 
                  to make a meaningful difference in seniors' lives.
                </p>
              </CardContent>
            </Card>

            {/* NGOs */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4799EB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0D141C] mb-4">For NGOs</h3>
                <p className="text-[#4F7396] leading-relaxed">
                  Partner with us to extend your reach and impact. Connect your services 
                  with elderly individuals who need them most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-12 px-4 md:px-8 lg:px-40 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0D141C] mb-12 text-center">
            About the Creator
          </h2>
          
          <Card className="bg-[#F7FAFC] shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center md:text-left">
                <div className="w-24 h-24 bg-[#4799EB] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <span className="text-2xl font-bold text-white">RC</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0D141C] mb-4">
                  Rishi Sharma
                </h3>
                
                <p className="text-lg text-[#4F7396] leading-relaxed mb-6">
                  A passionate developer and advocate for elderly care, Rishi created ElderConnect 
                  to address the growing need for community support systems for seniors. With a 
                  background in full-stack development and a deep commitment to social impact, 
                  Rishi believes technology can bridge generational gaps and create meaningful connections.
                </p>
                
                <div className="space-y-3 text-[#4F7396]">
                  <p><strong className="text-[#0D141C]">Vision:</strong> A world where no elderly person feels isolated or unsupported.</p>
                  <p><strong className="text-[#0D141C]">Mission:</strong> Leverage technology to build caring communities that honor and support our elders.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 md:px-8 lg:px-40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0D141C] mb-12 text-center">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4799EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-[#0D141C] mb-2">Compassion</h4>
              <p className="text-sm text-[#4F7396]">Every interaction is guided by empathy and understanding.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4799EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-[#0D141C] mb-2">Trust</h4>
              <p className="text-sm text-[#4F7396]">Building reliable connections through verified and secure interactions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4799EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h4 className="font-bold text-[#0D141C] mb-2">Community</h4>
              <p className="text-sm text-[#4F7396]">Fostering connections that strengthen neighborhoods and families.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4799EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-[#0D141C] mb-2">Dignity</h4>
              <p className="text-sm text-[#4F7396]">Honoring the wisdom and experience of our elderly community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-8 lg:px-40 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0D141C] mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-[#4F7396] mb-8">
            Have questions or want to learn more about ElderConnect? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@elderconnect.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#4799EB] hover:bg-[#3a7bc2] text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/register" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-[#4799EB] font-semibold rounded-lg border-2 border-[#4799EB] transition-colors"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}