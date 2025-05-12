// useTypewriter.ts
import { useEffect, useState } from 'react';


export const useTypewriter = (
  messages,
  { speed = 100, pause = 1500, loop = true }
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    let timeout;

    if (!isDeleting && charIndex <= currentMessage.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } else {
        setIsDeleting(false);
        setCharIndex(0);
        setMessageIndex((prev) =>
          prev + 1 < messages.length ? prev + 1 : loop ? 0 : prev
        );
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex, messages, speed, pause, loop]);

  return displayedText;
};
