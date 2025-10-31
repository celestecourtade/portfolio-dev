import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí podrías integrar EmailJS o Formspree
    if (formData.name && formData.email && formData.message) {
      console.log("Enviando mensaje:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 text-center bg-gradient-to-t from-black to-purple-950">
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-10 drop-shadow-[0_0_15px_#ff00ff]">
        Contacto
      </h2>
      <p className="text-purple-200 mb-6">
        ¿Querés trabajar conmigo? Escribime:
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-xl border border-fuchsia-500 bg-black/40 text-purple-200 placeholder-purple-400 shadow-[0_0_10px_#ff00ff] focus:outline-none focus:border-fuchsia-400 focus:shadow-[0_0_15px_#ff00ff] transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-xl border border-fuchsia-500 bg-black/40 text-purple-200 placeholder-purple-400 shadow-[0_0_10px_#ff00ff] focus:outline-none focus:border-fuchsia-400 focus:shadow-[0_0_15px_#ff00ff] transition"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="p-4 rounded-xl border border-fuchsia-500 bg-black/40 text-purple-200 placeholder-purple-400 shadow-[0_0_10px_#ff00ff] focus:outline-none focus:border-fuchsia-400 focus:shadow-[0_0_15px_#ff00ff] transition"
        />

        <button
          type="submit"
          className="px-8 py-3 border border-fuchsia-400 rounded-2xl text-fuchsia-300 hover:bg-fuchsia-600 hover:text-white transition shadow-[0_0_15px_#ff00ff] hover:shadow-[0_0_25px_#ff00ff]"
        >
          Enviar mensaje
        </button>

        {/* Feedback visual */}
        {status === "success" && (
          <p className="text-green-400 mt-4 font-medium">Mensaje enviado correctamente!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4 font-medium">Por favor completá todos los campos.</p>
        )}
      </form>
    </section>
  );
}
