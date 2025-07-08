import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogsPage = () => {
  // Sample blog posts - will be replaced with CMS data
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to AWS Cloud Migration in 2024",
      excerpt: "Learn the best practices and strategies for migrating your infrastructure to AWS cloud with minimal downtime and maximum efficiency.",
      author: "HADS Team",
      date: "2024-01-15",
      category: "Cloud Migration",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "FinOps Best Practices: Optimizing Cloud Costs",
      excerpt: "Discover how to implement FinOps methodologies to reduce cloud spending while maintaining performance and scalability.",
      author: "HADS Team",
      date: "2024-01-10",
      category: "FinOps",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "DevOps Automation: CI/CD Pipeline Setup",
      excerpt: "Step-by-step guide to setting up automated CI/CD pipelines for faster, more reliable software deployment.",
      author: "HADS Team",
      date: "2024-01-05",
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
                Cloud Technology <span className="text-hads-pink">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stay updated with the latest trends, best practices, and expert insights in cloud technology, 
                DevOps automation, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Featured Post */}
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="mb-12 overflow-hidden shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-hads-teal to-hads-purple h-64 md:h-auto"></div>
                    <div className="md:w-2/3 p-8">
                      <Badge className="mb-4 bg-hads-pink/10 text-hads-pink">{post.category}</Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
                      <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Button className="bg-hads-pink hover:bg-hads-pink/90">
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
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-hads-teal to-hads-purple"></div>
                    <CardHeader>
                      <Badge className="w-fit mb-2 bg-hads-teal/10 text-hads-teal">{post.category}</Badge>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
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

              {/* CMS Integration Notice */}
              <div className="mt-16 text-center">
                <Card className="max-w-2xl mx-auto p-8 bg-blue-50 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Management System</h3>
                  <p className="text-gray-600 mb-6">
                    To enable full blog functionality with content management, connect your project to Supabase. 
                    This will allow you to create, edit, and manage blog posts dynamically.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Connect to Supabase CMS
                  </Button>
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