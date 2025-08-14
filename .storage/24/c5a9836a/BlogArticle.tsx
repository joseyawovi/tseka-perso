import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";

export default function BlogArticle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find((post) => post.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  // Format the markdown content
  const formatContent = (content) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1
            key={index}
            className="text-3xl font-playfair font-bold mt-6 mb-4"
          >
            {line.replace("# ", "")}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-playfair font-bold mt-6 mb-3"
          >
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-playfair font-bold mt-5 mb-2">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-4 mb-2">
            {line.replace("- ", "")}
          </li>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-bold mb-4">
            {line.replace(/^\*\*|\*\*$/g, "")}
          </p>
        );
      } else if (line.trim() === "") {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="mb-4">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Article Hero */}
        <section className="bg-primary/10 py-16">
          <div className="container">
            <Link
              to="/blog"
              className="inline-flex items-center text-primary hover:text-secondary mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux articles
            </Link>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="font-semibold text-secondary">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Article Content */}
              <div className="md:col-span-2">
                <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <article className="prose prose-lg max-w-none">
                  {formatContent(post.content)}
                </article>

                {/* Share Section */}
                <div className="border-t border-border mt-12 pt-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="font-playfair font-bold">
                      Partager cet article:
                    </p>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Partager sur Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Partager sur Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Partager sur LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="md:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Author */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-playfair text-lg font-bold mb-4">
                      À propos de l'auteur
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src="/assets/author.jpg"
                          alt="Tcheka Malou"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-playfair font-bold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">
                          Auteur & Consultant
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Auteur, formateur et consultant en communication,
                      j'accompagne les individus et les organisations dans leur
                      développement.
                    </p>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="font-playfair text-lg font-bold mb-2">
                      Newsletter
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Recevez mes derniers articles et actualités directement
                      dans votre boîte mail.
                    </p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-y-3"
                    >
                      <input
                        type="email"
                        placeholder="Votre email"
                        className="w-full px-3 py-2 border border-border rounded-md"
                        required
                      />
                      <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                        S'abonner
                      </Button>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
