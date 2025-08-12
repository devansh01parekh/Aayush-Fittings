import React from 'react';

const FloatingElements = () => {
  return (
    <>
      {/* Floating geometric shapes */}
      <div className="float-element top-20 left-10 w-12 h-12 bg-accent/20 rounded-lg rotate-45"></div>
      <div className="float-element float-delayed top-40 right-20 w-8 h-8 bg-primary/20 rounded-full"></div>
      <div className="float-element float-slow top-60 left-1/4 w-6 h-16 bg-accent/15 rounded-full"></div>
      <div className="float-element top-80 right-1/3 w-10 h-10 bg-primary/15 rounded-lg rotate-12"></div>
      <div className="float-element float-delayed bottom-40 left-16 w-14 h-14 bg-accent/10 rounded-full"></div>
      
      {/* Floating product silhouettes */}
      <div className="float-element float-slow top-32 right-10 w-16 h-4 bg-primary/10 rounded-full transform rotate-12"></div>
      <div className="float-element bottom-60 right-20 w-12 h-3 bg-accent/15 rounded-full transform -rotate-6"></div>
      <div className="float-element float-delayed bottom-80 left-1/3 w-8 h-8 bg-primary/20 rounded-lg transform rotate-45"></div>
    </>
  );
};

export default FloatingElements;