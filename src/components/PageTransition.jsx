function PageTransition({ children, className = "" }) {
  return (
    <div className={className ? `hero-fade-in ${className}` : "hero-fade-in"}>
      {children}
    </div>
  );
}

export default PageTransition;
