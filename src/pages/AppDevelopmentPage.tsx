import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Code, 
  Zap, 
  LayoutGrid
} from 'lucide-react'; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppDevelopmentSection from '@/components/AppDevelopmentSection';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const AppDevelopmentPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-white">Application </span>
                            <span className="text-hads-pink">Development</span>
                            <span className="text-white"> Services</span>
                        </h1>

                        {/* Animation */}
                        <div className="mb-16 w-full h-96 mx-auto">
                            <DotLottieReact
                                src="https://lottie.host/4b1c441b-f88d-4cd3-9808-ce64ab6592f6/bhfJOatLuz.lottie"
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            Build innovative, scalable, and user-friendly applications with our expert development team
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow">
                {/* App Development Section */}
                <AppDevelopmentSection />

                {/* Technologies Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Stack</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We use the latest technologies and frameworks to build performant, scalable applications
                            </p>
                        </div>

                        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                                <TabsTrigger value="backend">Backend</TabsTrigger>
                                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                                <TabsTrigger value="devops">DevOps</TabsTrigger>
                            </TabsList>

                            {/* Frontend */}
                            <TabsContent value="frontend" className="mt-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {[
                                        { name: 'React', icon: '⚛️', desc: 'Component-based UI' },
                                        { name: 'Angular', icon: '🅰️', desc: 'Enterprise framework' },
                                        { name: 'Vue.js', icon: '🟢', desc: 'Progressive framework' },
                                        { name: 'Next.js', icon: '⏭️', desc: 'React framework' },
                                        { name: 'TypeScript', icon: '🔷', desc: 'Typed JavaScript' },
                                        { name: 'Tailwind CSS', icon: '🎨', desc: 'Utility-first CSS' },
                                        { name: 'Redux', icon: '🔄', desc: 'State management' },
                                        { name: 'GraphQL', icon: '⚡', desc: 'API query language' },
                                    ].map((tech, i) => (
                                        <Card key={i} className="hover:shadow-lg transition-shadow">
                                            <CardHeader className="pb-2">
                                                <div className="text-3xl mb-2">{tech.icon}</div>
                                                <CardTitle className="text-lg">{tech.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription>{tech.desc}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            {/* Backend */}
                            <TabsContent value="backend" className="mt-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {[
                                        { name: 'Node.js', icon: '🟢', desc: 'JavaScript runtime' },
                                        { name: '.NET Core', icon: '🔵', desc: 'Cross-platform framework' },
                                        { name: 'Python', icon: '🐍', desc: 'Versatile language' },
                                        { name: 'Java', icon: '☕', desc: 'Enterprise standard' },
                                        { name: 'PostgreSQL', icon: '🐘', desc: 'Advanced SQL database' },
                                        { name: 'MongoDB', icon: '🍃', desc: 'NoSQL document store' },
                                        { name: 'Redis', icon: '🔴', desc: 'In-memory data store' },
                                        { name: 'AWS Lambda', icon: 'λ', desc: 'Serverless functions' },
                                    ].map((tech, i) => (
                                        <Card key={i} className="hover:shadow-lg transition-shadow">
                                            <CardHeader className="pb-2">
                                                <div className="text-3xl mb-2">{tech.icon}</div>
                                                <CardTitle className="text-lg">{tech.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription>{tech.desc}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            {/* Mobile */}
                            <TabsContent value="mobile" className="mt-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {[
                                        { name: 'React Native', icon: '📱', desc: 'Cross-platform apps' },
                                        { name: 'Flutter', icon: '🔷', desc: 'Google UI toolkit' },
                                        { name: 'Swift', icon: '🧩', desc: 'iOS development' },
                                        { name: 'Kotlin', icon: '🔶', desc: 'Android development' },
                                        { name: 'Firebase', icon: '🔥', desc: 'App development platform' },
                                        { name: 'Ionic', icon: '⚡', desc: 'Hybrid mobile apps' },
                                        { name: 'Capacitor', icon: '🔌', desc: 'Native runtime' },
                                        { name: 'MobX', icon: '📊', desc: 'State management' },
                                    ].map((tech, i) => (
                                        <Card key={i} className="hover:shadow-lg transition-shadow">
                                            <CardHeader className="pb-2">
                                                <div className="text-3xl mb-2">{tech.icon}</div>
                                                <CardTitle className="text-lg">{tech.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription>{tech.desc}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            {/* DevOps */}
                            <TabsContent value="devops" className="mt-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {[
                                        { name: 'Docker', icon: '🐳', desc: 'Containerization' },
                                        { name: 'Kubernetes', icon: '☸️', desc: 'Container orchestration' },
                                        { name: 'GitHub Actions', icon: '🔄', desc: 'CI/CD workflows' },
                                        { name: 'Jenkins', icon: '🤖', desc: 'Automation server' },
                                        { name: 'Terraform', icon: '🏗️', desc: 'Infrastructure as code' },
                                        { name: 'Prometheus', icon: '📊', desc: 'Monitoring system' },
                                        { name: 'Grafana', icon: '📈', desc: 'Data visualization' },
                                        { name: 'ELK Stack', icon: '🔍', desc: 'Logging platform' },
                                    ].map((tech, i) => (
                                        <Card key={i} className="hover:shadow-lg transition-shadow">
                                            <CardHeader className="pb-2">
                                                <div className="text-3xl mb-2">{tech.icon}</div>
                                                <CardTitle className="text-lg">{tech.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription>{tech.desc}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                A structured approach to deliver high-quality applications on time and within budget
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: <LayoutGrid className="w-12 h-12 text-blue-500" />,
                                    title: "Discovery & Planning",
                                    steps: ["Requirements gathering", "User research", "Technical assessment", "Project roadmap"]
                                },
                                {
                                    icon: <Code className="w-12 h-12 text-purple-500" />,
                                    title: "Design & Development",
                                    steps: ["UI/UX design", "Architecture planning", "Agile development", "Quality assurance"]
                                },
                                {
                                    icon: <Zap className="w-12 h-12 text-green-500" />,
                                    title: "Deployment & Support",
                                    steps: ["Continuous integration", "Automated testing", "Performance monitoring", "Ongoing maintenance"]
                                }
                            ].map((phase, i) => (
                                <div key={i} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                                    <div className="mb-4">{phase.icon}</div>
                                    <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                                    <ul className="space-y-2">
                                        {phase.steps.map((step, j) => (
                                            <li key={j} className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-hads-pink rounded-full"></div>
                                                <span className="text-gray-700">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
export default AppDevelopmentPage;
