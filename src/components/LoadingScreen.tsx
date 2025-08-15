import React from 'react';
import { Code2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <Code2 className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-ping"></div>
        </div>
        <div className="mt-8 space-y-2">
          <div className="flex justify-center space-x-1">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-white text-lg font-light tracking-wider animate-fade-in">Loading Portfolio...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;