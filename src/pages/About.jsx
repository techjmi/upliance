const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About Our Company
        </h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Who We Are
            </h2>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Our Values
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Integrity</h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Innovation</h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Excellence</h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Our Team
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Leadership</h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Experts</h3>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Contact Information
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
