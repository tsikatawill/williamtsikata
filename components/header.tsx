export function Header() {
  return (
    <header className="bg-background/50 sticky top-0 z-20 backdrop-blur-lg">
      <div className="container pt-10">
        <h1 className="font-heading text-2xl font-medium text-[--color-text-primary] md:text-3xl">
          William Tsikata
        </h1>
        <div className="mb-1.5">
          <span className="border-primary bg-primary/10 rounded-full border px-2.5 py-0.5 font-mono text-xs text-[--color-text-muted] italic">
            Kaizoku
          </span>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[--color-text-secondary]">
          Full-stack developer with a sharp frontend edge — combining
          craftsmanship in React, Next.js, and TypeScript with real backend and
          database experience.
        </p>
        <div className="mt-5 border-b-[0.5px] border-[--color-border-subtle]" />
      </div>
    </header>
  );
}
