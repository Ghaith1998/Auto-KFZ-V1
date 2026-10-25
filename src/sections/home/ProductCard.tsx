export interface Product {
  id: string;
  title: string;
  alt: string;
  image: string;
  imageRight: boolean;
  category: string;
  kicker: string;
  description: string;
  tags: string[];
  guarantee: string;
  whatsappQuery: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-surface-container-low rounded-xl border border-surface-container-highest overflow-hidden hover:border-primary-container/60 transition-all shadow-md grid grid-cols-1 lg:grid-cols-2">
      <div
        className={`relative h-64 lg:h-auto min-h-[260px] overflow-hidden bg-surface-container-lowest ${
          product.imageRight ? "lg:order-last" : ""
        }`}
      >
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={product.image}
          alt={product.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="font-label-md text-label-md px-2.5 py-1 rounded bg-surface-container-highest/90 text-primary-container uppercase font-bold tracking-wider">
            {product.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-surface font-label-md text-label-md">
          <span className="bg-surface-container-high/90 px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1 text-tertiary">
            <span className="material-symbols-outlined text-[14px]">
              check_circle
            </span>{" "}
            Sofort lagernd in 1120 Wien
          </span>
        </div>
      </div>

      <div className="p-space-lg flex flex-col justify-between space-y-space-md">
        <div className="space-y-space-sm">
          <div>
            <span className="text-primary-container font-label-lg text-label-lg font-bold uppercase tracking-wider block">
              {product.kicker}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight mt-0.5">
              {product.title}
            </h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-surface-container text-secondary text-body-sm font-label-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-space-md border-t border-surface-container-high flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-1 text-tertiary font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px]">
              verified
            </span>
            <span>{product.guarantee}</span>
          </div>
          <a
            className="inline-flex items-center gap-1.5 px-space-md py-2 bg-primary-container text-on-primary-container rounded font-label-lg text-label-lg uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all"
            href={`https://wa.me/436706542142?text=${encodeURIComponent(
              product.whatsappQuery
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Ersatzteil anfragen</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
