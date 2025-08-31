"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Users,
  BarChart3,
  Settings,
  Phone,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Brain,
  TrendingUp,
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
)

export default function EventTagLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=5401133557537&text=Hi+EvenTag.+I+would+like+to+learn+more+about+your+services......"

  const carouselItems = [
    {
      title: "Heat Maps",
      description: "Real-time visualization of crowd density and popular areas",
      icon: <TrendingUp className="w-8 h-8 text-red-400" />,
      content: (
        <div className="bg-gradient-to-br from-red-950/50 to-orange-950/50 p-6 rounded-lg border border-red-900/20">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`h-8 rounded ${[2, 3, 6, 7, 10, 11].includes(i)
                  ? "bg-red-500"
                  : [1, 4, 5, 8, 9, 12].includes(i)
                    ? "bg-orange-400"
                    : "bg-green-300"
                  }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-300">High traffic zones highlighted in red</p>
        </div>
      ),
    },
    {
      title: "AI Insights in Real-Time",
      description: "Intelligent analysis of visitor patterns and behavior",
      icon: <Brain className="w-8 h-8 text-green-400" />,
      content: (
        <div className="bg-gradient-to-br from-green-950/50 to-emerald-950/50 p-6 rounded-lg border border-green-900/20">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Detecting bottleneck at entrance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Booth A showing 30% increase in dwell time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Optimal path to food court identified</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Chat with Your Metrics",
      description: "Ask questions about your event data in natural language",
      icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
      content: (
        <div className="bg-gradient-to-br from-orange-950/50 to-yellow-950/50 p-6 rounded-lg border border-orange-900/20">
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-700">
              <p className="text-sm text-gray-300">"Which booth had the most visitors today?"</p>
            </div>
            <div className="bg-orange-900/50 p-3 rounded-lg ml-4 border border-orange-800/30">
              <p className="text-sm text-gray-200">
                Booth C (Technology) had 1,247 unique visitors with an average dwell time of 4.2 minutes.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-700">
              <p className="text-sm text-gray-300">"Show me the busiest hours"</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Movement Flows",
      description: "Most common routes between zones in the last 30 minutes",
      icon: <MapPin className="w-8 h-8 text-blue-400" />,
      content: (
        <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/50 p-6 rounded-lg border border-blue-900/20">
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="h-12 bg-blue-800 rounded flex items-center justify-center text-xs text-gray-200">
                Zone A
              </div>
              <div className="h-12 bg-green-800 rounded flex items-center justify-center text-xs text-gray-200">
                Zone B
              </div>
              <div className="h-12 bg-orange-800 rounded flex items-center justify-center text-xs text-gray-200">
                Zone C
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-blue-400"></div>
                <span className="text-gray-300">Zone A → Zone B: 234 visitors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-green-400"></div>
                <span className="text-gray-300">Zone B → Zone C: 189 visitors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-orange-400"></div>
                <span className="text-gray-300">Zone A → Zone C: 156 visitors</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [carouselItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="w-[180px] h-[80px] flex items-center justify-center">
            <Image src="/eventtag-logo.png" alt="EventTag Logo" width={180} height={80} className="object-contain" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#analytics" className="text-gray-400 hover:text-white transition-colors">
              Analytics
            </a>
            <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
              Testimonials
            </a>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-150 opacity-60"
            poster="/modern-event-space-with-people-networking.png"
            onError={(e) => console.log("[v0] Video error:", e)}
            onLoadStart={() => console.log("[v0] Video loading started")}
            onCanPlay={() => console.log("[v0] Video can play")}
          >
            <source src="/landing-2.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gradient-to-b from-gray-800/50 to-gray-900"></div>
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 bg-orange-900/80 text-orange-200 hover:bg-orange-800/80 backdrop-blur-sm border border-orange-800/50"
          >
            Advanced RFID Technology
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Improve your event perfomance with real time data
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty drop-shadow-md">
            RFID tags that reveal how attendees move through your space, helping you monitor your event performance.
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto drop-shadow-md">
            Stop guessing where to place booths and activities. Use real movement data to design layouts that naturally
            guide visitors and boost interaction rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-900 hover:bg-cyan-700 text-white shadow-lg" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Contact us for a demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transform your event layout design</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Make data-driven decisions about space utilization and visitor flow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-800 hover:shadow-lg transition-shadow bg-gray-800/50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-4 border border-green-800/30">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Space utilization maps</CardTitle>
                <CardDescription className="text-gray-400">
                  See which areas are underused and where crowds naturally gather
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-800 hover:shadow-lg transition-shadow bg-gray-800/50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center mb-4 border border-orange-800/30">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Dwell time analysis</CardTitle>
                <CardDescription className="text-gray-400">
                  Identify which booth positions keep visitors engaged longer
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-800 hover:shadow-lg transition-shadow bg-gray-800/50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-900/50 rounded-lg flex items-center justify-center mb-4 border border-red-800/30">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Traffic flow patterns</CardTitle>
                <CardDescription className="text-gray-400">
                  Understand natural walking paths to design intuitive layouts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-800 hover:shadow-lg transition-shadow bg-gray-800/50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-4 border border-green-800/30">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Bottleneck detection</CardTitle>
                <CardDescription className="text-gray-400">
                  Spot congestion points and redesign for better flow
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-800 hover:shadow-lg transition-shadow bg-gray-800/50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center mb-4 border border-orange-800/30">
                  <BarChart3 className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Event performance metrics</CardTitle>
                <CardDescription className="text-gray-400">
                  Compare different attendes transit patterns with real data
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-800 hover:shadow-lg transition-shadow bg-gray-800/50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-900/50 rounded-lg flex items-center justify-center mb-4 border border-red-800/30">
                  <Settings className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Layout recommendations</CardTitle>
                <CardDescription className="text-gray-400">
                  Get AI-powered suggestions for optimal booth placement
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Visualization Section */}
      <section id="analytics" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Dashboard features with interactive, AI-driven insights
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore the powerful tools that help you understand and optimize your event
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Side navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/90 hover:bg-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 border border-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-gray-300" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/90 hover:bg-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 border border-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-gray-300" />
            </button>

            {/* Fixed height carousel container */}
            <div className="mx-16 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-8 items-start h-80">
                      <div className="space-y-6 flex flex-col justify-center h-full">
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 text-lg">{item.description}</p>
                      </div>

                      <div className="relative h-full flex items-center">
                        <div className="w-full">{item.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-green-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">What our clients say</h2>

          <Card className="p-8 md:p-12 bg-gray-800/50 border-gray-700">
            <CardContent className="space-y-6">
              <div className="text-2xl md:text-3xl font-medium text-white text-balance">
                "EventTag helped us redesign our floor plan. We increased booth visits by 40% just by repositioning
                based on their traffic data."
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-orange-900/50 rounded-full flex items-center justify-center border border-orange-800/30">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-white">María González</div>
                  <div className="text-sm text-gray-400">Events Director, TechExpo Argentina</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-cyan-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to improve your event organization to the fullest?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto text-pretty">
            Stop guessing and start designing with data. Create layouts that naturally guide visitors and maximize
            engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100 text-cyan-900" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Optimize my Event now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800/50 border-t border-gray-700">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-[180px] h-[80px] flex items-center justify-center">
                <Image
                  src="/eventtag-logo.png"
                  alt="EventTag Logo"
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Analytics solutions for corporate events, trade shows, conferences and festivals.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Phone className="w-4 h-4" />
              <span>Contact us for a personalized proposal</span>
            </div>
            <div className="pt-8 border-t border-gray-700 text-sm text-gray-500">
              © 2025 EventTag. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
