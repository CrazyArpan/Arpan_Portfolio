import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
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
          <p className="text-foreground/80">arpandas.rs2001@gmail.com</p>
          <a
            href="mailto:arpandas.rs2001@gmail.com"
            className="mt-4 text-primary hover:underline"
          >
            Send Email
          </a>
        </div>

        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <Phone className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-foreground/80">+91 8917389798</p>
          {/* You can add a link to call the number if needed */}
        </div>

        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <MapPin className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-foreground/80">Kolkata, India</p>
          {/* You can add a link to a map if needed */}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Or, send me a message directly:
        </h3>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full rounded-md bg-secondary/50 border border-white/10 text-foreground"
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
              className="mt-1 p-2 w-full rounded-md bg-secondary/50 border border-white/10 text-foreground"
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
              className="mt-1 p-2 w-full rounded-md bg-secondary/50 border border-white/10 text-foreground"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
