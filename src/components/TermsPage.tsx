import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, TrendUp } from "@phosphor-icons/react"

interface TermsPageProps {
  onBack: () => void
}

export function TermsPage({ onBack }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <TrendUp className="w-5 h-5 text-white" weight="bold" />
            </div>
            <span className="text-xl font-bold gradient-text">Social Riser</span>
          </div>
        </div>
      </header>

      <div className="container px-4 py-12 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>1. Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                By accessing and using Social Riser's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>2. Services Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Social Riser provides influencer marketing services, talent management, and brand association 
                services. We connect creators with brands to create authentic partnerships and campaigns.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Influencer partnership facilitation</li>
                <li>Talent management and career development</li>
                <li>Brand collaboration strategies</li>
                <li>Content creation guidance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Users are responsible for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Providing accurate and truthful information</li>
                <li>Maintaining the confidentiality of account information</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Respecting intellectual property rights</li>
                <li>Creating authentic and original content</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>4. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Payment terms vary based on the specific service agreement. All fees are non-refundable unless 
                otherwise specified in writing. We reserve the right to modify our pricing structure with 30 days notice.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>5. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                All content created through our platform remains the property of the respective creators. 
                Social Riser retains the right to use case studies and anonymized performance data for 
                marketing purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Social Riser shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or 
                other intangible losses.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>7. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                For questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">Email: contact@socialriser.com</p>
                <p className="text-sm text-muted-foreground mt-2">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}