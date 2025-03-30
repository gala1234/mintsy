# URL Structure Recommendations for Mintsy.ai

## Current URL Structure Analysis

| Current URL | Analysis |
|-------------|----------|
| `/` | Homepage URL is clear and standard |
| `/create` | Good, but could be more descriptive |
| `/how-it-works` | Good descriptive URL with keywords |
| `/pricing` | Clear and concise |
| `/about` | Standard about page URL |
| `/faq` | Standard FAQ URL, but lacks keywords |
| `/login` | Standard authentication URL |
| `/terms` | Standard terms page URL |
| `/privacy` | Standard privacy page URL |
| `/refund-policy` | Clear policy URL |
| `/support` | Clear support URL |
| `/affiliate` | Clear affiliate program URL |

## Recommended URL Structure Improvements

| Current URL | Recommended URL | Rationale |
|-------------|-----------------|-----------|
| `/create` | `/create-ai-art` | More descriptive with keyword "ai-art" for better indexing |
| `/how-it-works` | (Keep as is) | Already contains keywords and is clear |
| `/pricing` | `/ai-art-pricing` | Adds keyword relevance |
| `/about` | (Keep as is) | Standard and appropriate |
| `/faq` | `/ai-art-faqs` | More descriptive with keywords |
| `/login` | (Keep as is) | Standard authentication URL |
| `/terms` | `/terms-of-service` | More complete and standard terminology |
| `/privacy` | `/privacy-policy` | More complete and standard terminology |
| `/refund-policy` | (Keep as is) | Clear and descriptive |
| `/support` | `/help-support` | Slightly more descriptive for search |
| `/affiliate` | `/affiliate-program` | More complete description |

## Implementation Plan

To implement these URL changes:

1. Create new route directories in Next.js
2. Set up redirects from old URLs to new URLs
3. Update internal links throughout the site
4. Update sitemaps and notify search engines of the changes

### Example Next.js Route Structure:

```
src/app/
├── create-ai-art/          # Changed from create/
│   └── page.tsx
├── how-it-works/           # Keep as is
│   └── page.tsx
├── ai-art-pricing/         # Changed from pricing/
│   └── page.tsx
├── about/                  # Keep as is
│   └── page.tsx
├── ai-art-faqs/            # Changed from faq/
│   └── page.tsx
├── terms-of-service/       # Changed from terms/
│   └── page.tsx
├── privacy-policy/         # Changed from privacy/
│   └── page.tsx
├── help-support/           # Changed from support/
│   └── page.tsx
└── affiliate-program/      # Changed from affiliate/
    └── page.tsx
```

### Example Redirect Configuration:

Add the following to your `next.config.js`:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/create',
        destination: '/create-ai-art',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/ai-art-pricing',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/ai-art-faqs',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/help-support',
        permanent: true,
      },
      {
        source: '/affiliate',
        destination: '/affiliate-program',
        permanent: true,
      },
    ];
  },
};
```

## Additional URL Structure Recommendations

### Blog URLs (If implementing a blog):
* Use: `/blog/category/post-title` structure
* Example: `/blog/ai-art-tips/how-to-create-stunning-landscapes-with-ai`

### Product or Collection URLs (If adding specific collections):
* Use: `/collections/collection-name` structure
* Example: `/collections/landscape-ai-art`

### User Gallery URLs:
* Use: `/gallery/username` structure
* Example: `/gallery/john-smith`

## SEO Benefits

These URL structure changes will:

1. Improve keyword relevance in URLs
2. Create clearer content expectations for users
3. Potentially improve click-through rates from search results
4. Align with search engine best practices for descriptive URLs
5. Maintain proper 301 redirects to preserve SEO equity 