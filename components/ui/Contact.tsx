"use client";

import { IoIosRocket } from "react-icons/io";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useCallback, useState, ChangeEvent, FormEvent } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        return;
      }

      setIsSubmitting(true);

      try {
        await emailjs.send(
          "", //service ID
          "", //template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "" //public key
        );

        toast.success("Message sent successfully!!!", {
          duration: 2000,
        });
        setFormData({ name: "", email: "", message: "" });
      } catch {
        toast.error("Failed to send message!", { duration: 2000 });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "mazedurrahmantalib1998@gmail.com",
      href: "mailto:mazedurrahmantalib1998@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: " +8801856344178",
      href: "tel:+8801856344178",
      color: "text-green-400",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Beaumont, Texas, United States",
      href: "https://maps.app.goo.gl/ZXbAJZHJE1tf5NWG7",
      color: "text-purple-400",
    },
  ];
  return (
    <section className="flex flex-col mt-10 md:mt-14 px-2 items-center bg-linear-to-br from-[#d96c06e6] via-[#d96c064d] to-[#d96c0699] py-10 lg:py-20 gap-4">
      <div className="bg-primary flex gap-2 items-center p-2 rounded-md text-white font-bold text-xl lg:text-2xl">
        <IoIosRocket />
        Contact With Me
      </div>

      <div className="flex flex-col  lg:flex-row-reverse items-center gap-8 md:gap-12 max-w-6xl mx-auto mt-8 md:mt-14">
        {/* contact form */}
        <div className="w-[350px] md:w-full">
          <div className="bg-accent/80 py-10 rounded-2xl p-2 md:p-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-linear-to-r from-violet-500 to-blue-500 flex items-center justify-center">
                <FaPaperPlane className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-white">Send Message</h2>
                <p className="text-gray-100 text-sm">
                  I’d love to hear from you
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-4 rounded-xl bg-white border border-white/20 text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    placeholder="Mazedur Rahman"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-4 rounded-xl bg-white border border-white/20 text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    placeholder="mazedurrahmantalib1998@gmail.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl bg-white border border-white/20 text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                  placeholder="Enter your message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-2 cursor-pointer md:p-4 rounded-xl bg-primary/90 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* contact information */}
        <div className="space-y-4 md:space-y-8 w-[350px] md:w-full">
          <div className="bg-accent/70 backdrop-blur-lg rounded-2xl mx-auto p-2 py-4 md:p-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-r from-violet-500 to-blue-500 flex items-center justify-center">
                <FaUser className="h-5 w-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-white">Contact Info</h2>
                <p className="text-gray-100 text-sm">Get in touch with me</p>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="group">
                    <a
                      href={info.href}
                      className="flex items-center gap-2 md:gap-4 p-2 rounded-xl bg-accent/80 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10 group-hover:scale-[1.02]"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl bg-accent/90 flex items-center justify-center ${info.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white mb-1">
                          {info.label}
                        </p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* toast on the Top */}
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Contact;
