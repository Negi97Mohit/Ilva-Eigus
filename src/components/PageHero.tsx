type PageHeroProps = {
  image: string;
  title: string;
  eyebrow?: string;
  alt: string;
  /** Optional short standfirst shown beside the title on larger screens. */
  lede?: string;
  /** Optional meta line, e.g. issue number or count. */
  meta?: string;
};

export function PageHero({
  image,
  title,
  eyebrow,
  alt,
  lede,
  meta,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[64svh] min-h-[420px] flex-col justify-end overflow-hidden bg-ink md:h-[76svh]">
      <img
        src={image}
        alt={alt}
        className="settle absolute inset-0 h-full w-full object-cover object-[center_32%] opacity-85 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="shell relative pb-10 md:pb-16">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-b border-paper/20 pb-5 md:pb-7">
          <div className="min-w-0">
            {eyebrow && (
              <p className="eyebrow rise mb-4 text-paper/60">{eyebrow}</p>
            )}
            <h1 className="rise display-xl text-balance text-paper">{title}</h1>
          </div>
          {meta && (
            <p className="index-num rise hidden whitespace-nowrap uppercase text-paper/50 sm:block">
              {meta}
            </p>
          )}
        </div>
        {lede && (
          <p className="rise lede mt-6 max-w-[46ch] text-paper/70">{lede}</p>
        )}
      </div>
    </section>
  );
}
