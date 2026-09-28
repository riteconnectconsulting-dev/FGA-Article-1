import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-secondary/40 px-6 py-24 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Page Not Found
        </p>
        <h1 className="mt-4 text-5xl font-extrabold text-navy">404</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          This page hasn&apos;t been built yet. Head back home to explore
          FGA&apos;s client success story and services.
        </p>
        <Button asChild className="mt-8 bg-navy text-white hover:bg-navy-light">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
