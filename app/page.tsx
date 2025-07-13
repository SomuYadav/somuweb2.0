"use client" // This component needs to be a client component to use framer-motion

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
// Removed Twitter import from lucide-react as it's replaced by an image
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
  return (
    <div className="flex min-h-screen flex-col items-center bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md"
      >
        <div className="container mx-auto flex w-full max-w-4xl items-center justify-between p-4 py-4">
          <Link href="#" className="text-2xl font-bold tracking-tight" prefetch={false}>
            Somu Yadav
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex bg-transparent hover:bg-gray-900" asChild>
            <Link href="/placeholder-resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
        </div>
      </motion.header>

      <main className="flex w-full flex-col items-center">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative flex w-full items-center justify-center py-20 md:py-32 bg-gradient-to-b from-black to-background"
        >
          <div className="container mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
            <motion.h1
              initial={fadeInVariants.initial}
              animate={fadeInVariants.animate}
              transition={{ ...fadeInVariants.transition, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
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
              iOS Engineer
            </motion.h2>
            <motion.div
              initial={fadeInVariants.initial}
              animate={fadeInVariants.animate}
              transition={{ ...fadeInVariants.transition, delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild className="shadow-md hover:shadow-lg transition-shadow bg-transparent">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Separator className="my-12 w-full max-w-4xl" />

        {/* About Section */}
        <motion.section
          id="about"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-12 md:py-20"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-8 text-lg text-muted-foreground text-center max-w-2xl">
            To utilize my abilities and talent to work in a challenging environment that would facilitate continuous
            learning and exposure to ideas that achieve personal, professional and organizational growth.
          </p>
        </motion.section>

        <Separator className="my-12 w-full max-w-4xl" />

        {/* Projects Section */}
        <section id="projects" className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-12 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">My Projects</h2>
          <div className="mt-8 flex flex-col gap-20">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={index % 2 === 0 ? slideInLeftVariants.initial : slideInRightVariants.initial}
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={index % 2 === 0 ? slideInLeftVariants : slideInRightVariants}
                className={`flex flex-col items-center gap-8 md:flex-row md:items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="w-full md:w-1/2">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Image
                      src={project.backgroundImage || "/placeholder.svg"}
                      width={500}
                      height={600}
                      alt={`${project.title} App Screenshot`}
                      className="h-auto w-full rounded-lg object-cover shadow-md"
                    />
                  </motion.div>
                </div>
                <div className="w-full text-center md:w-1/2 md:text-left">
                  <div className="mb-4 flex items-center justify-center md:justify-start">
                    <Image
                      src={project.appIcon || "/placeholder.svg"}
                      width={64}
                      height={64}
                      alt={`${project.title} App Icon`}
                      className="mr-4 rounded-xl shadow-md"
                    />
                    <h3 className="text-4xl font-bold tracking-tight">
                      <span className="text-primary">{project.subtitle.part1}</span>
                      <span className="text-primary">{project.subtitle.part2}</span>
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                  {project.role.length > 0 && (
                    <>
                      <h4 className="mt-6 text-xl font-semibold">My Role:</h4>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                        {project.role.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {project.technologies.length > 0 && (
                    <>
                      <h4 className="mt-6 text-xl font-semibold">Technologies:</h4>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                        {project.technologies.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Button asChild className="mt-8 shadow-md hover:shadow-lg transition-shadow">
                    <Link href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                      View on App Store
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12 w-full max-w-4xl" />

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="container mx-auto flex max-w-4xl flex-col items-center px-4 py-12 md:py-20"
        >
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
              <Link href="https://www.linkedin.com/in/SomendraYadav/" target="_blank" rel="noopener noreferrer">
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
              <Link href="https://twitter.com/Somendra_Dev" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href="mailto:somendra.sy@gmail.com" className="flex items-center gap-2">
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
              <Link href="https://github.com/SomuYadav" target="_blank" rel="noopener noreferrer">
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
              <Link href="/placeholder-resume.pdf" target="_blank" rel="noopener noreferrer">
                <Image src="/images/cv-icon.png" alt="Resume" width={24} height={24} className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Link>
            </Button>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto flex w-full max-w-4xl items-center justify-center p-4 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Somu Yadav. All rights reserved.
      </footer>
    </div>
  )
}
