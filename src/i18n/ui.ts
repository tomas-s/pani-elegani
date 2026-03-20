export type Locale = 'sk' | 'en';

export const defaultLocale: Locale = 'sk';

export const ui = {
  sk: {
    htmlLang: 'sk',
    metaTitle: 'PÁNI ELEGÁNI | Barber shop',
    metaDescription:
      'Barber shop PÁNI ELEGÁNI – strih, úprava brady a starostlivosť o vous. Rezervujte si termín online.',
    navAria: 'Hlavná navigácia',
    navHome: 'Domov',
    navAbout: 'O nás',
    navPricing: 'Cenník',
    navHistory: 'História',
    navReviews: 'Recenzie',
    booking: 'Rezervácia',
    sectionHero: 'hero',
    sectionAbout: 'o-nas',
    sectionPricing: 'cennik',
    sectionHistory: 'historia',
    sectionReviews: 'recenzie',
    heroTitle: 'Remeslo ',
    heroTitleItalic: 's citom',
    heroSubtitle:
      'Barber shop Páni Elegáni je vaše tiché útočisko. Oddýchnite si a odchádzajte s novým sebavedomím.',
    heroCta: 'Rezervovať termín',
    aboutSubtitleFallback: 'Dôraz na detail',
    aboutFallback:
      'Vitajte v PÁNOCH ELEGÁNOCH – barber shope, kde sa staráme o váš vzhľad s dôrazom na detail a pohodu. Konzultácia, strih, úprava brady – všetko s rešpektom k vašej osobnosti. Záleží nám na tom, aby ste sa u nás cítili ako doma a odchádzali oddýchnutí.',
    featurePricesTitle: 'Skvelé ceny',
    featurePricesDesc: 'Kvalitné služby za bezkonkurenčnú cenu.',
    featureServiceTitle: 'Rýchly servis',
    featureServiceDesc: 'Úžasná služba vybavená za pár minút.',
    brandShort: 'Páni Elegáni',
    historyQuoteBefore: 'Myslím si, že najdôležitejšia vec, ktorú muž môže mať –',
    historyQuoteAccent: 'okrem talentu, samozrejme',
    historyQuoteAfter: ' – je jeho holič.',
    historyFallbackSubtitle: 'Láska k remeslu',
    historyFallbackBody:
      'PÁNI ELEGÁNI vznikli z túžby po autentickej barber kultúre. Chceli sme vytvoriť miesto, kde muž príde, oddýchne si a odchádza s novým sebavedomím.',
    pricingEyebrow: 'Naša ponuka',
    pricingTitle: 'Cenník služieb',
    pricingTabsAria: 'Kategórie cenníka',
    pricingServicesFallback: 'Služby',
    reviewsEyebrow: 'Skúsenosti klientov',
    reviewsTitle: 'Recenzie',
    reviewsStarsAria: (n: number) => `${n} z 5 hviezd`,
    reviewsGoogleCta: 'Všetky recenzie na Google',
    footerTagline:
      'Tradičné holičstvo pre moderného muža. Miesto, kde sa remeslo stretáva s eleganciou a štýlom.',
    footerContact: 'Kontakt',
    footerHours: 'Otváracie hodiny',
    footerWeekdays: 'Pondelok - Piatok',
    footerWeekend: 'Sobota - Nedeľa',
    footerClosed: 'Zatvorené',
    footerLunchNote: '* obedná prestávka 12:00 - 13:00',
    footerCopyright: (year: number) => `© ${year} PÁNI ELEGÁNI. Všetky práva vyhradené.`,
    footerCookies: 'Táto stránka nepoužíva cookies.',
    switchToEn: 'Prepnúť na angličtinu',
    switchToSk: 'Prepnúť na slovenčinu',
    homePath: '/',
  },
  en: {
    htmlLang: 'en',
    metaTitle: 'PÁNI ELEGÁNI | Barber shop',
    metaDescription:
      'Barber shop PÁNI ELEGÁNI – haircuts, beard grooming and moustache care. Book your appointment online.',
    navAria: 'Main navigation',
    navHome: 'Home',
    navAbout: 'About',
    navPricing: 'Pricing',
    navHistory: 'History',
    navReviews: 'Reviews',
    booking: 'Book now',
    sectionHero: 'hero',
    sectionAbout: 'about',
    sectionPricing: 'pricing',
    sectionHistory: 'history',
    sectionReviews: 'reviews',
    heroTitle: 'Craft ',
    heroTitleItalic: 'with care',
    heroSubtitle:
      'Páni Elegáni is your quiet retreat. Unwind and leave with renewed confidence.',
    heroCta: 'Book an appointment',
    aboutSubtitleFallback: 'Attention to detail',
    aboutFallback:
      'Welcome to PÁNI ELEGÁNI – a barber shop where we care for your look with attention to detail and a relaxed vibe. Consultation, haircut, beard work – all with respect for who you are. We want you to feel at home and leave refreshed.',
    featurePricesTitle: 'Great value',
    featurePricesDesc: 'Quality services at an unbeatable price.',
    featureServiceTitle: 'Quick service',
    featureServiceDesc: 'Outstanding service in just a few minutes.',
    brandShort: 'Páni Elegáni',
    historyQuoteBefore: 'I think the most important thing a man can have –',
    historyQuoteAccent: 'besides talent, of course',
    historyQuoteAfter: ' – is his barber.',
    historyFallbackSubtitle: 'A love of the craft',
    historyFallbackBody:
      'PÁNI ELEGÁNI were born from a desire for authentic barber culture. We wanted a place where a man can arrive, relax, and leave with new confidence.',
    pricingEyebrow: 'What we offer',
    pricingTitle: 'Service pricing',
    pricingTabsAria: 'Pricing categories',
    pricingServicesFallback: 'Services',
    reviewsEyebrow: 'Client stories',
    reviewsTitle: 'Reviews',
    reviewsStarsAria: (n: number) => `${n} out of 5 stars`,
    reviewsGoogleCta: 'All reviews on Google',
    footerTagline:
      'Traditional barbering for the modern man. Where craft meets elegance and style.',
    footerContact: 'Contact',
    footerHours: 'Opening hours',
    footerWeekdays: 'Monday - Friday',
    footerWeekend: 'Saturday - Sunday',
    footerClosed: 'Closed',
    footerLunchNote: '* lunch break 12:00 - 13:00',
    footerCopyright: (year: number) => `© ${year} PÁNI ELEGÁNI. All rights reserved.`,
    footerCookies: 'This site does not use cookies.',
    switchToEn: 'Switch to English',
    switchToSk: 'Switch to Slovak',
    homePath: '/en/',
  },
} as const satisfies Record<
  Locale,
  {
    htmlLang: string;
    metaTitle: string;
    metaDescription: string;
    navAria: string;
    navHome: string;
    navAbout: string;
    navPricing: string;
    navHistory: string;
    navReviews: string;
    booking: string;
    sectionHero: string;
    sectionAbout: string;
    sectionPricing: string;
    sectionHistory: string;
    sectionReviews: string;
    heroTitle: string;
    heroTitleItalic: string;
    heroSubtitle: string;
    heroCta: string;
    aboutSubtitleFallback: string;
    aboutFallback: string;
    featurePricesTitle: string;
    featurePricesDesc: string;
    featureServiceTitle: string;
    featureServiceDesc: string;
    brandShort: string;
    historyQuoteBefore: string;
    historyQuoteAccent: string;
    historyQuoteAfter: string;
    historyFallbackSubtitle: string;
    historyFallbackBody: string;
    pricingEyebrow: string;
    pricingTitle: string;
    pricingTabsAria: string;
    pricingServicesFallback: string;
    reviewsEyebrow: string;
    reviewsTitle: string;
    reviewsStarsAria: (n: number) => string;
    reviewsGoogleCta: string;
    footerTagline: string;
    footerContact: string;
    footerHours: string;
    footerWeekdays: string;
    footerWeekend: string;
    footerClosed: string;
    footerLunchNote: string;
    footerCopyright: (year: number) => string;
    footerCookies: string;
    switchToEn: string;
    switchToSk: string;
    homePath: string;
  }
>;

export type UiStrings = (typeof ui)[Locale];

export function getStrings(locale: Locale): UiStrings {
  return ui[locale];
}

export const pricingFallbackItems: Record<
  Locale,
  readonly { name: string; price: string }[]
> = {
  sk: [
    { name: 'Pánsky strih', price: '20' },
    { name: 'Detský strih', price: '16' },
    { name: 'Úprava brady', price: '14' },
    { name: 'Holenie Hot Towel', price: '15' },
    { name: 'Balíček Elegánov', price: '48' },
  ],
  en: [
    { name: "Men's haircut", price: '20' },
    { name: "Kids' haircut", price: '16' },
    { name: 'Beard trim', price: '14' },
    { name: 'Hot towel shave', price: '15' },
    { name: "Gentlemen's package", price: '48' },
  ],
};
