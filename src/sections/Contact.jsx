import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEye,
} from "react-icons/fa";



function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="bg-[#0F172A] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Let's Connect 🤝
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14 leading-8">
          I'm currently open to Full Stack Developer and Frontend Developer
          opportunities. If you'd like to discuss a project, collaboration,
          internship, or job opportunity, I'd love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=bayyavarapunagurbi1914@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition flex items-center gap-5"
>
  <FaEnvelope className="text-cyan-400 text-3xl" />

  <div>
    <h3 className="font-bold text-xl">Email</h3>

    <p className="text-gray-300 break-all">
      bayyavarapunagurbi1914@gmail.com
    </p>
  </div>
</a>
          

          {/* Phone */}
          <a
            href="tel:+917569362085"
            className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition flex items-center gap-5"
          >
            <FaPhoneAlt className="text-cyan-400 text-3xl" />

            <div>
              <h3 className="font-bold text-xl">
                Phone
              </h3>

              <p className="text-gray-300">
                +91 7569362085
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="bg-slate-800 p-6 rounded-2xl flex items-center gap-5">
            <FaMapMarkerAlt className="text-cyan-400 text-3xl" />

            <div>
              <h3 className="font-bold text-xl">
                Location
              </h3>

              <p className="text-gray-300">
                Marathahalli, Bengaluru,
                Karnataka
              </p>
            </div>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/Nagurbi1234"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition flex items-center gap-5"
          >
            <FaGithub className="text-cyan-400 text-3xl" />

            <div>
              <h3 className="font-bold text-xl">
                GitHub
              </h3>

              <p className="text-gray-300">
                github.com/Nagurbi1234
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nagurbi-bayyavarapu-"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition flex items-center gap-5 md:col-span-2"
          >
            <FaLinkedin className="text-cyan-400 text-3xl" />

            <div>
              <h3 className="font-bold text-xl">
                LinkedIn
              </h3>

              <p className="text-gray-300 break-all">
                linkedin.com/in/nagurbi-bayyavarapu-
              </p>
            </div>
          </a>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <a
            href={"/Nagurbi_resume.pdf"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            <FaEye />
            View Resume
          </a>

          <a
            href={"/Nagurbi_resume.pdf"}
            download
            className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;