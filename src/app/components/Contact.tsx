export default function Contact() {
    return (
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-700">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600">Let's Connect</h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-700">Email: malaikalaal55@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700"></span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700">Location: RAHIM YAR KHAN</span>
                </div>
              </div> 
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        </section>
    )}
  