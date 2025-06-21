import React from "react";

const WritingSection: React.FC = () => {
  return (
    <section id="writing" className="py-20 bg-slate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center font-display">
            <span className="text-pink mr-4">05.</span>
            Unseen Tone – My Novel
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-pink mx-auto mb-6 rounded-full"></div>
          <p className="text-gray max-w-2xl mx-auto">
            A story that blurs the line between code and emotion.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark/50 p-8 rounded-xl shadow-lg border border-slate/50 hover:border-pink/50 transition">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                {/* <div className="w-full h-48 bg-gradient-to-br from-dark to-pink rounded-lg shadow-lg flex items-center justify-center emoji-bounce"> */}
                <img
                  src="../../public/Novel.png"
                  alt="Novel Cover"
                  className="sm:h-96"
                />
                {/* </div> */}
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-4 text-light">
                  Unseen Tone
                </h3>
                <p className="text-gray mb-6">
                </p>
                <p className="text-gray mb-6">
                  In a universe woven from seven echoes, where the forces of
                  Light, Shadow, and Void clash for the fate of existence, a boy
                  is born amidst cosmic chaos. He does not yet know that an
                  unseen tone flows within him… A tone capable of breaking the
                  balance—or remaking it. Unseen Tone is a cosmic saga spanning
                  galaxies and minds, filled with celestial wars, buried
                  secrets, and profound psychological transformations. Will it
                  be the harmony of salvation… or the first note of the end?
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://unseen-tone.vercel.app/read/ead84c6d-91d0-4fa0-bfeb-5eaf35a3ff31"
                    target="_blank"
                    className="px-6 py-2 bg-accent text-dark rounded-lg hover:bg-accent/90 transition font-medium btn-hover"
                  >
                    Read online <span className="ml-2 emoji-float">🔍</span>
                  </a>
                  <button
                    disabled
                    className="px-6 py-2 border-2 border-pink text-pink rounded-lg hover:bg-pink/10 transition font-medium btn-hover"
                  >
                    Where to Buy <span className="ml-2 emoji-float">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
