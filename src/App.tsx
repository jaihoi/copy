import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useKV } from '@github/spark/hooks'
import { 
  YoutubeLogo, 
  InstagramLogo, 
  TwitterLogo,
  DeviceMobile,
  Laptop,
  Robot,
  AppWindow,
  Download,
  ArrowSquareOut,
  Heart,
  Star,
  Users,
  Play,
  ShoppingCart,
  Envelope,
  Globe
} from '@phosphor-icons/react'
import { toast } from 'sonner'

function App() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [language, setLanguage] = useState('en')
  const [favorites, setFavorites] = useKV<string[]>('favorite-products', [])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) {
      toast.error('Please enter your email address')
      return
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Successfully subscribed to weekly tech updates!')
    setNewsletterEmail('')
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error('Please fill in all required fields')
      return
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    toast.success('Message sent! We\'ll get back to you within 24 hours.')
    setContactForm({ name: '', email: '', company: '', message: '' })
  }

  const toggleFavorite = (productId: string) => {
    setFavorites(current => {
      if (!current) return [productId]
      return current.includes(productId) 
        ? current.filter(id => id !== productId)
        : [...current, productId]
    })
  }

  const toggleLanguage = () => {
    setLanguage(lang => lang === 'en' ? 'hi' : 'en')
  }

  const text = {
    en: {
      heroTitle: "Simplifying Tech for India",
      heroSubtitle: "Helping millions make informed tech decisions through honest reviews, tutorials, and insights into the latest gadgets",
      followMe: "Follow Me",
      about: "About",
      blog: "Blog",
      videos: "Videos", 
      collaborate: "Collaborate",
      shop: "Shop",
      newsletter: "Newsletter",
      aboutTitle: "India's Most Trusted Tech Voice",
      aboutText: "With over 5 million followers across platforms, I've been reviewing gadgets and simplifying technology for Indian audiences since 2018. From budget smartphones to premium laptops, I help you make the right choice.",
      achievements: "Achievements",
      brandPartnerships: "Brand Partnerships",
      blogTitle: "Latest Tech Insights",
      videosTitle: "Latest Reviews & Tutorials",
      collaborateTitle: "Partner With Us",
      mediaKit: "Download Media Kit",
      shopTitle: "Recommended Tech",
      subscribe: "Subscribe",
      contact: "Contact Us"
    },
    hi: {
      heroTitle: "भारत के लिए टेक्नोलॉजी को सरल बनाना",
      heroSubtitle: "ईमानदार समीक्षाओं, ट्यूटोरियल्स और नवीनतम गैजेट्स की जानकारी के माध्यम से लाखों लोगों को सूचित तकनीकी निर्णय लेने में मदद करना",
      followMe: "मुझे फॉलो करें",
      about: "परिचय",
      blog: "ब्लॉग", 
      videos: "वीडियो",
      collaborate: "सहयोग",
      shop: "खरीदारी",
      newsletter: "न्यूज़लेटर",
      aboutTitle: "भारत की सबसे भरोसेमंद तकनीकी आवाज़",
      aboutText: "सभी प्लेटफॉर्म पर 50 लाख से अधिक फॉलोअर्स के साथ, मैं 2018 से भारतीय दर्शकों के लिए गैजेट्स की समीक्षा कर रहा हूं और तकनीक को सरल बना रहा हूं।",
      achievements: "उपलब्धियां",
      brandPartnerships: "ब्रांड साझेदारी",
      blogTitle: "नवीनतम तकनीकी अंतर्दृष्टि",
      videosTitle: "नवीनतम समीक्षा और ट्यूटोरियल",
      collaborateTitle: "हमारे साथ साझेदारी करें", 
      mediaKit: "मीडिया किट डाउनलोड करें",
      shopTitle: "अनुशंसित तकनीक",
      subscribe: "सब्स्क्राइब करें",
      contact: "संपर्क करें"
    }
  }

  const currentText = text[language as keyof typeof text]

  const blogPosts = [
    {
      title: "Best 5G Smartphones Under ₹20,000 in 2024",
      excerpt: "Complete guide to affordable 5G phones perfect for Indian users",
      category: "Smartphones",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop"
    },
    {
      title: "AI Tools Every Indian Content Creator Should Use",
      excerpt: "Boost your productivity with these AI-powered tools",
      category: "AI Tools", 
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      title: "Budget Laptop Buying Guide for Students",
      excerpt: "Find the perfect laptop for studies without breaking the bank",
      category: "Laptops",
      readTime: "6 min read", 
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=250&fit=crop"
    }
  ]

  const videos = [
    {
      title: "iPhone 15 vs OnePlus 12 - India Comparison",
      category: "Smartphones",
      views: "2.3M views",
      thumbnail: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=225&fit=crop"
    },
    {
      title: "Best Budget Laptops Under ₹50,000",
      category: "Laptops", 
      views: "1.8M views",
      thumbnail: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=225&fit=crop"
    },
    {
      title: "AI Apps That Will Change Your Life",
      category: "AI Tools",
      views: "3.1M views", 
      thumbnail: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=225&fit=crop"
    }
  ]

  const products = [
    {
      id: "1",
      name: "OnePlus 12R",
      price: "₹39,999",
      originalPrice: "₹42,999", 
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      category: "Smartphones",
      rating: 4.5,
      affiliate: "Amazon India"
    },
    {
      id: "2", 
      name: "ASUS VivoBook 15",
      price: "₹45,990",
      originalPrice: "₹52,990",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300&h=300&fit=crop", 
      category: "Laptops",
      rating: 4.3,
      affiliate: "Flipkart"
    },
    {
      id: "3",
      name: "Sony WH-1000XM5", 
      price: "₹24,990",
      originalPrice: "₹29,990",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
      category: "Audio",
      rating: 4.8,
      affiliate: "Croma"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <DeviceMobile className="h-8 w-8 text-primary" weight="bold" />
              <span className="text-xl font-bold text-gradient">TechGuru India</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">{currentText.about}</a>
              <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">{currentText.blog}</a>
              <a href="#videos" className="text-sm font-medium hover:text-primary transition-colors">{currentText.videos}</a>
              <a href="#collaborate" className="text-sm font-medium hover:text-primary transition-colors">{currentText.collaborate}</a>
              <a href="#shop" className="text-sm font-medium hover:text-primary transition-colors">{currentText.shop}</a>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-xs"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language === 'en' ? 'हिंदी' : 'English'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            {currentText.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {currentText.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="neon-glow">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <YoutubeLogo className="h-5 w-5 mr-2" weight="fill" />
                YouTube
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramLogo className="h-5 w-5 mr-2" weight="fill" />
                Instagram
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterLogo className="h-5 w-5 mr-2" weight="fill" />
                Twitter
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">5M+</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-accent">50+</div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">6</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{currentText.aboutTitle}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {currentText.aboutText}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">{currentText.achievements}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">YouTube Creator Award</Badge>
                    <Badge variant="secondary">Tech Influencer of the Year</Badge>
                    <Badge variant="secondary">Top Tech Reviewer</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-accent">{currentText.brandPartnerships}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>OnePlus</Badge>
                    <Badge>boAt</Badge>
                    <Badge>Flipkart</Badge>
                    <Badge>Amazon India</Badge>
                    <Badge>Realme</Badge>
                    <Badge>Xiaomi</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-gradient rounded-2xl p-8 neon-glow">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Tech Influencer"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Arjun Sharma</h3>
                  <p className="text-muted-foreground mb-4">Tech Influencer & Content Creator</p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <Users className="h-6 w-6 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-semibold">5M+</div>
                    </div>
                    <div className="text-center">
                      <Star className="h-6 w-6 mx-auto mb-1 text-accent" />
                      <div className="text-sm font-semibold">4.9/5</div>
                    </div>
                    <div className="text-center">
                      <Play className="h-6 w-6 mx-auto mb-1 text-orange-accent" />
                      <div className="text-sm font-semibold">500+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentText.blogTitle}</h2>
            <p className="text-lg text-muted-foreground">Stay updated with the latest tech trends and reviews</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Read More
                    <ArrowSquareOut className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentText.videosTitle}</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <Button variant="outline" size="sm">
                <DeviceMobile className="h-4 w-4 mr-2" />
                Smartphones
              </Button>
              <Button variant="outline" size="sm">
                <Laptop className="h-4 w-4 mr-2" />
                Laptops
              </Button>
              <Button variant="outline" size="sm">
                <Robot className="h-4 w-4 mr-2" />
                AI Tools
              </Button>
              <Button variant="outline" size="sm">
                <AppWindow className="h-4 w-4 mr-2" />
                Apps
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="card-gradient border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button size="lg" className="rounded-full accent-glow">
                      <Play className="h-6 w-6" weight="fill" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{video.category}</Badge>
                    <span className="text-xs text-muted-foreground">{video.views}</span>
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaborate" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentText.collaborateTitle}</h2>
            <p className="text-lg text-muted-foreground">Let's create something amazing together</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="h-5 w-5 mr-2 text-primary" />
                  {currentText.mediaKit}
                </CardTitle>
                <CardDescription>
                  Complete media kit with audience demographics, pricing, and case studies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Reach:</span> 5M+ followers
                    </div>
                    <div>
                      <span className="font-semibold">Engagement:</span> 8.5% avg
                    </div>
                    <div>
                      <span className="font-semibold">Demographics:</span> 18-35 years
                    </div>
                    <div>
                      <span className="font-semibold">Location:</span> India (85%)
                    </div>
                  </div>
                  <Separator />
                  <Button className="w-full neon-glow">
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Media Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle>{currentText.contact}</CardTitle>
                <CardDescription>
                  Ready to collaborate? Send us your proposal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({...prev, name: e.target.value}))}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({...prev, email: e.target.value}))}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Company/Brand Name"
                    value={contactForm.company}
                    onChange={(e) => setContactForm(prev => ({...prev, company: e.target.value}))}
                  />
                  <Textarea
                    placeholder="Tell us about your collaboration idea..."
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({...prev, message: e.target.value}))}
                    required
                  />
                  <Button type="submit" className="w-full accent-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentText.shopTitle}</h2>
            <p className="text-lg text-muted-foreground">Handpicked gadgets I personally recommend</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="card-gradient border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${favorites?.includes(product.id) ? 'text-red-500' : 'text-muted-foreground'}`} 
                      weight={favorites?.includes(product.id) ? 'fill' : 'regular'}
                    />
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                    {product.affiliate}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" weight="fill" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-accent">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full accent-glow">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentText.newsletter}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get weekly tech updates, exclusive reviews, and early access to new content
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="neon-glow">
                <Envelope className="h-4 w-4 mr-2" />
                {currentText.subscribe}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. Join 100,000+ tech enthusiasts!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <DeviceMobile className="h-6 w-6 text-primary" weight="bold" />
                <span className="text-lg font-bold text-gradient">TechGuru India</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Simplifying technology for millions of Indians through honest reviews and insights.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors block">About</a>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors block">Blog</a>
                <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors block">Videos</a>
                <a href="#shop" className="text-muted-foreground hover:text-primary transition-colors block">Shop</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors block">Smartphones</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors block">Laptops</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors block">AI Tools</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors block">Apps</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <Button asChild variant="ghost" size="sm">
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <YoutubeLogo className="h-5 w-5" weight="fill" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramLogo className="h-5 w-5" weight="fill" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TwitterLogo className="h-5 w-5" weight="fill" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 TechGuru India. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App