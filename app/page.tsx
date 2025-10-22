"use client" // This component needs to be a client component to use framer-motion

import Link from "next/link"
import Image from "next/image"
import { useState } from "react" // Import useState for dialog state
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Import Card components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" // Import Dialog components
import { Twitter, Award, Speaker, Code, BookOpen, CheckCircle } from "lucide-react" // Import relevant icons
import { motion } from "framer-motion" // Import motion from framer-motion

// Define your project data here, extracted from the HTML
const projectsData = [
  {
    id: "mpl",
    title: "MPL",
    subtitle: { part1: "M", part2: "PL" },
    appIcon: "/images/MPLogo.jpeg",
    backgroundImage: "/images/MPLProduct.png",
    description:
      "Built and optimized core iOS experiences for MPL: faster app launches, responsive UI, observability, and real-time engagement features.",
    role: [
      "Reduced app launch time by 2s with parallel APIs, E‑Tag caching, and launch-time metrics.",
      "Improved responsiveness by fixing threading bugs, eliminating CA hitches, and adopting async/await.",
      "Integrated App Intents & Spotlight Search to index games for better discovery and re‑engagement.",
    ],
    technologies: ["Swift", "Async/Await", "WidgetKit", "Spotlight", "App Intents", "WebP", "Caching"],
    appStoreLink: "https://apps.apple.com/us/app/bingo-solitaire-rummy-mpl/id1447849626",
  },
  {
    id: "cashi",
    title: "Cashi",
    subtitle: { part1: "Ca", part2: "shi" },
    appIcon: "/images/CashiAppIcon.png",
    backgroundImage: "/images/CashiProductImage.png",
    description: `Built comprehensive fintech features for Cashi including wallet management, payments, loyalty rewards, and micro-credit integration with focus on security and scalability.`,
    role: [
      "Built Home Dashboard UI in SwiftUI with Dependency Injection; scalable end-to-end module.",
      "Implemented Tempo server-driven promos/ads; enabled dynamic updates without releases.",
      "Owned wallet & payments: cash-in/out, scanner-based payments/remittances, wallet & coupons, bill pay.",
      "Delivered loyalty engine (5–30% cashback & rewards) boosting retention.",
      "Secured flows with Keychain, Secure Enclave, biometrics, SSL pinning, PCI-DSS, EMVCo, 3DS2.",
    ],
    technologies: ["SwiftUI", "Combine", "Keychain", "Secure Enclave", "PCI-DSS", "Splunk", "Dependency Injection"],
    appStoreLink: "https://apps.apple.com/us/app/cashi/id1383306099",
  },
  {
    id: "walmart",
    title: "Walmart",
    subtitle: { part1: "Wal", part2: "mart" },
    appIcon: "/images/WalmartAppIcon.png", // Updated to use provided image
    backgroundImage: "/images/walmartApp.png", // Updated to use provided image
    description: `I am Working as an SDE-III on this big scale Walmart Product, which is providing the ultimate shopping experience & convenience to the user. From curbside pickup and express delivery to fast shipping, the app offers a variety of options to get your items when and where you want them. With time-saving features such as store maps, real-time order tracking, and reordering essentials, The Walmart app is an innovative solution that provides customers with an easy and convenient way to shop for everything they need. The app offers multiple options for obtaining items, including curbside pickup, express delivery, and fast shipping. It also features time-saving features like store maps, real-time order tracking, reordering essentials, shopping lists, and barcode scanning. The app also includes a pharmacy section for managing and refilling prescriptions. For Walmart+ members, the app offers exclusive features such as Scan & Go and discounted fuel prices.`,
    role: [
      "Created Splunk dashboards to track adoption & transaction health.",
      "Built a centralised Analytics Manager (SPM) and modularised it for platform-wide adoption.",
      "Achieved 93% unit test coverage, cutting regression issues by 70%.",
      "Reduced crash rate from 6% → 0.5% via custom crash/launch tracking.",
      "Created a Deep Linking Testing App, boosting QA efficiency 3×.",
      "Integrated Apollo GraphQL, improving network performance by 25%.",
      "Elevated accessibility compliance to 95+ with custom semantic traits and full VoiceOver support.",
      "Mentored 4+ engineers and conducted biweekly Swift code reviews.",
      "Introduced Tuist to automate Xcode setup and improve scalability and MetricKit to analyse App Launch.",
    ],
    products: [
      {
        name: "Cashi App",
        description:
          "Built comprehensive fintech features including wallet management, payments, loyalty rewards, and micro-credit integration.",
        responsibilities: [
          "Built Home Dashboard UI in SwiftUI with Dependency Injection; scalable end-to-end module.",
          "Implemented Tempo server-driven promos/ads; enabled dynamic updates without releases.",
          "Owned wallet & payments: cash-in/out, scanner-based payments/remittances, wallet & coupons, bill pay.",
          "Delivered loyalty engine (5–30% cashback & rewards) boosting retention.",
          "Secured flows with Keychain, Secure Enclave, biometrics, SSL pinning, PCI-DSS, EMVCo, 3DS2.",
        ],
      },
      {
        name: "Walmart Shopping App",
        description:
          "Core e-commerce platform providing ultimate shopping experience with curbside pickup, express delivery, and fast shipping.",
        responsibilities: [
          "Delivered key e-comm modules (Cart, Returns, W+) in SwiftUI + Observable.",
          "Owned wallet & payments: cash-in/out (Walmart/Sam's/Bodega), scanner-based payments/remittances, wallet & coupons, bill pay, recharges, subscriptions, groceries, online checkout.",
          "Delivered loyalty engine (5–30% cashback & rewards) boosting retention.",
          "Secured flows with Keychain, Secure Enclave, biometrics, SSL pinning, PCI-DSS, EMVCo, 3DS2.",
        ],
      },
    ],
    technologies: [
      "SwiftUI",
      "Observable",
      "Apollo GraphQL",
      "Swift Package Manager",
      "Tuist",
      "MetricKit",
      "Accessibility",
      "XCTest",
    ],
    appStoreLink: "https://www.walmart.com/cp/walmart-app/1087865",
  },
  {
    id: "nykaa-beauty",
    title: "Nykaa Beauty",
    subtitle: { part1: "Ny", part2: "kaa Beauty" },
    appIcon: "/images/NykaaApp.png", // Updated to use provided image
    backgroundImage: "/images/NykaaBackground.png", // Updated to use provided image
    description: `I was the lead and solo Engineer of Order Detail Module and order product for Nykaa Beauty, Nykaa Fashion, Nykaa Man. Nykaa is a leading online beauty and wellness destination for men and women in India. I was responsible for adding new features to the product detail page of the app.`,
    role: [
      "Developed PDP Module using SPM Plugin, across Nykaa Beauty, Fashion and Man with single code base.",
      "Built and automated CI/CD pipelines with Jenkins, decreasing release cycle by 50%.",
      "Developed Try It On feature using RealityKit, Vision Framework, ARKit, increasing user engagement.",
      "Implemented compositional layouts & diffable data sources for adaptive UI.",
    ],
    technologies: [
      "Swift Package Manager",
      "Jenkins",
      "RealityKit",
      "Vision Framework",
      "ARKit",
      "Compositional Layout",
      "MVVM with Coordinator",
    ],
    appStoreLink: "https://apps.apple.com/in/app/nykaa-makeup-beauty-shopping/id1022363908",
  },
  {
    id: "nykaa-fashion",
    title: "Nykaa Fashion",
    subtitle: { part1: "Ny", part2: "kaa Fashion" },
    appIcon: "/images/NykaaFashion.png",
    backgroundImage: "/images/NykaaBackground.png",
    description: `Fashion shopping app part of the Nykaa ecosystem, sharing the same PDP module architecture across all Nykaa apps.`,
    role: [
      "Developed unified PDP Module using SPM Plugin across Nykaa Beauty, Fashion and Man.",
      "Implemented compositional layouts & diffable data sources for adaptive UI.",
      "Built automated CI/CD pipelines with Jenkins.",
    ],
    technologies: ["Swift Package Manager", "Compositional Layout", "MVVM with Coordinator", "Jenkins"],
    appStoreLink: "https://apps.apple.com/in/app/nykaa-fashion-shopping-app/id1439872423",
  },
  {
    id: "nykaa-man",
    title: "Nykaa Man",
    subtitle: { part1: "Ny", part2: "kaa Man" },
    appIcon: "/images/NykaaMan.jpg",
    backgroundImage: "/images/NykaaManProductImage.jpg",
    description: `Men's shopping app part of the Nykaa ecosystem, featuring the same unified architecture and PDP module.`,
    role: [
      "Developed unified PDP Module using SPM Plugin across Nykaa Beauty, Fashion and Man.",
      "Implemented compositional layouts & diffable data sources for adaptive UI.",
      "Built automated CI/CD pipelines with Jenkins.",
    ],
    technologies: ["Swift Package Manager", "Compositional Layout", "MVVM with Coordinator", "Jenkins"],
    appStoreLink: "https://apps.apple.com/in/app/nykaa-man-mens-shopping-app/id1423089781",
  },
  {
    id: "casadigi",
    title: "CasaDigi",
    subtitle: { part1: "Casa", part2: "Digi" },
    appIcon: "/images/CasaDigiLogo.png",
    backgroundImage: "/images/CasaDigiProductImage.jpg",
    description: `iPad app for luxury hotel and villa management, part of the DigiValet ecosystem providing concierge services and amenities booking.`,
    role: [
      "Built CasaDigi(iPad), Digivalet(iPhone & iPad) & Digivalet TV apps from scratch with UIKit + SwiftUI.",
      "Migrated 100% of legacy apps from Objective-C to Swift, improving performance and maintainability.",
      "Created a ThemeManager SDK (Swift Package Manager) for consistent theming across apps.",
    ],
    technologies: ["UIKit", "SwiftUI", "Swift Package Manager", "ThemeManager SDK", "iPad Development"],
    appStoreLink: "https://apps.apple.com/in/app/casadigi-4-0/id1626837705",
  },
  {
    id: "digivalet",
    title: "DigiValet Residences",
    subtitle: { part1: "Digi", part2: "Valet Residences" },
    appIcon: "/images/AppICon.png",
    backgroundImage: "/images/mock.png", // Updated to use provided image
    description: `I was lead Engineer for this big scale product. DigiValet Residences is an all-in-one app for residents of luxury hotels and villas, providing quick access to all concierge-related services, F&B services and amenities booking offered by the property. The app is built on a cloud platform, allowing for secure login and user profiles for residents, staff, family members, pets, vehicles, and kids.`,
    role: [
      "Built CasaDigi(iPad), Digivalet(iPhone & iPad) & Digivalet TV apps from scratch with UIKit + SwiftUI.",
      "Migrated 100% of legacy apps from Objective-C to Swift, improving performance and maintainability.",
      "Delivered WatchOS & WidgetKit features for smart home automation in DigiValet apps.",
      "Developed MetalKit UI animations to elevate luxury hotel app experiences.",
      "Created a ThemeManager SDK (Swift Package Manager) for consistent theming across apps.",
    ],
    technologies: [
      "UIKit",
      "SwiftUI",
      "WatchOS",
      "WidgetKit",
      "MetalKit",
      "Swift Package Manager",
      "Core Haptics",
      "App Clips",
    ],
    appStoreLink: "https://apps.apple.com/in/app/digivalet-office/id1638466482",
  },
  {
    id: "digivalet-tv",
    title: "DigiValet TV",
    subtitle: { part1: "Digi", part2: "Valet TV" },
    appIcon: "/images/DigivaletTvLogo.png",
    backgroundImage: "/images/DigivaletProductImage.png",
    description: `TV app for luxury hotels providing entertainment and concierge services through television interface.`,
    role: [
      "Built Digivalet TV app from scratch with UIKit + SwiftUI.",
      "Implemented compositional layouts, Combine, Core Haptics, App Clips, Widgets, Siri & Spotlight.",
    ],
    technologies: ["tvOS", "UIKit", "SwiftUI", "Compositional Layout", "Combine", "Siri", "Spotlight"],
    appStoreLink: "https://apps.apple.com/in/app/digivalet-tv/id1484169065",
  },
  {
    id: "flexiasia",
    title: "Flexiasia",
    subtitle: { part1: "Flexi", part2: "asia" },
    appIcon: "/images/AppIConFlexiasia.jpg",
    backgroundImage: "/images/flexiasiamock.png",
    description: `I am the sole iOS developer for Flexiasia, an room booking application in hotels. This application is developed on iOS and Android platforms. This is an IoT functional app and in this application we have three phases: manager, user, and technician. Two phases (Manager and user) are developed in iOS. In this app, we have used Sinch for app-to-app calling and integrated automated door unlock functionality with the help of Bluetooth.`,
    role: [
      "Developed Aircon & Flexiasia apps with VoIP features using CallKit + Sinch.",
      "Integrated automated door unlock functionality with Bluetooth.",
      "Built VoIP-enabled apps using CallKit + Sinch.",
    ],
    technologies: ["CallKit", "Sinch", "VoIP", "Bluetooth", "Core Bluetooth", "IoT Integration"],
    appStoreLink: "https://www.hitek.ai/flexi-guest-app/",
  },
  {
    id: "kashish",
    title: "Kashish Feedback",
    subtitle: { part1: "Kashish", part2: "" },
    appIcon: "/images/KashishIcon.png",
    backgroundImage: "/images/KashishGlossy.png",
    description: `I am the sole iOS developer for Kashish Feedback. Kashish Feedback app is intended to collect your review for our service so that we can increase our quality of service up to your expectations. Built the app from scratch to release. Focused on building the UI and logic for collecting user feedback through a list of questionnaire show using quiz UI module.`,
    role: ["Created and published Kashish Shopping iPad app from scratch using UIKit, delivering smooth experience."],
    technologies: ["Swift", "Push Notifications", "MVVM", "Core Animations", "UIKit", "iPad Development"],
    appStoreLink: "https://apps.apple.com/us/app/kasheesh/id6444465357",
  },
  {
    id: "hi-cabs",
    title: "Hi Cabs",
    subtitle: { part1: "Hi", part2: "Cabs" },
    appIcon: "/hi-cabs-taxi-app-icon.png",
    backgroundImage: "/hi-cabs-taxi-booking-app-interface.png",
    description: `Developed comprehensive taxi booking platform for Hi Cabs with real-time tracking, payment integration, and driver management system.`,
    role: [
      "Built real-time GPS tracking and route optimization features",
      "Implemented secure payment gateway integration with multiple options",
      "Developed driver-passenger matching algorithm for efficient bookings",
      "Created admin dashboard for fleet management and analytics",
    ],
    technologies: ["Swift", "MapKit", "Core Location", "Firebase", "Stripe"],
    appStoreLink: "https://www.hicabs.com.mt/welcome-to-hicabs/",
  },
  {
    id: "aircon",
    title: "Aircon Pro",
    subtitle: { part1: "Air", part2: "con" },
    appIcon: "/air-conditioner-remote-control-app-icon.png",
    backgroundImage: "/air-conditioner-remote-control-app-interface.png",
    description: `Developed universal AC remote control app with smart features, scheduling, and energy monitoring capabilities.`,
    role: [
      "Built universal IR remote control functionality for 1000+ AC models",
      "Implemented smart scheduling and automation features",
      "Added energy consumption tracking and optimization suggestions",
      "Created intuitive UI for temperature and mode controls",
    ],
    technologies: ["Swift", "Core Data", "IR Communication", "WidgetKit"],
    appStoreLink: "https://apps.apple.com/in/app/air-conditioner-pro-ac-remote/id6657988661",
  },
]

// Animation variants for common elements
const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const slideInLeftVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const slideInRightVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function Component() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof projectsData)[0] | null>(null) // State to manage selected product for dialog

  const contactInfo = {
    phone1: "+91 6265834002",
    email1: "somendra.sy@gmail.com",
    email2: "somendra007.sy@gmail.com",
    linkedin: "https://linkedin.com/in/somendrayadav/",
    twitter: "https://twitter.com/Somendra_Dev",
    github: "https://github.com/SomuYadav",
    medium: "https://medium.com/@somuyadav",
    stackoverflow: "https://stackoverflow.com/users/14046295/somuyadav",
    resume: "/placeholder-resume.pdf", // Keep placeholder for now
  }

  const heroSection = (
    <section id="profile" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="relative mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
            <Image src="/images/profile.jpg" alt="Somu Yadav" fill className="object-cover" priority />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">Somu Yadav</h1>
            <div className="mt-2">
              <p className="text-xl text-muted-foreground sm:text-2xl">iOS Engineer</p>
            </div>
          </div>
          <div className="space-x-4">
            <Button variant="primary" size="lg">
              <a href="#products">View My Work</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )

  const openSourceContributions = [
    {
      name: "SKActivityIndicatorView",
      url: "https://github.com/SachK13/SKActivityIndicatorView",
      description: "Custom activity indicator view for iOS applications",
    },
    {
      name: "AppauthWrapper",
      url: "https://github.com/SomuYadav/AppauthWrapper",
      description: "OAuth wrapper for iOS applications",
    },
    {
      name: "SwiftUI2",
      url: "https://github.com/SomuYadav/SwiftUI2",
      description: "SwiftUI multiplatform design examples",
    },
    {
      name: "iTunes ProgrammaticUI",
      url: "https://github.com/SomuYadav/iTunes-ProgrammaticUI-UICompositionalLayout-NSDiffableDataSource-",
      description: "iTunes app clone with compositional layout and diffable data source",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "Employee of the Year",
      description: "Recognized at Digivalet (2019) and Dexbytes (2020) for delivering high-impact features.",
    },
    {
      icon: Speaker,
      title: "Featured Speaker",
      description: "Presented on Compositional Layout & Combine at Indore Swift Meetup (2020).",
    },
    {
      icon: Code,
      title: "Open Source Contributor",
      description: "Actively contributed to libraries like SKActivityIndicatorView and AppAuthWrapper.",
    },
    {
      icon: BookOpen,
      title: "Medium Author",
      description: "Published over few articles focused on Swift, Combine, SwiftUI, and mobile architecture.",
    },
    {
      icon: CheckCircle,
      title: "High Quality Delivery",
      description: "Delivered projects to millions of users with <2% crash rate and 90%+ test coverage.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Rajiv Gandhi Technical University, Indore",
      years: "2014 – 2018",
      details: "CGPA: 7.5",
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "Govt. Higher Secondary School, Hoshangabad",
      years: "",
      details: "85%",
    },
    {
      degree: "Courses",
      institution: "",
      years: "",
      details: "Attended WWDC (2017-2018) & IIT Madras 2017 AI and DSA Certification Program",
    },
  ]

  const skills = {
    languages: ["Swift", "Objective-C", "Java", "C++", "Python"],
    frameworks: [
      "UIKit",
      "SwiftUI",
      "Combine",
      "Core Data",
      "CallKit",
      "RxSwift",
      "ARKit",
      "WidgetKit",
      "VoIP",
      "MetalKit",
    ],
    architectures: ["MVVM", "VIPER", "MVC", "MVP", "MVVM-Coordinator"],
    designPatterns: ["Builder", "Adapter", "Singleton", "Facade", "Proxy", "State", "Coordinator"],
    tools: [
      "Git",
      "CircleCI",
      "Jenkins",
      "Bitbucket",
      "Firebase",
      "Tuist",
      "Splunk",
      "OpenObserve",
      "Xcode Instruments",
    ],
    apis: ["GraphQL", "REST", "Bluetooth (BLE)", "APNS", "FCM"],
    testing: ["XCTest", "XCUITest", "A/B Testing", "Snapshot Testing"],
    ui: ["Compositional Layout", "Split View", "Adaptive UI", "Accessibility"],
    databaseStorage: ["MySQL", "SQLite"],
  }

  const professionalExperience = [
    {
      title: "SDE-3 iOS",
      company: "MPL (Mobile Premier League)",
      location: "Bangalore",
      years: "JUNE 2025 — Discontinued (Govt. laws)",
      logo: "/images/MPLogo.jpeg",
      responsibilities: [
        "Reduced app launch time by 2s with parallel APIs, E‑Tag caching, and launch-time metrics.",
        "Improved responsiveness by fixing threading bugs, eliminating CA hitches, and adopting async/await",
        "Integrated App Intents & Spotlight Search, indexing games for better discovery and re-engagement.",
        "Reduced app size by 30 MB with WebP, asset catalogs (1x/2x/3x), and binary/resource pruning.",
        "Added Live Activities & Dynamic Island for real-time match score updates.",
        "Boosted API performance through batching, caching, and prefetching strategies.",
        "Strengthened observability with custom performance dashboards and runtime profiling.",
        "Ensured smooth 60fps gameplay UI while optimizing for energy efficiency and memory.",
      ],
    },
    {
      title: "IN3 -> SSE - iOS",
      company: "Walmart",
      location: "Bangalore",
      years: "JAN 2022 - June 2025",
      logo: "/images/WalmartAppIcon.png",
      responsibilities: [
        "Created Splunk dashboards to track adoption & transaction health.",
        "Built a centralised Analytics Manager (SPM) and modularised it for platform-wide adoption.",
        "Achieved 93% unit test coverage, cutting regression issues by 70%.",
        "Reduced crash rate from 6% → 0.5% via custom crash/launch tracking.",
        "Created a Deep Linking Testing App, boosting QA efficiency 3×.",
        "Integrated Apollo GraphQL, improving network performance by 25%.",
        "Elevated accessibility compliance to 95+ with custom semantic traits and full VoiceOver support.",
        "Mentored 4+ engineers and conducted biweekly Swift code reviews.",
        "Introduced Tuist to automate Xcode setup and improve scalability and MetricKit to analyse App Launch.",
      ],
      products: [
        {
          name: "Cashi App",
          description:
            "Built comprehensive fintech features including wallet management, payments, loyalty rewards, and micro-credit integration.",
          responsibilities: [
            "Built Home Dashboard UI in SwiftUI with Dependency Injection; scalable end-to-end module.",
            "Implemented Tempo server-driven promos/ads; enabled dynamic updates without releases.",
            "Owned wallet & payments: cash-in/out, scanner-based payments/remittances, wallet & coupons, bill pay.",
            "Delivered loyalty engine (5–30% cashback & rewards) boosting retention.",
            "Secured flows with Keychain, Secure Enclave, biometrics, SSL pinning, PCI-DSS, EMVCo, 3DS2.",
          ],
        },
        {
          name: "Walmart Shopping App",
          description:
            "Core e-commerce platform providing ultimate shopping experience with curbside pickup, express delivery, and fast shipping.",
          responsibilities: [
            "Delivered key e-comm modules (Cart, Returns, W+) in SwiftUI + Observable.",
            "Owned wallet & payments: cash-in/out (Walmart/Sam's/Bodega), scanner-based payments/remittances, wallet & coupons, bill pay, recharges, subscriptions, groceries, online checkout.",
            "Delivered loyalty engine (5–30% cashback & rewards) boosting retention.",
            "Secured flows with Keychain, Secure Enclave, biometrics, SSL pinning, PCI-DSS, EMVCo, 3DS2.",
          ],
        },
      ],
    },
    {
      title: "SSE - iOS",
      company: "Nykaa",
      location: "Gurgaon",
      years: "OCT 2021 - JAN 2022",
      logo: "/images/NykaaApp.png",
      responsibilities: [
        "Developed PDP Module using SPM Plugin, across Nykaa Beauty, Fashion and Man with single code base.",
        "Built and automated CI/CD pipelines with Jenkins, decreasing release cycle by 50%.",
        "Developed Try It On feature using RealityKit, Vision Framework, ARKit, increasing user engagement.",
        "Implemented compositional layouts & diffable data sources for adaptive UI.",
      ],
    },
    {
      title: "Product Engineer (iOS)",
      company: "DigiValet",
      location: "Indore",
      years: "SEPT 2020 - AUG 2021",
      logo: "/images/AppICon.png",
      responsibilities: [
        "Built CasaDigi(iPad), Digivalet(iPhone & iPad) & Digivalet TV apps from scratch with UIKit + SwiftUI.",
        "Migrated 100% of legacy apps from Objective-C to Swift, improving performance and maintainability.",
        "Delivered WatchOS & WidgetKit features for smart home automation in DigiValet apps.",
        "Developed MetalKit UI animations to elevate luxury hotel app experiences.",
        "Created a ThemeManager SDK (Swift Package Manager) for consistent theming across apps.",
        "Fixed HiTech scroll performance issues, ensuring seamless and responsive scrolling.",
        "Implemented compositional layouts, Combine, Core Haptics, App Clips, Widgets, Siri & Spotlight.",
      ],
    },
    {
      title: "SE(iOS)",
      company: "Dexbytes Infotech",
      location: "Indore",
      years: "OCT 2018 - SEPT 2020 (2 Years - Full Time), 8 Months (Mar 2018) - Intern",
      logo: "/images/DexbytesInfotechLogo.png",
      responsibilities: [
        "Developed Aircon & Flexiasia apps with VoIP features using CallKit + Sinch.",
        "Integrated Stripe payments and built scalable network layers with Delegate + MVC.",
        "Created & published Kashish Shopping iPad app from scratch using UIKit, delivering smooth experience.",
        "Built Hi-Cabs app (1M+ users) with real-time tracking and location mapping for ride management.",
        "Engineered Swift modules for API handling and offline caching, improving performance and reusability.",
        "Implemented features like in-app chat, CoreML intelligence, Speech Recognition, and Core Bluetooth.",
      ],
    },
  ]

  const hobbies = ["Watching TV Series", "Dance", "Bike Riding", "Photography & Billiards", "Tech Blogging on iOS"]

  return (
    <div className="flex min-h-screen flex-col items-center bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto flex w-full max-w-4xl items-center justify-between p-4 py-4">
          <Link href="#" className="text-2xl font-bold tracking-tight" prefetch={false}>
            Somu Yadav
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#profile" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Profile
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Products
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Skills
            </Link>
            <Link
              href="#achievements"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Achievements
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Education
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex bg-transparent hover:bg-gray-100" asChild>
            <Link href={contactInfo.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
        </div>
      </motion.header>

      <main className="flex w-full flex-col items-center">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative flex w-full items-center justify-center py-20 md:py-32 bg-gradient-to-b from-background to-background-end"
        >
          <div className="container mx-auto flex max-w-4xl flex-col items-center px-4 text-center relative z-10">
            <motion.h1
              initial={fadeInVariants.initial}
              animate={fadeInVariants.animate}
              transition={{ ...fadeInVariants.transition, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground"
            >
              <span className="text-primary">Somu </span>
              <span className="text-foreground">Yadav</span>
            </motion.h1>
            <motion.h2
              initial={fadeInVariants.initial}
              animate={fadeInVariants.animate}
              transition={{ ...fadeInVariants.transition, delay: 0.4 }}
              className="mt-1 text-2xl text-muted-foreground md:text-3xl"
            >
              iOS Engineer
            </motion.h2>
            <motion.div
              initial={fadeInVariants.initial}
              animate={fadeInVariants.animate}
              transition={{ ...fadeInVariants.transition, delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
                <Link href="#products">View My Work</Link>
              </Button>
              <Button variant="outline" asChild className="shadow-md hover:shadow-lg transition-shadow bg-transparent">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Profile Section (formerly About) */}
        <section id="profile" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Profile</h2>
          <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl">
            Result-driven iOS engineer with 7+ years of experience in architecting, building, and maintaining scalable
            mobile applications across iOS, iPadOS, tvOS, and watchOS platforms. Proven expertise in E-commerce,
            Fintech, Healthcare, and Real Estate domains. Known for delivering high-quality features with a strong focus
            on performance, accessibility, and user experience. Recognized speaker, mentor, and open-source contributor.
          </p>
        </section>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Open Source Contributions Section - moved after profile */}
        <section id="open-source" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Open Source Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {openSourceContributions.map((contribution, index) => (
              <div
                key={index}
                className="bg-card-gradient p-4 rounded-xl shadow-subtle-float hover:shadow-lg transition-shadow duration-300 border"
              >
                <h4 className="text-lg font-semibold text-primary mb-2">
                  <Link href={contribution.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {contribution.name}
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground">{contribution.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Products Section (formerly Projects) */}
        <section id="products" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {projectsData.map((project, index) => {
              // Determine the theme classes based on project ID
              const themeClasses = "bg-card-gradient text-card-foreground"
              let titleColorClass = "text-primary"
              let buttonBgClass = "bg-primary hover:bg-primary/90"

              switch (project.id) {
                case "walmart":
                  titleColorClass = "text-walmart-primary"
                  buttonBgClass = "bg-walmart-primary hover:bg-walmart-primary/90"
                  break
                case "nykaa-beauty":
                  titleColorClass = "text-nykaa-beauty-primary"
                  buttonBgClass = "bg-nykaa-beauty-primary hover:bg-nykaa-beauty-primary/90"
                  break
                case "nykaa-fashion":
                  titleColorClass = "text-nykaa-fashion-primary"
                  buttonBgClass = "bg-nykaa-fashion-primary hover:bg-nykaa-fashion-primary/90"
                  break
                case "nykaa-man":
                  titleColorClass = "text-nykaa-man-primary"
                  buttonBgClass = "bg-nykaa-man-primary hover:bg-nykaa-man-primary/90"
                  break
                case "casadigi":
                case "digivalet":
                case "digivalet-office":
                case "digivalet-tv":
                  titleColorClass = "text-digivalet-primary"
                  buttonBgClass = "bg-digivalet-primary hover:bg-digivalet-primary/90"
                  break
                case "flexiasia":
                  titleColorClass = "text-flexiasia-primary"
                  buttonBgClass = "bg-flexiasia-primary hover:bg-flexiasia-primary/90"
                  break
                case "kashish":
                  titleColorClass = "text-kashish-primary"
                  buttonBgClass = "bg-kashish-primary hover:bg-kashish-primary/90"
                  break
                case "mpl":
                  titleColorClass = "text-mpl-primary"
                  buttonBgClass = "bg-mpl-primary hover:bg-mpl-primary/90"
                  break
                case "cashi":
                  titleColorClass = "text-cashi-primary"
                  buttonBgClass = "bg-cashi-primary hover:bg-cashi-primary/90"
                  break
                case "hi-cabs":
                  titleColorClass = "text-hi-cabs-primary"
                  buttonBgClass = "bg-hi-cabs-primary hover:bg-hi-cabs-primary/90"
                  break
                case "aircon":
                  titleColorClass = "text-aircon-primary"
                  buttonBgClass = "bg-aircon-primary hover:bg-aircon-primary/90"
                  break
                default:
                  // Fallback to default primary theme
                  break
              }

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Dialog onOpenChange={(open) => !open && setSelectedProduct(null)}>
                    <DialogTrigger asChild>
                      <Card
                        className={`h-full flex flex-col items-center text-center p-0 rounded-xl shadow-subtle-float transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg border ${themeClasses} cursor-pointer`}
                        onClick={() => setSelectedProduct(project)}
                      >
                        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                          <Image
                            src={project.backgroundImage || "/placeholder.svg"}
                            fill
                            style={{ objectFit: "cover" }}
                            alt={`${project.title} App Screenshot`}
                            className="rounded-t-xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                        </div>
                        <div className="relative -mt-12 z-10">
                          <Image
                            src={project.appIcon || "/placeholder.svg"}
                            width={80}
                            height={80}
                            alt={`${project.title} App Icon`}
                            className="rounded-2xl shadow-lg border-4 border-card-foreground/10"
                          />
                        </div>
                        <CardHeader className="pt-3 pb-2">
                          <CardTitle className={`text-xl font-bold ${titleColorClass}`}>
                            {project.subtitle.part1}
                            {project.subtitle.part2}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-between p-4 pt-0 flex-grow">
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                          <Button
                            asChild
                            className={`mt-auto shadow-md hover:shadow-lg transition-shadow ${buttonBgClass}`}
                          >
                            <Link href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                              View on App Store
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    {/* DialogContent is rendered outside the map, but its content depends on selectedProduct */}
                  </Dialog>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Product Detail Dialog */}
        <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-6 bg-card-gradient shadow-lg border rounded-xl">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle
                    className={`text-3xl font-bold ${
                      selectedProduct.id === "walmart"
                        ? "text-walmart-primary"
                        : selectedProduct.id === "nykaa-beauty"
                          ? "text-nykaa-beauty-primary"
                          : selectedProduct.id === "nykaa-fashion"
                            ? "text-nykaa-fashion-primary"
                            : selectedProduct.id === "nykaa-man"
                              ? "text-nykaa-man-primary"
                              : selectedProduct.id === "digivalet" ||
                                  selectedProduct.id === "casadigi" ||
                                  selectedProduct.id === "digivalet-office" ||
                                  selectedProduct.id === "digivalet-tv"
                                ? "text-digivalet-primary"
                                : selectedProduct.id === "flexiasia"
                                  ? "text-flexiasia-primary"
                                  : selectedProduct.id === "kashish"
                                    ? "text-kashish-primary"
                                    : selectedProduct.id === "mpl"
                                      ? "text-mpl-primary"
                                      : selectedProduct.id === "cashi"
                                        ? "text-cashi-primary"
                                        : selectedProduct.id === "hi-cabs"
                                          ? "text-hi-cabs-primary"
                                          : selectedProduct.id === "aircon"
                                            ? "text-aircon-primary"
                                            : "text-primary"
                    }`}
                  >
                    {selectedProduct.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground text-base mt-2">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 mb-6">
                  <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl">
                    <Image
                      src={selectedProduct.backgroundImage || "/placeholder.svg"}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={`${selectedProduct.title} App Screenshot`}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  {selectedProduct.role && selectedProduct.role.length > 0 && (
                    <div>
                      <h5 className="text-lg font-semibold text-foreground mb-2">My Role:</h5>
                      <ul className="list-inside list-disc space-y-1 text-muted-foreground text-sm max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                        {selectedProduct.role.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProduct.technologies && selectedProduct.technologies.length > 0 && (
                    <div>
                      <h5 className="text-lg font-semibold text-foreground mb-2">Technologies:</h5>
                      <ul className="list-inside list-disc space-y-1 text-muted-foreground text-sm max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                        {selectedProduct.technologies.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex justify-center">
                  <Button
                    asChild
                    className={`w-full md:w-auto shadow-md hover:shadow-lg transition-shadow ${
                      selectedProduct.id === "walmart"
                        ? "bg-walmart-primary hover:bg-walmart-primary/90"
                        : selectedProduct.id === "nykaa-beauty"
                          ? "bg-nykaa-beauty-primary hover:bg-nykaa-beauty-primary/90"
                          : selectedProduct.id === "nykaa-fashion"
                            ? "bg-nykaa-fashion-primary hover:bg-nykaa-fashion-primary/90"
                            : selectedProduct.id === "nykaa-man"
                              ? "bg-nykaa-man-primary hover:bg-nykaa-man-primary/90"
                              : selectedProduct.id === "digivalet" ||
                                  selectedProduct.id === "casadigi" ||
                                  selectedProduct.id === "digivalet-office" ||
                                  selectedProduct.id === "digivalet-tv"
                                ? "bg-digivalet-primary hover:bg-digivalet-primary/90"
                                : selectedProduct.id === "flexiasia"
                                  ? "bg-flexiasia-primary hover:bg-flexiasia-primary/90"
                                  : selectedProduct.id === "kashish"
                                    ? "bg-kashish-primary hover:bg-kashish-primary/90"
                                    : selectedProduct.id === "mpl"
                                      ? "bg-mpl-primary hover:bg-mpl-primary/90"
                                      : selectedProduct.id === "cashi"
                                        ? "bg-cashi-primary hover:bg-cashi-primary/90"
                                        : selectedProduct.id === "hi-cabs"
                                          ? "bg-hi-cabs-primary hover:bg-hi-cabs-primary/90"
                                          : selectedProduct.id === "aircon"
                                            ? "bg-aircon-primary hover:bg-aircon-primary/90"
                                            : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    <Link href={selectedProduct.appStoreLink} target="_blank" rel="noopener noreferrer">
                      View on App Store
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Technical Skills Section */}
        <section id="skills" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="bg-card-gradient p-6 rounded-xl shadow-subtle-float hover:shadow-lg transition-shadow duration-300 border"
              >
                <h3 className="text-xl font-semibold text-primary mb-4 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}:
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <li
                      key={i}
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Key Achievements Section (Front Dashboard) */}
        <section id="achievements" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Key Achievements</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="h-full flex flex-col items-center text-center p-6 shadow-subtle-float hover:shadow-lg transition-shadow duration-300 border bg-card-gradient"
              >
                <CardHeader className="pb-4 text-center">
                  <achievement.icon className="h-10 w-10 text-primary mb-2 mx-auto" />{" "}
                  {/* Added mx-auto for block-level centering */}
                  <CardTitle className="text-xl font-semibold">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm flex-grow">{achievement.description}</CardContent>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Professional Experience Section */}
        <section id="experience" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Professional Experience</h2>
          <div className="w-full space-y-8">
            {professionalExperience.map((experience, index) => {
              let experienceTitleColorClass = "text-primary"
              let bulletColorClass = "bg-primary"

              switch (experience.company.toLowerCase()) {
                case "mpl":
                case "mobile premier league":
                case "mpl (mobile premier league)":
                  experienceTitleColorClass = "text-mpl-primary"
                  bulletColorClass = "bg-mpl-primary"
                  break
                case "walmart":
                  experienceTitleColorClass = "text-walmart-primary"
                  bulletColorClass = "bg-walmart-primary"
                  break
                case "nykaa":
                  experienceTitleColorClass = "text-nykaa-primary"
                  bulletColorClass = "bg-nykaa-primary"
                  break
                case "digivalet":
                  experienceTitleColorClass = "text-digivalet-primary"
                  bulletColorClass = "bg-digivalet-primary"
                  break
                case "dexbytes":
                case "dexbytes infotech":
                  experienceTitleColorClass = "text-dexbytes-primary"
                  bulletColorClass = "bg-dexbytes-primary"
                  break
                default:
                  experienceTitleColorClass = "text-primary"
                  bulletColorClass = "bg-primary"
                  break
              }

              return (
                <div
                  key={index}
                  className="bg-card-gradient p-6 rounded-xl shadow-subtle-float hover:shadow-lg transition-shadow duration-300 border"
                >
                  <div className="flex items-center gap-3">
                    {"logo" in experience && experience.logo ? (
                      <img
                        src={experience.logo || "/placeholder.svg"}
                        alt={`${experience.company} logo`}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    ) : null}
                    <div>
                      <h3 className={`text-xl font-semibold ${experienceTitleColorClass}`}>{experience.title}</h3>
                      <p className="text-muted-foreground">
                        {experience.company} • {experience.location}
                      </p>
                      <p className="text-sm text-muted-foreground">{experience.years}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${bulletColorClass} flex-shrink-0`} />
                        <span className="text-sm leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {"products" in experience && experience.products && (
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <h4 className="text-lg font-medium mb-4 text-muted-foreground">Key Products Delivered:</h4>
                      <div className="space-y-4">
                        {experience.products.map((product, productIdx) => (
                          <div key={productIdx} className="bg-muted/30 p-4 rounded-lg">
                            <h5 className={`font-medium mb-2 ${experienceTitleColorClass}`}>{product.name}</h5>
                            <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                            <ul className="space-y-1">
                              {product.responsibilities.map((resp, respIdx) => (
                                <li key={respIdx} className="flex items-start gap-2">
                                  <span className={`mt-1.5 h-1 w-1 rounded-full ${bulletColorClass} flex-shrink-0`} />
                                  <span className="text-xs leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Education Section - moved after Professional Experience */}
        <section id="education" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Education</h2>
          <div className="w-full space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card-gradient p-6 rounded-xl shadow-subtle-float hover:shadow-lg transition-shadow duration-300 border"
              >
                <h3 className="text-2xl font-semibold text-primary">{edu.degree}</h3>
                <p className="text-lg text-foreground mt-1">{edu.institution}</p>
                {edu.years && <p className="text-muted-foreground text-sm">{edu.years}</p>}
                {edu.details && <p className="text-muted-foreground mt-2">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Hobbies Section */}
        <section id="hobbies" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Hobbies</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-lg text-muted-foreground">
            {hobbies.map((hobby, index) => (
              <li
                key={index}
                className="bg-secondary px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow border"
              >
                {hobby}
              </li>
            ))}
          </ul>
        </section>

        <Separator className="my-4 w-full max-w-4xl" />

        {/* Contact Section */}
        <section id="contact" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-6 md:py-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            Feel free to connect with me through any of the platforms below.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href={contactInfo.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href={`mailto:${contactInfo.email1}`} className="flex items-center gap-2">
                <Image src="/images/mail.png" alt="Email" width={24} height={24} className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                <Image src="/images/github_logo.png" alt="GitHub" width={24} height={24} className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href={contactInfo.stackoverflow} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/stack_overflow.png"
                  alt="Stack Overflow"
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
                <span className="sr-only">Stack Overflow</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href={contactInfo.resume} target="_blank" rel="noopener noreferrer">
                <Image src="/images/Resume.png" alt="Resume" width={24} height={24} className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Phone: {contactInfo.phone1}</p>
            <p>
              Email: {contactInfo.email1} / {contactInfo.email2}
            </p>
            <p>
              Medium:{" "}
              <Link
                href={contactInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @somuyadav
              </Link>
            </p>
            <p>
              StackOverflow:{" "}
              <Link
                href={contactInfo.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                SomuYadav
              </Link>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto flex w-full max-w-4xl items-center justify-center p-4 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Somu Yadav. All rights reserved.
      </footer>
    </div>
  )
}
