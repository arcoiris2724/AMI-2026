import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo, { SITE_URL } from "@/components/Seo";
import { ARTICLES, BOOKING_URL, BRAND, LOGO_URL } from "@/data/siteData";

const CATEGORY_COLORS: Record<string, string> = {
  "Digital Strategy": "#DB2777",
  "SEO Tips": "#1D4ED8",
  Kaizen: "#16A34A",
  "Web & Apps": "#E4342B",
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.id === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Article Not Found</h1>
          <p className="mt-3 text-gray-600">
            The article you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/resources"
            className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 font-bold text-white hover:bg-[#E4342B] transition-colors"

          >
            Browse the Resource Center
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category
  ).slice(0, 2);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      image: article.image,
      datePublished: new Date(article.date).toISOString(),
      author: { "@type": "Organization", name: article.author, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: BRAND.name,
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
      mainEntityOfPage: `${SITE_URL}/resources/${article.id}`,
      articleSection: article.category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Resource Center", item: `${SITE_URL}/resources` },

        { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/resources/${article.id}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Seo
        title={`${article.title} | ${BRAND.name}`}
        description={article.excerpt}
        path={`/resources/${article.id}`}
        image={article.image}
        type="article"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"

            className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#1D4ED8] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resource Center
          </Link>

          <article className="mt-8">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-extrabold text-white"
              style={{ backgroundColor: CATEGORY_COLORS[article.category] ?? "#1D4ED8" }}
            >
              {article.category}
            </span>
            <h1 className="mt-4 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
              <span className="font-semibold text-gray-700">{article.author}</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <img
              src={article.image}
              alt={article.title}
              className="mt-8 w-full rounded-2xl object-cover aspect-[3/2] border border-gray-100"
            />

            <div className="mt-8 space-y-5">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div className="mt-10 rounded-2xl bg-gray-950 p-8 text-center">
            <h2 className="text-xl font-extrabold text-white">
              Ready to put these ideas to work?
            </h2>
            <p className="mt-2 text-gray-400">
              Talk strategy with the think-tank behind the article.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg bg-[#E4342B] px-6 py-3 font-bold text-white hover:bg-[#c22a22] transition-colors"
            >
              Book a Free Consultation
            </a>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-extrabold text-gray-900">Related Reading</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((a) => (
                  <Link
                    key={a.id}
                    to={`/resources/${a.id}`}
                    className="group text-left rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                  >
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 leading-snug">{a.title}</h3>
                      <span className="mt-1 block text-xs text-gray-500">{a.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
