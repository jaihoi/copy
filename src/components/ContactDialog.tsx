import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { EnvelopeSimple, X } from "@phosphor-icons/react"
import { toast } from 'sonner'

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    facebook: '',
    description: ''
  })

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
    
    // Reset form and close dialog
    setFormData({
      name: '',
      email: '',
      instagram: '',
      facebook: '',
      description: ''
    })
    onOpenChange(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md animate-bounce-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Let's <span className="gradient-text">Collaborate</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            Ready to elevate your influence or find the perfect creator for your brand? 
            Let's start the conversation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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

          <div className="grid grid-cols-2 gap-4">
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
              rows={4}
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

        <div className="text-center pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">
            Or reach us directly at:
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <EnvelopeSimple className="w-4 h-4" />
            <span className="font-medium">contact@socialriser.com</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}