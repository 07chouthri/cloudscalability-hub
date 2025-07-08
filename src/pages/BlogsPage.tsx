import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SanityConfigDialog from '@/components/SanityConfigDialog';
import { fetchBlogPosts, BlogPost } from '@/lib/sanity';

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load blog posts from Sanity or fallback to sample data
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // Check if Sanity is configured
        const projectId = localStorage.getItem('sanity-project-id');
        
        if (projectId) {
          // Fetch from Sanity
          const posts = await fetchBlogPosts();
          if (posts.length > 0) {
            setBlogPosts(posts);
          } else {
            // If no posts from Sanity, use sample data
            setBlogPosts(sampleBlogPosts);
          }
        } else {
          // Use sample data if Sanity not configured
          setBlogPosts(sampleBlogPosts);
        }
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Failed to load blog posts');
        setBlogPosts(sampleBlogPosts); // Fallback to sample data
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  // Sample blog posts as fallback
  const sampleBlogPosts: BlogPost[] = [
    {
      _id: '1',
      title: "Complete Guide to AWS Cloud Migration in 2024",
      slug: { current: "aws-cloud-migration-guide-2024" },
      excerpt: "Learn the best practices and strategies for migrating your infrastructure to AWS cloud with minimal downtime and maximum efficiency.",
      content: [],
      author: { name: "HADS Team" },
      publishedAt: "2024-01-15",
      category: "Cloud Migration",
      readTime: "8 min read",
      featured: true
    },
    {
      _id: '2',
      title: "FinOps Best Practices: Optimizing Cloud Costs",
      slug: { current: "finops-best-practices-cloud-costs" },
      excerpt: "Discover how to implement FinOps methodologies to reduce cloud spending while maintaining performance and scalability.",
      content: [],
      author: { name: "HADS Team" },
      publishedAt: "2024-01-10",
      category: "FinOps",
      readTime: "6 min read",
      featured: false
    },
    {
      _id: '3',
      title: "DevOps Automation: CI/CD Pipeline Setup",
      slug: { current: "devops-automation-cicd-pipeline" },
      excerpt: "Step-by-step guide to setting up automated CI/CD pipelines for faster, more reliable software deployment.",
      content: [],
      author: { name: "HADS Team" },
      publishedAt: "2024-01-05",
      category: "DevOps",
      readTime: "10 min read",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Cloud Technology Blogs Chennai | AWS DevOps FinOps Articles | HADS</title>
        <meta
          name="description"
          content="Read expert insights on cloud migration, AWS services, DevOps automation, and FinOps optimization. Latest articles from HADS Technovations cloud experts."
        />
        <meta
          name="keywords"
          content="cloud blogs Chennai, AWS articles Chennai, DevOps blogs Chennai, FinOps articles Chennai, cloud migration guides Chennai"
        />
        <link rel="canonical" href="https://www.hadstechnovations.com/blogs" />
      </Helmet>

      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cloud Technology <span className="text-primary">Insights</span>
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-xl text-gray-600">
                  Stay updated with the latest trends, best practices, and expert insights in cloud technology, 
                  DevOps automation, and digital transformation.
                </p>
                <SanityConfigDialog />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="text-center py-16">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading blog posts...</p>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-red-600 mb-4">{error}</p>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            ) : (
              <>
                {/* Featured Post */}
                {blogPosts.filter(post => post.featured).map((post) => (
                  <Card key={post._id} className="mb-12 overflow-hidden shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary to-secondary h-64 md:h-auto"></div>
                    <div className="md:w-2/3 p-8">
                      <Badge className="mb-4 bg-primary/10 text-primary">{post.category}</Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
                      <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author.name}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
                  ))}

                  {/* Regular Posts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.filter(post => !post.featured).map((post) => (
                      <Card key={post._id} className="hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-primary/10 text-primary">{post.category}</Badge>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                    ))}
                  </div>
                </>
              )}

              {/* CMS Integration Notice */}
              <div className="mt-16 text-center">
                <Card className="max-w-2xl mx-auto p-8 bg-blue-50 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sanity CMS Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Your blog is now connected to Sanity CMS! Configure your Sanity project details above to start managing your blog content. 
                    Create blog posts in your Sanity studio and they'll appear here automatically.
                  </p>
                  <div className="space-y-3">
                    <SanityConfigDialog />
                    <p className="text-sm text-gray-500">
                      Note: API credentials are stored locally in your browser for security.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogsPage;