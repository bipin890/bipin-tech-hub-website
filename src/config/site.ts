/**
 * BIPIN TECH HUB - Central Site Configuration
 * All business details, contact information, and URLs are managed here.
 */

export const siteConfig = {
  name: "BIPIN TECH HUB",
  shortName: "BTH",
  tagline: "Your Trusted Digital Service Partner",
  taglineNepali: "तपाईंको भरपर्दो डिजिटल सेवा साथी",
  description:
    "Professional online form assistance, documentation, career documents, Europass CV, PCC consular stamp, and website development services in Nepal.",
  descriptionNepali:
    "नेपालभर अनलाइन फारम, कागजात प्रमाणीकरण, युरोपास सिभि, प्रहरी रिपोर्ट कन्सुलर प्रमाणीकरण, लोकसेवा फारम र व्यक्तिगत वेबसाइट विकासको भरपर्दो माध्यम।",

  // Canonical production domain
  url: "https://bipinthapa.info.np",

  // WhatsApp Configuration (Primary Channel)
  // PLACEHOLDER: Replace with actual business WhatsApp number (Country code 977 for Nepal)
  whatsappNumber: "9779763647950",

  // YouTube Configuration
  // PLACEHOLDER: Replace with actual YouTube channel URL
  youtubeChannelUrl: "https://youtube.com/@bipintechhub",

  // Email & Contact Details
  // PLACEHOLDER: Replace with actual contact email
  email: "bipintech@icloud.com",
  location: "Lumbini Province-Dang, Nepal ",
  workingHours: "Sunday – Saturday: 7:00 AM – 9:00 PM (NPT)",

  // Payment Details (Manual Verification)
  payment: {
    esewaQrPath: "/images/esewa-qr.png",
    connectipsQrPath: "/images/connectips-qr.png",
    merchantName: "BIPIN TECH HUB",
    supportedMethods: ["eSewa QR", "ConnectIPS QR"],
  },

  // Social Links
  links: {
    whatsapp: "https://wa.me/9779763647950",
    youtube: "https://youtube.com/@bipintechhub",
    github: "https://github.com",
  },
};

export function getWhatsAppUrl(message?: string): string {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultMessage = "Hello BIPIN TECH HUB, I would like to inquire about your digital services.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}

export function getServiceOrderWhatsAppUrl(serviceTitle: string, customerName?: string, customNote?: string): string {
  const nameLine = customerName && customerName.trim() ? `Customer Name: ${customerName.trim()}\n` : "";
  const noteLine = customNote && customNote.trim() ? `Inquiry / Requirement: ${customNote.trim()}\n` : "";

  const text = `Hello BIPIN TECH HUB,

I want to order the following service:

Service: ${serviceTitle}
${nameLine}${noteLine}Please provide the details and pricing.

Thank you.`;

  return getWhatsAppUrl(text);
}

export function getOrderStatusWhatsAppUrl(): string {
  const text = `Hello BIPIN TECH HUB,
I would like to check the status of my service request.`;
  return getWhatsAppUrl(text);
}

export function getCustomServiceWhatsAppUrl(details?: string): string {
  const detailText = details && details.trim() ? `\nMy Requirement: ${details.trim()}\n` : "";
  const text = `Hello BIPIN TECH HUB,
I am looking for a custom digital service.${detailText}
Please let me know if you can assist me.`;
  return getWhatsAppUrl(text);
}
