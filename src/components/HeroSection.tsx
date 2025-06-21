
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <p className="text-accent font-mono mb-4 sm:mt-2">
              Hi there! <span className="emoji-wiggle">👋</span>
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-display">
              I'm <span className="gradient-text">Mazen Emad</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray">
              Frontend Developer <span className="emoji-bounce">💻</span> & <br />
              Creative Writer <span className="emoji-wiggle">✍️</span>
            </h2>
            <p className="text-lg mb-8 text-gray max-w-lg">
              I craft beautiful digital experiences and write compelling stories. Currently
              studying Computer Science at Cairo University.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-dark font-medium rounded-lg hover:bg-accent/90 transition btn-hover shadow-lg flex items-center"
              >
                Say Hello <span className="ml-2 emoji-bounce">👋</span>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-pink text-pink font-medium rounded-lg hover:bg-pink/10 transition btn-hover shadow-lg flex items-center"
              >
                My Projects <span className="ml-2 emoji-float">👇</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-tilt">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-pink/20 rounded-3xl transform rotate-6 animate-float"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-red/20 rounded-3xl transform -rotate-6 animate-float animation-delay-2000"></div>
              <div className="relative z-10 w-full h-full bg-slate rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-2 border-accent/30">
                <div className="text-center p-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-accent to-pink rounded-full flex items-center justify-center mx-auto mb-6 text-white text-5xl font-bold border-4 border-light/20 shadow-inner">
                    <img src="/assets/ChatGPT Image Jun 19, 2025, 01_06_01 AM.png" alt="Me" className="rounded-full "/>
                  </div>
                  <h3 className="text-xl font-bold font-display">Mazen Emad</h3>
                  <p className="text-gray">Developer & Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
