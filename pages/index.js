import Link from 'next/link';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-purple-700 dark:text-white">
          Hey! I’m Claudia Valdivieso
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm christian ✝️, wife 👫, mother 👨‍👩‍👦 and front-end 👩‍💻, and sometimes I write about christianity and programming. You can read about&nbsp;
          <Link href="/blog">
            <a>code</a>
          </Link>
          {", and "}
          <Link href="/???">
            <a>christianity</a>
          </Link>
          {", or learn more "}
          <Link href="/about">
            <a>about me</a>
          </Link>
          {"."}
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-purple-700 dark:text-white">
          Side Projects
        </h3>
        <ProjectCard
          title="Verbs"
          description="A PWA (with pure JavaScript) of 1000 English verb forms (I have to improve the code 😅)."
          href="https://verbs.lavaldi.com/"
          icon="🇺🇸"
        />
        <ProjectCard
          title="Normalized Styled Components"
          description="An NPM package to get normalize.css as styled-components."
          href="https://www.npmjs.com/package/@lavaldi/normalized-components"
          icon="💅"
        />
      </div>
    </Container>
  );
}