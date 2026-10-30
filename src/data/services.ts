import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "police-clearance-report",
    slug: "police-clearance-report",
    iconName: "ShieldCheck",
    title: {
      en: "Police Clearance Report (PCC) with Consular Stamp",
      ne: "प्रहरी चारित्रिक प्रमाणपत्र (PCC) कन्सुलर प्रमाणीकरण सहित",
    },
    shortDescription: {
      en: "Assistance with online Nepal Police Clearance Report application and official Consular Department attestation guidance.",
      ne: "नेपाल प्रहरीको चारित्रिक प्रमाणपत्र (PCC) अनलाइन फारम भर्ने र कन्सुलर सेवा विभागबाट प्रमाणीकरण गराउने प्रक्रियागत सहयोग।",
    },
    fullDescription: {
      en: "We assist individuals in applying for the Nepal Police Clearance Certificate (PCC) through the official online portal, preparing required documentation, and guiding them through the Department of Consular Services verification process for foreign employment, study, or travel.",
      ne: "वैदेशिक रोजगारी, अध्ययन वा भ्रमणको लागि आवश्यक पर्ने नेपाल प्रहरीको चारित्रिक प्रमाणपत्र (PCC) अनलाइन फारम भर्ने, आवश्यक कागजात मिलाउने तथा कन्सुलर सेवा विभागबाट प्रमाणीकरण गराउने कार्यमा हामी पूर्ण सहयोग प्रदान गर्दछौँ।",
    },
    priceNote: {
      en: "Contact for Price",
      ne: "मूल्यको लागि सम्पर्क गर्नुहोस्",
    },
    targetAudience: {
      en: "Nepalis applying for abroad study, employment, PR visas, or family migration requiring official police background verification.",
      ne: "वैदेशिक अध्ययन, रोजगारी, पीआर भिसा वा पारिवारिक भ्रमणको लागि आधिकारिक प्रहरी चारित्रिक प्रमाणपत्र आवश्यक पर्ने नेपाली नागरिकहरू।",
    },
    requiredDocuments: {
      en: [
        "Clear scan/photo of original Nepali Passport (valid validity)",
        "Clear scan/photo of Nepali Citizenship Certificate (Both sides)",
        "Marriage Certificate (if applicable for married applicants)",
        "Recent passport-sized digital photograph with plain background",
        "Valid contact number and current address details",
      ],
      ne: [
        "सक्कल नेपाली राहदानी (पासपोर्ट) को स्पष्ट स्क्यान वा फोटो",
        "नेपाली नागरिकताको प्रमाणपत्रको दुवैतर्फको स्पष्ट स्क्यान वा फोटो",
        "विवाह भएको अवस्थामा विवाह दर्ताको प्रमाणपत्र (यदि लागू भएमा)",
        "हल्का/सादा पृष्ठभूमियुक्त हालसालै खिचिएको पासपोर्ट साइजको डिजिटल फोटो",
        "सम्पर्क नम्बर र हालको ठेगानाको विवरण",
      ],
    },
    processSteps: {
      en: [
        "Step 1: Contact us on WhatsApp with your document copies.",
        "Step 2: We verify document clarity and discuss service requirements.",
        "Step 3: Online application submission on the official Nepal Police portal.",
        "Step 4: Generation and verification of the official digital PCC document.",
        "Step 5: Step-by-step guidance for Department of Consular Services (DoCS) online attestation token and verification.",
      ],
      ne: [
        "चरण १: आवश्यक कागजातहरू सहित हामीलाई ह्वाट्सएप (WhatsApp) मा सम्पर्क गर्नुहोस्।",
        "चरण २: हामी कागजातको गुणस्तर जाँच गरी सेवा सम्बन्धी जानकारी दिन्छौँ।",
        "चरण ३: नेपाल प्रहरीको आधिकारिक पोर्टलमा अनलाइन फारम दर्ता गरिन्छ।",
        "चरण ४: आधिकारिक डिजिटल प्रहरी चारित्रिक रिपोर्ट तयार गरिन्छ।",
        "चरण ५: कन्सुलर सेवा विभाग (DoCS) मा प्रमाणीकरणका लागि अनलाइन टोकन र प्रक्रियागत मार्गदर्शन उपलब्ध गराइन्छ।",
      ],
    },
    estimatedTime: {
      en: "Subject to official Nepal Police verification schedule (typically 3-7 working days following standard government processing).",
      ne: "नेपाल प्रहरीको आधिकारिक प्रमाणीकरण तालिका अनुसार (सामान्यतया सरकारी कार्यतालिका अनुसार ३ देखि ७ कार्यदिन)।",
    },
    disclaimer: {
      en: "Important Notice: BIPIN TECH HUB provides application assistance and document preparation support. We follow official government procedures. Final approval, background clearance, and issuance timeline are strictly determined by Nepal Police and the Department of Consular Services.",
      ne: "महत्वपूर्ण जानकारी: विपिन टेक हबले फारम भर्ने र कागजात मिलाउने प्राविधिक सहायता मात्र प्रदान गर्दछ। अन्तिम स्वीकृति, चारित्रिक प्रमाणीकरण तथा प्रमाणपत्र जारी गर्ने सम्पूर्ण अधिकार नेपाल प्रहरी र कन्सुलर सेवा विभागमा निहित रहन्छ।",
    },
    faqs: [
      {
        question: {
          en: "Can I apply for PCC while living abroad?",
          ne: "के म विदेशमा हुँदा पनि प्रहरी रिपोर्ट (PCC) को लागि आवेदन दिन सक्छु?",
        },
        answer: {
          en: "Yes, applicants residing abroad can also apply online. You will need your passport, Nepali citizenship, visa/entry stamp details, and passport photo.",
          ne: "हो, विदेशमा बसोबास गरिरहनुभएका नागरिकहरूले पनि अनलाइन आवेदन दिन सक्नुहुन्छ। यसका लागि राहदानी, नागरिकता र भिसा विवरण आवश्यक पर्दछ।",
        },
      },
      {
        question: {
          en: "How do I get the Consular Department stamp?",
          ne: "कन्सुलर सेवा विभागबाट प्रमाणीकरण कसरी गराइन्छ?",
        },
        answer: {
          en: "Once the digital Police Clearance Report is issued, we assist you in registering the verification request on the Department of Consular Services (DoCS) portal to obtain an official verification token.",
          ne: "डिजिटल प्रहरी रिपोर्ट जारी भइसकेपछि, कन्सुलर सेवा विभागको अनलाइन प्रणालीमा प्रमाणीकरणको टोकन दर्ता गर्न हामी प्राविधिक सहयोग गर्दछौँ।",
        },
      },
    ],
  },
  {
    id: "europass-cv-cover-letter",
    slug: "europass-cv-cover-letter",
    iconName: "FileText",
    title: {
      en: "Europass CV and Cover Letter",
      ne: "युरोपास सिभि (CV) र कभर लेटर निर्माण",
    },
    shortDescription: {
      en: "Standard European Union format CV and customized job-specific cover letter tailored for international job opportunities.",
      ne: "युरोपेली युनियन (EU) को आधिकारिक ढाँचामा अन्तर्राष्ट्रिय रोजगारी र अध्ययनका लागि आधुनिक युरोपास सिभि र कभर लेटर।",
    },
    fullDescription: {
      en: "Professional creation of standard European Union (Europass) format Curriculum Vitae and customized cover letters. Ideal for individuals applying for jobs, internships, or educational opportunities across European countries such as Croatia, Poland, Malta, Romania, Cyprus, Germany, and others.",
      ne: "युरोपेली मापदण्ड अनुसारको आधिकारिक युरोपास ढाँचामा आकर्षक बायोडाटा (CV) र जागिर अनुसारको कभर लेटर तयार गरिन्छ। युरोप (जस्तै क्रोएसिया, पोल्याण्ड, माल्टा, रोमानिया, जर्मनी आदि) मा रोजगारी वा अध्ययनका लागि यो अत्यन्त प्रभावकारी हुन्छ।",
    },
    priceNote: {
      en: "Contact for Price",
      ne: "मूल्यको लागि सम्पर्क गर्नुहोस्",
    },
    targetAudience: {
      en: "Job seekers and students applying for European visas, seasonal work, hospitality, manufacturing, caregiving, IT, or university admissions.",
      ne: "युरोपेली मुलुकहरूमा रोजगारी, सिजनल काम वा उच्च शिक्षा अध्ययनका लागि आवेदन दिने व्यक्तिहरू।",
    },
    requiredDocuments: {
      en: [
        "Your current resume/biodata or list of work experiences",
        "Educational qualifications and year of completion",
        "Target job title, industry, or specific vacancy notice",
        "Professional digital passport-style photo (optional for Europass)",
        "Language proficiency and technical skills list",
      ],
      ne: [
        "तपाईंको हालको बायोडाटा वा विगतका काम तथा अनुभवको विवरण",
        "शैक्षिक योग्यता र उत्तीर्ण गरेको वर्ष",
        "तपाईंले आवेदन दिन चाहेको काम/पदको नाम",
        "पासपोर्ट साइजको सफा डिजिटल फोटो",
        "भाषा दक्षता र प्राविधिक वा व्यावहारिक सीपहरूको सूची",
      ],
    },
    processSteps: {
      en: [
        "Step 1: Contact us on WhatsApp and provide your experience and job target details.",
        "Step 2: We organize your details into the official European Union standard structure.",
        "Step 3: Draft preparation highlighting relevant skills and professional achievements.",
        "Step 4: Review and revisions based on your feedback.",
        "Step 5: Delivery of print-ready high-resolution PDF and editable Europass files.",
      ],
      ne: [
        "चरण १: ह्वाट्सएपमा आफ्नो अनुभव, सीप र आवेदन दिन चाहेको पदको विवरण पठाउनुहोस्।",
        "चरण २: हामी तपाईंको विवरणलाई युरोपेली आधिकारिक ढाँचामा मिलाउँछौँ।",
        "चरण ३: तपाईंको सीप र अनुभवलाई प्रष्ट झल्किने गरी मस्यौदा तयार गरिन्छ।",
        "चरण ४: तपाईंले हेरेर आवश्यक परिमार्जन वा सच्याउन चाहेका विषय मिलाइन्छ।",
        "चरण ५: उच्च गुणस्तरको प्रिन्ट गर्न मिल्ने PDF फाइल र इडिटेबल फाइल उपलब्ध गराइन्छ।",
      ],
    },
    estimatedTime: {
      en: "Typically 24 to 48 hours depending on customization requirements.",
      ne: "तपाईंको आवश्यकता र विवरण अनुसार सामान्यतया २४ देखि ४८ घण्टा भित्र।",
    },
    faqs: [
      {
        question: {
          en: "Can I request changes if I need modifications?",
          ne: "के मलाई केही विवरण सच्याउन परेमा संशोधन गर्न मिल्छ?",
        },
        answer: {
          en: "Yes, we provide revisions to ensure your details, dates, and experience accurately represent your profile.",
          ne: "हो, तपाईंको विवरण, मिति तथा अनुभव पूर्ण रूपमा सही नभएसम्म आवश्यक संशोधन गरिन्छ।",
        },
      },
      {
        question: {
          en: "In what format will I receive my CV?",
          ne: "मैले सिभि कुन ढाँचामा पाउनेछु?",
        },
        answer: {
          en: "You will receive both a clean, professional PDF file ready for submission and standard digital formatting.",
          ne: "तपाईंले सिधै कम्पनीमा पठाउन मिल्ने उच्च गुणस्तरको PDF फाइल प्राप्त गर्नुहुनेछ।",
        },
      },
    ],
  },
  {
    id: "all-online-forms",
    slug: "all-online-forms",
    iconName: "ClipboardEdit",
    title: {
      en: "All Online Forms",
      ne: "सबै प्रकारका अनलाइन फारमहरू",
    },
    shortDescription: {
      en: "Comprehensive technical assistance for various official, academic, scholarship, and institutional online applications in Nepal.",
      ne: "नेपाल सरकार तथा विभिन्न शैक्षिक, प्राज्ञिक र संस्थागत अनलाइन आवेदन फारमहरू त्रुटिरहित भर्न प्राविधिक सहायता।",
    },
    fullDescription: {
      en: "We offer technical support for filling out complex online forms across diverse Nepali and international portals. Whether you are dealing with government registrations, university admissions, college entrances, or document uploads, our team helps ensure data accuracy and error-free submissions.",
      ne: "नेपालका विभिन्न सरकारी, अर्ध-सरकारी तथा निजी संस्थाहरू, कलेज भर्ना, छात्रवृत्ति तथा अन्य अनलाइन पोर्टलहरूमा फारम भर्न, फोटो र कागजात रिसाइज गर्न तथा सहि विवरण प्रविष्ट गर्न हामी भरपर्दो सेवा दिन्छौँ।",
    },
    priceNote: {
      en: "Contact for Price",
      ne: "मूल्यको लागि सम्पर्क गर्नुहोस्",
    },
    targetAudience: {
      en: "Students, job seekers, and individuals who need assistance navigating complicated online portal forms and document formatting.",
      ne: "अनलाइन पोर्टलको झन्झट, फोटो साइज नमिल्ने वा फारम भर्न प्राविधिक ज्ञान नभएर समस्यामा परेका व्यक्तिहरू।",
    },
    requiredDocuments: {
      en: [
        "Specific portal requirements (user credentials or registration link)",
        "Applicant's personal identification (Citizenship, Birth Certificate, or Passport)",
        "Relevant academic marksheets/certificates or experience letters",
        "Applicant's photo and digital signature scan",
      ],
      ne: [
        "सम्बन्धित फारमको पोर्टल वा वेबसाइटको जानकारी",
        "आवेदकको परिचयपत्र (नागरिकता, जन्मदर्ता वा पासपोर्ट)",
        "आवश्यक शैक्षिक लब्धाङ्क पत्र (मार्क्सिट) वा अनुभवका प्रमाणपत्रहरू",
        "आवेदकको पासपोर्ट साइजको फोटो र डिजिटल हस्ताक्षर",
      ],
    },
    processSteps: {
      en: [
        "Step 1: Contact us on WhatsApp with details of the online form you need to fill.",
        "Step 2: Send required documents and applicant details securely.",
        "Step 3: Document optimization (resizing photos, PDF compression) according to portal specs.",
        "Step 4: Careful data entry and review of the draft submission.",
        "Step 5: Final submission and delivery of the official confirmation slip / PDF receipt.",
      ],
      ne: [
        "चरण १: तपाईंले भर्नुपर्ने फारमको बारेमा ह्वाट्सएपमा जानकारी गराउनुहोस्।",
        "चरण २: आवश्यक कागजातहरू र व्यक्तिगत विवरण सुरक्षित रूपमा पठाउनुहोस्।",
        "चरण ३: पोर्टलको नियम अनुसार फोटो, हस्ताक्षर र डकुमेन्ट रिसाइज गरिन्छ।",
        "चरण ४: फारम सबमिट गर्नु अगाडि विवरण रुजु गराइन्छ।",
        "चरण ५: फारम पेश गरी आधिकारिक रिसिप्ट वा कन्फर्मेसन स्लिप तपाईंलाई पठाइन्छ।",
      ],
    },
    estimatedTime: {
      en: "Usually completed within 1 to 3 hours depending on portal availability and queue.",
      ne: "सामान्यतया कागजात प्राप्त भएको १ देखि ३ घण्टा भित्र।",
    },
    disclaimer: {
      en: "Note: We act as technical data entry assistants. All information submitted is verified by the client prior to final submission. Official approvals remain the sole responsibility of the respective administering authority.",
      ne: "जानकारी: हामी प्राविधिक सहयोग मात्र गर्दछौँ। फारम पेश गर्नुअघि ग्राहक स्वयंले विवरण रुजु गर्नुपर्दछ र सम्बन्धित निकायको निर्णय नै अन्तिम हुनेछ।",
    },
    faqs: [
      {
        question: {
          en: "Are my personal documents kept secure?",
          ne: "के मेरा व्यक्तिगत कागजातहरू सुरक्षित रहन्छन्?",
        },
        answer: {
          en: "Absolutely. We treat your personal documents with strict confidentiality and never share them with unauthorized third parties.",
          ne: "एकदमै सुरक्षित। हामी तपाईंको व्यक्तिगत गोपनीयतालाई उच्च सम्मान गर्दछौँ र काम सम्पन्न भएपछि अनावश्यक रूपमा संकलन गर्दैनौँ।",
        },
      },
    ],
  },
  {
    id: "driving-license-services",
    slug: "driving-license-services",
    iconName: "Car",
    title: {
      en: "Driving License Services",
      ne: "सवारी चालक अनुमतिपत्र (Driving License) सेवा",
    },
    shortDescription: {
      en: "Guidance and assistance with Department of Transport Management (DoTM) online application registration and appointment date booking.",
      ne: "यातायात व्यवस्था विभागको अनलाइन प्रणाली मार्फत नयाँ लाइसेन्स, वर्ग थप तथा नवीकरण फारम भर्न प्राविधिक सहयोग।",
    },
    fullDescription: {
      en: "Assistance with online application filing on the official Department of Transport Management (DoTM) Electronic Driving License & Vehicle Registration System. We assist with new license applications, category additions, and appointment scheduling assistance across transport offices in Nepal.",
      ne: "यातायात व्यवस्था विभाग (DoTM) को अनलाइन प्रणाली मार्फत नयाँ सवारी चालक अनुमतिपत्र आवेदन, वर्ग थप (Category Add) फारम भर्न तथा बायोमेट्रिक मिति लिन प्राविधिक सहजीकरण प्रदान गरिन्छ।",
    },
    priceNote: {
      en: "Contact for Price",
      ne: "मूल्यको लागि सम्पर्क गर्नुहोस्",
    },
    targetAudience: {
      en: "Citizens applying for new motorcycle/car driving license, adding vehicle categories, or renewing licenses in Nepal.",
      ne: "नयाँ लाइसेन्स लिन चाहने, सवारी वर्ग थप गर्न चाहने वा अनलाइन फारम भर्न समस्या व्यहोरिरहेका सेवाग्राहीहरू।",
    },
    requiredDocuments: {
      en: [
        "Nepali Citizenship Certificate (clear scan of front and back)",
        "Blood Group card / test report",
        "Recent passport-sized photo",
        "Existing driving license details (for category add or renewal)",
        "Active mobile number for OTP verification",
      ],
      ne: [
        "नेपाली नागरिकताको प्रमाणपत्रको दुवैतर्फको स्पष्ट प्रतिलिपि",
        "रक्त समूह (Blood Group) कार्ड वा रिपोर्ट",
        "हालसालै खिचिएको पासपोर्ट साइजको फोटो",
        "सवारी वर्ग थप वा नवीकरणको हकमा पुरानो लाइसेन्सको विवरण",
        "ओटीपी (OTP) कोड आउने सक्रिय मोबाइल नम्बर",
      ],
    },
    processSteps: {
      en: [
        "Step 1: Contact us on WhatsApp with your citizenship details and preferred transport office (yatayat karyalaya).",
        "Step 2: We check appointment availability and portal status.",
        "Step 3: Registration on the official DoTM electronic driving license system.",
        "Step 4: Scheduling your visit/biometric appointment according to official slot availability.",
        "Step 5: Delivery of the official downloadable application confirmation voucher.",
      ],
      ne: [
        "चरण १: नागरिकताको विवरण र आफूले चाहेको यातायात कार्यालय खुलाएर ह्वाट्सएपमा सम्पर्क गर्नुहोस्।",
        "चरण २: हामी पोर्टलमा मिति तथा कोटा उपलब्धता जाँच गर्दछौँ।",
        "चरण ३: यातायात व्यवस्था विभागको प्रणालीमा विवरण दर्ता गरिन्छ।",
        "चरण ४: उपलब्ध सरकारी कोटा अनुसार बायोमेट्रिक मिति बुक गरिन्छ।",
        "चरण ५: आधिकारिक आवेदन भौचर/फारमको PDF तपाईंलाई पठाइन्छ।",
      ],
    },
    estimatedTime: {
      en: "Subject to official DoTM quota openings and server operational hours.",
      ne: "यातायात व्यवस्था विभागको सर्भर तथा सरकारी कोटा उपलब्धता अनुसार।",
    },
    disclaimer: {
      en: "Official Notice: BIPIN TECH HUB provides independent technical form-filling assistance. We do NOT guarantee license pass, biometric slot priority, or official issuance. Passing tests and obtaining the driving license is entirely subject to the applicant passing official examinations at the Department of Transport Management.",
      ne: "आधिकारिक जानकारी: विपिन टेक हबले अनलाइन फारम दर्ता गर्ने प्राविधिक सहयोग मात्र गर्दछ। परीक्षा उत्तीर्ण गराउने वा गैरकानुनी कोटा मिलाउने कुनै कार्य गरिँदैन। लाइसेन्स प्राप्तिका लागि यातायात कार्यालयमा स्वयं उपस्थित भई बायोमेट्रिक, लिखित तथा ट्रायल परीक्षा उत्तीर्ण हुनुपर्दछ।",
    },
    faqs: [
      {
        question: {
          en: "Do I have to visit the Yatayat office in person?",
          ne: "के म स्वयं यातायात कार्यालय जानुपर्छ?",
        },
        answer: {
          en: "Yes. Biometrics (photo, fingerprint, signature), medical checkup, written test, and trial must be performed by you in person at the assigned transport office.",
          ne: "हो, बायोमेट्रिक (फोटो खिच्ने, औंठाछाप), स्वास्थ्य परीक्षण, लिखित परीक्षा र प्रयोगात्मक (ट्रायल) परीक्षाका लागि तपाईं स्वयं सम्बन्धित कार्यालयमा उपस्थित हुनुपर्छ।",
        },
      },
    ],
  },
  {
    id: "loksewa-online-forms",
    slug: "loksewa-online-forms",
    iconName: "GraduationCap",
    title: {
      en: "Loksewa Online Forms",
      ne: "लोकसेवा अनलाइन फारम भर्ने सेवा",
    },
    shortDescription: {
      en: "Accurate application assistance for Public Service Commission (Lok Sewa Aayog) and provincial commission competitive examinations.",
      ne: "लोक सेवा आयोग (केन्द्रीय तथा प्रादेशिक) का विभिन्न पदहरूका लागि अनलाइन प्रोफाइल बनाउने र त्रुटिरहित दरखास्त फारम भर्ने सेवा।",
    },
    fullDescription: {
      en: "Complete technical assistance for filling out online applications on the Public Service Commission (Lok Sewa Aayog) master portal. We assist candidates with user profile creation, academic record entry, inclusive category document uploads, syllabus verification, and exam center selection.",
      ne: "लोक सेवा आयोग (संघीय तथा प्रादेशिक) का विभिन्न विज्ञापनहरूमा अनलाइन दरखास्त फारम भर्न, नयाँ प्रोफाइल बनाउन, शैक्षिक प्रमाणपत्र तथा समावेशी समूह (महिला, जनजाति, मधेसी, दलित आदि) का कागजात मिलाउन भरपर्दो सहयोग गर्दछौँ।",
    },
    priceNote: {
      en: "Contact for Price",
      ne: "मूल्यको लागि सम्पर्क गर्नुहोस्",
    },
    targetAudience: {
      en: "Candidates applying for Kharidar, Subba, Officer, technical positions, health service, or provincial civil service examinations in Nepal.",
      ne: "खरिदार, नायब सुब्बा, शाखा अधिकृत, प्राविधिक तथा स्वास्थ्य सेवाका लोकसेवा परीक्षार्थीहरू।",
    },
    requiredDocuments: {
      en: [
        "Nepali Citizenship Certificate (both sides scanned clearly)",
        "Passport size photo and signature on plain white paper",
        "Educational marksheets/transcripts, character certificate, and equivalence (if foreign degree)",
        "Inclusive group certification letter (for Janajati, Madhesi, Dalit, etc., if applying under quota)",
        "Council registration certificate (for medical, nursing, engineering posts)",
      ],
      ne: [
        "नेपाली नागरिकताको प्रमाणपत्रको दुवैतर्फको सफा प्रतिलिपि",
        "सादा सेतो कागजमा गरिएको हस्ताक्षर र हालसालै खिचिएको फोटो",
        "शैक्षिक योग्यताका ट्रान्सक्रिप्ट/मार्क्सिट र चारित्रिक प्रमाणपत्र",
        "समावेशी समूह (महिला बाहेक जनजाति, मधेसी, अपाङ्ग, पिछडिएको क्षेत्र आदि) प्रमाणित कागजात",
        "काउन्सिल दर्ता प्रमाणपत्र (इन्जिनियरिङ, मेडिकल, नर्सिङ आदिको हकमा)",
      ],
    },
    processSteps: {
      en: [
        "Step 1: Contact us on WhatsApp with the specific advertisement number and your academic credentials.",
        "Step 2: We verify qualification eligibility criteria according to the official commission notice.",
        "Step 3: Creating or updating your official Master ID profile on the Lok Sewa portal.",
        "Step 4: Uploading formatted documents and selecting appropriate exam centers.",
        "Step 5: Submission review and providing payment instructions for ConnectIPS / official bank voucher.",
      ],
      ne: [
        "चरण १: आफूले फारम भर्न चाहेको विज्ञापन नम्बर र शैक्षिक विवरण सहित ह्वाट्सएपमा सम्पर्क गर्नुहोस्।",
        "चरण २: आयोगको सूचना अनुसार न्यूनतम योग्यता र उमेर हद रुजु गरिन्छ।",
        "चरण ३: लोकसेवा पोर्टलमा मास्टर आईडी बनाउने वा पुरानो प्रोफाइल अपडेट गरिन्छ।",
        "चरण ४: साइज मिलाएर डकुमेन्ट अपलोड गर्ने र परीक्षा केन्द्र छनोट गरिन्छ।",
        "चरण ५: फारम रुजु गरी दस्तुर भुक्तानी भौचर वा अनलाइन पेमेन्ट प्रक्रिया सहजीकरण गरिन्छ।",
      ],
    },
    estimatedTime: {
      en: "Completed within 2 to 4 hours (we recommend applying well before the deadline date to avoid server slowdowns).",
      ne: "२ देखि ४ घण्टा भित्र (सरकारी सर्भरमा चाप हुनसक्ने भएकाले म्याद सकिनु अगावै फारम भर्न सुझाव दिन्छौँ)।",
    },
    disclaimer: {
      en: "Disclaimer: BIPIN TECH HUB is an independent digital assistance service. We assist applicants in technical data entry and document uploading. Admission cards, exam conduct, and candidate selection are exclusively managed by the Public Service Commission of Nepal.",
      ne: "जानकारी: विपिन टेक हब एक स्वतन्त्र प्राविधिक सहायता सेवा हो। हामी फारम भर्न प्राविधिक सहयोग मात्र गर्दछौँ। परीक्षा सञ्चालन र नतिजा सम्बन्धी सम्पूर्ण अधिकार लोक सेवा आयोगमा सुरक्षित रहन्छ।",
    },
    faqs: [
      {
        question: {
          en: "What if the Lok Sewa portal server is busy on the last day?",
          ne: "के म्याद सकिने अन्तिम दिन लोकसेवाको सर्भर चल्न छाड्यो भने के हुन्छ?",
        },
        answer: {
          en: "Government portals often experience heavy traffic near deadlines. We strongly encourage applicants to contact us at least several days before the application deadline.",
          ne: "अन्तिम दिन अत्यधिक चापका कारण सर्भर ढिलो हुनसक्छ। त्यसैले अन्तिम मिति भन्दा केही दिन अगाडि नै फारम भर्नु उपयुक्त हुन्छ।",
        },
      },
    ],
  },
  {
    id: "personal-portfolio-website",
    slug: "personal-portfolio-website-with-hosting",
    iconName: "Globe",
    title: {
      en: "Personal Portfolio Website with Hosting",
      ne: "व्यक्तिगत पोर्टफोलियो वेबसाइट र होस्टिङ",
    },
    shortDescription: {
      en: "Modern, high-performance personal portfolio website built to showcase your resume, projects, skills, and contact channels.",
      ne: "तपाईंको अनुभव, बायोडाटा, प्रोजेक्ट र सीपहरू संसारभर देखाउन आधुनिक, द्रुत गतिको व्यक्तिगत वेबसाइट तथा होस्टिङ।",
    },
    fullDescription: {
      en: "Get a custom, beautifully designed personal portfolio website optimized for speed, mobile devices, and search engines. Perfect for developers, designers, photographers, academics, doctors, consultants, and professionals seeking a modern digital presence.",
      ne: "तपाईंको करियरलाई एक कदम अगाडि बढाउन उच्च गुणस्तरको, मोबाइलमैत्री र आकर्षक व्यक्तिगत वेबसाइट निर्माण गरिन्छ। यसमा तपाईंको बायोडाटा, सीप, फोटो, परियोजनाहरू र सोझै ह्वाट्सएप वा इमेल मार्फत सम्पर्क गर्ने सुविधा समावेश हुन्छ।",
    },
    priceNote: {
      en: "Contact for Price",
      ne: "मूल्यको लागि सम्पर्क गर्नुहोस्",
    },
    targetAudience: {
      en: "Software engineers, students, freelancers, photographers, consultants, doctors, and professionals wanting a personal brand.",
      ne: "आफ्नो व्यक्तिगत पहिचान (Personal Brand) बनाउन चाहने विद्यार्थी, इन्जिनियर, डाक्टर, फ्रीलान्सर तथा विभिन्न पेशाकर्मीहरू।",
    },
    requiredDocuments: {
      en: [
        "Your profile biography and professional headline",
        "List of skills, education, and work experiences",
        "Project titles, descriptions, and optional project links",
        "High-quality profile photo",
        "Social media and contact channels (LinkedIn, GitHub, WhatsApp, etc.)",
      ],
      ne: [
        "तपाईंको व्यक्तिगत परिचय र पेशागत विवरण",
        "सीप (Skills), शैक्षिक योग्यता र कार्य अनुभवको सूची",
        "आफूले गरेका प्रोजेक्ट वा कामका विवरणहरू",
        "सफा र प्रोफेसनल प्रोफाइल तस्विर",
        "सामाजिक सञ्जाल तथा सम्पर्क लिङ्कहरू (LinkedIn, WhatsApp, आदि)",
      ],
    },
    processSteps: {
      en: [
        "Step 1: Contact us on WhatsApp to discuss your desired design, layout, and sections.",
        "Step 2: Provide your bio, projects, and photos.",
        "Step 3: Development of a responsive, modern website using Next.js/React and Tailwind CSS.",
        "Step 4: Live preview link for your feedback and adjustments.",
        "Step 5: Deployment to fast global hosting (Vercel/GitHub Pages) and domain connection.",
      ],
      ne: [
        "चरण १: ह्वाट्सएपमा सम्पर्क गरी तपाईंलाई कस्तो डिजाइन मनपर्छ छलफल गर्नुहोस्।",
        "चरण २: आफ्नो बायो, प्रोजेक्ट तथा फोटोहरू पठाउनुहोस्।",
        "चरण ३: आधुनिक प्रविधि (Next.js/React) प्रयोग गरी द्रुत गतिको वेबसाइट तयार गरिन्छ।",
        "चरण ४: तपाईंलाई वेबसाइट देखाएर आवश्यक सल्लाह र परिमार्जन गरिन्छ।",
        "चरण ५: द्रुत गतिको होस्टिङमा वेबसाइट लाइभ (Live) गरिन्छ।",
      ],
    },
    estimatedTime: {
      en: "Usually 3 to 7 working days depending on customization level.",
      ne: "डिजाइन र फिचर अनुसार सामान्यतया ३ देखि ७ कार्यदिन भित्र।",
    },
    faqs: [
      {
        question: {
          en: "Will my website work well on mobile phones?",
          ne: "के मेरो वेबसाइट मोबाइलमा पनि राम्रोसँग खुल्छ?",
        },
        answer: {
          en: "Yes, every website we build is 100% responsive and tested on Android, iPhone, tablet, and desktop screens.",
          ne: "हो, हामीले बनाउने सम्पूर्ण वेबसाइटहरू मोबाइल, ट्याब्लेट र कम्प्युटर सबै स्क्रिनमा दुरुस्त खुल्ने गरी बनाइन्छ।",
        },
      },
      {
        question: {
          en: "Is hosting included?",
          ne: "के होस्टिङ पनि समावेश हुन्छ?",
        },
        answer: {
          en: "Yes, we set up reliable free global cloud hosting (e.g., Vercel / GitHub Pages) so there are no recurring server fees for standard portfolios.",
          ne: "हो, हामी भरपर्दो र छिटो चल्ने ग्लोबल क्लाउड होस्टिङमा सेटअप गरिदिन्छौँ।",
        },
      },
    ],
  },
  {
    id: "c-programming-guide",
    slug: "c-programming-guide",
    iconName: "Code2",
    title: {
      en: "C Programming Guide",
      ne: "सी प्रोग्रामिङ गाइड र सहयोग (C Programming)",
    },
    shortDescription: {
      en: "Practical programming guides, academic lab assistance, and concept walkthroughs for Tribhuvan University, Pokhara University, and +2 students.",
      ne: "कलेज तथा विश्वविद्यालयका विद्यार्थीहरूका लागि सी प्रोग्रामिङ (C Programming) का आधारभूत सिद्धान्त, ल्याब वर्क र कोडिङ गाइड।",
    },
    fullDescription: {
      en: "Comprehensive educational guide, problem-solving resources, and personalized walkthroughs for students learning C Programming in Nepal. Covering fundamentals (variables, loops, arrays, functions, pointers, structures, file handling) aligned with TU, PU, PoU, and HSEB/+2 curricula.",
      ne: "नेपालका इन्जिनियरिङ (IOE), बिएससी सीएसआइटी (BSc CSIT), बिसीए (BCA), बिआइएम (BIM) तथा कक्षा ११ र १२ का विद्यार्थीहरूका लागि सी प्रोग्रामिङको ल्याब म्यानुअल, कन्सेप्ट बुझाउने गाइड र प्रोग्रामिङ समाधानमा सहयोग।",
    },
    priceNote: {
      en: "Contact for Price",
      ne: "मूल्यको लागि सम्पर्क गर्नुहोस्",
    },
    targetAudience: {
      en: "Students pursuing BSc.CSIT, BCA, BIT, BE (Computer/Civil/Electronics), BIM, and +2 Science/Computer Science.",
      ne: "कक्षा ११/१२, इन्जिनियरिङ, CSIT, BCA लगायत सूचना प्रविधि अध्ययन गरिरहेका विद्यार्थीहरू।",
    },
    requiredDocuments: {
      en: [
        "Your syllabus, college lab sheet, or specific programming problem statement",
        "Specific error log or logic question you need guidance with",
      ],
      ne: [
        "तपाईंको कलेजको ल्याब प्रश्न, सिलेबस वा समस्या भएको कोड",
        "तपाईंले बुझ्न चाहेको सी प्रोग्रामिङको विषय",
      ],
    },
    processSteps: {
      en: [
        "Step 1: Contact us on WhatsApp with your programming question or lab assignment outline.",
        "Step 2: We analyze the problem requirements and discuss the best learning approach.",
        "Step 3: Clear code walkthrough with well-commented source code and logic explanation.",
        "Step 4: Debugging assistance and guidance on compilation (GCC / Code::Blocks / VS Code).",
        "Step 5: Follow-up support to ensure you thoroughly understand the concepts.",
      ],
      ne: [
        "चरण १: आफूलाई समस्या भएको प्रश्न वा ल्याब शीट सहित ह्वाट्सएपमा सम्पर्क गर्नुहोस्।",
        "चरण २: हामी प्रश्नको माग अनुसार उपयुक्त समाधान र सिकाउने तरिका तय गर्छौँ।",
        "चरण ३: स्पष्ट कमेन्ट र सजिलो लजिक सहितको कोड र समाधान तयार गरिन्छ।",
        "चरण ४: कोड कसरी रन गर्ने र कम्पाईल गर्दा आउने एरर समाधान गर्ने तरिका सिकाइन्छ।",
        "चरण ५: तपाईंले बुझ्न नसकेका विषयहरूमा ह्वाट्सएप मार्फत थप सहयोग गरिन्छ।",
      ],
    },
    estimatedTime: {
      en: "Usually within 2 to 24 hours depending on the complexity of the programming tasks.",
      ne: "समस्याको जटिलता अनुसार सामान्यतया २ देखि २४ घण्टा भित्र।",
    },
    faqs: [
      {
        question: {
          en: "Do you explain how the code works?",
          ne: "के कोड कसरी काम गर्छ भनेर पनि बुझाइन्छ?",
        },
        answer: {
          en: "Yes! Our aim is educational clarity. We include explanatory comments in the code and step-by-step logic breakdown so you understand how the code functions.",
          ne: "अवश्य! हाम्रो मुख्य उद्देश्य विद्यार्थीले कोड बुझ्नु हो। कोड भित्रै सरल भाषामा कमेन्ट र लजिक व्याख्या समावेश गरिन्छ।",
        },
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug || service.id === slug);
}
