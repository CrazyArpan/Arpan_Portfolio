import { Mail, MapPin, Github } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_dthfr8k', // Your EmailJS service ID
        'template_wglgtfk', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'pritamda.678@gmail.com',
        },
        'gk8c6UeFIreq7-rPw' // Your EmailJS public key
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-foreground/80 text-lg mb-12">
          Feel free to reach out if you have any questions or opportunities!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <Mail className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-foreground/80">arpabdas02@gmail.com</p>
          <a
            href="mailto:pritamda.678@gmail.com"
            className="mt-4 text-primary hover:underline"
          >
            Send Email
          </a>
        </div>

        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <MapPin className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-foreground/80">Kolkata, India</p>
        </div>

        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <Github className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">GitHub</h3>
          <p className="text-foreground/80">Check my projects</p>
          <a
            href="https://github.com/CrazyArpan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-primary hover:underline"
          >
            View Profile
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Or, send me a message directly:
        </h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded-md bg-secondary/50 border border-white/10 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded-md bg-secondary/50 border border-white/10 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded-md bg-secondary/50 border border-white/10 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:scale-105 hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};