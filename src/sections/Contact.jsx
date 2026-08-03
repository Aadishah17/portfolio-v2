import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_79b0nyj",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Aadi",
          from_email: formData.email,
          to_email: "shahaadi285@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shahaadi285@gmail.com&su=${encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `${formData.message}\n\nSender Email: ${formData.email}`
      )}`;
      window.open(gmailUrl, "_blank");
      setIsLoading(false);
      showAlertMessage("success", "Opening Gmail compose window in a new tab!");
    }
  };

  return (
    <section className="relative flex items-center justify-center c-space section-spacing overflow-hidden" id="contact">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={80}
        ease={60}
        color="#ffffff"
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-xl w-full p-6 sm:p-10 border border-white/15 rounded-3xl bg-gradient-to-br from-midnight/90 via-primary/95 to-navy/90 backdrop-blur-xl shadow-2xl z-10">
        <div className="flex flex-col items-start w-full gap-2 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-royal">
            Get In Touch
          </span>
          <h2 className="text-heading">Let's Connect</h2>
          <p className="font-normal text-neutral-400 text-sm leading-relaxed mt-1">
            Whether you're looking to build a new full-stack application, collaborate on open-source Android projects, or discuss software engineering roles, I'd love to hear from you.
          </p>
        </div>

        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="field-label text-neutral-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:border-royal/50 focus:ring-2 focus:ring-royal/30 transition-all placeholder:text-neutral-500"
              placeholder="e.g. Alex Johnson"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="field-label text-neutral-300">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:border-royal/50 focus:ring-2 focus:ring-royal/30 transition-all placeholder:text-neutral-500"
              placeholder="alex@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="field-label text-neutral-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:border-royal/50 focus:ring-2 focus:ring-royal/30 transition-all placeholder:text-neutral-500"
              placeholder="Tell me about your project or opportunity..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 text-base font-bold text-center rounded-xl cursor-pointer bg-gradient-to-r from-royal via-lavender to-royal text-white shadow-lg shadow-royal/30 hover:shadow-royal/50 active:scale-[0.99] transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Message...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
