// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://masterclass-ia.fr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/merci'],
      },
      {
        // OpenAI GPT crawler
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/merci'],
      },
      {
        // ChatGPT user agent
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/merci'],
      },
      {
        // Google Extended (Bard)
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/merci'],
      },
      {
        // Anthropic Claude
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/merci'],
      },
      {
        // Perplexity AI
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/merci'],
      },
      {
        // Common Crawl (used for AI training)
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/', '/merci'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
