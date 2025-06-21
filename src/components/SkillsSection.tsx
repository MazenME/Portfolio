
export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center font-display">
          <span className="text-accent mr-4">02.</span> Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "HTML", "CSS", "JavaScript", "TypeScript",
            "React", "Vue.js", "TailwindCSS", "Bootstrap",
            "Git", "GitHub","Responsive Design", "REST APIs",
            "Strapi", "Supabase","Docker","Data Structures", "Algorithms",
            "problem-solving skills", "communication skills", "teamwork",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-slate border border-slate/50 rounded-lg p-4 hover:border-accent/50 transition emoji-float"
            >
              <p className="text-light text-center font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
