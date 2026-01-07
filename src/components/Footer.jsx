export default function Footer() {
  return (
    <section className="relative min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-[2  vw] font-black text-center mb-10">
        LET’S COOK
        <br />
        TOGETHER.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Input label="FULL NAME" />
        <Input label="COMPANY NAME" />
        <Input label="PHONE" />
        <Input label="EMAIL" />
        <Input label="EVENT DATE" />
        <Input label="NUMBER OF GUESTS" />
        <div className="md:col-span-2">
          <Input label="ENTER PROJECT DETAILS" />
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="border border-white px-10 py-3 rounded-full">
          SUBMIT
        </button>
      </div>
    </section>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="block mb-2 text-xs opacity-70">{label}</label>
      <input className="w-full bg-transparent border-b border-white focus:outline-none py-2" />
    </div>
  );
}
