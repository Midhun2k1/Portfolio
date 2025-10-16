import { Server, Layout, Database, Briefcase, Code, User  } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer with a Backend Edge
            </h3>

            <p className="text-muted-foreground">
              I’m a full stack developer with 2+ years of experience building web applications end-to-end. While I work across the stack, 
              I specialize in backend development — designing scalable systems, crafting efficient APIs, and writing clean, maintainable code.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about solving real-world problems through code and 
              constantly exploring new technologies to stay ahead in the evolving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                // href="https://drive.google.com/file/d/1dOuH2aeLMQy0v5-8SqHbh1FJzI6-e6iB/view?usp=drive_link"
                href="https://drive.google.com/file/d/1g7qsnvsGkoXHi67NDzc1oLCKhde42dia/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Backend Development</h4>
                  <p className="text-muted-foreground">
                    Designing and Building fast, secure, and
                    scalable APIs with modern backend tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building web apps with intuitive frontends and 
                    powerful backend logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database  className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database & API Integration</h4>
                  <p className="text-muted-foreground">
                    Working with databases and APIs to build efficient, data-driven apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};