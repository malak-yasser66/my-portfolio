import { useState } from 'react';
import { Globe2, Send } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[#d4a3a3]/25 bg-[#ffffff] p-8 shadow-[0_20px_60px_rgba(212,163,163,0.08)] dark:border-[#d4a3a3]/25 dark:bg-[#fffdfd]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c99292] dark:text-[#c99292]">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-[#3f3f46] dark:text-[#3f3f46] sm:text-4xl">Let’s build something remarkable together.</h2>
          <p className="mt-4 text-lg leading-8 text-[#4a3b3b] dark:text-[#4a3b3b]">
            Whether you’re a recruiter, collaborator, or a client, I’d love to hear about your next idea.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/malak-yasser66" target="_blank" rel="noreferrer" className="luxury-btn inline-flex items-center gap-2 rounded-full border border-[#d4a3a3]/25 px-4 py-2 text-sm font-medium text-[#c99292] dark:border-[#d4a3a3]/25 dark:text-[#c99292]">
              <Globe2 size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/malak-yasser-524a75409?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="luxury-btn inline-flex items-center gap-2 rounded-full border border-[#d4a3a3]/25 px-4 py-2 text-sm font-medium text-[#c99292] dark:border-[#d4a3a3]/25 dark:text-[#c99292]">
              <Send size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#d4a3a3]/25 bg-[#ffffff] p-8 shadow-[0_20px_60px_rgba(212,163,163,0.08)] dark:border-[#d4a3a3]/25 dark:bg-[#fffdfd]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#c99292] dark:text-[#c99292]">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Malak Yasser"
                className="luxury-input w-full rounded-2xl border border-[#d4a3a3]/20 bg-[#fffaf8] px-4 py-3 outline-none dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#4a3b3b]"
              />
              {errors.name && <p className="mt-2 text-sm text-[#b16b6b]">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#c99292] dark:text-[#c99292]">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="malak@example.com"
                className="luxury-input w-full rounded-2xl border border-[#d4a3a3]/20 bg-[#fffaf8] px-4 py-3 outline-none dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#4a3b3b]"
              />
              {errors.email && <p className="mt-2 text-sm text-[#b16b6b]">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#c99292] dark:text-[#c99292]">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="I’d love to discuss a project, internship, or collaboration opportunity."
              className="luxury-input w-full rounded-2xl border border-[#d4a3a3]/20 bg-[#fffaf8] px-4 py-3 outline-none dark:border-[#d4a3a3]/25 dark:bg-[#fdf7f7] dark:text-[#4a3b3b]"
            />
            {errors.message && <p className="mt-2 text-sm text-[#b16b6b]">{errors.message}</p>}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button type="submit" className="luxury-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4a3a3] to-[#c99292] px-5 py-3 text-sm font-semibold text-white">
              <Send size={16} />
              Send Message
            </button>
            {submitted && <p className="text-sm font-medium text-[#5f8f6f] dark:text-[#5f8f6f]">Thanks! Your message is ready to send.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
