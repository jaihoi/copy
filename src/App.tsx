import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  List, 
  X, 
  TrendUp, 
  Users, 
  Star, 
  ArrowRight, 
  EnvelopeSimple, 
  Phone, 
  InstagramLogo, 
  FacebookLogo,
  Target,
  Handshake,
  Crown,
  Megaphone
} from "@phosphor-icons/react"
import { toast } from 'sonner'
import { ServicesPage } from "@/components/ServicesPage"
import { ContactDialog } from "@/components/ContactDialog"
import { TermsPage } from "@/components/TermsPage"
import { PrivacyPage } from "@/components/PrivacyPage"

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigateToServices = () => {
    setCurrentPage('services')
  }

  const navigateToTerms = () => {
    setCurrentPage('terms')
  }

  const navigateToPrivacy = () => {
    setCurrentPage('privacy')
  }

  const navigateToHome = () => {
    setCurrentPage('home')
    setActiveSection('home')
  }

  const openContactDialog = () => {
    setContactDialogOpen(true)
  }

  // Render different pages
  if (currentPage === 'services') {
    return <ServicesPage onBack={navigateToHome} />
  }

  if (currentPage === 'terms') {
    return <TermsPage onBack={navigateToHome} />
  }

  if (currentPage === 'privacy') {
    return <PrivacyPage onBack={navigateToHome} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <TrendUp className="w-5 h-5 text-white" weight="bold" />
            </div>
            <span className="text-xl font-bold gradient-text">Social Riser</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {['Home', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase().replace(' ', '-') 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={navigateToServices}
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              Services
            </button>
            <Button 
              onClick={openContactDialog}
              className="bg-primary hover:bg-primary/90 hover-glow"
            >
              Collaborate
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background animate-slide-up">
            <nav className="container px-4 py-4 space-y-4">
              {['Home', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left text-sm font-medium transition-colors hover:text-primary"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={navigateToServices}
                className="block w-full text-left text-sm font-medium transition-colors hover:text-primary"
              >
                Services
              </button>
              <Button 
                onClick={openContactDialog}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Collaborate
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Home Section */}
      <section id="home" className="py-20 lg:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Crafting the Future of{' '}
              <span className="gradient-text-enhanced animate-bounce-in">Influence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Connecting brands with creators to design unforgettable campaigns that inspire, 
              engage, and transform digital influence into real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-slide-up">
              <Button 
                size="lg" 
                onClick={navigateToServices}
                className="bg-primary hover:bg-primary/90 hover-glow animate-shimmer"
              >
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={openContactDialog}
                className="hover-glow border-primary/50 text-primary hover:bg-primary/10"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Carousel - Continuous Scrolling Left to Right */}
      <section className="py-16 bg-muted/50 overflow-hidden">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-muted-foreground">
              We collaborate with innovative brands to create authentic connections
            </p>
          </div>
          
          <div className="relative">
            <div className="flex space-x-8 animate-scroll-continuous scroll-brands-rtl">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="flex-shrink-0 h-16 w-32 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 hover-glow">
                  <span className="text-sm font-medium text-muted-foreground">Brand {(i % 6) + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Enhanced Animations */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16 animate-slide-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-left-delayed">
              We collaborate with influencers and authentic brands to create meaningful partnerships 
              that drive real results and build lasting relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 animate-slide-right hover-glow group transition-all duration-500">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Handshake className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">Brand Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connecting the right creators with brands that align with their values and audience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 animate-slide-right-delayed hover-glow group transition-all duration-500">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Target className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">Strategic Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Data-driven marketing strategies that deliver measurable results and authentic engagement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 animate-slide-right-more-delayed hover-glow group transition-all duration-500">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Crown className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">Creator Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Empowering creators to build sustainable careers through professional management and guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Mixed Animations */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-bounce-in">About Social Riser</h2>
            <div className="text-lg text-muted-foreground space-y-6 text-left">
              <p className="animate-slide-left">
                In today's fast-paced digital era, social media has become the heartbeat of marketing, 
                entertainment, and storytelling. Every day, countless influencers and creators are rising 
                with unique ideas, creativity, and passion. Some are striving for name and fame, while 
                others are looking to turn their passion into a sustainable career.
              </p>
              <p className="animate-slide-right">
                But in this highly competitive space, growth isn't just about creativity—it's about 
                opportunity, strategy, and the right connections. This is where Social Riser comes in.
              </p>
              <p className="animate-slide-left">
                We are not just another influencer marketing agency; we are a growth ecosystem built to 
                connect talented creators with forward-thinking brands, creating powerful collaborations 
                that drive success for both. Our mission is simple yet impactful:
              </p>
              <blockquote className="text-xl font-semibold text-center py-6 gradient-text animate-bounce-in">
                "Empowering creators to rise, connect, and thrive while helping brands grow through authentic storytelling."
              </blockquote>
              <p className="animate-slide-right">
                At Social Riser, we believe that when the right creator and right brand come together, 
                it's more than just a campaign — it's the beginning of a movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to elevate your influence or find the perfect creator for your brand? 
              Let's start the conversation.
            </p>

            <div className="space-y-6">
              <Button 
                onClick={openContactDialog}
                className="bg-primary hover:bg-primary/90 hover-glow"
                size="lg"
              >
                Start Collaboration
                <EnvelopeSimple className="ml-2 w-4 h-4" />
              </Button>

              <Separator className="my-8" />

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Or reach us directly at:
                </p>
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <EnvelopeSimple className="w-4 h-4" />
                  <span className="font-medium">contact@socialriser.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <TrendUp className="w-5 h-5 text-white" weight="bold" />
              </div>
              <span className="text-xl font-bold gradient-text">Social Riser</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Crafting the Future of Influence
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <button className="text-muted-foreground hover:text-primary transition-colors hover-glow">
                <InstagramLogo size={24} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors hover-glow">
                <FacebookLogo size={24} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors hover-glow">
                <EnvelopeSimple size={24} />
              </button>
            </div>

            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <button 
                onClick={navigateToTerms}
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </button>
              <span>•</span>
              <button 
                onClick={navigateToPrivacy}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
            </div>
            
            <Separator className="my-8" />
            
            <p className="text-sm text-muted-foreground">
              © 2024 Social Riser. All rights reserved. Empowering creators to rise, connect, and thrive.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Dialog */}
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </div>
  )
}

export default App