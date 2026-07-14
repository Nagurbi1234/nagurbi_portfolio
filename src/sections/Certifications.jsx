import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {
  const certificates = [
    {
      title: "Web Development Internship",
      organization: "ELiteTech Intern",
      duration: "15 Sep 2025 - 14 Oct 2025",
      credential: "ETI-AKO-11543",
      status: "Completed",
      link:
        "https://drive.google.com/file/d/1U-6z5qFje02ekKBnD0ogSii1LB1CODZb/view?usp=drivesdk",
    },
    {
      title: "DotNet Full Stack",
      organization: "TNext",
      duration: "2025",
      credential: "TNext_SE_25_N_251260231",
      status: "Completed",
      link:
        "https://drive.google.com/file/d/1j1srNNSX1rfWtJbM1iP2GSh8Cqb87zUl/view?usp=drivesdk",
    },
  ];

  return (
    <section
      id="certifications"
       data-aos="zoom-in"
      className="bg-[#0F172A] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Certifications
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Certifications that showcase my technical skills and continuous learning.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <FaCertificate className="text-cyan-400 text-3xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {certificate.title}
                  </h3>

                  <p className="text-cyan-400">
                    {certificate.organization}
                  </p>
                </div>

              </div>

              <div className="space-y-3">

                <p className="text-gray-300">
                  📅 <span className="font-semibold">Duration:</span>{" "}
                  {certificate.duration}
                </p>

                <p className="text-gray-300 break-all">
                  🆔 <span className="font-semibold">Credential ID:</span>{" "}
                  {certificate.credential}
                </p>

                <span className="inline-block bg-green-600 px-4 py-1 rounded-full text-sm font-semibold">
                  {certificate.status}
                </span>

              </div>

              <div className="mt-8">

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold transition"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;