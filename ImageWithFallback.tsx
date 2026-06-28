import image_Secondary_logo_2x_100_1 from '@/imports/Secondary_logo_2x-100-1.jpg'
import image_Secondary_logo_2x_100 from '@/imports/Secondary_logo_2x-100.jpg'
import image_Secondary_logo from '@/imports/Secondary_logo.png'
import image_IMG_20241018_WA0006_1 from '@/imports/IMG-20241018-WA0006-1.jpg'
import image_20241017_143715 from '@/imports/20241017_143715.jpg'
import servicePackagePdf from '@/imports/V2_Teach_from_the_Heart_Service_Package_2025.pdf'
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "figma:asset/c5bf01bd297917f93e0cbac01fe403ae5de47bb7.png";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#003B5C] to-[#005580] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2D8C6C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2D8C6C] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white rounded-3xl">
        {/* Top Contact Bar */}
        <div className="flex flex-wrap gap-4 justify-between items-center mb-8 text-sm text-[#003B5C]">
          <div className="flex justify-start">
            <img
              src={image_Secondary_logo_2x_100_1}
              alt="TEACH Educational Consulting - From the Heart"
              className="h-24 w-auto"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end">
            <a href="tel:+14049397505" className="flex items-center gap-2 hover:textimage_Secondary_-[#2D8C6C] transition-colors">
              <Phone className="w-4 h-4" />
              <span>(404) 939-7505</span>
            </a>
            <a href="mailto:teacheducationalconsulting@gmail.com" className="flex items-center gap-2 hover:text-[#2D8C6C] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">teacheducationalconsulting@gmail.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Atlanta, GA</span>
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#003B5C]">
                Empowering Educational Excellence Through Heart-Centered Leadership
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
                25 years of proven expertise in culturally-sensitive, student-centered academic and social success
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-[#003B5C] text-[#003B5C] hover:bg-[#003B5C] hover:text-white px-8 py-6 text-lg"
              >
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(servicePackagePdf, '_blank')}
                className="border-2 border-[#003B5C] text-[#003B5C] hover:bg-[#003B5C] hover:text-white px-8 py-6 text-lg"
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image_IMG_20241018_WA0006_1}
                alt="Diverse students engaged in collaborative learning"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white text-[#003B5C] p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-[#2D8C6C]">25+</div>
              <div className="text-sm font-semibold">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}