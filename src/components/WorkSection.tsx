
export default function WorkSection() {
  return (
    <section id="work" className="py-20 bg-slate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center font-display">
            <span className="text-accent mr-4">03.</span>
            Work Journey
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-pink mx-auto mb-6 rounded-full"></div>
          <p className="text-gray max-w-2xl mx-auto">
            My professional path and experiences
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          {/* <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-accent to-pink transform -translate-x-1/2"></div> */}

          {/* Experience 1 - Right Side */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center w-full">
            <div className="order-1 md:w-2/12 lg:w-5/12"></div>
            <div className="order-1 md:w-10/12 lg:w-7/12 px-6 py-4">
              <div className="bg-dark/50 p-6 rounded-xl shadow-lg border border-slate/50 hover:border-accent/50 transition">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mr-4 border border-accent emoji-wiggle">
                    🐝
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Frontend Intern</h3>
                    <p className="text-sm text-gray">Bee Interactive</p>
                    <p className="text-xs text-accent">2024 - 2 months</p>
                  </div>
                </div>
                <p className="text-gray mb-3">
                  • Built multiple small-scale applications focusing on
                  real-world features such as CRUD operations and dynamic state
                  management using Recoil.
                  <br />
                  •Developed full CRUD functionality on RESTful APIs, including
                  creating, updating, and deleting records
                  <br />
                  • Integrated external APIs using Axios and displayed fetched
                  data in reusable components.
                  <br />
                  • Implemented user authentication flows using dummy JSON and
                  Facebook social login to simulate real-world login processes.
                  <br />• Built responsive forms with robust validation using
                  Formik and Yup.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/5 text-accent rounded-full text-xs font-mono">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-accent/5 text-accent rounded-full text-xs font-mono">
                    React
                  </span>
                  <span className="px-3 py-1 bg-accent/5 text-accent rounded-full text-xs font-mono">
                    Recoil
                  </span>
                  <span className="px-3 py-1 bg-accent/5 text-accent rounded-full text-xs font-mono">
                    Axios
                  </span>
                  <span className="px-3 py-1 bg-accent/5 text-accent rounded-full text-xs font-mono">
                    Auth
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 2 - Left Side */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center w-full">
            <div className="order-1 md:w-10/12 lg:w-7/12 px-6 py-4">
              <div className="bg-dark/50 p-6 rounded-xl shadow-lg border border-slate/50 hover:border-pink/50 transition">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-pink/10 rounded-lg flex items-center justify-center text-pink mr-4 border border-pink emoji-wiggle">
                    💻
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Frontend Developer</h3>
                    <p className="text-sm text-gray">Raqmee StartUp</p>
                    <p className="text-xs text-accent">
                      2024 - 2025 • 2 Months
                    </p>
                  </div>
                </div>
                <p className="text-gray mb-3">
                  Worked on Dewdroppers project, designed subscription plans
                  page, and integrated Stripe payment system.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink/5 text-pink rounded-full text-xs font-mono">
                    React.js
                  </span>
                  <span className="px-3 py-1 bg-pink/5 text-pink rounded-full text-xs font-mono">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 bg-pink/5 text-pink rounded-full text-xs font-mono">
                    PHP
                  </span>
                  <span className="px-3 py-1 bg-pink/5 text-pink rounded-full text-xs font-mono">
                    Laravel
                  </span>
                  <span className="px-3 py-1 bg-pink/5 text-pink rounded-full text-xs font-mono">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-pink/5 text-pink rounded-full text-xs font-mono">
                    Linux
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 md:w-6/12 lg:w-5/12"></div>
          </div>

          {/* Education - Right Side */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="order-1 md:w-2/12 lg:w-5/12"></div>
            <div className="order-1 md:w-7/12 lg:w-7/12 px-6 py-4">
              <div className="bg-dark/50 p-6 rounded-xl shadow-lg border border-slate/50 hover:border-teal/50 transition">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center text-teal mr-4 border border-teal emoji-wiggle">
                    🎓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      Computers and Artificial Intelligence
                    </h3>
                    <p className="text-sm text-gray">Cairo University</p>
                    <p className="text-xs text-accent">2022 - 2026 • Present</p>
                  </div>
                </div>
                <p className="text-gray mb-3">
                  Specializing in IT & Software Engineering with a focus on data
                  structures, algorithms, and web dev.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal/5 text-teal rounded-full text-xs font-mono">
                    IT
                  </span>
                  <span className="px-3 py-1 bg-teal/5 text-teal rounded-full text-xs font-mono">
                    OOP
                  </span>
                  <span className="px-3 py-1 bg-teal/5 text-teal rounded-full text-xs font-mono">
                    Algorithms
                  </span>
                  <span className="px-3 py-1 bg-teal/5 text-teal rounded-full text-xs font-mono">
                    Data Structures
                  </span>
                  <span className="px-3 py-1 bg-teal/5 text-teal rounded-full text-xs font-mono">
                    Solid
                  </span>
                  <span className="px-3 py-1 bg-teal/5 text-teal rounded-full text-xs font-mono">
                    Design Patterns
                  </span>
                  <span className="px-3 py-1 bg-teal/5 text-teal rounded-full text-xs font-mono">
                    Web Dev
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
