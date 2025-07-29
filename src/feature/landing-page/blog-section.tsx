import React from 'react'

type Props = {}

const BlogSection = (props: Props) => {
    return (
        <section id="blogs" className="flex justify-center items-center flex-col gap-4 mt-28">

            <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl">
                <span className="font-title italic">Updated  </span> <br />
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

    )
}

export default BlogSection