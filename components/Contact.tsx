export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
      <p className="text-lg mb-4">I'd love to hear from you! Feel free to reach out via email or through my social profiles.</p>
      <a
        href="mailto:your.email@example.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Send an Email
      </a>
    </section>
  );
}
