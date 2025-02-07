const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const baseUrl = 'https://videostreamhub.vercel.app';
const superdata = require('./data/superdata.json'); // Your superdata file

function generateSitemap() {
  const urls = [
    { loc: baseUrl, changefreq: 'daily', priority: '1.0' },
    { loc: `${baseUrl}/movies`, changefreq: 'daily', priority: '0.9' },
    { loc: `${baseUrl}/series`, changefreq: 'daily', priority: '0.9' },
    { loc: `${baseUrl}/adult`, changefreq: 'daily', priority: '0.9' },
  ];

  superdata.videos.forEach((video) => {
    urls.push({
      loc: `${baseUrl}/video/${video.id}`,
      changefreq: 'weekly',
      priority: '0.9',
    });
  });

  superdata.adult.forEach((video) => {
    urls.push({
      loc: `${baseUrl}/adult/${video.id}`,
      changefreq: 'weekly',
      priority: '0.9',
    });
  });

  superdata.series.forEach((series) => {
    urls.push({
      loc: `${baseUrl}/series/${series.id}`,
      changefreq: 'weekly',
      priority: '0.9',
    });

    series.episodes.forEach((episode) => {
      urls.push({
        loc: `${baseUrl}/video/${episode.id}`,
        changefreq: 'weekly',
        priority: '0.9',
      });
    });
  });

  const sitemapXml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url.loc}</loc>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>`
      )
      .join('')}
    </urlset>
  `;

  // Save to public directory
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log('Sitemap has been written to public/sitemap.xml');
}

generateSitemap();
