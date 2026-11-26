import productsBanner from "../assets/heroSectionBg/servicesHeroBg.jpg";

/**
 * CMS-ready product records: stable id, name, summary, image { src, alt }, and
 * hero/about/capabilities/process/applications/pricing/sales section objects.
 * Repeated content uses arrays; icons are string keys resolved by the UI.
 * Keep records JSON-serializable so CMS responses can use the same shape.
 */
export const products = [
  {
    id: "online-photo-verification",
    name: "Online Photo Verification",
    summary: "A centralised platform for creating and managing photo verification campaigns, from eligible-user lists to results and reporting.",
    image: { src: "/Online photo hero.png", alt: "Guided photo verification showing a participant looking forward, left and right, opening her mouth and blinking" },
    viewLabel: "View Product",
    hero: {
      title: "A Smarter Way to Manage Photo Verification",
      description: "A digital photo verification solution designed to help organisations manage and coordinate photo verification exercises with greater efficiency.",
      pricingLabel: "View Pricing",
      contactLabel: "Contact Sales",
    },
    about: {
      label: "About",
      title: "About Our Online Photo Verification Solution",
      paragraphs: [
        "Managing identity verification exercises across large populations can be complex, particularly when organisations need to coordinate participants, standardise requirements and monitor submissions.",
        "Identiko’s Online Photo Verification tool provides a centralised digital platform that enables organisations to create and manage photo verification campaigns.",
        "Through configurable campaigns and eligible-user management, administrators can coordinate verification exercises while maintaining visibility over the process.",
        "Designed with organisational requirements in mind, the platform also supports customisable portal interfaces, allowing agencies and corporate clients to incorporate their branding and customise relevant fields.",
        "Whether supporting a government verification exercise or an organisational identity management initiative, the platform provides a structured approach to managing photo verification activities.",
      ],
      image: { src: "/Image (Administrators working together to review a digital verification campaign).png", alt: "Administrators discussing a verification campaign around a meeting table" },
      caption: "One central workspace",
      captionDetail: "Campaigns, participants and results",
    },
    capabilities: {
      label: "Capabilities",
      title: "Key Features and Benefits",
      description: "Everything your team needs to run a verification exercise from start to finish.",
      items: [
        { id: "accessibility", icon: "globe", title: "Online verification accessibility", description: "Participants complete verification from any internet-enabled device through a secure campaign link, reducing the need for physical verification centres." },
        { id: "processing", icon: "processor", title: "Verification processing capabilities", description: "Process large volumes of submissions, with each record checked against the campaign’s eligible-user list and requirements." },
        { id: "capture", icon: "capture", title: "Image capture and comparison workflow", description: "Guided photo capture standardises submissions, while a structured comparison step supports consistent verification decisions." },
        { id: "reporting", icon: "chart", title: "Verification results and reporting", description: "Track campaign progress from the dashboard and access reports for oversight, audit and record-keeping." },
      ],
    },
    process: {
      label: "Process",
      title: "How It Works",
      description: "A straightforward process for managing photo verification campaigns.",
      items: [
        { id: "create", title: "Create a Verification Campaign", description: "Log in to the platform and create a new verification campaign, defining the relevant parameters and requirements for the exercise." },
        { id: "configure", title: "Configure Your Campaign", description: "Set up the campaign to meet your organisation’s requirements. Manage eligible-user lists and configure relevant fields." },
        { id: "share", title: "Generate and Share Access Links", description: "Once configured, the platform generates a unique URL for the campaign. This link can be shared with the intended participants to access the verification process." },
        { id: "monitor", title: "Monitor and Manage Results", description: "Use the platform’s dashboard to view campaign information and access reports, providing administrators with visibility into the verification exercise." },
      ],
    },
    applications: {
      label: "Applications",
      title: "Use Cases & Applications",
      description: "See how organisations can apply online photo verification across their operations.",
      benefitLabel: "Benefit:",
      items: [
        { id: "government", title: "Government Identity & Registration", image: { src: "/Frame 2147224634.png", alt: "Identity registration documents being checked using a phone" }, description: "Support national, state & agency registration that require a verified photograph for every record. An agency uploads its list of eligible registrants, configures the required fields and shares the campaign link through official channels.", benefit: "Fewer physical registration points and a consistent, auditable photo record for every registrant." },
        { id: "workforce", title: "Personnel & Workforce Verification", image: { src: "/Image (A diverse team collaborating in a modern workplace).png", alt: "A team collaborating in a workplace meeting" }, description: "Confirm that staff on payroll or nominal rolls are genuine, current employees. HR or audit teams load the staff list, send each employee the campaign link and review submissions against personnel records.", benefit: "Supports payroll integrity checks and highlights records that need follow-up." },
        { id: "onboarding", title: "Institutional Onboarding", image: { src: "/Image (A professional ready for a digital onboarding photo).png", alt: "A professional ready for her onboarding photo" }, description: "Capture verified photos for new members, students or clients as part of enrolment. Institutions include the campaign link in onboarding communications so new entrants submit their photos before they arrive.", benefit: "Faster onboarding and ready-to-use photos for ID cards and records." },
        { id: "applicants", title: "Examination & Applicant Verification", image: { src: "/Image (A university applicant working at a laptop).png", alt: "An applicant working on a laptop" }, description: "Verify candidates ahead of examinations, interviews or recruitment exercises. Examination bodies or recruiters create a campaign per exercise, restrict access to registered applicants and review submissions before the event.", benefit: "Reduces impersonation risk and simplifies candidate check-in on the day." },
        { id: "programmes", title: "Public-Sector Programme Administration", image: { src: "/Image (A community programme coordinator speaking with participants).png", alt: "A community programme coordinator speaking with participants" }, description: "Confirm the identity of beneficiaries enrolled in social, welfare or grant programmes. Programme administrators run periodic verification campaigns for enrolled beneficiaries and monitor completion across regions or cohorts.", benefit: "Helps ensure programme resources reach eligible beneficiaries, with reports for oversight." },
        { id: "organisations", title: "Organisational Identity Verification", image: { src: "/Image (A professional taking a clear identity photo in an office).png", alt: "A professional holding a clipboard in an office" }, description: "Maintain up-to-date, verified photos for members, contractors and partners. Organisations run branded campaigns through their own portal, collecting photos and the custom fields their processes require.", benefit: "A single, structured source of verified identity photos across the organisation." },
      ],
    },
    pricing: {
      label: "Pricing",
      title: "Plans for Every Verification Exercise",
      description: "Choose a package that fits the size of your exercise, or speak to our team about a tailored proposal.",
      actionLabel: "Get Started",
      plans: [
        { id: "starter", name: "Starter", description: "For small teams and pilot exercises", price: "Custom", basis: "per campaign", featured: false },
        { id: "professional", name: "Professional", description: "For organisations running regular exercises", price: "Custom", basis: "per campaign", featured: true },
        { id: "enterprise", name: "Government & Enterprise", description: "For large-scale and multi-agency programmes", price: "Custom", basis: "tailored proposal", featured: false },
      ],
    },
    sales: {
      label: "Contact Sales",
      title: "Talk to Our Sales Team",
      description: "Tell us about your verification exercise and our team will respond within one business day.",
      contacts: [
        { id: "phone", icon: "phone", label: "Sales line", value: "+234 704 381 7509", href: "tel:+2347043817509" },
        { id: "email", icon: "email", label: "Email", value: "info@identikosolutions.com", href: "mailto:info@identikosolutions.com" },
        { id: "hours", icon: "clock", label: "Office hours", value: "Monday – Friday, 8:00 a.m. – 5:00 p.m." },
        { id: "office", icon: "location", label: "Lagos office", value: "2nd Floor, CITN House, Plot 16, Jobi Fele Way, Ikeja, Lagos" },
      ],
      formTitle: "Send an Enquiry",
      formDescription: "Fields marked * are required.",
      submitLabel: "Submit Enquiry",
      successMessage: "Thank you. Your enquiry has been sent to our sales team.",
      errorMessage: "Your enquiry could not be sent. Please try again or contact sales using the details provided.",
    },
  },
];

export const productsPage = {
  title: "Our Products",
  banner: { src: productsBanner, alt: "Identiko team working together in the office" },
  cta: {
    title: "Looking for a tailored solution?",
    description: "Our team works with ministries, agencies and organisations to design identity solutions around their needs.",
    contactLabel: "Contact Sales",
    contactHref: "/products/online-photo-verification#contact-sales",
    servicesLabel: "View Our Services",
    servicesHref: "/our-services",
  },
};
