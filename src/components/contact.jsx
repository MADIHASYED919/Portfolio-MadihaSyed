export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-20 px-6">
      {/* Green background light */}
      <div className="absolute inset-0  bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-4">
          Get In  <span className="text-green-400">Touch</span>
        </h1>

        <p className="text-center text-gray-400 mb-10" style={{fontFamily:"poppins"}}>
       “Ready to bring your web visions to life? Let’s connect and create something amazing.”
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Let's Connect
            </h2>

            <p className="text-gray-400 mb-8">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and creative ideas
            </p>

            <div className="space-y-6">
              {/* <div>
                <p className="text-green-400 font-semibold">Email</p>
                <p className="text-gray-300"></p>
              </div> */}

              <div>
                <p className="text-green-400 font-semibold">Location</p>
                <p className="text-gray-300">Kadapa, Andhra Pradesh, India .</p>
              </div>

              <div>
                <p className="text-green-400 font-semibold">Response Time</p>
                <p className="text-gray-300">Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
        
          <form className="space-y-6">
             
         <h2 className="text-2xl font-semibold text-green-400 mb-6">
          Contact <span className="text-white">Me</span>
            </h2>



            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="p-3 bg-zinc-900 border border-gray-700 rounded-lg focus:border-green-400 outline-none"
              />

              <input
                type="text"
                placeholder="Last Name *"
                className="p-3 bg-zinc-900 border border-gray-700 rounded-lg focus:border-green-400 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email *"
              className="w-full p-3 bg-zinc-900 border border-gray-700 rounded-lg focus:border-green-400 outline-none"
            />

            <select className="w-full p-3 bg-zinc-900 border border-gray-700 rounded-lg focus:border-green-400 outline-none">
              <option>Select a subject</option>
              <option>Project Inquiry</option>
              <option>Collaboration</option>
            </select>

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full p-3 bg-zinc-900 border border-gray-700 rounded-lg focus:border-green-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-green-400 text-black rounded-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
