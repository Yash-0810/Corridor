import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-6">Something went wrong</h1>
            <p className="font-body text-zinc-400 text-lg mb-8 max-w-sm mx-auto">
              There was an error loading this page. Please try refreshing or navigating to another page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gold text-black px-8 py-4 font-body text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 mx-auto"
            >
              Reload Page
            </button>
            <details className="mt-8 text-left text-sm text-zinc-500">
              <summary className="cursor-pointer mb-2">Error details (click to expand)</summary>
              <pre className="bg-zinc-900 p-4 rounded text-xs overflow-auto max-h-40">
                {this.state.error?.toString()}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

