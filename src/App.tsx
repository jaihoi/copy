import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { 
  List, 
  X, 
  Star, 
  Users, 
  TrendUp, 
  Target, 
  Rocket, 
  Heart,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  ArrowRight,
  CheckCircle,
  Sparkle,
  Chat,
  Crown,
  Lightning
} from '@phosphor-icons/react'
import { toast } from 'sonner'

// Mock brand logos for scrolling animation
const brands = [
  'Netflix', 'Nike', 'Apple', 'Samsung', 'Coca-Cola', 'McDonald\'s', 
  'Google', 'Microsoft', 'Amazon', 'Tesla', 'Disney', 'Adidas'
]

const services = [
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
    images: ['📱', '💰', '🤝', '📈', '⭐', '🎯']
  },
  {
    id: 'talent',
    title: 'Talent Management – Nurturing the Stars of Tomorrow',
    subtitle: 'True talent deserves more than just recognition — it deserves direction, opportunity, and growth.',
    description: 'Our Talent Management service is designed to help creators and influencers unlock their full potential, while giving brands access to the right voices to represent their vision authentically.',
    features: [
      'End-to-end support from negotiation to brand partnerships',
      'Audience growth and reputation management',
      'Long-term career building strategies',
      'Professional management for seamless collaborations'
    ],
    images: ['👑', '🌟', '📊', '🎭', '💼', '🚀']
  },
  {
    id: 'brands',
    title: 'Influencer Marketing for Brands',
    subtitle: 'Traditional advertising is losing its charm in today\'s digital-first world.',
    description: 'Social Riser bridges the gap between brands and influencers, ensuring your message reaches the right audience through voices they trust and relate to.',
    features: [
      'Data-driven strategies with deep creator insights',
      'Authentic connections that build real relationships',
      'Campaigns that deliver tangible business results',
      'Access to professionally managed creators'
    ],
    images: ['📊', '🎯', '💡', '🔥', '📢', '💎']
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    facebook: '',
    description: ''
  })
  const [isContactOpen, setIsContactOpen] = useState(false)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [currentPage])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send to contact@socialriser.com
    toast.success('Thank you! Your message has been sent to contact@socialriser.com')
    setFormData({ name: '', email: '', instagram: '', facebook: '', description: '' })
    setIsContactOpen(false)
  }

  const navigateToServices = () => {
    setCurrentPage('services')
  }

  const Header = () => (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="font-display font-bold text-2xl gradient-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentPage('home')}
          >
            Social Riser
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Contact', 'Services'].map((item) => (
              <motion.button
                key={item}
                className="relative text-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => item === 'Services' ? navigateToServices() : setCurrentPage(item.toLowerCase())}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 animate-shimmer">
                  <Sparkle className="w-4 h-4 mr-2" />
                  Collaborate
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Let's Collaborate!</DialogTitle>
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
                      placeholder="Profile URL"
                      value={formData.facebook}
                      onChange={(e) => setFormData(prev => ({ ...prev, facebook: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your project..."
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden py-4 border-t border-primary/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {['Home', 'About', 'Contact', 'Services'].map((item) => (
                <motion.button
                  key={item}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    item === 'Services' ? navigateToServices() : setCurrentPage(item.toLowerCase())
                    setIsMenuOpen(false)
                  }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text-enhanced">
              Crafting the Future of Influence
            </h1>
            <motion.p 
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Connecting brands with creators to design unforgettable campaigns that inspire, engage, 
              and transform digital influence into real-world impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-shimmer hover-glow"
                onClick={() => setIsContactOpen(true)}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-10 text-primary/30"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Star size={24} />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-secondary/30"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <Sparkle size={32} />
        </motion.div>
      </section>

      {/* Brands Carousel */}
      <section className="py-12 bg-muted/30 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll-continuous">
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand}-${index}`}
                className="flex-shrink-0 mx-8 px-6 py-3 bg-card rounded-lg shadow-sm border"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-semibold text-foreground whitespace-nowrap">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16 animate-on-scroll animate-slide-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 gradient-text">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with authentic influencers and forward-thinking brands to create 
              powerful partnerships that drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Creator Partnerships",
                description: "Connect with authentic voices that resonate with your target audience."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Strategic Campaigns",
                description: "Data-driven strategies designed to maximize engagement and ROI."
              },
              {
                icon: <TrendUp className="w-8 h-8" />,
                title: "Growth Analytics",
                description: "Comprehensive insights to track and optimize campaign performance."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-glow transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const AboutPage = () => (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 gradient-text">
              About Social Riser
            </h1>
          </motion.div>

          <div className="space-y-8 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              In today's fast-paced digital era, social media has become the heartbeat of marketing, 
              entertainment, and storytelling. Every day, countless influencers and creators are rising 
              with unique ideas, creativity, and passion. Some are striving for name and fame, while 
              others are looking to turn their passion into a sustainable career.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              But in this highly competitive space, growth isn't just about creativity—it's about 
              opportunity, strategy, and the right connections. This is where Social Riser comes in.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We are not just another influencer marketing agency; we are a growth ecosystem built to 
              connect talented creators with forward-thinking brands, creating powerful collaborations 
              that drive success for both. Our mission is simple yet impactful:
            </motion.p>

            <motion.blockquote
              className="text-2xl font-display text-center py-8 my-8 gradient-text border-l-4 border-primary pl-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              "Empowering creators to rise, connect, and thrive while helping brands grow through authentic storytelling."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              At Social Riser, we believe that when the right creator and right brand come together, 
              it's more than just a campaign — it's the beginning of a movement.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  )

  const ContactPage = () => (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to start your journey with Social Riser? Let's create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="hover-glow">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-instagram">Instagram</Label>
                      <Input
                        id="contact-instagram"
                        placeholder="@username"
                        value={formData.instagram}
                        onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-facebook">Facebook</Label>
                      <Input
                        id="contact-facebook"
                        placeholder="Profile URL"
                        value={formData.facebook}
                        onChange={(e) => setFormData(prev => ({ ...prev, facebook: e.target.value }))}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-description">Description</Label>
                    <Textarea
                      id="contact-description"
                      placeholder="Tell us about your project or collaboration idea..."
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full animate-shimmer">
                    <Chat className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )

  const ServicesPage = () => (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for creators and brands to build meaningful partnerships 
              and achieve extraordinary results.
            </p>
          </motion.div>

          <Tabs defaultValue="influencers" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="influencers" className="flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Influencers
              </TabsTrigger>
              <TabsTrigger value="talent" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Talent Management
              </TabsTrigger>
              <TabsTrigger value="brands" className="flex items-center gap-2">
                <Lightning className="w-4 h-4" />
                Brand Associations
              </TabsTrigger>
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="hover-glow">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 gradient-text">
                            {service.title}
                          </h2>
                          <p className="text-lg mb-6 text-muted-foreground">
                            {service.subtitle}
                          </p>
                          <p className="mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="space-y-3">
                            {service.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {service.images.map((emoji, index) => (
                            <motion.div
                              key={index}
                              className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center text-4xl hover-glow"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {emoji}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl font-display mb-6 gradient-text">
              "We manage the business, so you can focus on creating magic."
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              ✨ Join Social Riser today - Your Influence, Our Mission.
            </p>
            <Button 
              size="lg" 
              className="animate-shimmer hover-glow"
              onClick={() => setIsContactOpen(true)}
            >
              <Sparkle className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )

  const Footer = () => (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="font-display font-bold text-2xl mb-4 text-primary">
              Social Riser
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Empowering creators to rise, connect, and thrive while helping brands 
              grow through authentic storytelling.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: InstagramLogo, href: "#" },
                { icon: FacebookLogo, href: "#" },
                { icon: TwitterLogo, href: "#" },
                { icon: YoutubeLogo, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                    onClick={() => link === 'Services' ? navigateToServices() : setCurrentPage(link.toLowerCase())}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-secondary-foreground/20" />
        
        <div className="text-center text-secondary-foreground/60">
          <p>&copy; 2024 Social Riser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HomePage />
          </motion.div>
        )}
        
        {currentPage === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AboutPage />
          </motion.div>
        )}
        
        {currentPage === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactPage />
          </motion.div>
        )}
        
        {currentPage === 'services' && (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServicesPage />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App