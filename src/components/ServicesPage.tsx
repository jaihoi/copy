import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  Crown, 
  Megaphone, 
  ArrowLeft, 
  TrendUp,
  Star,
  Target,
  Handshake
} from "@phosphor-icons/react"

interface ServicesPageProps {
  onBack: () => void
}

export function ServicesPage({ onBack }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState('influencers')

  const influencerImages = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face'
  ]

  const talentImages = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
  ]

  const brandImages = [
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop'
  ]

  const ImageCarousel = ({ images }: { images: string[] }) => (
    <div className="relative overflow-hidden rounded-xl h-80 bg-gradient-to-br from-muted to-muted/50 shadow-lg">
      <div className="flex animate-carousel-scroll space-x-6 h-full">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-56 h-full group">
            <img 
              src={image} 
              alt={`Service ${index + 1}`}
              className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none"></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header with Animation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center space-x-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse">
              <TrendUp className="w-5 h-5 text-white" weight="bold" />
            </div>
            <span className="text-xl font-bold gradient-text-enhanced">Social Riser</span>
          </div>
        </div>
      </header>

      {/* Enhanced Services Content */}
      <div className="container px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="gradient-text-enhanced">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for creators and brands to thrive in the digital landscape
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-14 bg-muted/50 rounded-xl">
            <TabsTrigger 
              value="influencers" 
              className="flex items-center space-x-2 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
            >
              <Users className="w-4 h-4" />
              <span>Influencers</span>
            </TabsTrigger>
            <TabsTrigger 
              value="talent" 
              className="flex items-center space-x-2 text-sm font-medium data-[state=active]:bg-secondary data-[state=active]:text-white transition-all duration-300"
            >
              <Crown className="w-4 h-4" />
              <span>Talent Management</span>
            </TabsTrigger>
            <TabsTrigger 
              value="brands" 
              className="flex items-center space-x-2 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-white transition-all duration-300"
            >
              <Megaphone className="w-4 h-4" />
              <span>Brand Associations</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="influencers" className="animate-slide-left">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-left">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Rise Above the Noise</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Your content is your voice, and at Social Riser, we believe your voice deserves to be heard.
                </p>

                <p className="text-muted-foreground">
                  Whether you are just starting your journey or already established, we work closely with you 
                  to unlock high-value brand collaborations that resonate with your audience and boost your earning potential.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 animate-slide-left-delayed">
                    <Handshake className="w-5 h-5 text-primary" />
                    <span>Long-term partnerships instead of one-off deals</span>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-left-delayed">
                    <Target className="w-5 h-5 text-primary" />
                    <span>Connecting you with brands that align with your values</span>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-left-delayed">
                    <TrendUp className="w-5 h-5 text-primary" />
                    <span>Building sustainable revenue streams</span>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90 hover-glow animate-shimmer" size="lg">
                  Join as Influencer
                </Button>
              </div>

              <div className="animate-slide-right">
                <ImageCarousel images={influencerImages} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="talent" className="animate-slide-left">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-left">
                <ImageCarousel images={talentImages} />
              </div>

              <div className="space-y-6 animate-slide-right">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center animate-pulse">
                    <Crown className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold">Nurturing Tomorrow's Stars</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  True talent deserves more than just recognition — it deserves direction, opportunity, and growth.
                </p>

                <p className="text-muted-foreground">
                  Our Talent Management service is designed to help creators and influencers unlock their full potential, 
                  while giving brands access to the right voices to represent their vision authentically.
                </p>

                <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/10 animate-fade-in">
                  <p className="font-semibold text-secondary mb-2">
                    "We manage the business, so you can focus on creating magic."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ✨ Join Social Riser today - Your Influence, Our Mission.
                  </p>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 hover-glow animate-shimmer" size="lg">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="brands" className="animate-slide-left">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-left">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-pulse">
                    <Megaphone className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold">Brand Associations</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Traditional advertising is losing its charm in today's digital-first world.
                </p>

                <p className="text-muted-foreground">
                  Consumers now demand authentic connections and real experiences. Social Riser bridges the gap 
                  between brands and influencers, ensuring your message reaches the right audience through voices 
                  they trust and relate to.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-accent/10 text-accent border-accent/20">
                    Data-Driven Strategies
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-accent/10 text-accent border-accent/20">
                    Authentic Storytelling
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-accent/10 text-accent border-accent/20">
                    Measurable Results
                  </Badge>
                </div>

                <Button className="bg-accent hover:bg-accent/90 hover-glow animate-shimmer" size="lg">
                  Partner with Us
                </Button>
              </div>

              <div className="animate-slide-right">
                <ImageCarousel images={brandImages} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}