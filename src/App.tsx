import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    facebook: '',
    description: ''
  })

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email content
    const emailBody = `
New Contact Form Submission from Social Riser Website:

Name: ${formData.name}
Email: ${formData.email}
Instagram: ${formData.instagram || 'Not provided'}
Facebook: ${formData.facebook || 'Not provided'}

Message:
${formData.description}
    `

    // In a real application, you would send this to your backend
    console.log('Form submitted:', emailBody)
    
    toast.success('Message sent successfully! We\'ll get back to you soon.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      instagram: '',
      facebook: '',
      description: ''
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
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
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90"
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
          <div className="md:hidden border-t bg-background">
            <nav className="container px-4 py-4 space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left text-sm font-medium transition-colors hover:text-primary"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Collaborate
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Home Section */}
      <section id="home" className="py-20 lg:py-32">
        <div className="container px-4">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Crafting the Future of{' '}
              <span className="gradient-text">Influence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting brands with creators to design unforgettable campaigns that inspire, 
              engage, and transform digital influence into real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-primary/90"
              >
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-muted-foreground">
              We collaborate with innovative brands to create authentic connections
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">Brand {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with influencers and authentic brands to create meaningful partnerships 
              that drive real results and build lasting relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Brand Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connecting the right creators with brands that align with their values and audience.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Strategic Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Data-driven marketing strategies that deliver measurable results and authentic engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Creator Growth</CardTitle>
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

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Social Riser</h2>
            <div className="text-lg text-muted-foreground space-y-6 text-left">
              <p>
                In today's fast-paced digital era, social media has become the heartbeat of marketing, 
                entertainment, and storytelling. Every day, countless influencers and creators are rising 
                with unique ideas, creativity, and passion. Some are striving for name and fame, while 
                others are looking to turn their passion into a sustainable career.
              </p>
              <p>
                But in this highly competitive space, growth isn't just about creativity—it's about 
                opportunity, strategy, and the right connections. This is where Social Riser comes in.
              </p>
              <p>
                We are not just another influencer marketing agency; we are a growth ecosystem built to 
                connect talented creators with forward-thinking brands, creating powerful collaborations 
                that drive success for both. Our mission is simple yet impactful:
              </p>
              <blockquote className="text-xl font-semibold text-center py-6 gradient-text">
                "Empowering creators to rise, connect, and thrive while helping brands grow through authentic storytelling."
              </blockquote>
              <p>
                At Social Riser, we believe that when the right creator and right brand come together, 
                it's more than just a campaign — it's the beginning of a movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for creators and brands to thrive in the digital landscape
            </p>
          </div>

          <div className="space-y-16">
            {/* For Influencers */}
            <Card className="p-8">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">For Influencers: Rise Above the Noise</CardTitle>
                <CardDescription className="text-lg">
                  Your content is your voice, and at Social Riser, we believe your voice deserves to be heard.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Whether you are just starting your journey or already established, we work closely with you 
                  to unlock high-value brand collaborations that resonate with your audience and boost your earning potential.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-4">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Long-term Partnerships</Badge>
                    <p className="text-sm text-muted-foreground">Building lasting relationships instead of one-off deals</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Brand Alignment</Badge>
                    <p className="text-sm text-muted-foreground">Connecting you with brands that match your values</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Financial Growth</Badge>
                    <p className="text-sm text-muted-foreground">Increasing earning potential and stability</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent Management */}
            <Card className="p-8">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Talent Management – Nurturing the Stars of Tomorrow</CardTitle>
                <CardDescription className="text-lg">
                  True talent deserves more than just recognition — it deserves direction, opportunity, and growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Our Talent Management service is designed to help creators and influencers unlock their full potential, 
                  while giving brands access to the right voices to represent their vision authentically.
                </p>
                <p className="text-muted-foreground">
                  We work closely with influencers to build their personal brand, refine their content strategy, 
                  and connect them with the right opportunities. From negotiation and brand partnerships to audience 
                  growth and reputation management, our team provides end-to-end support.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <p className="font-semibold text-primary mb-2">
                    "We manage the business, so you can focus on creating magic."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ✨ Join Social Riser today - Your Influence, Our Mission.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Influencer Marketing for Brands */}
            <Card className="p-8">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Megaphone className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Influencer Marketing for Brands</CardTitle>
                <CardDescription className="text-lg">
                  Traditional advertising is losing its charm in today's digital-first world.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Consumers now demand authentic connections and real experiences. Social Riser bridges the gap 
                  between brands and influencers, ensuring your message reaches the right audience through voices 
                  they trust and relate to.
                </p>
                <p className="text-muted-foreground">
                  Our data-driven strategies, combined with deep insights into creator ecosystems, allow us to 
                  design campaigns that not only increase reach but also deliver tangible business results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to elevate your influence or find the perfect creator for your brand? 
                Let's start the conversation.
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram Handle</Label>
                    <Input 
                      id="instagram"
                      placeholder="@username"
                      value={formData.instagram}
                      onChange={(e) => handleInputChange('instagram', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook Profile</Label>
                    <Input 
                      id="facebook"
                      placeholder="Profile URL or name"
                      value={formData.facebook}
                      onChange={(e) => handleInputChange('facebook', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Tell us about your project or goals</Label>
                  <Textarea 
                    id="description"
                    rows={5}
                    placeholder="Describe what you're looking for - whether you're a creator seeking opportunities or a brand looking for collaborations..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Send Message
                  <EnvelopeSimple className="ml-2 w-4 h-4" />
                </Button>
              </form>

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
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <TrendUp className="w-5 h-5 text-white" weight="bold" />
              </div>
              <span className="text-xl font-bold gradient-text">Social Riser</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Crafting the Future of Influence
            </p>
            <div className="flex justify-center space-x-6">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramLogo size={24} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookLogo size={24} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <EnvelopeSimple size={24} />
              </button>
            </div>
            <Separator className="my-8" />
            <p className="text-sm text-muted-foreground">
              © 2024 Social Riser. All rights reserved. Empowering creators to rise, connect, and thrive.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App