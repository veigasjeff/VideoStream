// const fs = require('fs');
// const path = require('path');
// const { URL } = require('url');

// const baseUrl = 'https://videostreamhub.vercel.app';
// const superdata = require('./data/superdata.json'); // Your superdata file

// function generateSitemap() {
//   const urls = [
//     { loc: baseUrl, changefreq: 'daily', priority: '1.0' },
//     { loc: `${baseUrl}/movies`, changefreq: 'daily', priority: '0.9' },
//     { loc: `${baseUrl}/hindiDubbed`, changefreq: 'daily', priority: '0.9' },
//     { loc: `${baseUrl}/series`, changefreq: 'daily', priority: '0.9' },
//     { loc: `${baseUrl}/adult`, changefreq: 'daily', priority: '0.9' },
//   ];

//   superdata.videos.forEach((video) => {
//     urls.push({
//       loc: `${baseUrl}/video/${video.id}`,
//       changefreq: 'daily',
//       priority: '0.9',
//     });
//   });

//  superdata.hindiDubbed.forEach((post) => {
//   urls.push({
//     loc: `${baseUrl}/hindi-dubbed/${post.id}`,
//     changefreq: 'daily',
//     priority: '0.9',
//   });
// });
//   superdata.adult.forEach((video) => {
//     urls.push({
//       loc: `${baseUrl}/adult/${video.id}`,
//       changefreq: 'daily',
//       priority: '0.9',
//     });
//   });

//   superdata.series.forEach((series) => {
//     urls.push({
//       loc: `${baseUrl}/series/${series.id}`,
//       changefreq: 'daily',
//       priority: '0.9',
//     });

//     series.episodes.forEach((episode) => {
//       urls.push({
//         loc: `${baseUrl}/video/${episode.id}`,
//         changefreq: 'daily',
//         priority: '0.9',
//       });
//     });
//   });

//   const sitemapXml = `
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//     xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
//     xmlns:xhtml="http://www.w3.org/1999/xhtml"
//     xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
//     xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
//     xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
//     ${urls
//       .map(
//         (url) => `
//       <url>
//         <loc>${url.loc}</loc>
//         <changefreq>${url.changefreq}</changefreq>
//         <priority>${url.priority}</priority>
//       </url>`
//       )
//       .join('')}
//     </urlset>
//   `;

//   // Save to public directory
//   const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
//   fs.writeFileSync(sitemapPath, sitemapXml);
//   console.log('Sitemap has been written to public/sitemap.xml');
// }

// generateSitemap();



// const fs = require('fs');
// const path = require('path');

// const baseUrl = 'https://videostreamhub.vercel.app';
// const superdata = require('./data/superdata.json'); // Your superdata file

// function generateSitemap() {
//   const urls = [
//     { loc: baseUrl, changefreq: 'daily', priority: '1.0' },
//     { loc: `${baseUrl}/movies`, changefreq: 'daily', priority: '0.9' },
//     { loc: `${baseUrl}/hindi-dubbed`, changefreq: 'daily', priority: '0.9' },
//     { loc: `${baseUrl}/series`, changefreq: 'daily', priority: '0.9' },
//     { loc: `${baseUrl}/adult`, changefreq: 'daily', priority: '0.9' },
//     { loc: `${baseUrl}/blog`, changefreq: 'daily', priority: '0.9' },
//   ];

//   // Add movie URLs
//   superdata.movies.forEach((video) => {
//     urls.push({
//       loc: `${baseUrl}/video/${video.id}`,
//       changefreq: 'weekly',
//       priority: '0.9',
//     });
//   });

//   // Add adult URLs
//   superdata.adult.forEach((video) => {
//     urls.push({
//       loc: `${baseUrl}/adult/${video.id}`,
//       changefreq: 'weekly',
//       priority: '0.9',
//     });
//   });

//   // Add blog URLs (Fixed incorrect path)
//   superdata.hindiDubbed.forEach((post) => {
//     urls.push({
//       loc: `${baseUrl}/hindi-dubbed/${post.id}`,
//       changefreq: 'weekly',
//       priority: '0.9',
//     });
//   });

//   // Add series and episodes URLs
//   superdata.series.forEach((series) => {
//     urls.push({
//       loc: `${baseUrl}/series/${series.id}`,
//       changefreq: 'weekly',
//       priority: '0.9',
//     });

//     series.episodes.forEach((episode) => {
//       urls.push({
//         loc: `${baseUrl}/video/${episode.id}`,
//         changefreq: 'weekly',
//         priority: '0.9',
//       });
//     });
//   });

//   // Generate XML sitemap
//   const sitemapXml = `
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//     xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
//     xmlns:xhtml="http://www.w3.org/1999/xhtml"
//     xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
//     xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
//     xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
//     ${urls
//       .map(
//         (url) => `
//       <url>
//         <loc>${url.loc}</loc>
//         <changefreq>${url.changefreq}</changefreq>
//         <priority>${url.priority}</priority>
//       </url>`
//       )
//       .join('')}
//     </urlset>
//   `;

//   // Save to public directory
//   const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
//   fs.writeFileSync(sitemapPath, sitemapXml);
//   console.log('Sitemap has been written to public/sitemap.xml');
// }

// generateSitemap();


const fs = require("fs");
const path = require("path");

const baseUrl = "https://videostreamhub.vercel.app";
const superdata = require("./data/superdata.json"); // Your data file

function generateSitemap() {
  const urls = [
    { loc: baseUrl, changefreq: "daily", priority: "1.0" },
    { loc: `${baseUrl}/movies`, changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/hindiDubbed`, changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/series`, changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/adult`, changefreq: "daily", priority: "0.9" },
  ];

  // Movies
  superdata.videos?.forEach((video) => {
    urls.push({
      loc: `${baseUrl}/video/${video.id}`,
      changefreq: "daily",
      priority: "0.9",
    });
  });

  // Hindi Dubbed Movies
  if (superdata.hindiDubbed) {
    superdata.hindiDubbed.forEach((video) => {
      urls.push({
        loc: `${baseUrl}/hindiDubbed/${video.id}`,
        changefreq: "daily",
        priority: "0.9",
      });
    });
  }

  // Adult
  superdata.adult?.forEach((video) => {
    urls.push({
      loc: `${baseUrl}/adult/${video.id}`,
      changefreq: "daily",
      priority: "0.9",
    });
  });

  // Series & Episodes
  superdata.series?.forEach((series) => {
    urls.push({
      loc: `${baseUrl}/series/${series.id}`,
      changefreq: "daily",
      priority: "0.9",
    });

    series.episodes?.forEach((episode) => {
      urls.push({
        loc: `${baseUrl}/video/${episode.id}`,
        changefreq: "daily",
        priority: "0.9",
      });
    });
  });

  // Generate XML content
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
    .join("")}
</urlset>`;

  // Save to public directory
  const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log("✅ Sitemap has been written to public/sitemap.xml");
}

generateSitemap();
