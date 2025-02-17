import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
import Share from '@/components/Share';

const editUrl = (slug) =>
  `https://github.com/lavaldi/lavaldi.com/edit/main/data/blog/${slug}.mdx`;
const getUrl = (slug) => `https://lavaldi.com/blog/${slug}`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(getUrl(slug))}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Claudia Valdivieso`}
      description={frontMatter.summary}
      image={frontMatter.banner}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-purple-700 dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Claudia Valdivieso"
              height={24}
              width={24}
              src="/static/lavaldi.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Claudia Valdivieso / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <Share title={frontMatter.title} url={getUrl(frontMatter.slug)} />
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <Share title={frontMatter.title} url={getUrl(frontMatter.slug)} />
        <div className="text-sm text-purple-700 dark:text-purple-300 mt-16">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}
