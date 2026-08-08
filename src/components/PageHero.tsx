type PageHeroProps = {
  image: string;
  title: string;
  eyebrow?: string;
  alt: string;
};

export function PageHero({ image, title, eyebrow, alt }: PageHeroProps) {
  return (
    <section className="relative h-[58svh] min-h-[380px] overflow-hidden bg-ink">
      <img
        src={image}
        alt={alt}
        className="settle h-full w-full object-cover object-[center_35%] opacity-80 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
      <div className="absolute bottom-10 left-6 lg:left-12">
        {eyebrow && (
          <p className="eyebrow rise mb-3 text-paper/60">{eyebrow}</p>
        )}
        <h1 className="rise font-display text-5xl leading-none tracking-tighter text-paper md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
