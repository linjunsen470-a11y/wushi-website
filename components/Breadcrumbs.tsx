import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': '首页',
        'item': 'https://www.cqwushi.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 2,
        'name': item.name,
        'item': item.item.startsWith('http') ? item.item : `https://www.cqwushi.com${item.item}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-on-surface-variant/70 font-medium">
        <Link
          href="/"
          className="flex items-center gap-1 text-on-surface-variant/70 hover:text-primary transition-colors duration-200"
        >
          <Home size={13} className="shrink-0" />
          <span>首页</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={item.item} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-on-surface-variant/40 shrink-0" />
              {isLast ? (
                <span className="text-on-surface-variant/90 font-semibold truncate max-w-[150px] sm:max-w-[300px]">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.item}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
