'use client';

import { useEffect, useState } from 'react';

const phrases = [
  'like a lie detector.',
  'in seconds.',
  'with 98% accuracy.'
];

export function TypingAnimation() {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 1500;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting) {
      if (currentPhrase.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhrase((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (currentPhrase === phrases[currentIndex]) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhrase((prev) => phrases[currentIndex].slice(0, prev.length + 1));
        }, typeSpeed);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentPhrase, currentIndex, isDeleting, isPaused]);

  return (
    <span className="text-white inline-block min-w-[200px]">
      {currentPhrase}
      <span className="animate-pulse text-white text-opacity-100 w-[2px] h-[1.2em] bg-white rounded-sm inline-block align-middle ml-[2px]"></span>
    </span>
  );
} 