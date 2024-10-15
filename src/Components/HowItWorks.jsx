const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Add Your Server",
      description:
        "Log in to the SecureTrace platform and add the server you want to monitor.",
      icon: "🌐", // Example using emoji. SVG can be used with Tailwind.
    },
    {
      id: 2,
      title: "Start Log Monitoring",
      description:
        "Once log monitoring is started, all important activities and events will be tracked.",
      icon: "🔍",
    },
    {
      id: 3,
      title: "Activate Blockchain Recording",
      description:
        "Securely record the data you want to monitor on the blockchain.",
      icon: "🔗",
    },
    {
      id: 4,
      title: "Instantly Track All Processes",
      description:
        "Monitor and securely manage all logs and records on the server.",
      icon: "✅",
    },
  ];
  return (
    <div className="py-16 lg:bg-blue-500/10 text-">
      <h2 className="text-4xl font-bold text-center mb-12">How It Works?</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative bg-gradient-to-r from-blue-500 to-blue-900/60 p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {step.title}
            </h3>
            <p className="text-gray-200">{step.description}</p>
            {index < steps.length - 1 
            && (
              <div className="absolute lg:inset-y-1/2 lg:right-0 transform lg:translate-x-1/2 translate-y-1/2 left-1/2 bottom-0 -translate-x-1/2 text-4xl rotate-90 lg:rotate-0 text-white">
                ➡️
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
