import type { ReactNode } from "react";

export function LegalHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-title-lg text-title-lg text-on-surface uppercase tracking-wide border-l-2 border-primary-container pl-space-xs">
      {children}
    </h2>
  );
}

export function Placeholder() {
  return (
    <span className="ml-1 inline-flex items-center align-middle px-1.5 py-0.5 rounded bg-primary-container/15 border border-primary-container/50 text-primary-container font-label-md text-[11px] uppercase whitespace-nowrap">
      Platzhalter
    </span>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-space-sm">
      <LegalHeading>{title}</LegalHeading>
      <div className="space-y-space-sm">{children}</div>
    </section>
  );
}

interface LegalPageLayoutProps {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}

const UPDATED = "25. Oktober 2026";

export default function LegalPageLayout({
  title,
  intro,
  children,
}: LegalPageLayoutProps) {
  return (
    <article className="w-full px-4 md:px-margin-desktop py-space-xl">
      <div className="max-w-3xl mx-auto space-y-space-lg">
        <div className="space-y-space-sm">
          <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary-container">
            Rechtliches
          </span>
          <h1 className="font-headline-xl text-headline-xl uppercase tracking-tight text-on-surface leading-none">
            {title}
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Stand: {UPDATED}
          </p>
        </div>

        <div className="p-space-md rounded bg-surface-container border border-surface-container-high flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-[20px] text-tertiary shrink-0">
            info
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Angaben, die mit einem{" "}
            <span className="text-primary-container font-bold">
              [Platzhalter]
            </span>{" "}
            markiert sind, sind vor der Veröffentlichung durch die echten
            Firmendaten zu ersetzen.
          </p>
        </div>

        {intro && (
          <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {intro}
          </div>
        )}

        <div className="space-y-space-xl font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {children}
        </div>
      </div>
    </article>
  );
}
