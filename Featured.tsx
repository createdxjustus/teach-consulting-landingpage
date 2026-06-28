import image_vickiecrockett from '@/imports/vickiecrockett.PNG'
import { Award, Globe, GraduationCap, Heart } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={image_vickiecrockett}
                alt="Professional educational consultant in session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#003B5C] mb-4">
                Meet Our Founder
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed"><span className="font-bold">Vickie M. Crocket, EdS</span> has over 25 years of dedicated experience in the education field, our founder brings unparalleled expertise in transforming educational environments and empowering communities.</p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2D8C6C]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#003B5C]/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-[#003B5C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003B5C] mb-1">Fulbright Scholar</h3>
                    <p className="text-sm text-gray-600">
                      Distinguished scholarship recipient, bringing global perspectives to education
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2D8C6C]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#003B5C]/10 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-[#003B5C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003B5C] mb-1">London, England</h3>
                    <p className="text-sm text-gray-600">
                      Advanced studies in educational leadership and international pedagogy
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2D8C6C]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#003B5C]/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-[#003B5C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003B5C] mb-1">25+ Years Experience</h3>
                    <p className="text-sm text-gray-600">
                      Proven track record in educational consulting and development
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2D8C6C]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#003B5C]/10 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-[#003B5C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003B5C] mb-1">Heart-Centered Approach</h3>
                    <p className="text-sm text-gray-600">
                      Teaching from the heart to transform lives and communities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#003B5C] to-[#005580] p-6 rounded-xl text-white">
              <p className="text-lg italic">
                "Our mission is to create culturally-sensitive, student-centered environments 
                that empower learners at every level—from students to educators to administrators."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
