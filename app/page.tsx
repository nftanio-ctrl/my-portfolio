
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  User,
  GraduationCap,
  Code,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
              Welcome to My Personal Portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-600">
                Nicole F. Tanio
              </span>
            </h1>

            <h2 className="text-2xl font-semibold text-muted-foreground">
              Information Technology Student
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Welcome to my personal portfolio! I am Nicole F.
              Tanio, an aspiring web developer passionate about
              technology, programming, and creating meaningful
              digital experiences. I enjoy learning new skills
              and exploring different technologies to improve
              myself.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">

              <Link href="/about">
                <Button size="lg">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>

            </div>
          </div>

          {/* Profile Section */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border-8 border-blue-100 dark:border-blue-950 bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                <User className="h-32 w-32 md:h-40 md:w-40 text-blue-600" />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-background shadow-lg border rounded-xl p-4">
                <p className="font-bold text-sm">
                  Nicole F. Tanio
                </p>
                <p className="text-xs text-muted-foreground">
                  Aspiring Web Developer
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Career Objectives Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Card className="border-l-4 border-l-blue-600 shadow-sm">
          <CardContent className="p-8 space-y-4">

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 dark:bg-blue-950 p-3 rounded-lg">
                <Target className="h-7 w-7 text-blue-600" />
              </div>

              <h2 className="text-2xl font-bold">
                Career Objectives
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              My objective is to enhance my knowledge and skills
              in Information Technology, particularly in web
              development and programming. I aim to become a
              competent and responsible IT professional who can
              develop innovative, user-friendly, and effective
              digital solutions. I am committed to continuous
              learning, improving my technical abilities, and
              gaining valuable experience that will help me
              achieve my future career goals.
            </p>

          </CardContent>
        </Card>
      </section>

      {/* Portfolio Highlights Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-bold">
            Explore My Portfolio
          </h2>

          <p className="text-muted-foreground">
            Learn more about my background, education, and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* About Me */}
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <User className="h-10 w-10 mx-auto text-blue-600" />

              <h3 className="font-bold text-lg">
                About Me
              </h3>

              <p className="text-sm text-muted-foreground">
                Get to know my background, passion, and personal story.
              </p>

              <Link
                href="/about"
                className="inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Learn More
              </Link>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <GraduationCap className="h-10 w-10 mx-auto text-blue-600" />

              <h3 className="font-bold text-lg">
                Education
              </h3>

              <p className="text-sm text-muted-foreground">
                Explore my educational background and academic journey.
              </p>

              <Link
                href="/education"
                className="inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                View Education
              </Link>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Code className="h-10 w-10 mx-auto text-blue-600" />

              <h3 className="font-bold text-lg">
                My Hobbies
              </h3>

              <p className="text-sm text-muted-foreground">
                Discover the things I enjoy doing in my free time.
              </p>

              <Link
                href="/hobbies"
                className="inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Explore Hobbies
              </Link>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Nicole F. Tanio. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}

