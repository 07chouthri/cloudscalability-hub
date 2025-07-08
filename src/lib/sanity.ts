import { createClient } from '@sanity/client';

// Sanity configuration
// Note: For production, you should store these in Supabase secrets or user input
const sanityConfig = {
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production', // or 'development'
  useCdn: true, // Enable for faster, cached responses
  apiVersion: '2024-01-01', // Use current date
  token: '', // Optional: Add token for authenticated requests
};

// Create Sanity client
export const sanityClient = createClient(sanityConfig);

// Types for blog posts
export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any[]; // Sanity block content
  author: {
    name: string;
    image?: string;
  };
  publishedAt: string;
  category: string;
  readTime?: string;
  featured?: boolean;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

// Fetch all blog posts
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      content,
      author->{
        name,
        image
      },
      publishedAt,
      category,
      readTime,
      featured,
      mainImage{
        asset->{
          url
        },
        alt
      }
    }`;
    
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch single blog post by slug
export const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const query = `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      author->{
        name,
        image
      },
      publishedAt,
      category,
      readTime,
      featured,
      mainImage{
        asset->{
          url
        },
        alt
      }
    }`;
    
    return await sanityClient.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Fetch featured blog posts
export const fetchFeaturedPosts = async (): Promise<BlogPost[]> => {
  try {
    const query = `*[_type == "blogPost" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author->{
        name,
        image
      },
      publishedAt,
      category,
      readTime,
      featured,
      mainImage{
        asset->{
          url
        },
        alt
      }
    }`;
    
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
};