import { Code2, BarChart3, BrainCircuit, Database } from 'lucide-react';

export function SkillsGridCards() {
  const skillCategories = [
    {
      title: "Software & Web Engineering",
      icon: <Code2 className="w-8 h-8 text-black" strokeWidth={1.5} />,
      description: "Building responsive applications and scalable web APIs.",
      skills: ["Python", "JavaScript", "React", "Next.js", "Django REST", "FastAPI"],
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 className="w-8 h-8 text-black" strokeWidth={1.5} />,
      description: "Exploring data, finding patterns, and turning data into insights.",
      skills: ["Pandas", "SQL", "Power BI", "EDA", "Data Cleaning"],
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-8 h-8 text-black" strokeWidth={1.5} />,
      description: "Building predictive systems and experimenting with modern AI workflows.",
      skills: ["Scikit-Learn", "XGBoost", "LangChain", "YOLO", "RAG", "TensorFlow"],
    },
    {
      title: "Databases & Infrastructure",
      icon: <Database className="w-8 h-8 text-black" strokeWidth={1.5} />,
      description: "Working with data storage, APIs, development tools, and workflows.",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "ChromaDB", "Git / GitHub", "Postman"],
    },
  ];

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col p-8 border border-gray-200 bg-white hover:border-black hover:shadow-sm transition-all duration-300"
        >
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 border border-gray-200 bg-gray-50 shrink-0">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-black uppercase tracking-wide font-iosevka">
                {category.title}
              </h4>
            </div>
            <p className="text-gray-500 font-light text-sm">
              {category.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-auto">
            {category.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-sm font-medium font-mono text-gray-700 bg-white border border-gray-300 hover:border-black hover:text-black transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}