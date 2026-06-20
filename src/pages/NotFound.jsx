import React from 'react';
import { ShieldAlert } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <main className="h-screen w-full bg-darkBg flex flex-col items-center justify-center text-center px-4 select-none">
      <div className="flex flex-col items-center max-w-md">
        
        {/* Animated Icon */}
        <div className="text-primary mb-6 animate-bounce">
          <ShieldAlert size={80} className="stroke-[1.2]" />
        </div>

        <h1 className="text-white font-oswald text-6xl font-extrabold tracking-widest mb-4">
          404
        </h1>
        
        <h3 className="text-white font-oswald text-xl uppercase font-bold tracking-wider mb-4">
          Page Not Found
        </h3>
        
        <p className="text-neutral-400 text-xs leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable. Let's get you back on track!
        </p>

        <Button to="/" variant="primary" className="px-10">
          Back to Home
        </Button>

      </div>
    </main>
  );
};

export default NotFound;
