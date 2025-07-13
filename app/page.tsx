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
    id: "walmart",
    title: "Walmart",
    subtitle: { part1: "Wal", part2: "mart" },
    appIcon: "/images/WalmartAppIcon.png", // Updated to use provided image
    backgroundImage: "/images/walmartApp.png", // Updated to use provided image
    description: `I am Working as an SDE-III on this big scale Walmart Product, which is providing the ultimate shopping experience & convenience to the user. From curbside pickup and express delivery to fast shipping, the app offers a variety of options to get your items when and where you want them. With time-saving features such as store maps, real-time order tracking, and reordering essentials, The Walmart app is an innovative solution that provides customers with an easy and convenient way to shop for everything they need. The app offers multiple options for obtaining items, including curbside pickup, express delivery, and fast shipping. It also features time-saving features like store maps, real-time order tracking, reordering essentials, shopping lists, and barcode scanning. The app also includes a pharmacy section for managing and refilling prescriptions. For Walmart+ members, the app offers exclusive features such as Scan & Go and discounted fuel prices.`,
    role: [
      "Developing new feature with MVVM-Coordinate architectural and new design pattern on a large scale for the Walmart app",
      "Implementing new payment features for Walmart App",
      "Utilizing Splunk Queries for analytical and product analysis",
      "Optimizing UI/UX performance with Xcode instruments",
      "Writing UI-Test Cases and Unit-Test Cases to ensure the app's functionality and quality",
      "Adding support of Accessibility and Siri to Improving the app's accessibility by implementing accessibility tools and support",
      "Optimized app performance by implementing multithreading, URLCache",
      "Working on integrating Graph-QL for API and adding new features with Programmatic-UI",
      "Collaborating with other departments for web service and UI design",
      "Communicated technical issues and decisions with the team",
      "Worked closely with the android developer team for syncing iOS and Android versions of the app",
      "Working in a JIRA environment and occasionally leading SCRUM Meetings",
      "Actively participated in meetings and discussions to ensure project is on track and to share ideas and feedback with the team",
    ],
    technologies: [
      "Xcode 12",
      "Swift 5.0",
      "RestAPI & GraphQL",
      "Animation, Swift Packages, Cocoapods",
      "SwiftUI, UIKit, Combine, RxSwift, CoreData, SQLLite",
      "XIB, Pod Installation, Voip(For app to app call), Multiple Storyboards, Notification Center, Delegates, FCM",
    ],
    appStoreLink: "https://apps.apple.com/us/app/walmart-shopping-grocery/id338137227",
  },
  {
    id: "nykaa",
    title: "Nykaa",
    subtitle: { part1: "Ny", part2: "kaa" },
    appIcon: "/images/NykaaApp.png", // Updated to use provided image
    backgroundImage: "/images/NykaaBackground.png", // Updated to use provided image
    description: `I was the lead and solo Engineer of Order Detail Module and order product for Nykaa Beauty, Nykaa Fashion, Nykaa Man. Nykaa is a leading online beauty and wellness destination for men and women in India. I was responsible for adding new features to the product detail page of the app.`,
    role: [
      "Working on both the UI and logical aspects of the project",
      "Coordinating with other departments for web service and UI design",
      "Created a CI/CD pipeline and git-flow on CircleCI to decrease release times",
      "Collaborating closely with the android development team to ensure seamless syncing between the iOS and android versions of the app",
      "Implementing new features such as product recommendations and tabbed widgets to enhance the user experience and improve the overall functionality of the app",
      "Troubleshooting and debugging any issues that arose during development",
      "Optimized app performance by implementing multithreading, URLCache",
      "Optimizing the code for performance and scalability",
      "Participating in code reviews and ensuring adherence to best practices and coding standards",
      "Staying up to date with the latest developments in iOS and mobile development to incorporate new technologies and techniques into the app.",
      "Worked closely with the android developer team for syncing iOS and Android versions of the app",
      "Redesigned the product detail page with a new architecture and added new design patterns for better maintainability and scalability.",
      "Actively participated in meetings and discussions to ensure project is on track and to share ideas and feedback with the team",
    ],
    technologies: [
      "Swift 5.7",
      "Push Notifications",
      "MVVM with Coordinator",
      "Core Animation",
      "Analytics",
      "Accessibility",
      "XIB",
      "Storyboard",
      "Cocoapods",
      "Design Patterns(Factory, Builder)",
    ],
    appStoreLink: "https://apps.apple.com/in/app/nykaa-makeup-beauty-shopping/id1022363908",
  },
  {
    id: "digivalet",
    title: "DigiValet Residences",
    subtitle: { part1: "Digi", part2: "Valet Residences" },
    appIcon: "/images/AppICon.png",
    backgroundImage: "/images/mock.png", // Updated to use provided image
    description: `I was lead Engineer for this big scale product. DigiValet Residences is an all-in-one app for residents of luxury hotels and villas, providing quick access to all concierge-related services, F&B services and amenities booking offered by the property. The app is built on a cloud platform, allowing for secure login and user profiles for residents, staff, family members, pets, vehicles, and kids.`,
    role: [
      "Developed the BrandedResidence, ButlerStation, PalaceApp iOS apps",
      "Implemented MVVM and MVP as architectural patterns",
      "Created a CI/CD pipeline and git-flow on CircleCI to decrease release times",
      "Created Swift Package Manager for Theme, API Network, and Optimized UI/UX performance with Xcode instruments",
      "Developed custom Collection View Layouts using Compositional Layout",
      "Improved readability and API of network requests in DVUtility swift package leveraging swift’s result type and generic models classes for JSON responses coming from the DVC server",
      "Optimized app performance by implementing multithreading, URLCache",
      "Experimented with new technologies like MetalKit(Infinite gradient) and WidgetKit",
      "Collaborated with other departments for web service and UI design",
      "Communicated technical issues and decisions with the team",
      "Worked closely with the android developer team for syncing iOS and Android versions of the app",
      "Continuously sought opportunities for improvement and innovation within the project",
      "Actively participated in meetings and discussions to ensure project is on track and to share ideas and feedback with the team",
    ],
    technologies: [
      "Xcode 12",
      "Swift 5.0",
      "RestAPI & GraphQL",
      "Animation, Swift Packages, Cocoapods",
      "SwiftUI, UIKit, Combine, RxSwift, CoreData, SQLLite",
      "XIB, Pod Installation, Voip(For app to app call), Multiple Storyboards, Notification Center, Delegates, FCM",
    ],
    appStoreLink: "https://apps.apple.com/in/app/digivalet-residences/id1638466482",
  },
  {
    id: "flexiasia",
    title: "Flexiasia",
    subtitle: { part1: "Flexi", part2: "asia" },
    appIcon: "/images/AppIConFlexiasia.jpg",
    backgroundImage: "/images/flexiasiamock.png",
    description: `I am the sole iOS developer for Flexiasia, an room booking application in hotels. This application is developed on iOS and Android platforms. This is an IoT functional app and in this application we have three phases: manager, user, and technician. Two phases (Manager and user) are developed in iOS. In this app, we have used Sinch for app-to-app calling and integrated automated door unlock functionality with the help of Bluetooth.`,
    role: [
      "Worked on UI as well as Coding part.",
      "Changing the Project from XIB to Storyboards.",
      "Understand the Sinch library.",
      "Understand the bluetooth integration.",
      "Communicate technical issues/decisions.",
    ],
    technologies: [
      "Xcode 10.2",
      "Swift 4.0",
      "RestAPI",
      "Animation, and Pod Installation",
      "AFNetworking",
      "XIB, Pod Installation, Voip(For app to app call), Multiple Storyboards, Notification Center, Delegates, FCM",
    ],
    appStoreLink: "https://apps.apple.com/us/developer/flexiasia/id1465686069",
  },
  {
    id: "kashish",
    title: "Kashish Feedback",
    subtitle: { part1: "Kashish", part2: "" },
    appIcon: "/images/KashishIcon.png",
    backgroundImage: "/images/KashishGlossy.png",
    description: `I am the sole iOS developer for Kashish Feedback. Kashish Feedback app is intended to collect your review for our service so that we can increase our quality of service up to your expectations. Built the app from scratch to release. Focused on building the UI and logic for collecting user feedback through a list of questionnaire show using quiz UI module.`,
    role: [], // No specific roles listed in HTML for this project
    technologies: ["Swift", "Push Notifications", "MVVM", "Core Animations"],
    appStoreLink: "https://apps.apple.com/ee/app/kashish-feedback/id1437711146",
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
    phone2: "8962864002",
    email1: "somendra.sy@gmail.com",
    email2: "somendra007.sy@gmail.com",
    email3: "somendra.sy@icloud.com",
    linkedin: "https://www.linkedin.com/in/somendra-yadav/",
    twitter: "https://twitter.com/Somendra_Dev",
    github: "https://github.com/SomuYadav",
    medium: "https://medium.com/@SomuYadav",
    resume: "/placeholder-resume.pdf", // Keep placeholder for now
  }

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
      title: "Senior Software Engineer - iOS",
      company: "Walmart(Cashi & Walmart: Shopping)",
      location: "Bangalore",
      years: "JAN 2022 - Present",
      responsibilities: [
        "Developed a centralised Analytics Manager within the platform team and modularised it via Swift Package Manager.",
        "Built key Walmart e-commerce modules like Cart, Returns, and Plus using SwiftUI and Observable, promoting a modern reactive architecture.",
        "Achieved 93% unit test coverage, leading to a 70% reduction in regression issues.",
        "Reduced app crash rate from 6% to 0.5% by implementing custom crash and launch tracking mechanisms.",
        "Designed and implemented a deep linking testing app, increasing QA team efficiency by 3×.",
        "Integrated Apollo-based GraphQL architecture, improving network performance and data efficiency by 25%.",
        "Raised accessibility compliance to 95+ by implementing custom semantic traits and full VoiceOver support.",
        "Led Encryption and Secure storage initiatives for sensitive fintech workflows.",
        "Mentored over four junior engineers and facilitated biweekly Swift code reviews to ensure code quality and knowledge sharing.",
      ],
    },
    {
      title: "Senior Software Engineer - iOS",
      company: "Nykaa",
      location: "Gurgaon",
      years: "OCT 2021 - JAN 2022",
      responsibilities: [
        "Developed Product Detail Page Module using MVVM & SPM, across Nykaa beauty, fashion and men with single code base with cutting UI load time by 35%.",
        "Built and automated CI/CD pipelines with Jenkins, decreasing release cycle by 50%.",
        "Developed “Try It On” feature using AVFoundation & ML Kit, increasing user engagement.",
        "Designed Composable Layouts for adaptive UI, improving reusability across apps.",
      ],
    },
    {
      title: "Product Engineer (iOS)",
      company: "Digivalet",
      location: "Indore",
      years: "SEPT 2020 - AUG 2021",
      responsibilities: [
        "Built the Digivalet app from scratch and modernised CasaDigi with a butter user experience",
        "Migrated 100% of legacy apps from Objective-C to Swift.",
        "Delivered WatchOS and WidgetKit-based features for smart home automation apps.",
        "Created MetalKit-based UI animations to optimize luxury hotel app experiences.",
      ],
    },
    {
      title: "iOS Developer",
      company: "Consagous Technologies",
      location: "Indore",
      years: "AUG 2019 - APRIL 2020",
      responsibilities: [
        "Developed Hi-Cabs app used by 1M+ users; integrated real-time tracking and CoreML.",
        "Built reusable Swift modules for API handling and offline caching using enums + Codable.",
        "Implemented chat feature, CoreML, Speech Recognition, and Core Bluetooth.",
      ],
    },
    {
      title: "iOS Developer",
      company: "Dexbytes Infotech",
      location: "Indore",
      years: "OCT 2018 - AUG 2019",
      responsibilities: [
        "Developed Aircon and Flexiasia apps with advanced VOIP features, also build few api in python.",
        "Built VoIP-enabled apps using CallKit + Sinch.",
        "Integrated Stripe payments and built network layers using Delegate + MVC patterns.",
      ],
    },
    {
      title: "iOS Intern",
      company: "Natraj Infotech",
      location: "Indore",
      years: "MARCH 2017 - JULY 2018",
      responsibilities: ["Created and published Kashish Shopping iPad app from scratch using UIKit."],
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
              className="mt-2 text-2xl text-muted-foreground md:text-3xl"
            >
              Senior Software Engineer - iOS
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

        <Separator className="my-8 w-full max-w-4xl" />

        {/* Profile Section (formerly About) */}
        <section id="profile" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-8 md:py-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Profile</h2>
          <p className="mt-8 text-lg text-muted-foreground text-center max-w-2xl">
            Result-driven iOS engineer with 7+ years of experience in architecting, building, and maintaining scalable
            mobile applications across iOS, iPadOS, tvOS, and watchOS platforms. Proven expertise in E-commerce,
            Fintech, Healthcare, and Real Estate domains. Known for delivering high-quality features with a strong focus
            on performance, accessibility, and user experience. Recognized speaker, mentor, and open-source contributor.
          </p>
        </section>

        <Separator className="my-8 w-full max-w-4xl" />

        {/* Products Section (formerly Projects) */}
        <section id="products" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-8 md:py-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Products</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
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
                case "nykaa":
                  titleColorClass = "text-nykaa-primary"
                  buttonBgClass = "bg-nykaa-primary hover:bg-nykaa-primary/90"
                  break
                case "digivalet":
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
                            layout="fill"
                            objectFit="cover"
                            alt={`${project.title} App Screenshot`}
                            className="rounded-t-xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                        </div>
                        <div className="relative -mt-12 z-10">
                          <Image
                            src={project.appIcon || "/placeholder.svg"}
                            width={96}
                            height={96}
                            alt={`${project.title} App Icon`}
                            className="rounded-2xl shadow-lg border-4 border-card-foreground/10"
                          />
                        </div>
                        <CardHeader className="pt-4 pb-2">
                          <CardTitle className={`text-2xl font-bold ${titleColorClass}`}>
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
                    className={`text-3xl font-bold ${selectedProduct.id === "walmart" ? "text-walmart-primary" : selectedProduct.id === "nykaa" ? "text-nykaa-primary" : selectedProduct.id === "digivalet" ? "text-digivalet-primary" : selectedProduct.id === "flexiasia" ? "text-flexiasia-primary" : selectedProduct.id === "kashish" ? "text-kashish-primary" : "text-primary"}`}
                  >
                    {selectedProduct.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground text-base mt-2">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>
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
                    className={`w-full md:w-auto shadow-md hover:shadow-lg transition-shadow ${selectedProduct.id === "walmart" ? "bg-walmart-primary hover:bg-walmart-primary/90" : selectedProduct.id === "nykaa" ? "bg-nykaa-primary hover:bg-nykaa-primary/90" : selectedProduct.id === "digivalet" ? "bg-digivalet-primary hover:bg-digivalet-primary/90" : selectedProduct.id === "flexiasia" ? "bg-flexiasia-primary hover:bg-flexiasia-primary/90" : selectedProduct.id === "kashish" ? "bg-kashish-primary hover:bg-kashish-primary/90" : "bg-primary hover:bg-primary/90"}`}
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

        <Separator className="my-8 w-full max-w-4xl" />

        {/* Technical Skills Section */}
        <section id="skills" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-8 md:py-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Technical Skills</h2>
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

        <Separator className="my-8 w-full max-w-4xl" />

        {/* Key Achievements Section (Front Dashboard) */}
        <section
          id="achievements"
          className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-8 md:py-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Key Achievements</h2>
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

        <Separator className="my-8 w-full max-w-4xl" />

        {/* Education Section */}
        <section id="education" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-8 md:py-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Education</h2>
          <div className="w-full space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card-gradient p-6 rounded-xl shadow-subtle-float hover:shadow-lg transition-shadow duration-300 border"
              >
                <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                <p className="text-lg text-foreground mt-1">{edu.institution}</p>
                {edu.years && <p className="text-muted-foreground text-sm">{edu.years}</p>}
                {edu.details && <p className="text-muted-foreground mt-2">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8 w-full max-w-4xl" />

        {/* Professional Experience Section */}
        <section id="experience" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-8 md:py-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Professional Experience</h2>
          <div className="w-full space-y-12">
            {professionalExperience.map((job, index) => (
              <div
                key={index}
                className="bg-card-gradient p-6 rounded-xl shadow-subtle-float hover:shadow-lg transition-shadow duration-300 border"
              >
                <h3 className="text-2xl font-bold text-primary">{job.title}</h3>
                <p className="text-lg text-foreground mt-1">
                  {job.company} - {job.location}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{job.years}</p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                  {job.responsibilities &&
                    job.responsibilities.map((responsibility, i) => <li key={i}>{responsibility}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8 w-full max-w-4xl" />

        {/* Hobbies Section */}
        <section id="hobbies" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-8 md:py-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Hobbies</h2>
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

        <Separator className="my-8 w-full max-w-4xl" />

        {/* Contact Section */}
        <section id="contact" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-8 md:py-12">
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
                <Image src="/images/email-icon.png" alt="Email" width={24} height={24} className="h-5 w-5" />
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
                <Image src="/images/github.png" alt="GitHub" width={24} height={24} className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href={contactInfo.resume} target="_blank" rel="noopener noreferrer">
                <Image src="/images/cv-icon.png" alt="Resume" width={24} height={24} className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>
              Phone: {contactInfo.phone1} | {contactInfo.phone2}
            </p>
            <p>
              Email: {contactInfo.email1} / {contactInfo.email2} / {contactInfo.email3}
            </p>
            <p>
              Medium:{" "}
              <Link
                href={contactInfo.medium}
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
