const About = () => {
  return (
    <section id="about" className="py-section bg-card">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <p className="text-sm font-medium tracking-widest uppercase text-accent sticky top-32">
              About
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Built from experience, not theory
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                This isn't another course from someone who read about building companies. 
                It's a collection of lessons, frameworks, and honest reflections from 
                actually doing it—the difficult decisions, the quiet failures, the gradual 
                clarity that only comes from years of practice.
              </p>
              
              <p>
                I built and scaled a SaaS company from first customer to meaningful exit. 
                Along the way, I learned that the most valuable insights weren't the 
                headline-grabbing growth hacks, but the quieter principles around 
                decision-making, people, and staying sane through uncertainty.
              </p>
              
              <p>
                Master Founders Academy exists because I wish something like it had existed for me. 
                Not a community promising connection. Not motivational content disguised 
                as education. Just practical, honest material from someone who's been 
                through it—designed to be a companion for the long journey ahead.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <span className="font-serif text-xl text-accent">JM</span>
                </div>
                <div>
                  <p className="font-serif text-xl text-foreground">Gareth Cadwallader</p>
                  <p className="text-muted-foreground">Founder & Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
