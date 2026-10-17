import React from "react";
import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Achievements = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate: Cloud Foundations",
      issuer: "AWS Academy",
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
    <section className="c-space section-spacing" id="achievements">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-royal">
          Recognitions & Credentials
        </span>
        <h2 className="text-heading">Achievements & Certifications</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-10">
        {/* LeetCode Achievement Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-3xl border-white/10 bg-gradient-to-br from-midnight via-primary to-navy hover:border-amber-500/40 transition-all duration-300 shadow-xl group"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center rounded-2xl size-12 bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-105 transition-transform">
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.77 9.77a.62.62 0 0 0-.001.881l8.13 8.131a.618.618 0 0 0 .88-.001l9.769-9.77a1.37 1.37 0 0 0 .413-.958V1.374A1.373 1.373 0 0 0 20.573 0zm5.717 6.174a1.374 1.374 0 1 1 0-2.748 1.374 1.374 0 0 1 0 2.748zM5.33 14.281l-1.903 1.902a2.66 2.66 0 1 0 3.762 3.761l1.902-1.903a.62.62 0 0 0-.001-.88l-2.88-2.88a.618.618 0 0 0-.88 0z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Coding Profile</h3>
                <span className="text-xs text-amber-400 font-semibold">300+ Problems Solved</span>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Consistently practicing algorithms and data structures on LeetCode, strengthening core problem-solving speed:
            </p>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber-500" />
                Data Structures: Arrays, Linked Lists, Trees, Graphs
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber-500" />
                Algorithms: Dynamic Programming, Binary Search, DFS/BFS
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10">
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              View LeetCode Profile
              <img src="/assets/arrow-up.svg" className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" alt="arrow" />
            </a>
          </div>
        </motion.div>

        {/* Swift Coding Club Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-3xl border-white/10 bg-gradient-to-br from-midnight via-primary to-navy hover:border-red-500/40 transition-all duration-300 shadow-xl group"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center rounded-2xl size-12 bg-red-500/10 text-red-500 border border-red-500/20 group-hover:scale-105 transition-transform">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.813 15.904L9 21l5.449-3.308L20 21l-.813-5.096L23 12.338l-5.13-.443L16 7l-1.87 4.895-5.13.443 3.813 3.566z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Swift Coding Club</h3>
                <span className="text-xs text-red-400 font-semibold">Parul University Chapter</span>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Active student member participating in technical workshops, peer programming sessions, and building native Apple ecosystem tools.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-red-500" />
                Native iOS & SwiftUI development challenges
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-red-500" />
                Collaborating on modern mobile interface designs
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-neutral-500 italic">
            Active Community Member
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-3xl border-white/10 bg-gradient-to-br from-midnight via-primary to-navy hover:border-royal/50 transition-all duration-300 shadow-xl group"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center rounded-2xl size-12 bg-royal/10 text-royal border border-royal/20 group-hover:scale-105 transition-transform">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
                <span className="text-xs text-lavender font-semibold">Verified Badges</span>
              </div>
            </div>
            <div className="space-y-3.5">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-royal/40 pl-3 py-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-200">{cert.title}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10">
            <a
              href="https://www.credly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-lavender hover:text-white transition-colors"
            >
              Verify Credentials
              <img src="/assets/arrow-up.svg" className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" alt="arrow" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
