import React from 'react'
import Card from './Card'
import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';

function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
   
        <div className="flex items-center justify-between mb-6">
        
          <h1 className="text-4xl ml-6 text-gray-700 opacity-80 font-bold">
            <AnimatedHomeText
              text="Welcome to Your Digital Bank!"
              className="text-4xl font-bold"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <Link to={'/create-account'}>
          <button className="px-4 py-2 mr-1 bg-blue-900 font-medium text-white rounded-lg hover:bg-blue-400">
            + Add an Account
          </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-7">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;

// Welcome text
const AnimatedHomeText = ({
  text = '',
  className = '',
  delay = 200,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const letters = text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next) => {
          await next(animationTo);
          animatedCount.current += 1;
          if (animatedCount.current === letters.length && onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block transform transition-opacity will-change-transform"
        >
          {letters[index] === ' ' ? ' ' : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};