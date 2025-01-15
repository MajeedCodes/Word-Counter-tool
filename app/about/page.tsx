

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      <main className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Word Counter</h2>
          <p className="text-lg">
            Word Counter is your go-to tool for real-time word and character analysis. Designed with precision and user experience in mind, our platform helps writers, students, and professionals achieve their goals effortlessly. Whether you're drafting an essay, optimizing content for SEO, or staying within a character limit, we've got you covered.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Makes Us Unique?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Blazing Fast Performance:</strong> Powered by Next.js for smooth and quick interactions.
            </li>
            <li>
              <strong>Dynamic Real-Time Features:</strong> Track word and character counts as you type.
            </li>
            <li>
              <strong>Privacy First:</strong> Your data stays secure—no text is stored or shared.
            </li>
            <li>
              <strong>Advanced Analytics:</strong> Gain insights like readability scores and keyword density.
            </li>
            <li>
              <strong>Modern, Minimal Design:</strong> A distraction-free interface built for productivity.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            At Word Counter, our mission is to empower users to communicate with clarity and precision. By providing advanced yet simple tools, we aim to make your writing process smoother, faster, and more effective.
          </p>
        </section>
      </main>
     
    </div>
  );
};

export default About;
