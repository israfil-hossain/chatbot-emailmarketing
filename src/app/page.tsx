// import { onGetBlogPosts } from '@/actions/landing'
import Container from '@/components/global/container'
import Icons from '@/components/global/icons'
import { Header } from '@/components/navbar'
import Promotion from '@/components/navbar/promotion'

import { Button } from '@/components/ui/button'
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
// import { pricingCards } from '@/constants/landing-page'
import clsx from 'clsx'
import { Check, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
                  className="flex items-center gap-2 py-2.5 px-5 rounded-full border font-medium font-manrope text-base text-neutral-700 hover:border-primary/90 hover:text-primary/90 duration-500"
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
          <span className="font-title">Choose what Fits </span> <br />
          <span className="font-uncut font-medium tracking-tighter">
            Your'r Right.
          </span>
        </h1>
        <p className='text-center  text-balance'>
          Our transparent and flexible pricing plans are designed to fit your needs—whether you're just exploring or ready to scale.<br /> Not quite ready to commit?<br />
          No problem. You can get started absolutely free and upgrade whenever you're ready.
        </p>
      </section>
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
                className="bg-[#f3d299] border-primary border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section id="blogs" className="flex justify-center items-center flex-col gap-4 mt-28">

        <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl">
          <span className="font-title">Updated  </span> <br />
          <span className="font-uncut font-medium tracking-tighter">
            Our News
          </span>
        </h1>
        <p className="text-muted-foreground text-center max-w-lg">
          Explore our insights on AI, technology, and optimizing your business.
        </p>

        <div className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
          {/* {posts &&
          posts.map((post) => (
            <Link
              href={`/blogs/${post.id}`}
              key={post.id}
            >
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
                    alt="post featured image"
                    fill
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(post.createdAt.getMonth())}{' '}
                    {post.createdAt.getDate()} {post.createdAt.getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100))}...
                </div>
              </Card>
            </Link>
          ))} */}
        </div>
      </section>
    </main>
  )
}