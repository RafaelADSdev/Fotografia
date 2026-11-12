import { whatsappLink } from '../lib/site';

export function setBookingCategory(category: string) {
  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-booking], [data-offer-link]')) {
    link.href = whatsappLink(category, link.hasAttribute('data-offer-link'));
  }
}
