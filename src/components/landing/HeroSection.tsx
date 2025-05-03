import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Transform Your <span className="text-primary">Code</span> into Reality
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                All-in-one solution for code generation, execution, and design conversion. 
                From ideas to functioning websites in minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              No credit card required • Free plan available
            </div>
          </div>
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary-foreground/20 mix-blend-overlay" />
            <Image
              src="/hero-image.png" 
              alt="AutoDev Code Editor Interface"
              fill
              className="object-cover"
              priority
              // Replace with your actual hero image
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}