import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center font-display">
            <span className="text-accent mr-4">06.</span>
            Let's Connect
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-pink mx-auto mb-6 rounded-full"></div>
          <p className="text-gray max-w-2xl mx-auto">
            Get in touch for collaborations or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mr-4 border border-accent emoji-wiggle">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a
                    href="mailto:mazenemad099@gmail.com"
                    className="text-gray hover:text-accent transition"
                  >
                   mazenemad099@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-pink/10 rounded-lg flex items-center justify-center text-pink mr-4 border border-pink emoji-wiggle">
                  🌐
                </div>
                <div>
                  <h4 className="font-bold mb-3">Social Media</h4>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/01093601358"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center hover:bg-green-500/20 transition text-green-500 border border-green-500/20 hover:scale-110 emoji-float"
                      title="WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                      </svg>
                    </a>

                    <a
                      href="https://www.facebook.com/mazen.emad.602924"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center hover:bg-blue-600/20 transition text-blue-600 border border-blue-600/20 hover:scale-110 emoji-float animation-delay-1000"
                      title="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/mazen-emad-804759259"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition text-blue-500 border border-blue-500/20 hover:scale-110 emoji-float animation-delay-2000"
                      title="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>

                    <a
                      href="https://github.com/MazenME"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/10 rounded-full flex items-center justify-center hover:bg-gray-800/20 transition text-gray-400 border border-gray-800/20 hover:scale-110 emoji-float animation-delay-3000"
                      title="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.313-1.756-1.313-1.756-1.071-.732.083-.718.083-.718 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-light"
                >
                  Your Name
                </label>
                <input
                  disabled
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate border border-slate/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-light placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-light"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  disabled
                  id="email"
                  className="w-full px-4 py-3 bg-slate border border-slate/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-light placeholder-gray-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-light"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  disabled
                  rows={4}
                  className="w-full px-4 py-3 bg-slate border border-slate/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-light placeholder-gray-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-dark font-medium rounded-lg hover:bg-accent/90 transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 btn-hover shadow-lg flex items-center justify-center mx-auto"
              >
                Send Message <span className="ml-2 ">🚀</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
