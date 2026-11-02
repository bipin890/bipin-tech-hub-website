import { FAQItem, HowItWorksStep, NavLink, WhyChooseUsItem } from "@/types";

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: {
      en: "Home",
      ne: "गृहपृष्ठ",
    },
  },
  {
    href: "/services",
    label: {
      en: "Our Services",
      ne: "हाम्रा सेवाहरू",
    },
  },
  {
    href: "/how-it-works",
    label: {
      en: "How It Works",
      ne: "कसरी काम गर्छ?",
    },
  },
  {
    href: "/about",
    label: {
      en: "About Us",
      ne: "हाम्रो बारेमा",
    },
  },
  {
    href: "/blog",
    label: {
      en: "Blog",
      ne: "ब्लग",
    },
  },
  {
    href: "/contact",
    label: {
      en: "Contact",
      ne: "सम्पर्क",
    },
  },
];

export const homeContent = {
  hero: {
    badge: {
      en: "Official Digital Support in Nepal",
      ne: "नेपालको भरपर्दो डिजिटल सेवा",
    },
    headline: {
      en: "Your Trusted Digital Service Partner",
      ne: "तपाईंको भरपर्दो डिजिटल सेवा साथी",
    },
    subtitle: {
      en: "Online Forms, Documentation, Career Support & Website Development — All in One Place.",
      ne: "अनलाइन फारम, कागजात प्रमाणीकरण, करियर सहयोग र वेबसाइट विकास — सबै एकै ठाउँमा।",
    },
    exploreBtn: {
      en: "Explore Services",
      ne: "सेवाहरू हेर्नुहोस्",
    },
    whatsappBtn: {
      en: "Contact on WhatsApp",
      ne: "WhatsApp मा कुरा गर्नुहोस्",
    },
    trustPoints: [
      {
        en: "100% Online Assistance",
        ne: "१००% अनलाइन सेवा",
      },
      {
        en: "Direct WhatsApp Communication",
        ne: "प्रत्यक्ष ह्वाट्सएप संवाद",
      },
      {
        en: "Transparent & Verified Steps",
        ne: "पारदर्शी र भरपर्दो प्रक्रिया",
      },
      {
        en: "Serving All 77 Districts & Abroad",
        ne: "७७ वटै जिल्ला र विदेशबाट उपलब्ध",
      },
    ],
  },

  servicesOverview: {
    tag: {
      en: "What We Offer",
      ne: "हाम्रा मुख्य सेवाहरू",
    },
    title: {
      en: "Approved Digital Services",
      ne: "विश्वसनीय डिजिटल सेवाहरू",
    },
    subtitle: {
      en: "Professional, prompt, and accurate assistance for your essential documentation, applications, and web presence.",
      ne: "तपाईंका महत्त्वपूर्ण कागजात, अनलाइन आवेदन र व्यक्तिगत वेबसाइटका लागि छिटो, छरितो र त्रुटिरहित सेवा।",
    },
    viewAllBtn: {
      en: "View All 7 Services",
      ne: "सबै ७ वटा सेवाहरू हेर्नुहोस्",
    },
  },

  customInquiry: {
    tag: {
      en: "Custom Inquiries",
      ne: "विशेष सोधपुछ",
    },
    title: {
      en: "Looking for Something Else?",
      ne: "अन्य कुनै सेवा आवश्यक छ?",
    },
    description: {
      en: "Have a different digital service requirement? Tell us what you need.",
      ne: "के तपाईंलाई अन्य कुनै डिजिटल सेवा वा फारम भर्ने सहयोग आवश्यक छ? हामीलाई आफ्नो आवश्यकता बताउनुहोस्।",
    },
    btnText: {
      en: "Request a Custom Service",
      ne: "नयाँ सेवाको लागि सोधपुछ गर्नुहोस्",
    },
    note: {
      en: "Note: Custom inquiries are handled directly on WhatsApp. We will evaluate your request and let you know if we can assist.",
      ne: "जानकारी: अन्य सेवाहरूको अनुरोध सोझै ह्वाट्सएप मार्फत गरिन्छ। हामी तपाईंको आवश्यकता बुझेर सहयोग गर्न सकिने/नसकिने जानकारी दिन्छौँ।",
    },
  },

  howItWorks: {
    tag: {
      en: "Simple 4-Step Process",
      ne: "सहज ४-चरण प्रक्रिया",
    },
    title: {
      en: "How It Works",
      ne: "हामीसँग काम गर्ने तरिका",
    },
    subtitle: {
      en: "No complicated signups or apps required. Everything is managed conveniently through direct WhatsApp conversation.",
      ne: "कुनै झन्झटिलो खाता खोल्न वा एप डाउनलोड गर्नुपर्दैन। सम्पूर्ण काम प्रत्यक्ष ह्वाट्सएप कुराकानी मार्फत नै सम्पन्न हुन्छ।",
    },
  },

  whyChooseUs: {
    tag: {
      en: "Our Core Commitments",
      ne: "हाम्रो प्रतिबद्धता",
    },
    title: {
      en: "Why Choose BIPIN TECH HUB",
      ne: "विपिन टेक हब नै किन रोज्ने?",
    },
    subtitle: {
      en: "We believe in authentic assistance, genuine client respect, and reliable technical guidance without exaggerated claims.",
      ne: "हामी बनावटी दाबी नगरी इमान्दार, सहज र पारदर्शी डिजिटल सेवामा विश्वास गर्दछौँ।",
    },
  },

  aboutSummary: {
    tag: {
      en: "About the Platform",
      ne: "हाम्रो परिचय",
    },
    title: {
      en: "Empowering Nepal Through Accessible Digital Support",
      ne: "नेपाली नागरिकका लागि सहज र भरपर्दो डिजिटल सेवा",
    },
    description1: {
      en: "BIPIN TECH HUB is a dedicated digital service platform in Nepal providing online assistance, career document support, and modern website development.",
      ne: "विपिन टेक हब (BIPIN TECH HUB) नेपालमा अनलाइन फारम, करियर कागजात निर्माण तथा आधुनिक वेबसाइट विकास सेवा प्रदान गर्ने एक भरपर्दो डिजिटल प्लेटफर्म हो।",
    },
    description2: {
      en: "We bridge the technical gap for students, job applicants, and professionals navigating complex government portals, formatting standards, and digital requirements. Our goal is simple: deliver attentive, personalized assistance right through WhatsApp.",
      ne: "हामी विद्यार्थी, रोजगारीका आकांक्षी तथा पेशाकर्मीहरूलाई अनलाइन पोर्टलका झन्झट, फोटो डकुमेन्ट साइजका समस्या तथा अन्तर्राष्ट्रिय ढाँचाका कागजात तयार गर्न प्रत्यक्ष सहयोग गर्दछौँ।",
    },
    readMoreBtn: {
      en: "Learn More About Us",
      ne: "हाम्रो बारेमा थप पढ्नुहोस्",
    },
  },

  orderStatus: {
    tag: {
      en: "Order Updates",
      ne: "कामको ताजा अवस्था",
    },
    title: {
      en: "Need an Update on Your Order?",
      ne: "तपाईंको कामको अवस्था बुझ्न चाहनुहुन्छ?",
    },
    description: {
      en: "Track the ongoing progress of your application or document directly by sending us a quick message on WhatsApp.",
      ne: "तपाईंले दिनुभएको फारम वा डकुमेन्टको काम कहाँ पुग्यो भन्ने ताजा जानकारी ह्वाट्सएपमा तुरुन्त पाउनुहोस्।",
    },
    btnText: {
      en: "Check Status on WhatsApp",
      ne: "WhatsApp मा अवस्था बुझ्नुहोस्",
    },
  },

  youtubeSection: {
    tag: {
      en: "Learn & Grow",
      ne: "सिकौँ र अघि बढौँ",
    },
    title: {
      en: "Educational Tutorials on YouTube",
      ne: "हाम्रो युट्युब च्यानलमा प्राविधिक भिडियोहरू",
    },
    description: {
      en: "We regularly produce helpful tech walkthroughs, online form-filling tips, C programming lessons, and digital tools tutorials for students and professionals across Nepal.",
      ne: "हामी नेपाली विद्यार्थी तथा सेवाग्राहीहरूका लागि अनलाइन फारम भर्ने तरिका, सी प्रोग्रामिङ पाठहरू, र उपयोगी डिजिटल प्रविधि सम्बन्धी भिडियोहरू युट्युबमा निरन्तर प्रस्तुत गर्दछौँ।",
    },
    watchBtn: {
      en: "Watch Tutorials",
      ne: "भिडियोहरू हेर्नुहोस्",
    },
    subscribeBtn: {
      en: "Subscribe to Channel",
      ne: "च्यानल सब्स्क्राइब गर्नुहोस्",
    },
  },

  paymentSection: {
    tag: {
      en: "Payment & Verification",
      ne: "भुक्तानी र प्रमाणीकरण विधि",
    },
    title: {
      en: "Transparent Manual Payment",
      ne: "पारदर्शी म्यानुअल भुक्तानी प्रणाली",
    },
    subtitle: {
      en: "All service pricing and payments are confirmed directly with our team on WhatsApp before you transfer any money.",
      ne: "कुनै पनि रकम भुक्तानी गर्नु अगाडि तपाईंले ह्वाट्सएपमा सेवाको मूल्य र प्रक्रिया प्रष्ट बुझ्न सक्नुहुन्छ।",
    },
  },

  faqSection: {
    tag: {
      en: "Frequently Asked Questions",
      ne: "प्रायः सोधिने प्रश्नहरू",
    },
    title: {
      en: "Clear Answers to Common Questions",
      ne: "सेवाग्राहीका मनमा लाग्ने प्रश्न र उत्तर",
    },
    subtitle: {
      en: "Everything you need to know about placing orders, making payments, and receiving your digital services.",
      ne: "सेवा अर्डर गर्ने, भुक्तानी गर्ने तथा कागजात प्राप्त गर्ने सम्बन्धी सम्पूर्ण स्पष्ट जानकारी।",
    },
  },

  contactSection: {
    tag: {
      en: "Get in Touch",
      ne: "सम्पर्कमा रहनुहोस्",
    },
    title: {
      en: "Ready to Get Started?",
      ne: "आफ्नो डिजिटल काम सुरु गर्न तयार हुनुहुन्छ?",
    },
    subtitle: {
      en: "Message us directly on WhatsApp. We respond promptly during working hours to assist you.",
      ne: "हामीलाई सिधै ह्वाट्सएपमा सन्देश पठाउनुहोस्। हामी कार्यसमय भित्र तुरुन्त जवाफ दिनेछौँ।",
    },
  },
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: {
      en: "Choose Your Service",
      ne: "आफूलाई चाहिएको सेवा रोज्नुहोस्",
    },
    description: {
      en: "Select from our 7 approved services or inquire about a custom digital service that fits your requirement.",
      ne: "हाम्रा ७ अनुमोदित सेवाहरू मध्येबाट छनोट गर्नुहोस् वा आफ्नो आवश्यकता अनुसारको सेवा रोज्नुहोस्।",
    },
    iconName: "Search",
  },
  {
    step: 2,
    title: {
      en: "Contact Us on WhatsApp",
      ne: "WhatsApp मा सम्पर्क गर्नुहोस्",
    },
    description: {
      en: "Click the WhatsApp button to discuss your service, share necessary document details, and confirm pricing.",
      ne: "ह्वाट्सएप बटनमा क्लिक गरी आवश्यक कागजात पठाउनुहोस् र मूल्य तथा प्रक्रियाबारे छलफल गर्नुहोस्।",
    },
    iconName: "MessageCircle",
  },
  {
    step: 3,
    title: {
      en: "Confirm Details & Payment",
      ne: "विवरण रुजु र भुक्तानी",
    },
    description: {
      en: "Verify the draft application or requirements. Complete payment conveniently via eSewa or ConnectIPS QR and share transaction reference.",
      ne: "विवरण सही भएको यकिन गरी इसेवा (eSewa) वा कनेक्टआईपिएस (ConnectIPS) QR मार्फत सुरक्षित भुक्तानी गर्नुहोस् र स्क्रिनसट पठाउनुहोस्।",
    },
    iconName: "CreditCard",
  },
  {
    step: 4,
    title: {
      en: "Receive Your Service",
      ne: "आफ्नो सेवा प्राप्त गर्नुहोस्",
    },
    description: {
      en: "Receive your completed official slip, finalized document, or website link promptly with follow-up support.",
      ne: "फारमको आधिकारिक स्लिप, तयार भएको डकुमेन्ट वा वेबसाइट लिङ्क समयमै ह्वाट्सएपमा प्राप्त गर्नुहोस्।",
    },
    iconName: "CheckCircle",
  },
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    title: {
      en: "Simple Communication",
      ne: "सहज र सिधा कुराकानी",
    },
    description: {
      en: "No robotic bots or complicated customer portals. You converse directly with a real human via WhatsApp.",
      ne: "कुनै झन्झटिलो रोबोट प्रणाली होइन, सिधै ह्वाट्सएपमा वास्तविक व्यक्तिसँग आफ्नै भाषामा कुराकानी गर्नुहोस्।",
    },
    iconName: "MessageSquare",
  },
  {
    title: {
      en: "Personal Support",
      ne: "व्यक्तिगत सहयोग",
    },
    description: {
      en: "Every document, resume, and application is given individual attention to ensure requirements and formatting standards are fulfilled.",
      ne: "हरेक फारम र कागजातलाई विशेष ध्यान दिएर सरकारी तथा अन्तर्राष्ट्रिय मापदण्ड अनुसार तयार गरिन्छ।",
    },
    iconName: "UserCheck",
  },
  {
    title: {
      en: "Transparent Pricing",
      ne: "पारदर्शी मूल्य",
    },
    description: {
      en: "Pricing is confirmed clearly before beginning your work. No hidden surprise fees or unexpected charges.",
      ne: "काम सुरु गर्नु अघि नै सेवा शुल्क स्पष्ट रूपमा खुलाइन्छ। कुनै लुकेको वा अतिरिक्त शुल्क लाग्दैन।",
    },
    iconName: "ShieldAlert",
  },
  {
    title: {
      en: "Convenient Online Assistance",
      ne: "घरमै बसी अनलाइन सेवा",
    },
    description: {
      en: "Save travel hours and cyber cafe queues. Send your document photos from home and receive your files digitally.",
      ne: "साइबर क्याफे धाउने र लाइन बस्ने झन्झटबाट मुक्ति। घरमै बसी मोबाइलबाट कागजात पठाएर सेवा लिनुहोस्।",
    },
    iconName: "Smartphone",
  },
  {
    title: {
      en: "Customer-Focused Service",
      ne: "सेवाग्राही केन्द्रित व्यवहार",
    },
    description: {
      en: "Your satisfaction, privacy, and feedback matter. We assist you patiently through every step until completion.",
      ne: "तपाईंको सन्तुष्टि र कागजातको गोपनीयता हाम्रो पहिलो प्राथमिकता हो। काम नसकिँदासम्म हामी तपाईंलाई सहयोग गर्छौँ।",
    },
    iconName: "HeartHandshake",
  },
];

export const generalFaqs: FAQItem[] = [
  {
    category: "Ordering",
    question: {
      en: "How do I order a service from BIPIN TECH HUB?",
      ne: "विपिन टेक हबबाट कुनै सेवा कसरी अर्डर गर्ने?",
    },
    answer: {
      en: "Simply click the 'Order Now' or 'Contact on WhatsApp' button on any service card. This opens a pre-filled WhatsApp message. You can specify your requirements, attach any needed document photos, and we will guide you through the next steps.",
      ne: "कुनै पनि सेवा कार्डमा रहेको 'Order Now' वा 'WhatsApp मा सम्पर्क' बटन थिच्नुहोस्। यसले ह्वाट्सएपमा स्वचालित सन्देश तयार गर्दछ। त्यहाँ तपाईंले आफ्ना विवरण र कागजात पठाउन सक्नुहुन्छ।",
    },
  },
  {
    category: "Payment",
    question: {
      en: "How do I make a payment?",
      ne: "मैले भुक्तानी कसरी गर्ने?",
    },
    answer: {
      en: "Payments are processed manually via eSewa QR or ConnectIPS QR. Once we discuss your service and confirm the price on WhatsApp, you scan the QR code to transfer the amount, and send us the transaction screenshot or reference number.",
      ne: "हामी म्यानुअल भुक्तानी विधि प्रयोग गर्दछौँ। ह्वाट्सएपमा सेवाको मूल्य तय भएपछि तपाईंले इसेवा (eSewa) वा कनेक्टआईपिएस (ConnectIPS) QR स्क्यान गरी भुक्तानी गर्न सक्नुहुन्छ र भौचर/स्क्रिनसट पठाउन सक्नुहुन्छ।",
    },
  },
  {
    category: "Verification",
    question: {
      en: "How does payment verification work?",
      ne: "भुक्तानी प्रमाणीकरण कसरी हुन्छ?",
    },
    answer: {
      en: "After you send the payment screenshot or reference number on WhatsApp, our team manually verifies the transaction in our merchant record and immediately confirms your service request.",
      ne: "तपाईंले भुक्तानीको स्क्रिनसट वा कारोबार नम्बर ह्वाट्सएपमा पठाएपछि, हाम्रो टोलीले रकम प्राप्त भएको रुजु गरी तुरुन्तै तपाईंको काम सुरु गर्दछ।",
    },
  },
  {
    category: "Order Status",
    question: {
      en: "How do I check my order status?",
      ne: "मेरो कामको अवस्था (Status) कसरी बुझ्ने?",
    },
    answer: {
      en: "We do not use a separate login or dashboard. To check the status of your service request, simply click the 'Check Status on WhatsApp' button or text us directly on WhatsApp with your name and service title.",
      ne: "यसका लागि कुनै अलग्गै ड्यासबोर्ड आवश्यक छैन। वेबसाइटको 'Check Status on WhatsApp' बटन थिचेर वा सिधै ह्वाट्सएपमा सन्देश पठाएर आफ्नो कामको प्रगति तुरुन्त थाहा पाउन सक्नुहुन्छ।",
    },
  },
  {
    category: "Support",
    question: {
      en: "What are your customer support hours?",
      ne: "सम्पर्क र सहयोगको समय कहिले हो?",
    },
    answer: {
      en: "We are available Sunday through Saturday from 7:00 AM to 9:00 PM (Nepal Time). You can leave a WhatsApp message anytime, and we will respond as soon as we are online.",
      ne: "हामी हप्ताको सातै दिन बिहान ७:०० बजेदेखि राति ९:०० बजेसम्म ह्वाट्सएपमा सक्रिय रहन्छौँ। अन्य समयमा पठाइएका सन्देशको पनि सक्रिय हुनासाथ जवाफ दिइनेछ।",
    },
  },
  {
    category: "Government Disclaimer",
    question: {
      en: "Do you guarantee government approval for driving license or police reports?",
      ne: "के तपाईंहरूले लाइसेन्स वा प्रहरी रिपोर्टको सरकारी स्वीकृति ग्यारेन्टी गर्नुहुन्छ?",
    },
    answer: {
      en: "No. BIPIN TECH HUB provides independent technical form-filling and documentation assistance. Final approval, background clearance, exam pass, and document issuance are determined strictly by the authorized Nepal government departments.",
      ne: "गर्दैनौँ। हामी केवल अनलाइन फारम भर्ने र कागजात मिलाउने प्राविधिक सहायता गर्दछौँ। अन्तिम स्वीकृति, परीक्षा उत्तीर्ण वा कागजात जारी गर्ने सम्पूर्ण अधिकार सम्बन्धित सरकारी निकायमा निहित हुन्छ।",
    },
  },
];
