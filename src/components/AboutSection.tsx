
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 flex items-center font-display">
              <span className="text-accent mr-4">01.</span>
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-pink mb-6 rounded-full"></div>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-dark/50 p-6 rounded-xl border border-slate/50 mb-6 hover:border-accent/50 transition">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-accent mr-2">👨‍💻</span>
                    The Developer
                  </h3>
                  <p className="text-gray mb-4">
                    I'm a Frontend Developer passionate about creating beautiful, functional interfaces. Currently studying Computer Science at Cairo University's Faculty of Computers and Artificial Intelligence.
                  </p>
                  <p className="text-gray">
                    I've worked at Bee Interactive as an intern and at Raqmee Company, honing my skills in modern web technologies.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-dark rounded-full text-sm font-mono hover:bg-accent/10 hover:text-accent transition skill-pill">JavaScript</span>
                  <span className="px-4 py-2 bg-dark rounded-full text-sm font-mono hover:bg-pink/10 hover:text-pink transition skill-pill">React</span>
                  <span className="px-4 py-2 bg-dark rounded-full text-sm font-mono hover:bg-teal/10 hover:text-teal transition skill-pill">Vue.js</span>
                  <span className="px-4 py-2 bg-dark rounded-full text-sm font-mono hover:bg-orange/10 hover:text-orange transition skill-pill">Node.js</span>
                </div>
              </div>

              <div>
                <div className="bg-dark/50 p-6 rounded-xl border border-slate/50 hover:border-pink/50 transition">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-pink mr-2">✍️</span>
                    The Writer
                  </h3>
                  <p className="text-gray mb-4">
                    Beyond code, I'm the author of "Unseen Tone," a novel that explores the intersection of technology and human relationships. Writing allows me to express creativity in a different medium.
                  </p>
                  <p className="text-gray">
                    My background in both technology and creative writing gives me a unique perspective on problem-solving and communication.
                  </p>
                </div>

                <div className="mt-6 flex items-center space-x-4 bg-dark/50 p-4 rounded-xl border border-slate/50 hover:border-teal/50 transition">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl emoji-bounce">
                    📚
                  </div>
                  <div>
                    <h4 className="font-bold">Unseen Tone</h4>
                    <p className="text-sm text-gray">My debut novel exploring technology and human connection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
