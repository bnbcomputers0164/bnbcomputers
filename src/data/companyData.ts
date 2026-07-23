import {
  FileText,
  Database,
  Cloud,
  Smartphone,
  MessageSquare,
  Wrench,
  Shield,
  Clock,
  Users,
  CheckCircle,
  TrendingUp,
  Award,
  Zap,
  GraduationCap,
  MessageCircle,
  Calendar,
  Lock,
  BarChart3,
  Terminal,
  Layers,
  HelpCircle
} from 'lucide-react';
// @ts-ignore
import cloudHostingImg from '../assets/images/cloud_hosting_solution_1784704467163.jpg';
// @ts-ignore
import img4058 from '../assets/images/IMG_4058.JPG';
// @ts-ignore
import img3942 from '../assets/images/IMG_3942.JPG';
// @ts-ignore
import img3962 from '../assets/images/IMG_3962.JPG';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder: string;
  benefits: string[];
  features: string[];
  pricingRange: string;
  ctaText: string;
  badge?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  thumbnailUrl: string;
  mediaUrl: string;
  category: 'Events' | 'Training' | 'Workshops' | 'Product Demos';
  date: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  companyName: string;
  industry: string;
  rating: number;
  comment: string;
  avatarPlaceholder: string;
}

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  imagePlaceholder: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Licensing' | 'Cloud' | 'Support' | 'Customization';
}

// ---------------------------------------------------------------------------
// STATIC SYSTEM DATA
// ---------------------------------------------------------------------------

export const companyDetails = {
  name: "BNB COMPUTERS",
  websiteUrl: "https://bnbcomputers.com",
  officeAddress: "Birla Mill Road, Bathinda, Punjab - 151001, India",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=BNB%20Computers,%20Birla%20Mill%20Road,%20Bathinda,%20Punjab%20151001&t=&z=16&ie=UTF8&iwloc=B&output=embed",
  primaryMobile: "+91 99888-61199",
  secondaryMobile: "+91 76960-05690",
  rawMobile1: "9988861199",
  rawMobile2: "7696005690",
  email: "bnbcomputers0164@gmail.com",
  workingHours: "Monday to Saturday: 10:00 AM - 7:00 PM (Sunday Closed)",
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    youtube: "#"
  },
  partnerships: [
    { name: "TallyPrime Authorized Partner", type: "Tally" },
    { name: "BUSY Accounting Software Authorized Partner", type: "BUSY" }
  ]
};

// Trust Statistics
export const statistics: StatItem[] = [
  {
    id: "clients",
    value: "2000+",
    label: "Happy Clients",
    sublabel: "Across North India",
    description: "Successfully automated accounting operations for diverse sectors including retail, wholesale, and manufacturing."
  },
  {
    id: "solutions",
    value: "15+",
    label: "Software Solutions",
    sublabel: "Integrated Offerings",
    description: "From core accounting and ERP licenses to customized TDL extensions, WhatsApp APIs, and cloud hosting."
  },
  {
    id: "experience",
    value: "15+",
    label: "Years Experience",
    sublabel: "Industry Presence",
    description: "Providing trusted consulting and execution for business automation and statutory compliance."
  },
  {
    id: "support",
    value: "100%",
    label: "Customer Support",
    sublabel: "Resolved Service SLA",
    description: "Dedicated remote assistance, call support, and annual maintenance contracts (AMC) for zero downtime."
  }
];

// Highlight points for Trust Section
export const trustHighlights = [
  { title: "Authorized Partner", description: "Direct certified relationship with Tally & BUSY.", icon: Award },
  { title: "Trusted by 2000+ Businesses", description: "Deep presence in Bathinda, Punjab, & surrounding regions.", icon: Users },
  { title: "Expert Support", description: "Certified technicians with decades of cumulative knowledge.", icon: Wrench },
  { title: "Fast Implementation", description: "Quick, standardized setup, migration, and training.", icon: Zap },
  { title: "Cloud Ready", description: "Tally and BUSY access on cloud from anywhere, any device.", icon: Cloud },
  { title: "Business Automation", description: "Seamless custom integrations for invoices, SMS, & notifications.", icon: TrendingUp }
];

// Core Services Array
export const servicesList: ServiceItem[] = [
  {
    id: "tally-licenses",
    title: "New TallyPrime Licenses",
    description: "Get genuine, authorized TallyPrime Silver (Single User) or Gold (Multi-User) licenses for streamlined business growth.",
    iconName: "FileText",
    features: ["Standard GST Billing", "E-Invoicing & E-Way Bills", "Multi-Currency Support", "Real-time Cash Flow Management"]
  },
  {
    id: "tally-renewals",
    title: "TallyPrime TSS Renewals",
    description: "Renew your Tally Software Services (TSS) subscription to access continuous product upgrades, mobile reports, and e-invoice generation.",
    iconName: "Clock",
    features: ["Access Latest Tally Releases", "On-the-go Mobile Reports", "Connected Banking Features", "Direct GST Returns Filing"]
  },
  {
    id: "busy-licenses",
    title: "BUSY New Licenses",
    description: "Authorized provider of BUSY Accounting Software licenses—Basic, Standard, and Enterprise editions designed for powerful multi-branch operations.",
    iconName: "Database",
    features: ["Advanced Inventory Control", "GST / VAT / TDS Compliance", "Barcode Printing & POS Billing", "Manufacturing & Job Costing"]
  },
  {
    id: "busy-renewals",
    title: "BUSY Renewals & Upgrades",
    description: "Keep your BUSY software updated with the latest statutory compliance changes, security updates, and performance boosters.",
    iconName: "Zap",
    features: ["Updated GST Templates", "Optimized DB Engine", "Latest Security Patches", "Free Technical Support Pack"]
  },
  {
    id: "tally-on-cloud",
    title: "Tally on Cloud",
    description: "Access your TallyPrime from anywhere, anytime, on any device (Windows, Mac, iOS, Android) with high-speed cloud infrastructure.",
    iconName: "Cloud",
    features: ["24/7 Global Access", "Automated Daily Backups", "Enterprise-grade SSL Security", "High-Speed RDP Performance"],
    badge: "Hot Seller"
  },
  {
    id: "busy-on-cloud",
    title: "BUSY on Cloud",
    description: "Run your BUSY software in a highly secure, reliable virtual environment, enabling multi-location inventory sync and remote billing.",
    iconName: "Cloud",
    features: ["Multi-branch Syncing", "No On-prem Server Cost", "Scalable CPU/RAM on demand", "Secured User Access Controls"]
  },
  {
    id: "whatsapp-integration",
    title: "WhatsApp & SMS Integration",
    description: "Send automated invoices, outstanding payment reminders, ledger statements, and delivery updates directly to clients via WhatsApp.",
    iconName: "MessageCircle",
    features: ["Instant Invoicing PDF", "Automated Payment Reminders", "Authorized Meta API Service", "Custom Template Controls"],
    badge: "Most Popular"
  },
  {
    id: "tdl-customization",
    title: "Tally TDL & BUSY Customization",
    description: "Tailor TallyPrime and BUSY precisely to your business flow with custom modules, bespoke report designs, and specific industry plugins.",
    iconName: "Layers",
    features: ["Custom Invoice Formats", "Specialized Security Controls", "Additional Data Fields", "Bespoke Management Reports"]
  },
  {
    id: "data-migration",
    title: "Data Migration & Splitting",
    description: "Seamlessly transition data from legacy accounting systems to Tally/BUSY, or split multi-year bulky databases to optimize software speed.",
    iconName: "TrendingUp",
    features: ["Zero Data Loss Guarantee", "Year-End Financial Splitting", "Format & Schema Validation", "Post-Migration Audit Check"]
  },
  {
    id: "amc-support",
    title: "Annual Maintenance Contracts (AMC)",
    description: "Enjoy complete peace of mind with our dedicated AMCs, ensuring year-round, priority technical support, updates, and maintenance.",
    iconName: "Shield",
    features: ["Priority Helpdesk Routing", "Preventative Health Checks", "System & Ledger Auditing Support", "Remote and On-site Visits"],
    badge: "Enterprise"
  },
  {
    id: "remote-support",
    title: "On-Demand Remote Support",
    description: "Stuck during billing or voucher entry? Get immediate remote troubleshooting from our certified support desk via AnyDesk or TeamViewer.",
    iconName: "Wrench",
    features: ["Under 15-Min Response Time", "GST Error Troubleshooting", "License Activation Help", "Hardware Printer Interface Fixing"]
  },
  {
    id: "training-onboarding",
    title: "Professional Staff Training",
    description: "Upskill your accounting and sales staff with customized training programs in TallyPrime and BUSY, ensuring high productivity.",
    iconName: "GraduationCap",
    features: ["Practical Real-life Case Studies", "GST & Taxation Workshops", "Inventory Controls Training", "Flexible Online/Offline Schedules"]
  },
  {
    id: "business-automation",
    title: "Business Automation Solutions",
    description: "End-to-end consulting to automate manual workflows, connecting CRM systems, custom portals, or mobile apps directly to your ERP database.",
    iconName: "Terminal",
    features: ["Connected Banking Workflows", "Sales Executive Mobile Tracking", "Automatic Bank Reconciliation", "Consolidated Multi-Company Sync"]
  }
];

// Product Details
export const productsList: ProductItem[] = [
  {
    id: "tallyprime",
    title: "TallyPrime",
    subtitle: "The Ultimate Business Management Software",
    description: "TallyPrime is the most trusted enterprise ERP software in India. It is designed to cater to all accounting, inventory management, e-invoicing, tax compliance, and payroll needs of small to mid-sized businesses.",
    imagePlaceholder: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Extremely user-friendly and intuitive navigation with the powerful 'Go To' search bar.",
      "Flawless statutory compliance including automatic GST, TDS, TCS, and E-Way bill generation.",
      "High scalability, capable of handling hundreds of thousands of transactions seamlessly."
    ],
    features: [
      "TallyPrime Cloud Access",
      "Docs by Ira",
      "Connected Banking with Axis, Kotak, SBI & ICICI",
      "Bharat Connect features",
      "E-Invoicing and automated E-Way Bill generation",
      "Double Entry Bookkeeping & Final Accounts"
    ],
    pricingRange: "Starting from 22500 + GST. Special discounts for CAs.",
    ctaText: "Get TallyPrime Quote",
    badge: "Market Leader"
  },
  {
    id: "busy-software",
    title: "BUSY Accounting Software",
    subtitle: "Powering Business Growth and Inventory",
    description: "BUSY is a comprehensive business accounting software tailored for MSMEs, widely popular for its robust inventory management, barcode configurations, detailed manufacturing features, and customizable reports.",
    imagePlaceholder: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Unmatched inventory details: batch number, serial number, expiry dates, parameter-wise tracking.",
      "Customizable invoice design, documents, and SMS alerts direct from the interface.",
      "Highly stable MS-Access or MS-SQL Server backend options for multi-terminal billing."
    ],
    features: [
      "Busy Magic",
      "Busy Mobile App",
      "Advanced Inventory with multi-unit support",
      "Inbuilt Custom barcode & sticker printing",
      "Interactive point-of-sale (POS) billing engine",
      "Automated e-invoice & GST portal integration"
    ],
    pricingRange: "Single-User: Rs 5000 + GST (Basic/Blue) | Rs 8000 + GST (Standard/Saffron). Multi-User: Rs 12500 + GST (Basic/Blue) | Rs 18000 + GST (Standard/Saffron) for 360 Days (1080 Days available).",
    ctaText: "Get BUSY Quote",
    badge: "Best for Inventory & Retail"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Hosting",
    subtitle: "Your Desktop Software, Delivered Safely on Cloud",
    description: "Bridge the gap between offline reliability and online flexibility. BNB Cloud ERP hosts your existing TallyPrime or BUSY on our robust, redundant cloud servers so your staff can bill from anywhere with 100% security.",
    imagePlaceholder: cloudHostingImg,
    benefits: [
      "No heavy hardware server costs—save on IT administrators and localized power backups.",
      "Ransomware protection and continuous snapshots keep your business data fully guarded.",
      "Extremely fast and low-latency performance even on basic broadband connections."
    ],
    features: [
      "Secure RDP (Remote Desktop Protocol) client access",
      "Compatiblity with local printers and barcode scanners",
      "Automatic daily scheduled cloud backups",
      "Multi-user concurrent workspace sessions",
      "99.9% Server uptime SLA commitment"
    ],
    pricingRange: "Customized user-based pricing plans",
    ctaText: "Explore Cloud Hosting",
    badge: "Recommended"
  }
];

// Why Choose Us Info
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: "certified-experts",
    title: "Certified Professionals",
    description: "Our engineers are directly trained, examined, and certified by Tally Solutions and BUSY Infotech, assuring top-tier implementation.",
    iconName: "Award"
  },
  {
    id: "quick-installation",
    title: "Speedy Onboarding",
    description: "We value your business hours. We set up, license, customize, and migrate your books with zero disruptions, usually on the very same day.",
    iconName: "Zap"
  },
  {
    id: "affordable-pricing",
    title: "Fair, Transparent Pricing",
    description: "No hidden fees. Honest consultations to advise only what you need—whether a simple upgrade or an enterprise-grade cloud server.",
    iconName: "CheckCircle"
  },
  {
    id: "dedicated-support",
    title: "Dedicated Client SLA",
    description: "We maintain a robust ticketing desk with automated follow-ups, ensuring your critical billing blockages are resolved instantly.",
    iconName: "Clock"
  },
  {
    id: "remote-assistance",
    title: "Remote & On-Site Availability",
    description: "Operating from our hub in Bathinda, Punjab, we support client businesses across North India physically and globally via secure remote connections.",
    iconName: "Users"
  },
  {
    id: "customization-masters",
    title: "Deep Customization Experts",
    description: "From generating complicated multi-page manufacturing bills to binding customized SMS APIs, our developers write clean, optimal TDL and DB queries.",
    iconName: "Layers"
  }
];

// Industries Served
export const industriesServed: IndustryItem[] = [
  { id: "retail", name: "Retail & Supermarkets", description: "Fast-moving POS billing, barcode prints, and automatic cash drawers management.", iconName: "Smartphone" },
  { id: "wholesale", name: "Wholesale & Trading", description: "Bulk order schemes, margin management, multi-pricing lists, and outstanding tracking.", iconName: "TrendingUp" },
  { id: "manufacturing", name: "Manufacturing & Assembly", description: "Bill of Materials (BOM), WIP tracking, production consumption, and overhead overheads costings.", iconName: "Layers" },
  { id: "pharma", name: "Pharmaceutical & Chemist", description: "Batch-wise tracking, drug license registration, automatic expiry dates alerts, and strip-wise sales.", iconName: "FileText" },
  { id: "medical", name: "Hospitals & Clinics", description: "Patient billing, general inventory, ambulance billing, and accounting integration.", iconName: "Shield" },
  { id: "hotels", name: "Hotels & Resorts", description: "Room service tariffs, restaurant billing, laundry items tracker, and banquets billing ledger.", iconName: "Users" },
  { id: "restaurants", name: "Restaurants & QSR", description: "Kitchen Order Tickets (KOT), recipe inventory consumption, and swipable POS displays.", iconName: "Zap" },
  { id: "automobile", name: "Automobile Dealerships", description: "Chassis and engine number tracking, garage work cards, mechanic commissions, and spares billing.", iconName: "Wrench" },
  { id: "ca-firms", name: "CA & Auditing Firms", description: "Multi-company audits, secure ledger controls, direct taxation exports, and xml voucher imports.", iconName: "Award" },
  { id: "schools", name: "Schools & Colleges", description: "Student fee receipts, transport expenses, library items, payroll cards, and general ledger.", iconName: "GraduationCap" },
  { id: "ngos", name: "NGOs & Trusts", description: "FCRA declarations, donor ledger certificates, receipt books, and fund allocation reports.", iconName: "Database" },
  { id: "textile", name: "Textile & Garments", description: "Size-color-design matrix inventory, set-wise pricing, and dynamic tailoring job logs.", iconName: "Layers" }
];

// Implementation Process Steps
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Analyze Requirements",
    description: "Our experts interview your team, mapping invoice volume, multi-branch needs, and tax complexities to establish the perfect suite.",
    iconName: "Users"
  },
  {
    step: 2,
    title: "Best Fit Recommendation",
    description: "We recommend either TallyPrime or BUSY, plus necessary cloud hosting or custom WhatsApp TDL additions, ensuring zero budget overflow.",
    iconName: "CheckCircle"
  },
  {
    step: 3,
    title: "Impeccable Installation",
    description: "We activate authorized licenses, configure GST parameters, map ledger hierarchies, and securely import historical client balances.",
    iconName: "Zap"
  },
  {
    step: 4,
    title: "Empowering Training",
    description: "We provide detailed, hands-on training for your operators, billers, and management to ensure optimal and rapid software adoption.",
    iconName: "GraduationCap"
  },
  {
    step: 5,
    title: "Continuous Priority Support",
    description: "With remote helpdesk tools, AMC, and phone lines, our experts stand by to assist during year-end splits or audits.",
    iconName: "Wrench"
  }
];

// FAQs Data
export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the difference between TallyPrime Silver and Gold licenses?",
    answer: "TallyPrime Silver is a single-user license meant for installation on one computer. TallyPrime Gold is a multi-user license that can be accessed by unlimited computers on the same Local Area Network (LAN), which is ideal for accounts department, sales teams, and directors.",
    category: "Licensing"
  },
  {
    id: "faq-2",
    question: "Do you provide Tally and BUSY demo sessions before buying?",
    answer: "Yes, absolutely! We provide free consultation and comprehensive live demo sessions (both online via Google Meet/AnyDesk or offline at our Bathinda office) to show how the software handles your specific business processes.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What is TSS in TallyPrime, and is it compulsory to renew it?",
    answer: "TSS stands for Tally Software Services. It is an annual subscription that grants access to product updates (such as new GST compliance rules), on-the-go mobile reports, automated e-invoicing/e-way bills, and multi-currency bank synchronization. While the core offline software continues to work without TSS, renewal is highly recommended to stay compliant and utilize remote services.",
    category: "Licensing"
  },
  {
    id: "faq-4",
    question: "How does Cloud ERP Hosting work for Tally and BUSY?",
    answer: "We host your customized software and data files on high-speed, secure, specialized cloud servers. Your staff gets a dedicated, encrypted virtual desktop link (RDP) on their computers, tablets, or phones. Whenever they input billing data, it updates instantly in real-time, allowing multi-branch coordination and work-from-home.",
    category: "Cloud"
  },
  {
    id: "faq-5",
    question: "Can we integrate automated WhatsApp messaging into our invoicing?",
    answer: "Yes, with our Custom WhatsApp API module (TDL for Tally or addon for BUSY), you can instantly dispatch invoice copies, payment reminders, and outstanding statements directly to your customers' WhatsApp numbers. It uses the official Meta Business Cloud API for 100% spam safety and reliable delivery.",
    category: "Customization"
  },
  {
    id: "faq-6",
    question: "How quickly do you resolve remote support tickets?",
    answer: "For critical business-halting emergencies (e.g., billing printer not responding, statutory tax calculation failure, database error during peak sales), our average response time is under 15 minutes. Our AMC customers enjoy priority routing on our support phone lines.",
    category: "Support"
  }
];

// Professional Testimonials Placeholder (as requested)
export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sardar Manpreet Singh",
    designation: "Managing Director",
    companyName: "Punjab Agro Industries & Distributors",
    industry: "Agriculture Trading & Distribution",
    rating: 5,
    comment: "BNB COMPUTERS migrated our bulky 8-year-old accounting database to Tally gold seamlessly. Their custom TDL module for agricultural mandi tax has reduced our paperwork by 80%. Exceptional support in Bathinda region!",
    avatarPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-2",
    name: "Dr. Aman Gupta",
    designation: "Finance Director",
    companyName: "Gupta Multispeciality Hospital",
    industry: "Healthcare & Pharmaceuticals",
    rating: 5,
    comment: "We switched our pharmaceutical retail chain and IPD billing to BUSY Enterprise. BNB Computers handled the installation, barcodes setup, and staff onboarding perfectly. Their BUSY on Cloud service works flawlessly.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-3",
    name: "Rajesh Bansal",
    designation: "Chief Accountant",
    companyName: "Bansal Metals & Manufacturing",
    industry: "Heavy Steel Manufacturing",
    rating: 5,
    comment: "Implementing WhatsApp outstanding reminders through BNB Computers has improved our collection cycle by 35%. Their annual maintenance contract (AMC) gives us complete peace of mind.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  }
];

// Blog Articles Array
export const blogArticles: BlogItem[] = [
  {
    id: "blog-1",
    title: "Understanding E-Invoicing Rules in India: A Complete Guide for MSMEs",
    slug: "guide-e-invoicing-india-msmes",
    excerpt: "With continuous regulatory updates, learn about the turnover thresholds, generating IRNs directly via TallyPrime, and maintaining flawless compliance.",
    content: "Under the goods and services tax (GST) framework, e-invoicing has become mandatory for businesses whose aggregate turnover exceeds certain limits. In this article, we break down how Indian MSMEs can easily adhere to this rule. Standard procedures require registering invoices with the Invoice Registration Portal (IRP) to generate a unique Invoice Reference Number (IRN) and a secure QR code. Generating these directly from TallyPrime or BUSY eliminates manual portal uploads and reduces invoice typing errors. By choosing a certified partner like BNB Computers, businesses in Bathinda and wider Punjab can get their configuration fine-tuned so e-invoices are created automatically with the click of a single button during standard voucher entry.",
    category: "GST & Compliance",
    tags: ["TallyPrime", "E-Invoicing", "GST India", "Compliance"],
    date: "July 15, 2026",
    readTime: "5 mins read",
    author: "BNB Technical Team",
    authorRole: "Senior Compliance Consultant",
    imagePlaceholder: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "blog-2",
    title: "Why Hosting Tally and BUSY on Cloud is a Game-Changer for Distant Branches",
    slug: "tally-busy-on-cloud-benefits",
    excerpt: "Discover how physical distance can be eliminated. Cloud hosting allows directors to monitor stock, and sales reps to bill clients from anywhere in the world.",
    content: "Many companies suffer from data discrepancies across branches because they use offline databases that only sync weekly. Transitioning to 'Tally on Cloud' or 'BUSY on Cloud' connects all inventory points and sales registers instantly. In our customized cloud ERP hosting setup at BNB Computers, we load your genuine licenses onto high-performance cloud nodes with redundant power. All your staff needs is a desktop shortcut or a mobile app to open their standard interface. Since all data resides in secure data centers, you get automatic backups every night and zero risk of physical hard drive damage or localized ransomware attacks. This enables business owners in Bathinda to run operations smoothly even when they travel.",
    category: "Cloud Computing",
    tags: ["Tally on Cloud", "BUSY on Cloud", "Cloud ERP", "Remote Work"],
    date: "July 08, 2026",
    readTime: "4 mins read",
    author: "BNB Technical Team",
    authorRole: "Infrastructure Engineer",
    imagePlaceholder: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-3",
    title: "How Automated WhatsApp Alerts Reduce Payment Outstanding Recovery Cycles",
    slug: "whatsapp-alerts-accounting-benefits",
    excerpt: "Stop chasing clients over manual phone calls. Explore how triggering automatic ledger balance statements directly onto customer WhatsApp can double cash flow.",
    content: "Cash flow is the lifeblood of any retail, wholesale, or distribution business. Yet, chasing clients for outstanding payments is time-consuming and often creates customer friction. Introducing customized WhatsApp integrations into TallyPrime or BUSY provides a smart, humble, and highly effective solution. With our authorized Meta API integration, you can dispatch automated outstanding reminders, ledger PDFs, and bill copies directly onto your client's mobile screen. Users can even set scheduled weekly ledger blasts. Businesses using BNB Computers' automation modules report a significant increase in collection speeds, as customers can easily review and pay their bills instantly.",
    category: "Business Automation",
    tags: ["WhatsApp Integration", "Tally Customization", "Cash Flow", "BUSY Addons"],
    date: "June 25, 2026",
    readTime: "3 mins read",
    author: "BNB Technical Team",
    authorRole: "Automation Architect",
    imagePlaceholder: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  }
];

// Events and Gallery
export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Tax & Accounting Titans Bathinda Seminar: Grand Gathering & Keynotes",
    type: "image",
    thumbnailUrl: img4058,
    mediaUrl: img4058,
    category: "Events",
    date: "July 2026"
  },
  {
    id: "gal-2",
    title: "Tally & BUSY Accounting Partners & Professional Leadership Assembly",
    type: "image",
    thumbnailUrl: img3942,
    mediaUrl: img3942,
    category: "Workshops",
    date: "July 2026"
  },
  {
    id: "gal-3",
    title: "Tax & Accounting Titans Conference: Award Ceremony & Honors",
    type: "image",
    thumbnailUrl: img3962,
    mediaUrl: img3962,
    category: "Training",
    date: "July 2026"
  }
];

// Reusable download links for support page
export const supportDownloads = [
  { name: "TallyPrime Setup (Latest Release)", size: "42.5 MB", version: "v5.0", url: "https://tallysolutions.com/download/" },
  { name: "BUSY Accounting Software Setup", size: "118.0 MB", version: "v21.0 Rel 6.8", url: "https://busy.in/download/" },
  { name: "AnyDesk Remote Control", size: "3.8 MB", version: "Latest Stable", url: "https://anydesk.com/en/downloads" },
  { name: "TeamViewer QuickSupport", size: "14.2 MB", version: "v15.x", url: "https://www.teamviewer.com/en/download/" },
  { name: "UltraViewer Remote Support", size: "3.5 MB", version: "Latest Stable", url: "https://www.ultraviewer.net/en/download.html" }
];
