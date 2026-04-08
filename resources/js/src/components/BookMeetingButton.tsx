import { useState } from 'react';
import BookMeetingModal from './BookMeetingModal';

const BookMeetingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed side button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-3 py-4 rounded-l-lg shadow-lg transition-all duration-300 hover:pr-5 group"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="tracking-wider text-sm">Book a Consultation</span>
      </button>

      <BookMeetingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default BookMeetingButton;
