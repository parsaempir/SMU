import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative bg-white lg:min-h-screen lg:overflow-hidden">
      {/* Background SVG — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Image
          src="/contact.svg"
          alt="contact background"
          fill
          className="object-contain object-center lg:px-5 xl:px-15"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center px-6 py-16 sm:px-8 lg:h-full md:px-20 md:pt-26  xl:px-0 ">
        <div className="grid w-full items-start gap-12 py-20 lg:grid-cols-2 lg:gap-24 lg:py-0 xl:gap-28">
          {/* Left Content */}
          <div className="flex flex-col-reverse gap-8 lg:flex-col lg:space-y-8">
            {/* Reach us card */}
            <div className="w-full max-w-[260px] rounded-3xl bg-white p-6 lg:max-w-[240px] lg:p-5 xl:max-w-[260px] xl:p-6">
              <h3 className="mb-5 text-base font-semibold lg:text-[15px] xl:text-lg">
                Reach us
              </h3>
              <div className="space-y-3 text-sm text-gray-600 lg:text-[13px] xl:text-sm">
                <p>📞 +1012 3456 789</p>
                <p>✉️ demo@gmail.com</p>
              </div>
            </div>

            {/* Contact text */}
            <div className="max-w-md lg:pt-16 xl:pt-20 lg:mt-50">
              <h2 className="mb-3 text-4xl font-bold sm:text-5xl lg:text-4xl xl:text-5xl">
                Contact Us
              </h2>
              <p className="leading-relaxed text-gray-500 lg:text-sm xl:text-base">
                Don&apos;t compromise your product growth by hiring a good
                enough software company. Go to the next level of crafting your
                product with Railsware.
              </p>
            </div>
          </div>

          {/* Right Form */}
         <div className="w-full rounded-3xl bg-white p-6 sm:p-10 lg:max-w-[390px] lg:p-5 xl:max-w-none xl:p-10">
  
  <h3 className="mb-2 text-2xl font-semibold lg:text-[17px] xl:text-2xl">
    Start Your Project
  </h3>

  <p className="mb-6 text-gray-600 sm:mb-8 lg:mb-4 lg:text-[13px] xl:mb-8 xl:text-base">
    Let us know how we can help bring your idea to life
  </p>

  <form className="space-y-5 lg:space-y-3 xl:space-y-5">

    {/* Name + Email */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-2">

      <div>
        <label className="text-sm font-medium lg:text-[12px] xl:text-sm">
          Name
        </label>

        <input
          type="text"
          placeholder="Name"
          className="mt-1.5 w-full rounded-lg border px-3 py-2.5 outline-none focus:ring-2 focus:ring-black/10 lg:py-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium lg:text-[12px] xl:text-sm">
          Email
        </label>

        <input
          type="email"
          placeholder="Email"
          className="mt-1.5 w-full rounded-lg border px-3 py-2.5 outline-none focus:ring-2 focus:ring-black/10 lg:py-2"
        />
      </div>

    </div>

    {/* Project Type */}
    <div>
      <label className="text-sm font-medium lg:text-[12px] xl:text-sm">
        Project Type
      </label>

      <input
        type="text"
        placeholder="e.g. Website, Mobile App"
        className="mt-1.5 w-full rounded-lg border px-3 py-2.5 outline-none focus:ring-2 focus:ring-black/10 lg:py-2"
      />
    </div>

    {/* Budget */}
    <div>
      <label className="mb-1.5 block text-sm font-medium lg:text-[12px] xl:text-sm">
        Budget Range
      </label>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-lg border px-4 py-2 text-[13px] hover:bg-gray-100"
        >
          $100 - $300
        </button>

        <button
          type="button"
          className="rounded-lg border px-4 py-2 text-[13px] hover:bg-gray-100"
        >
          $1000 - $3000
        </button>
      </div>
    </div>

    {/* Message */}
    <div>
      <label className="text-sm font-medium lg:text-[12px] xl:text-sm">
        Message
      </label>

      <textarea
        rows={3}
        placeholder="Tell us about your project..."
        className="mt-1.5 w-full rounded-lg border px-3 py-2.5 outline-none focus:ring-2 focus:ring-black/10 lg:py-2"
      />
    </div>

    <button
      type="submit"
      className="w-full rounded-lg bg-[#121212] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
    >
      Send Message
    </button>

  </form>
</div>

        </div>
      </div>
    </section>
  );
}
