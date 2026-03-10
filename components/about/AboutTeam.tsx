import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Mitchell Hoeger",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800&sat=-100",
    imageAlt: "Mr. Mitchell Hoeger",
    // Desktop stagger: low position
    desktopPt: "pt-32",
  },
  {
    name: "Julian Barrows",
    role: "Copywriter",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800&sat=-100",
    imageAlt: "Julian Barrows",
    // Desktop stagger: high position
    desktopPt: "pt-4",
  },
  {
    name: "Yolanda Koepp",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&sat=-100",
    imageAlt: "Yolanda Koepp",
    // Desktop stagger: mid position
    desktopPt: "pt-20",
  },
  {
    name: "Lorenzo Runte",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&sat=-100",
    imageAlt: "Lorenzo Runte",
    // Desktop stagger: high position
    desktopPt: "pt-4",
  },
  {
    name: "Rebecca Spencer",
    role: "Motion Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&sat=-100",
    imageAlt: "Rebecca Spencer",
    // Desktop stagger: low position
    desktopPt: "pt-28",
  },
];

export default function TeamShowcaseSection() {
  return (
    <section
      dir="ltr"
      className="w-full py-20 md:py-0 md:pb-20 overflow-hidden"
    >
      {/* ── Mobile: 2-column grid ── */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 px-6 md:hidden">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center">
            <div className="relative aspect-square w-full max-w-[160px] overflow-hidden rounded-full bg-[#ececec]">
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                className="object-cover grayscale"
                sizes="160px"
              />
            </div>
            <h3 className="mt-4 text-[13px] font-semibold leading-none tracking-[-0.02em] text-[#111111]">
              {member.name}
            </h3>
            <p className="mt-3 text-[13px] font-normal leading-none text-[#9d9d9d]">
              {member.role}
            </p>
          </div>
        ))}
      </div>

      {/* ── Desktop: staggered 5-column flex row ── */}
      <div className="hidden md:flex items-start justify-between w-full gap-6 lg:gap-8 xl:gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className={`flex flex-col items-center text-center flex-1 ${member.desktopPt}`}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-full bg-[#ececec]">
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1280px) 18vw, 220px"
              />
            </div>
            <h3 className="mt-5 whitespace-nowrap text-[14px] font-semibold leading-none tracking-[-0.02em] text-[#111111]">
              {member.name}
            </h3>
            <p className="mt-[14px] whitespace-nowrap text-[14px] font-normal leading-none text-[#9d9d9d]">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}