"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  Download,
  FileText,
  Sparkles,
  Languages,
  Zap,
  ArrowRight,
  Code,
  Wand2,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleVideoClose = () => {
    setIsVideoPlaying(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Writes Docs for You",
      description: "Full Markdown files, explained line by line.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Cleans Your Code",
      description: 'Renames, refactors, and removes code "wahala."',
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "JavaScript, Dart, Python, Java, C#, and more.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast and Easy",
      description: "No config. Right-click and boom — you're flying.",
    },
  ];

  const languages = [
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
    { name: "Python", color: "bg-blue-100 text-blue-800" },
    { name: "Dart", color: "bg-cyan-100 text-cyan-800" },
    { name: "Java", color: "bg-orange-100 text-orange-800" },
    { name: "Go", color: "bg-cyan-100 text-cyan-800" },
    { name: "PHP", color: "bg-purple-100 text-purple-800" },
    { name: "C++", color: "bg-blue-100 text-blue-800" },
    { name: "C#", color: "bg-purple-100 text-purple-800" },
    { name: "Ruby", color: "bg-red-100 text-red-800" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
  ];

  const testimonials = [
    {
      text: "zipDemon cleaned my code like my mom cleaned my room—thoroughly.",
      author: "Sarah Chen",
      role: "Frontend Dev",
      avatar: "👩‍💻",
    },
    {
      text: "README.md wrote itself. I feel seen.",
      author: "Marcus Johnson",
      role: "Full Stack",
      avatar: "👨‍💻",
    },
    {
      text: "This tool made my old code look like new money.",
      author: "Alex Rivera",
      role: "Backend Dev",
      avatar: "🧑‍💻",
    },
  ];

  const steps = [
    {
      number: "1",
      text: "Open your project in VSCode",
      icon: <Code className="w-5 h-5" />,
    },
    {
      number: "2",
      text: "Right-click a file",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      number: "3",
      text: 'Click "Turn on zipDemon"',
      icon: <Wand2 className="w-5 h-5" />,
    },
    {
      number: "4",
      text: "Check your new docs in the `docs` folder",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      number: "5",
      text: "Sit back and enjoy the clean vibes 😎",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-blue-600 mr-2">
                <Zap className="w-8 h-8" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                zip<span className="font-extrabold">Demon</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Demo
              </Link>
              <Link
                href="#languages"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Languages
              </Link>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                onClick={() =>
                  window.open(
                    "https://marketplace.visualstudio.com/items?itemName=KelechiDivine.zipdemon",
                    "_blank"
                  )
                }
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Install
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 bg-white border-t border-gray-200 shadow animate-slide-down">
            <nav className="flex flex-col space-y-3">
              <Link
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Demo
              </Link>
              <Link
                href="#languages"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Languages
              </Link>
              <a
                href="#how-it-works"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                How It Works
              </a>
              <Button
                onClick={() => {
                  setIsOpen(false);
                  window.open(
                    "https://marketplace.visualstudio.com/items?itemName=KelechiDivine.zipdemon",
                    "_blank"
                  );
                }}
                variant="outline"
                className="mt-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Install
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:20px_20px] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Now available for VS Code
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight animate-slide-up">
              Make Your Code{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smarter
              </span>{" "}
              with One Click
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
              zipDemon helps you clean messy code and write good documentation
              automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://marketplace.visualstudio.com/items?itemName=KelechiDivine.zipdemon",
                    "_blank"
                  )
                }
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Install on VS Code
              </Button>
              <Link href={"#demo"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-gray-50 transition-all duration-200 group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex justify-center items-center space-x-2 mt-8">
              <Image
                src="https://img.shields.io/visual-studio-marketplace/d/KelechiDivine.zipdemon?color=brightgreen&label=downloads"
                alt="Downloads"
                width={120}
                height={10}
              />
              <Image
                src="https://img.shields.io/visual-studio-marketplace/i/KelechiDivine.zipdemon?color=green&label=installs"
                alt="Installs"
                width={95}
                height={10}
              />
            </div>
          </div>

          {/* Demo Visual */}
          <div className="mt-20 relative">
            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-fade-in-up">
              <div className="bg-gray-800 px-6 py-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">
                  VS Code - zipDemon Extension
                </span>
              </div>
              <div className="p-8 bg-gray-900 text-green-400 font-mono text-sm">
                <div className="space-y-2">
                  <div>{"> Right-click detected..."}</div>
                  <div className="text-blue-400">
                    {"> zipDemon activated ✨"}
                  </div>
                  <div>{"> Analyzing code structure..."}</div>
                  <div>{"> Generating documentation..."}</div>
                  <div className="text-green-400">
                    {"> README.md created successfully! 🎉"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's zipDemon Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's zipDemon?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your AI-powered coding companion that makes development smoother
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "✍️",
                text: "Writes README.md files for your code using AI",
              },
              { icon: "🧼", text: "Fixes bad names and messy functions" },
              { icon: "💬", text: "Supports multiple programming languages" },
              { icon: "🖱️", text: "One right-click to get started" },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Main Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <h3 className=" font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🎥 Quick Demo
            </h2>
            <p className="text-xl text-gray-600">
              See zipDemon in action — 45 seconds that'll change how you code
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-800 relative group">
                  {isVideoPlaying ? (
                    <iframe
                      className="w-full h-full rounded-xl"
                      src="https://www.youtube.com/embed/tI32cK-8chU?autoplay=1"
                      title="zipDemon Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full cursor-pointer relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                      <Button
                        size="lg"
                        className="bg-white text-gray-900 hover:bg-gray-100 rounded-full w-20 h-20 group-hover:scale-110 transition-all duration-200 z-10"
                        onClick={() => setIsVideoPlaying(true)}
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </Button>
                      <div className="absolute bottom-4 left-4 text-white z-10">
                        <p className="text-sm opacity-80">
                          Right-click → Magic happens
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              😂 What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section id="languages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🧠 Supported Languages
            </h2>
            <p className="text-xl text-gray-600">
              Works with all your favorite programming languages
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((language, index) => (
              <Badge
                key={index}
                className={`${language.color} px-6 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 cursor-default`}
              >
                ✅ {language.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🚀 How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Five simple steps to cleaner code and better docs
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center group">
                <div className="flex-shrink-0 w-12 md:w-16 h-12 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-200">
                  {step.number}
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center">
                    <div className="text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-200">
                      {step.icon}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 ml-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stop wasting time.
          </h2>
          <p className="text-2xl md:text-3xl mb-12 opacity-90">
            Let zipDemon do the boring stuff.
          </p>

          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://marketplace.visualstudio.com/items?itemName=KelechiDivine.zipdemon",
                "_blank"
              )
            }
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-200 group"
          >
            <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Install on VS Code Now
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="mt-8 text-lg opacity-80">
            Free forever. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">zipDemon</h3>
              <p className="text-gray-400 leading-relaxed">
                Making code cleaner, one right-click at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="https://github.com/OkoroaforKelechiDivine/zipdemon"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faqs"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:okoroaforkelechi123@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 zipDemon. Made with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
