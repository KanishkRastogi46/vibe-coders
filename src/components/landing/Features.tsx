import { Code, Play, Image as ImageIcon, Layers, Cpu } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful Features for Developers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AutoDev combines intelligent code generation with seamless execution for a complete development experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-5">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Smart Code Generation</h3>
            <p className="mt-2 text-muted-foreground">
              Generate clean, optimized code for multiple languages with simple natural language prompts.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-5">
              <Play className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Instant Code Execution</h3>
            <p className="mt-2 text-muted-foreground">
              Run your code directly in the browser with real-time feedback and debugging tools.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-5">
              <ImageIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Image to Code Conversion</h3>
            <p className="mt-2 text-muted-foreground">
              Transform website screenshots into working HTML, CSS, and JavaScript code with a single click.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-5">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Built-in Editor</h3>
            <p className="mt-2 text-muted-foreground">
              Powerful code editor with syntax highlighting, auto-completion, and real-time collaboration.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-5">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">AI-Powered Suggestions</h3>
            <p className="mt-2 text-muted-foreground">
              Get intelligent code recommendations and optimizations as you write.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}