export interface Testimonial {
  quote: string;
  name: string;
  role: string; // e.g. "Founder, Talee"
}

// Add real client quotes here. The Testimonials section stays hidden while
// this list is empty.
export const TESTIMONIALS: Testimonial[] = [];
