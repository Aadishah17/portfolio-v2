import React from "react";
import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Achievements = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate: Cloud Foundations",
      issuer: "AWS",
      date: "Sep 2025",
    },
    {
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "Cisco & IBM",
      date: "Sep 2025",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Sep 2025",
    },
  ];

  return (
    <section className="items-start mt-25 md:mt-35 c-space section-spacing" id="achievements">
      <h2 className="text-heading">Achievements & Certifications</h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
        {/* LeetCode Achievement Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-2xl border-white/10 bg-gradient-to-br from-midnight to-navy hover:border-orange-500/30 hover-animation"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center rounded-xl size-12 bg-orange-500/10 text-orange-500">
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.77 9.77a.62.62 0 0 0-.001.881l8.13 8.131a.618.618 0 0 0 .88-.001l9.769-9.77a1.37 1.37 0 0 0 .413-.958V1.374A1.373 1.373 0 0 0 20.573 0zm5.717 6.174a1.374 1.374 0 1 1 0-2.748 1.374 1.374 0 0 1 0 2.748zM5.33 14.281l-1.903 1.902a2.66 2.66 0 1 0 3.762 3.761l1.902-1.903a.62.62 0 0 0-.001-.88l-2.88-2.88a.618.618 0 0 0-.88 0z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-white">Coding Profile</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Solved <strong>300+ problems on LeetCode</strong>, developing a strong analytical foundation in:
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-neutral-500">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Data Structures: Arrays, Trees, Graphs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Algorithms: Dynamic Programming, Search/Sort
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 hover:text-white transition-colors"
            >
              View LeetCode Profile
              <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
            </a>
          </div>
        </motion.div>

        {/* Swift Coding Club Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-2xl border-white/10 bg-gradient-to-br from-midnight to-navy hover:border-red-500/30 hover-animation"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center rounded-xl size-12 bg-red-500/10 text-red-500">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.813 15.904L9 21l5.449-3.308L20 21l-.813-5.096L23 12.338l-5.13-.443L16 7l-1.87 4.895-5.13.443 3.813 3.566z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-white">Swift Coding Club</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Active member participating in technical workshops, peer programming sessions, and building native Apple ecosystem tools.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-neutral-500">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Native iOS development challenge sessions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Collaborating on modern interface designs
              </li>
            </ul>
          </div>
          <div className="mt-6 text-sm text-neutral-500 italic">
            Parul University Chapter
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-2xl border-white/10 bg-gradient-to-br from-midnight to-navy hover:border-royal hover-animation md:col-span-1"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center rounded-xl size-12 bg-royal/10 text-royal">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-royal/30 pl-3">
                  <h4 className="text-sm font-bold text-neutral-300">{cert.title}</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://www.credly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-white transition-colors"
            >
              Verify Credentials
              <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
