# Indian Tech Influencer Website

Empowering millions of Indians to make informed tech decisions through authentic reviews, tutorials, and insights into the latest gadgets and digital trends.

**Experience Qualities**:
1. **Trustworthy** - Building credibility through honest reviews and transparent partnerships with leading Indian brands
2. **Accessible** - Making complex technology simple for diverse Indian audiences across languages and technical backgrounds  
3. **Dynamic** - Showcasing the fast-paced, innovative spirit of India's booming tech ecosystem

**Complexity Level**: Light Application (multiple features with basic state)
- Multi-section website with content management, affiliate integration, and user engagement features that require state management for newsletter signups, content filtering, and user preferences

## Essential Features

### Hero Section with Brand Identity
- **Functionality**: Displays compelling tagline "Simplifying Tech for India" with high-quality banner and social media quick links
- **Purpose**: Establishes immediate credibility and provides direct access to content channels
- **Trigger**: Landing on homepage
- **Progression**: View hero banner → Read tagline → Click social media icons → Navigate to external platforms
- **Success criteria**: High engagement rate on social links and clear brand recognition

### About Section with Achievements
- **Functionality**: Showcases influencer bio, follower statistics, awards, and brand collaborations
- **Purpose**: Builds trust and demonstrates expertise in Indian tech market
- **Trigger**: Scrolling to about section or clicking navigation
- **Progression**: Read bio → View achievements → See brand partnerships → Build confidence in recommendations
- **Success criteria**: Increased time on site and higher conversion rates on affiliate links

### Content Hub / Blog
- **Functionality**: Organized tech articles with SEO optimization for Indian keywords and search patterns
- **Purpose**: Drives organic traffic and establishes thought leadership
- **Trigger**: Clicking blog navigation or searching for tech content
- **Progression**: Browse categories → Read articles → Engage with related content → Subscribe to newsletter
- **Success criteria**: High search rankings for "best smartphones India" and similar terms

### Video Gallery with YouTube Integration
- **Functionality**: Embedded playlists organized by categories (smartphones, laptops, AI tools, apps)
- **Purpose**: Showcases video content and drives YouTube channel growth
- **Trigger**: Navigating to video section
- **Progression**: Select category → Browse videos → Watch embedded content → Subscribe to channel
- **Success criteria**: Increased YouTube subscribers and video engagement

### Collaboration & Media Kit
- **Functionality**: Professional media kit download and brand contact form
- **Purpose**: Attracts brand partnerships and monetization opportunities
- **Trigger**: Brands seeking collaboration
- **Progression**: View partnership examples → Download media kit → Complete contact form → Schedule meetings
- **Success criteria**: Increased brand inquiries and successful partnerships

### Affiliate Shop Section
- **Functionality**: Curated product recommendations with affiliate links to Amazon India, Flipkart, Croma
- **Purpose**: Monetizes recommendations while helping users find verified products
- **Trigger**: Seeking product recommendations
- **Progression**: Browse categories → View product details → Click affiliate links → Complete purchases
- **Success criteria**: High affiliate conversion rates and commission revenue

### Newsletter & Community Features
- **Functionality**: Weekly tech tips subscription and social media feed integration
- **Purpose**: Builds engaged community and recurring traffic
- **Trigger**: Visiting site or consuming content
- **Progression**: Consume content → Sign up for newsletter → Receive weekly tips → Return for more content
- **Success criteria**: Growing subscriber base and high email open rates

## Edge Case Handling

- **Slow Internet Connections**: Progressive image loading and optimized content delivery for Indian internet speeds
- **Multiple Device Types**: Responsive design for feature phones to flagship smartphones
- **Language Preferences**: Graceful fallback from Hindi to English content
- **Affiliate Link Failures**: Backup product information and alternative retailer options
- **Video Embedding Issues**: Fallback thumbnails with direct YouTube links
- **Form Submission Errors**: Clear error messages and retry mechanisms

## Design Direction

The design should evoke the cutting-edge innovation and vibrant energy of India's tech renaissance - feeling both futuristic and approachable, with rich interface elements that celebrate the sophistication of modern Indian digital culture.

## Color Selection

Triadic color scheme using tech-inspired neon accents that reflect India's dynamic digital landscape and create strong visual hierarchy for content and calls-to-action.

- **Primary Color**: Electric Blue (oklch(0.65 0.25 240)) - Represents trust, technology, and the digital future, communicating innovation and reliability
- **Secondary Colors**: Deep Purple (oklch(0.45 0.20 280)) for premium tech sections, Warm Orange (oklch(0.70 0.15 45)) for Indian cultural elements and warmth
- **Accent Color**: Neon Green (oklch(0.75 0.25 140)) - High-energy highlight for CTAs, affiliate links, and interactive elements
- **Foreground/Background Pairings**: 
  - Background Dark (oklch(0.15 0.02 240)): Light Text (oklch(0.95 0.02 240)) - Ratio 12.1:1 ✓
  - Card Background (oklch(0.20 0.03 240)): Light Text (oklch(0.95 0.02 240)) - Ratio 9.8:1 ✓
  - Primary Blue (oklch(0.65 0.25 240)): White Text (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Accent Green (oklch(0.75 0.25 140)): Dark Text (oklch(0.15 0.02 240)) - Ratio 8.1:1 ✓
  - Orange Secondary (oklch(0.70 0.15 45)): Dark Text (oklch(0.15 0.02 240)) - Ratio 6.8:1 ✓

## Font Selection

Typography should convey technical precision and modern accessibility, using clean sans-serif fonts that maintain readability across diverse Indian device types and screen sizes.

- **Typographic Hierarchy**: 
  - H1 (Hero Tagline): Inter Bold/48px/tight letter spacing for maximum impact
  - H2 (Section Headers): Inter SemiBold/32px/normal spacing for clear hierarchy
  - H3 (Subsections): Inter Medium/24px/normal spacing for content organization
  - Body Text: Inter Regular/16px/relaxed line height for comfortable reading
  - Captions: Inter Regular/14px/tight spacing for metadata and fine print

## Animations

Animations should feel cutting-edge yet purposeful, balancing the excitement of tech innovation with clear functional guidance - subtle enough for professional credibility but dynamic enough to reflect India's energetic tech culture.

- **Purposeful Meaning**: Smooth hover effects on product cards suggest interactivity, loading animations reflect data processing, and scroll-triggered reveals mirror the discovery of new technology
- **Hierarchy of Movement**: Hero elements get bold entrance animations, navigation receives subtle hover states, content cards have gentle lift effects, and CTAs pulse softly to draw attention

## Component Selection

- **Components**: 
  - Hero: Custom section with gradient backgrounds and animated text
  - Navigation: Responsive header with mobile hamburger menu using Sheet component
  - Content Cards: Card components with hover effects for blog posts and videos
  - Product Grid: Card-based layout with Button components for affiliate links
  - Forms: Form components with Input, Textarea, and Select for newsletter and contact
  - Gallery: Custom video embed grid with responsive iframe containers
  - Social Links: Button variants with Phosphor icons for platform recognition

- **Customizations**: 
  - Gradient overlays for hero sections
  - Custom product card layouts with affiliate badges
  - Animated counter components for follower statistics
  - Multi-language toggle component
  - Newsletter signup with success/error states

- **States**: 
  - Buttons: Default/hover with neon glow effects, active with scale transform, disabled with opacity
  - Cards: Subtle elevation on hover, loading states with skeleton placeholders
  - Forms: Focus states with blue border glow, validation with green/red indicators
  - Navigation: Active page highlighting, mobile menu slide transitions

- **Icon Selection**: Phosphor icons for technology (Microchip, DeviceMobile, Laptop), social media (YoutubeLogo, InstagramLogo, TwitterLogo), and actions (Download, ExternalLink, Heart)

- **Spacing**: Consistent 4px grid system using Tailwind's spacing scale (p-4, p-6, p-8) with generous whitespace for premium feel

- **Mobile**: Mobile-first approach with collapsible navigation, stacked card layouts, touch-friendly button sizes (min 44px), and optimized image loading for Indian network conditions