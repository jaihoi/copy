import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  X, 
  Target, 
  Heart,
  List,
  ArrowRight,
  Handshake,
  Crown,
  TrendUp,
  InstagramLogo,
  FacebookLogo,
  EnvelopeSimple,
  Sparkle
} from "@phosphor-icons/react"
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'

// Performance optimization: Memoized constants to prevent re-creation
const BRANDS = [
  'Nike', 'Apple', 'Samsung', 'Google', 'Microsoft', 'Tesla',
  'Netflix', 'Spotify', 'Adobe', 'Amazon', 'Meta', 'Twitter'
]

const SERVICES = [
  {
    id: 'influencers',
    title: 'For Influencers: Rise Above the Noise',
    subtitle: 'Your content is your voice, and at Social Riser, we believe your voice deserves to be heard.',
    description: 'Whether you are just starting your journey or already established, we work closely with you to unlock high-value brand collaborations that resonate with your audience and boost your earning potential.',
    features: [
      'Building long-term partnerships instead of one-off deals',
      'Connecting you with brands that align with your niche and values',
      'Helping you grow your personal brand while increasing financial stability'
    ],
    images: ['🎬', '📱', '🎯', '💡', '🚀', '⭐']
  },
  {
    id: 'talent-management',
    title: 'Talent Management – Nurturing the Stars of Tomorrow',
    subtitle: 'True talent deserves more than just recognition — it deserves direction, opportunity, and growth.',
    description: 'Our Talent Management service is designed to help creators and influencers unlock their full potential, while giving brands access to the right voices to represent their vision authentically.',
    features: [
      'End-to-end support from negotiation to brand partnerships',
      'Audience growth and reputation management',
      'Professional management for seamless collaborations',
      'Long-term career building and sustainable revenue streams'
    ],
    images: ['👑', '🌟', '📊', '🎭', '💼', '🚀']
  },
  {
    id: 'brands',
    title: 'Influencer Marketing for Brands',
    subtitle: 'Traditional advertising is losing its charm in today\'s digital-first world.',
    description: 'Social Riser bridges the gap between brands and influencers, ensuring your message reaches the right audience through voices they trust and relate to.',
    features: [
      'Data-driven strategies with deep creator ecosystem insights',
      'Campaigns that deliver tangible business results',
      'Authentic connections that increase reach and engagement'
    ],
    images: ['📈', '🎯', '💰', '🤝', '📢', '✨']
  }
]

// Performance monitoring utilities
const usePerformanceMonitor = () => {
  const frameCount = useRef(0)
  const lastTime = useRef(performance.now())
  
  useEffect(() => {
    const monitorFrame = () => {
      frameCount.current++
      const currentTime = performance.now()
      
      // Log performance every 60 frames (roughly 1 second at 60fps)
      if (frameCount.current % 60 === 0) {
        const fps = 1000 / ((currentTime - lastTime.current) / 60)
        if (fps < 50) {
          console.warn(`Low FPS detected: ${fps.toFixed(1)} fps`)
        }
        lastTime.current = currentTime
        frameCount.current = 0
      }
      
      requestAnimationFrame(monitorFrame)
    }
    
    if (process.env.NODE_ENV === 'development') {
      requestAnimationFrame(monitorFrame)
    }
  }, [])
}

export default function App() {
  // Initialize performance monitoring in development
  usePerformanceMonitor()
  
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const scrollRef = useRef<number>(0)
  const rafRef = useRef<number | undefined>(undefined)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    facebook: '',
    description: ''
  })

  // Optimized scroll handler using requestAnimationFrame for better performance
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    
    rafRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      // Only update if scroll difference is significant to reduce renders
      if (Math.abs(currentScrollY - scrollRef.current) > 5) {
        scrollRef.current = currentScrollY
        setScrollY(currentScrollY)
      }
    })
  }, [])

  useEffect(() => {
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  useEffect(() => {
    if (currentPage !== 'home') {
      setCurrentPage('home')
    }
  }, [currentPage])

  // Memoized handlers to prevent re-creation
  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Thank you! We\'ll get back to you soon.')
    setContactDialogOpen(false)
    setFormData({ name: '', email: '', instagram: '', facebook: '', description: '' })
  }, [])

  const navigateToServices = useCallback(() => {
    setCurrentPage('services')
  }, [])

  const navigateToTerms = useCallback(() => {
    setCurrentPage('terms')
  }, [])

  const navigateToPrivacy = useCallback(() => {
    setCurrentPage('privacy')
  }, [])

  const openContactDialog = useCallback(() => {
    setContactDialogOpen(true)
  }, [])

  // Memoized card data to prevent re-creation
  const cardData = useMemo(() => [
    {
      icon: Handshake,
      title: 'Brand Partnerships',
      description: 'Connecting the right creators with brands that align with their values and audience.',
      delay: 0
    },
    {
      icon: Target,
      title: 'Strategic Campaigns',
      description: 'Data-driven marketing strategies that deliver measurable results and authentic engagement.',
      delay: 0.3
    },
    {
      icon: Crown,
      title: 'Creator Growth',
      description: 'Empowering creators to build sustainable careers through professional management and guidance.',
      delay: 0.6
    }
  ], [])

  // Memoized card component for better performance
  const ServiceCard = useMemo(() => ({ icon: Icon, title, description, delay }: {
    icon: any,
    title: string,
    description: string,
    delay: number
  }) => (
    <Card 
      className={`text-center p-6 hover-glow group transition-all duration-500 ${
        delay === 0 ? 'animate-slide-right' : 
        delay === 0.3 ? 'animate-slide-right-delayed' : 
        'animate-slide-right-more-delayed'
      }`}
      style={{ willChange: 'transform' }}
    >
      <CardHeader>
        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <CardTitle className="group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  ), [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }, [])

  // Services Page Component
  const ServicesPage = () => (
    <div className="min-h-screen bg-background pt-20">
      <div className="container px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-enhanced">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering creators and brands to build meaningful partnerships that drive real results
          </p>
        </motion.div>

        <div className="space-y-20">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-xl text-primary mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`grid grid-cols-3 gap-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                {service.images.map((emoji, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-4xl hover:scale-105 transition-transform duration-300 hover-glow"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <Button 
            onClick={() => setCurrentPage('home')}
            size="lg"
            className="bg-primary hover:bg-primary/90 hover-glow"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  )

  // Terms Page Component
  const TermsPage = () => (
    <div className="min-h-screen bg-background pt-20">
      <div className="container px-4 py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>Welcome to Social Riser. These terms and conditions outline the rules and regulations for the use of Social Riser's services.</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Services</h2>
            <p>Social Riser provides influencer marketing and talent management services, connecting creators with brands for authentic collaborations.</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. User Responsibilities</h2>
            <p>Users must provide accurate information and comply with all applicable laws and regulations when using our services.</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Privacy</h2>
            <p>We respect your privacy and handle your data in accordance with our Privacy Policy.</p>
          </div>
          
          <Button 
            onClick={() => setCurrentPage('home')}
            className="mt-8"
            variant="outline"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  )

  // Privacy Page Component
  const PrivacyPage = () => (
    <div className="min-h-screen bg-background pt-20">
      <div className="container px-4 py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>At Social Riser, we are committed to protecting your privacy and ensuring the security of your personal information.</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information.</p>
          </div>
          
          <Button 
            onClick={() => setCurrentPage('home')}
            className="mt-8"
            variant="outline"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  )

  // Contact Dialog Component
  const ContactDialog = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Let's Collaborate</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          <div>
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              id="instagram"
              placeholder="@username"
              value={formData.instagram}
              onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              id="facebook"
              value={formData.facebook}
              onChange={(e) => setFormData(prev => ({ ...prev, facebook: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="description">Tell us about your project</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )

  if (currentPage === 'services') {
    return <ServicesPage />
  }

  if (currentPage === 'terms') {
    return <TermsPage />
  }

  if (currentPage === 'privacy') {
    return <PrivacyPage />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
      >
        <div className="container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <TrendUp className="w-5 h-5 text-white" weight="bold" />
            </div>
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer"
            >
              Social Riser
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button
              onClick={navigateToServices}
              className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
            >
              Services
            </button>
            <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 hover-glow">
                  <Sparkle className="w-4 h-4 mr-2" />
                  Collaborate
                </Button>
              </DialogTrigger>
              <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
            </Dialog>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container px-4 py-4 space-y-4">
              {['Home', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={navigateToServices}
                className="block w-full text-left text-sm font-medium transition-colors hover:text-primary cursor-pointer"
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

      {/* Optimized Home Section with improved parallax */}
      <section id="home" className="py-20 lg:py-32 relative overflow-hidden">
        {/* Optimized parallax background with better performance */}
        <div 
          className="absolute inset-0 opacity-10 parallax"
          style={{
            '--parallax-offset': `${scrollY * 0.3}px`,
            willChange: 'transform'
          } as React.CSSProperties}
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

      {/* Optimized Brands Carousel - Continuous Scrolling */}
      <section className="py-16 bg-muted/50 overflow-hidden scroll-container">
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
            {/* Optimized scrolling with CSS containment for better performance */}
            <div className="flex space-x-8 scroll-brands-rtl scroll-content">
              {/* Create enough duplicates for seamless infinite scroll */}
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 h-16 w-32 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 hover:scale-105 hover-glow cursor-pointer"
                  style={{ willChange: 'opacity, transform' }}
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {BRANDS[i % BRANDS.length]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optimized What We Do section with memoized components */}
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
            {cardData.map(({ icon, title, description, delay }, index) => (
              <ServiceCard
                key={`${title}-${index}`}
                icon={icon}
                title={title}
                description={description}
                delay={delay}
              />
            ))}
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
                <p className="text-muted-foreground mb-2">
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
      <footer className="bg-muted/50 py-12">
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
              <button className="text-muted-foreground hover:text-primary transition-colors hover-glow cursor-pointer">
                <InstagramLogo size={24} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors hover-glow cursor-pointer">
                <FacebookLogo size={24} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors hover-glow cursor-pointer">
                <EnvelopeSimple size={24} />
              </button>
            </div>

            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <button 
                onClick={navigateToTerms}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
              <span>•</span>
              <button 
                onClick={navigateToPrivacy}
                className="hover:text-primary transition-colors cursor-pointer"
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