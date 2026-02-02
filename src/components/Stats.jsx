export default function Stats() {
  const stats = [
    { label: "LIFE IMPACTS", value: "100" },
    { label: "PERSONALIZED PLANS", value: "10+" },
    { label: "USER SATISFACTION", value: "97%" },
  ];

  return (
    <div className="bg-[#84cc16] w-full py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4">
            <span className="text-4xl md:text-5xl font-bold text-black mb-2">
              {stat.value}
            </span>
            <span className="text-sm font-semibold tracking-wider text-black/80 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
