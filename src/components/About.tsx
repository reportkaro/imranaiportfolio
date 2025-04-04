'use client';

type Journey = {
  period: string;
  title: string;
  description: string;
};

type Inspiration = {
  icon: string;
  title: string;
  description: string;
};

const journeyItems: Journey[] = [
  {
    period: '2018 - 2020',
    title: 'Early Career',
    description:
      'Started my career working in creative and digital agencies, collaborating with talented teams to refine my skills and deliver impactful projects.',
  },
  {
    period: '2020 - 2022',
    title: 'Senior Developer',
    description:
      'Transitioned into more senior development roles, focusing on end-to-end product development for startups and enterprise brands.',
  },
  {
    period: '2022 - Present',
    title: 'Lead Developer',
    description:
      'Currently leading development teams, working closely with stakeholders and designers to deliver user-focused solutions that drive growth.',
  },
];

const inspirations: Inspiration[] = [
  {
    icon: '📚',
    title: 'Atomic Design by Brad Frost',
    description:
      'This methodology for creating design systems has profoundly influenced how I approach component-based development and design consistency.',
  },
  {
    icon: '🎧',
    title: 'Syntax Podcast',
    description:
      "Wes Bos and Scott Tolinski's podcast keeps me updated on web development trends and has been instrumental in my continuous learning journey.",
  },
  {
    icon: '🏃‍♂️',
    title: 'Morning Runs',
    description:
      'My daily runs are when I do my best thinking. Many of my most creative solutions have come during these quiet moments of reflection.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-3xl font-bold mb-16">How I got here</h2>

          <div className="space-y-16 mb-32">
            {journeyItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 relative">
                {/* Vertical line connecting timeline items */}
                {index < journeyItems.length - 1 && (
                  <div className="absolute left-[2.5rem] top-12 bottom-0 w-0.5 bg-accent/20 hidden md:block"></div>
                )}

                <div className="md:w-1/3 font-medium">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-accent relative z-10"></div>
                    <span className="text-lg text-accent">{item.period}</span>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title text-3xl font-bold mb-16">Unconventional points of inspiration</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {inspirations.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-muted italic text-lg">"The best way to predict the future is to create it."</p>
            <p className="text-sm mt-2">— Alan Kay</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
