import { groq } from "next-sanity";

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    heroImage,
    hoverImage,
    excerpt,
    tags,
    category,
    publishedAt,
    estimatedReadTime
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    heroImage,
    hoverImage,
    excerpt,
    body,
    tags,
    category,
    publishedAt,
    estimatedReadTime
  }
`;

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)][].slug.current
`;

// ─── Resources ───────────────────────────────────────────────────────────────

export const allResourcesQuery = groq`
  *[_type == "resource"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    thumbnail,
    category,
    description,
    gumroadUrl,
    isFree,
    featured,
    publishedAt
  }
`;

export const resourceBySlugQuery = groq`
  *[_type == "resource" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    thumbnail,
    category,
    description,
    gumroadUrl,
    isFree,
    featured,
    publishedAt
  }
`;

export const featuredResourcesQuery = groq`
  *[_type == "resource" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    thumbnail,
    category,
    description,
    gumroadUrl,
    isFree,
    publishedAt
  }
`;

// ─── Builds ──────────────────────────────────────────────────────────────────

export const allBuildsQuery = groq`
  *[_type == "build"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    thumbnail,
    shortDescription,
    tools,
    category,
    liveUrl,
    publishedAt
  }
`;

export const buildBySlugQuery = groq`
  *[_type == "build" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    thumbnail,
    heroScreenshot,
    screenshots,
    shortDescription,
    caseStudy,
    tools,
    category,
    liveUrl,
    publishedAt
  }
`;

export const buildSlugsQuery = groq`
  *[_type == "build" && defined(slug.current)][].slug.current
`;

// ─── Book Reads ──────────────────────────────────────────────────────────────

export const allBookReadsQuery = groq`
  *[_type == "bookRead"] | order(_createdAt desc) {
    _id,
    title,
    author,
    coverImage,
    rating,
    shortTake,
    excerpt,
    isCurrentlyReading,
    currentPage,
    totalPages,
    linkedBookNote->{
      _id,
      title,
      slug
    }
  }
`;

export const currentlyReadingQuery = groq`
  *[_type == "bookRead" && isCurrentlyReading == true][0] {
    _id,
    title,
    author,
    coverImage,
    currentPage,
    totalPages
  }
`;

// ─── Book Notes ──────────────────────────────────────────────────────────────

export const allBookNotesQuery = groq`
  *[_type == "bookNote"] | order(dateRead desc) {
    _id,
    title,
    bookRef->{
      _id,
      title,
      author,
      coverImage
    },
    dateRead
  }
`;

export const bookNoteByIdQuery = groq`
  *[_type == "bookNote" && _id == $id][0] {
    _id,
    title,
    bookRef->{
      _id,
      title,
      author,
      coverImage
    },
    body,
    dateRead
  }
`;

// ─── Saved Articles ─────────────────────────────────────────────────────────

export const allSavedArticlesQuery = groq`
  *[_type == "savedArticle"] | order(_createdAt desc) {
    _id,
    title,
    source,
    url,
    comment
  }
`;

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const allFaqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`;
