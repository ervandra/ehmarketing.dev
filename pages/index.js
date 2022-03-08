import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EH Marketing & Development</title>
        <meta
          name="description"
          content="Full-flexed marketing & development team "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex flex-col items-center justify-center">
        <div className="home">
          <div className="container md:max-w-3xl mx-auto text-center">
            <Image
              src="/logo.png"
              alt="EH Marketing & Development"
              width={240}
              height={120}
              className="mb-4"
            />
            <h1 className="font-bold text-xl md:text-2xl mb-2">
              We simplified Tech and Marketing for you
            </h1>
            <p className="mb-4">
              We`re getting revamped, you can contact us directly
            </p>
            <a
              href="mailto:hi@ehmarketing.dev"
              target="_blank"
              className="px-3 py-1 rounded-lg bg-[#4360ed] text-white inline-flex hover:shadow-lg hover:bg-opacity-90"
              rel="noreferrer"
            >
              hi@ehmarketing.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
