
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Initialize EmailJS with your user ID
    // NOTE: You'll need to create an EmailJS account and replace these values
    // with your actual Service ID, Template ID, and User ID
    const serviceId = 'service_id'; // Replace with your service ID
    const templateId = 'template_id'; // Replace with your template ID
    const userId = 'user_id'; // Replace with your user ID
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast({
          title: "Failed to send message",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "simonnjenganjuguna@gmail.com",
      href: "mailto:simonnjenganjuguna@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254728240411",
      href: "tel:+254728240411"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/simon-njuguna-692557104",
      href: "https://www.linkedin.com/in/simon-njuguna-692557104/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="bg-tech-navy py-20">
      <div className="section-container">
        <h2 className="section-title text-tech-lightest">
          Get In Touch
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-tech-lightest mb-6">Let's Connect</h3>
            <p className="text-tech-light mb-8">
              I'm always open to discussing new projects, opportunities in AI and data science, or potential collaborations. 
              Whether you have a question or just want to say hello, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-tech-lightblue border-none">
                  <CardContent className="p-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-tech-blue flex items-center justify-center mr-4">
                      <item.icon className="text-tech-teal" size={20} />
                    </div>
                    <div>
                      <p className="text-tech-light text-sm">{item.label}</p>
                      <a 
                        href={item.href} 
                        className="text-tech-lightest hover:text-tech-teal transition-colors"
                        target={item.label === "LinkedIn" ? "_blank" : "_self"}
                        rel={item.label === "LinkedIn" ? "noopener noreferrer" : ""}
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-tech-lightblue rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-tech-lightest mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-tech-navy border-tech-teal/30 text-tech-lightest"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-tech-navy border-tech-teal/30 text-tech-lightest"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-tech-navy border-tech-teal/30 text-tech-lightest"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-tech-navy border-tech-teal/30 text-tech-lightest min-h-[150px]"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
