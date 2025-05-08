
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="hero-gradient absolute top-0 right-0 w-1/3 h-1/3 rounded-full blur-[120px] opacity-20" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-serif animate-fade-in">
            <span className="inline-block">Hello, I'm </span>
            <span className="text-primary inline-block">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A passionate developer creating elegant solutions for the web.
            Specializing in PHP, React, and building beautiful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/projects">
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
