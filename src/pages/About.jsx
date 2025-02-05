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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Innovation</h3>
                  <p className="text-sm leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Excellence</h3>
                  <p className="text-sm leading-relaxed">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
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
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Experts</h3>
                  <p className="text-sm leading-relaxed">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                  </p>
                </div>
              </div>
            </section>
  
            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Contact Information
              </h2>
              <p className="text-sm">
                Email: info@company.com<br />
                Phone: (555) 123-4567<br />
                Address: 123 Business Street, Suite 456, New York, NY 10001
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;