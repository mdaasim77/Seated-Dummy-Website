import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setStatus("Please fill required fields");
      return;
    }

    setStatus("Sending...");

    const res = await fetch("http://localhost:5000/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    setStatus(data.success ? "Message sent" : "Failed to send");
  };

  return (
    <section className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-[6vw] font-black text-center mb-10">
        LET’S COOK
        <br /> TOGETHER.
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <Input label="Name" onChange={(e) => setName(e.target.value)} />
        <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input label="Message" onChange={(e) => setMessage(e.target.value)} />
      </div>

      <div className="text-center mt-10">
        <button
          onClick={handleSubmit}
          className="border rounded-full px-8 py-3"
        >
          SUBMIT
        </button>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </section>
  );
}

function Input({ label, onChange }) {
  return (
    <div>
      <label className="block mb-2 text-xs opacity-70">{label}</label>
      <input onChange={onChange} className="w-full text-black px-3 py-2" />
    </div>
  );
}
