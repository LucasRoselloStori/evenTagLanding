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
  Download,
  Phone,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Brain,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function EventTagLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems = [
    {
      title: "Heat Maps",
      description: "Real-time visualization of crowd density and popular areas",
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      content: (
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`h-8 rounded ${[2, 3, 6, 7, 10, 11].includes(i)
                  ? "bg-red-400"
                  : [1, 4, 5, 8, 9, 12].includes(i)
                    ? "bg-orange-300"
                    : "bg-green-200"
                  }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">High traffic zones highlighted in red</p>
        </div>
      ),
    },
    {
      title: "AI Insights in Real-Time",
      description: "Intelligent analysis of visitor patterns and behavior",
      icon: <Brain className="w-8 h-8 text-green-600" />,
      content: (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Detecting bottleneck at entrance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Booth A showing 30% increase in dwell time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Optimal path to food court identified</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Chat with Your Metrics",
      description: "Ask questions about your event data in natural language",
      icon: <MessageSquare className="w-8 h-8 text-orange-600" />,
      content: (
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-muted-foreground">"Which booth had the most visitors today?"</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg ml-4">
              <p className="text-sm">
                Booth C (Technology) had 1,247 unique visitors with an average dwell time of 4.2 minutes.
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-muted-foreground">"Show me the busiest hours"</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Movement Flows",
      description: "Most common routes between zones in the last 30 minutes",
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="h-12 bg-blue-200 rounded flex items-center justify-center text-xs">Zone A</div>
              <div className="h-12 bg-green-200 rounded flex items-center justify-center text-xs">Zone B</div>
              <div className="h-12 bg-orange-200 rounded flex items-center justify-center text-xs">Zone C</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-blue-500"></div>
                <span>Zone A → Zone B: 234 visitors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-green-500"></div>
                <span>Zone B → Zone C: 189 visitors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-orange-500"></div>
                <span>Zone A → Zone C: 156 visitors</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="w-[180px] h-[80px] flex items-center justify-center">
            <Image src="/eventtag-logo.png" alt="EventTag Logo" width={180} height={80} className="object-contain" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#analytics" className="text-muted-foreground hover:text-foreground transition-colors">
              Analytics
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <Button variant="outline" size="sm">
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
            className="w-full h-full object-cover scale-150"
            poster="/modern-event-space-with-people-networking.png"
            onError={(e) => console.log("[v0] Video error:", e)}
            onLoadStart={() => console.log("[v0] Video loading started")}
            onCanPlay={() => console.log("[v0] Video can play")}
          >
            <source src="/landing-2.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gradient-to-b from-muted/50 to-background"></div>
          </video>
          {/* Blur overlay */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 bg-orange-100/90 text-orange-800 hover:bg-orange-200/90 backdrop-blur-sm"
          >
            Advanced RFID Technology
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Improve your event perfomance with real time data
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty drop-shadow-md">
            RFID badges that reveal how attendees move through your space, helping you monitor your event performace.
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto drop-shadow-md">
            Stop guessing where to place booths and activities. Use real movement data to design layouts that naturally
            guide visitors and boost interaction rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
              Optimize my event layout
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Layout optimization guide
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transform your event layout design</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make data-driven decisions about space utilization and visitor flow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>Space utilization maps</CardTitle>
                <CardDescription>See which areas are underused and where crowds naturally gather</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-700" />
                </div>
                <CardTitle>Dwell time analysis</CardTitle>
                <CardDescription>Identify which booth positions keep visitors engaged longer</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-700" />
                </div>
                <CardTitle>Traffic flow patterns</CardTitle>
                <CardDescription>Understand natural walking paths to design intuitive layouts</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>Bottleneck detection</CardTitle>
                <CardDescription>Spot congestion points and redesign for better flow</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-700" />
                </div>
                <CardTitle>Layout performance metrics</CardTitle>
                <CardDescription>Compare different layout configurations with real data</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-700" />
                </div>
                <CardTitle>Layout recommendations</CardTitle>
                <CardDescription>Get AI-powered suggestions for optimal booth placement</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Visualization Section */}
      <section id="analytics" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Interactive Dashboard Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the powerful tools that help you understand and optimize your event layouts
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Side navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
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
                          <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-lg">{item.description}</p>
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-green-500 scale-125" : "bg-muted hover:bg-muted-foreground/30"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">What our clients say</h2>

          <Card className="p-8 md:p-12">
            <CardContent className="space-y-6">
              <div className="text-2xl md:text-3xl font-medium text-foreground text-balance">
                "EventTag helped us redesign our floor plan. We increased booth visits by 40% just by repositioning
                based on their traffic data."
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-700" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-foreground">María González</div>
                  <div className="text-sm text-muted-foreground">Events Director, TechExpo Argentina</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to design better event layouts?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto text-pretty">
            Stop guessing and start designing with data. Create layouts that naturally guide visitors and maximize
            engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100 text-green-700">
              Optimize my layout now
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Layout design guide
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Analytics solutions for corporate events, trade shows, conferences and festivals.
            </p>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Contact us for a personalized proposal</span>
            </div>
            <div className="pt-8 border-t border-border text-sm text-muted-foreground">
              © 2024 EventTag. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
