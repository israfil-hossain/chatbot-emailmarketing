// import { onGetBlogPosts } from '@/actions/landing'
import Footer from '@/feature/landing-page/footer'
import Container from '@/components/global/container'
import Icons from '@/components/global/icons'
import { Header } from '@/components/navbar'
import Promotion from '@/components/navbar/promotion'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import { pricingCards } from '@/constants/landing-page'
import BlogSection from '@/feature/landing-page/blog-section'
import { IconBrandGmail, IconBrandSlack, IconBrandStripe, IconZoom, IconBrandNotion, IconBrandTelegram } from '@tabler/icons-react'
// import { pricingCards } from '@/constants/landing-page'
import clsx from 'clsx'
import { Check, PhoneIcon, Bot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import IntegrationsSection from '@/feature/landing-page/integrations'
import { HowItWorksSection } from '@/feature/landing-page/sections/how-it-works'
// import parse from 'html-react-parser'
// import { getMonthName } from '@/lib/utils'

export default async function Home() {
  // const posts:
  //   | {
  //       id: string
  //       title: string
  //       image: string
  //       content: string
  //       createdAt: Date
  //     }[]
  //   | undefined = await onGetBlogPosts()
  // console.log(posts)
  return (
    <main>
      <Promotion />
      <Header />
      <section id="home" className="relative w-full h-fit py-24 overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-auto"
          src="/images/vectors/shape.svg"
          alt="shape"
          width={1200}
          height={800}
        />

        {/* <div className="relative flex flex-col items-center justify-center w-full py-20"> */}
        <div className="relative flex flex-col items-center gap-8 px-6 md:px-4">
          {/* <div className="w-fit py-1.5 px-4 rounded-full bg-yellow-100">
          Reach out for development
        </div> */}
        </div>
        {/* <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div> */}

        <div className="flex flex-col items-center justify-center gap-y-8 relative">
          <Container className="flex absolute inset-0 top-1 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
            <OrbitingCircles speed={0.5} radius={300}>
              <Icons.circle1 className="size-4 text-primary/70" />
              <Icons.circle2 className="size-1 text-primary/80" />
            </OrbitingCircles>
            <OrbitingCircles speed={0.25} radius={400}>
              <Icons.circle2 className="size-1 text-primary/50" />
              <Icons.circle1 className="size-4 text-primary/60" />
              <Icons.circle2 className="size-1 text-primary/90" />
            </OrbitingCircles>
            <OrbitingCircles speed={0.1} radius={500}>
              <Icons.circle2 className="size-1 text-primary/50" />
              <Icons.circle2 className="size-1 text-primary/90" />
              <Icons.circle1 className="size-4 text-primary/60" />
              <Icons.circle2 className="size-1 text-primary/90" />
            </OrbitingCircles>
          </Container>
          <Container className="relative lg:block overflow-hidden mt-0">
            <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(blue,_transparent_90%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-indigo-100" />
              <span className="z-10 py-0.5 text-sm text-indigo-900 flex items-center">
                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-700 text-[9px] font-medium mr-2 text-white">
                  flowenai
                </span>
                chatbot assistant !
              </span>
            </button>
          </Container>

          <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0 mt-5">
            <Container delay={0.2}>
              {/* <Image
            src="/images/flowenai.png"
            width={300}
            height={200}
            alt="Logo"
            className="max-w-sm object-contain"
          /> */}
              <div className="max-w-3xl flex flex-col gap-6 mx-auto mt-8">
                <h1 className="font-medium text-4xl md:text-6xl lg:text-7xl text-primary/90 text-center tracking-tighter">
                  <span className="font-uncut">Ultimate AI powered Chatbot</span>
                  <br />
                  <span className="font-uncut">sales assistant!</span>
                </h1>
              </div>
            </Container>
            <Container delay={0.2}>
              <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                Scale your application, create your idea to mvp, AI-powered saas & insights to boost your brand and campaigns.
              </p>
            </Container>
            <Container delay={0.2} className="z-20 mt-8">
              <div className="flex items-center justify-center gap-5 mt-2 md:mt-6 lg:mt-6">
                <Link
                  className="block py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white"
                  href="https://calendly.com/flowenai"
                  target="_blank"
                >
                  Free Trial
                </Link>

                <Link
                  href="/contact-us"
                  className="flex items-center gap-2 py-2.5 px-5 rounded-full border border-primary  hover:border-primary-foreground font-medium font-manrope text-primary   hover:text-primary/90 duration-500"
                >
                  <PhoneIcon size={16} />
                  Contact Us
                </Link>
              </div>
            </Container>
            <Container delay={0.3} className="relative">
              <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg  max-w-6xl mx-auto">
                <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-primary/50 to-primary/80 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
                <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

                <div className="rounded-lg lg:rounded-[22px] border border-border bg-background w-full items-center flex justify-center ">
                  <Image
                    src="/images/app-ui.png"
                    alt="dashboard"
                    width={1200}
                    height={500}
                    className="rounded-lg lg:rounded-[20px]"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 inset-x-0 w-full h-80"></div>
            </Container>
          </div>
        </div>
      </section>

      <section id="#price" className="flex justify-center items-center flex-col gap-4 mt-10">

        <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl">
          <span className="font-title italic">Choose what Fits </span> <br />
          <span className="font-uncut font-medium tracking-tighter">
            Your are Right.
          </span>
        </h1>
        <p className='text-center  text-balance'>
          Our transparent and flexible pricing plans are designed to fit your needs—whether you are just exploring or ready to scale.<br /> Not quite ready to commit?<br />
          No problem. You can get started absolutely free and upgrade whenever you are ready.
        </p>
     
      <div className="flex  justify-center gap-4 flex-wrap mt-12">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-primary">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-primary border-primary border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
     </section>
      
      <section id="features" className="py-24 w-full items-center ">
        <Container className='flex flex-col justify-center items-center mx-5'>
          <div className="text-center mb-16">
            <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl">
              <span className="font-title italic"> Powerful Features for  </span> <br />
              <span className="font-uncut font-medium tracking-tighter ">
                Modern Businesses
              </span>
            </h1>
            <p className="text-muted-foreground text-center max-w-lg">
              Everything you need to automate customer engagement, capture leads, and grow your business with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl margin-auto items-center ">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Sales Assistant</h3>
              <p className="text-muted-foreground">Intelligent chatbot that qualifies leads, answers questions, and drives conversions 24/7</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icons.mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
              <p className="text-muted-foreground">Automated email campaigns with AI-powered personalization and advanced analytics</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icons.calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Booking</h3>
              <p className="text-muted-foreground">Automated appointment scheduling with payment processing and calendar integration</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icons.integration className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-muted-foreground">One-click website integration with customizable design and white-label options</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icons.analytics className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">Real-time insights, conversion tracking, and detailed performance reports</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icons.security className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level security with OTP verification, secure file uploads, and data protection</p>
            </Card>
          </div>
        </Container>
      </section>

      <HowItWorksSection />

     <IntegrationsSection />

      <section id="testimonials" className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary/90 mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our customers say about FlowenAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Marketing Director</p>
                </div>
              </div>
              <p className="text-muted-foreground">"FlowenAI increased our lead conversion by 300%. The AI assistant handles customer queries perfectly, even outside business hours."</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Mike Chen</h4>
                  <p className="text-sm text-muted-foreground">Agency Owner</p>
                </div>
              </div>
              <p className="text-muted-foreground">"The white-label feature is amazing. I can offer this to my clients under my own brand. It's been a game-changer for my agency."</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Emma Davis</h4>
                  <p className="text-sm text-muted-foreground">E-commerce Owner</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Setup was incredibly easy. Within 10 minutes, I had an AI assistant on my website capturing leads and booking appointments."</p>
            </Card>
          </div>
        </Container>
      </section>

      <section id="cta" className="py-24 bg-primary/5">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary/90 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of businesses using FlowenAI to automate customer engagement and boost sales
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="https://calendly.com/flowenai"
                target="_blank"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact-us"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <BlogSection />
      <Footer />
    </main>
  )
}
