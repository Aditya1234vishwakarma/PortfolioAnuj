import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [forwardTyping, setForwardTyping] = useState(true);
  const typingSpeed = 150;

  useEffect(() => {
    let interval;
    if (forwardTyping) {
      // Forward typing animation
      interval = setInterval(() => {
        if (displayText.length < text.length) {
          setDisplayText(prevText => prevText + text[displayText.length]);
        } else {
          setForwardTyping(false);
        }
      }, typingSpeed);
    } else {
      interval = setInterval(() => {
        if (displayText.length > 0) {
          setDisplayText(prevText => prevText.slice(0, -1));
        } else {
          setForwardTyping(true);
        }
      }, typingSpeed);
    }

    return () => clearInterval(interval);
  }, [displayText, forwardTyping, text]);

  return (
    <div>
      <span>{displayText}</span>
    </div>
  );
};

export default TypingAnimation;