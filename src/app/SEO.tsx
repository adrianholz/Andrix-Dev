import { Helmet, HelmetProvider } from "react-helmet-async";

export default function SEO({
  title,
  description,
  url,
  children,
}: {
  title: string;
  description: string;
  url: string;
  children: React.ReactNode;
}) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Adrian Holzschuh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="/assets/img/webp/andrix-banner.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="/assets/img/webp/andrix-banner.webp"
        />
        <meta name="twitter:creator" content="@andrixdesign" />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0056ff" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/img/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/img/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      {children}
    </HelmetProvider>
  );
}
