import { PageHero } from "@/components/page-hero"
import { MapPin, Coffee, Users, Network, Calendar, Clock, Building2, Globe, TrendingUp, Handshake, Award, Mic } from "lucide-react"

export default function PreEventPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <PageHero 
        eyebrow="Complete Event Schedule"
        title="DoExim Expo 2024"
        subtitle="India's Gateway to Global Trade"
      >
        <p className="text-white/75 max-w-2xl mx-auto">
          A comprehensive 3-day international trade exhibition featuring 500+ exhibitors, international buyers, and government participation
        </p>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Pre-Event Week */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pre-Event Week</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic networking and orientation sessions across key cities
            </p>
          </div>

          <div className="space-y-6">
            {[
              { city: "Nagpur", day: "Thursday" },
              { city: "Pune", day: "Friday" },
              { city: "Mumbai", day: "Saturday" },
            ].map((event, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="bg-linear-to-r from-slate-800 to-slate-900 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold">{event.city}</h3>
                      <p className="text-slate-300 mt-2">{event.day} - 1 Week Before Event</p>
                    </div>
                    <MapPin className="w-12 h-12 text-slate-400" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <Coffee className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">VIP Networking Lunch</h4>
                        <p className="text-sm text-slate-600 mt-1">Exclusive networking opportunity</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Sponsors Meet</h4>
                        <p className="text-sm text-slate-600 mt-1">Connect with event sponsors</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <Network className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Exhibitor Orientation</h4>
                        <p className="text-sm text-slate-600 mt-1">Prepare for the expo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Day 0 */}
        <section className="mb-20">
          <div className="bg-linear-to-r from-amber-500 to-orange-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">Day 0</span>
                <h2 className="text-4xl font-bold mt-4">Setup & Registration</h2>
                <p className="text-xl text-amber-100 mt-2">One Day Before Event</p>
              </div>
              <Clock className="w-16 h-16 text-white/30" />
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6" />
                <span className="text-2xl font-bold">08:00 AM – 08:00 PM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Exhibitor Move-in",
                "Stall Inspection",
                "Branding Installation",
                "AV Testing",
                "Registration Counter Testing",
                "Buyer Welcome Desk Setup",
                "International Buyer Kit Distribution",
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Day 1 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Day 1</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-6 mb-4">Inauguration & Business Networking</h2>
            <div className="inline-block bg-linear-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl">
              <p className="text-2xl font-bold">"India's Gateway to Global Trade"</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Morning Session */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-linear-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-bold">10:00 AM – 11:00 AM</span>
                </div>
                <h3 className="text-2xl font-bold mt-2">Grand Inauguration</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-slate-900">Lamp Lighting</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Mic className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-slate-900">National Anthem</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Mic className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-slate-900">Welcome Address</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Distinguished Guests</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Ministry of Commerce",
                      "DGFT Officials",
                      "APEDA Representatives",
                      "FIEO Leadership",
                      "Export Promotion Councils",
                    ].map((guest, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-slate-700">{guest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Summit */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-linear-to-r from-purple-600 to-purple-700 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-bold">11:00 AM – 12:30 PM</span>
                </div>
                <h3 className="text-2xl font-bold mt-2">EXIM Leadership Summit</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    "India's Export Vision",
                    "Global Trade Opportunities",
                    "FTAs and Emerging Markets",
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-slate-900">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* VIP Walkthrough */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-linear-to-r from-teal-600 to-teal-700 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-bold">12:30 PM – 01:30 PM</span>
                </div>
                <h3 className="text-2xl font-bold mt-2">VIP Expo Walkthrough & Media Interaction</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="font-medium text-slate-900">VIP Expo Walkthrough</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg">
                    <Mic className="w-5 h-5 text-teal-600" />
                    <span className="font-medium text-slate-900">Media Interaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lunch */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-linear-to-r from-green-600 to-green-700 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-bold">01:30 PM – 02:30 PM</span>
                </div>
                <h3 className="text-2xl font-bold mt-2">Networking Lunch</h3>
              </div>
            </div>

            {/* B2B Matchmaking */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-linear-to-r from-indigo-600 to-indigo-700 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-bold">02:30 PM – 06:00 PM</span>
                </div>
                <h3 className="text-2xl font-bold mt-2">B2B Matchmaking Session – Round 1</h3>
              </div>
              <div className="p-6">
                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Pre-scheduled meetings with:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Importers",
                      "Exporters",
                      "Manufacturers",
                      "Sourcing Agents",
                    ].map((type, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                        <span className="text-slate-700">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-linear-to-r from-indigo-600 to-indigo-700 text-white rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold">1,000+ Meetings Target</p>
                  <p className="text-indigo-200 mt-2">Structured B2B interactions</p>
                </div>
              </div>
            </div>

            {/* State Pavilion Networking */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-linear-to-r from-rose-600 to-rose-700 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-bold">06:00 PM – 07:00 PM</span>
                </div>
                <h3 className="text-2xl font-bold mt-2">State Pavilion Networking</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    "Maharashtra",
                    "Gujarat",
                    "Rajasthan",
                    "Karnataka",
                    "Uttar Pradesh",
                  ].map((state, idx) => (
                    <div key={idx} className="bg-rose-50 rounded-lg p-4 text-center border-2 border-rose-200 hover:border-rose-400 transition-colors">
                      <MapPin className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                      <span className="font-semibold text-slate-900">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-20">
          <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4">Event Impact</h2>
              <p className="text-xl text-slate-300">Expected outcomes and deliverables</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Exhibitors", icon: Building2 },
                { value: "1000+", label: "B2B Meetings", icon: Handshake },
                { value: "3 Days", label: "Event Duration", icon: Calendar },
                { value: "50+", label: "International Buyers", icon: Globe },
              ].map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{metric.value}</p>
                  <p className="text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
