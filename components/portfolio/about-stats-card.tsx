// AboutStatsCard.jsx (or in the same file)
export function AboutStatsCard() {
  const stats = [
    {
      value: "3+",
      label: "Projects",
      description: "Built and shipped",
    },
    {
      value: "8+",
      label: "Technologies",
      description: "Used across projects",
    },
    {
      value: "2+",
      label: "Years",
      description: "Building with code",
    },
    {
      value: "Always",
      label: "Learning",
      description: "Exploring new technologies",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center font-iosevka justify-center text-center p-8 border border-gray-200 bg-white hover:border-black hover:shadow-sm transition-all duration-300"
        >
          <h4 className="text-4xl md:text-5xl font-bold text-black mb-3">
            {stat.value}
          </h4>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black mb-2">
            {stat.label}
          </span>
          <p className="text-sm text-gray-500 font-light leading-4">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}