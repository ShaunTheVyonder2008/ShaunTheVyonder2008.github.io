import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <div className="before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <Image alt="no" src="https://cdn.ttnrtsite.me/images/logo.png"  />
        <h1>Hi there!</h1>
        <p>This website is currently under construction at this time</p>
        <p>Our highly trained bots will build the website as much as posabile</p>
        <p>Don&apos;t worry it will come soon &#128521;</p>
        <p>In the meantime, why not check out our other sites?</p>
        <br />
        <h2>Links</h2>
        <div className="flex justify-center">
        <a href="https://github.com/TTNRT">GitHub</a>
        &nbsp;
        <a href="https://git.ttnrtsite.me">TTGit</a>
        &nbsp;
        <a href="https://www.ttnrtsite.me">Main</a>
        &nbsp;
        <a href="https://wiki.ttnrtsite.me">Wiki</a>
        &nbsp;
        <a href="https://status.ttnrtsite.me">Status</a>
        &nbsp;
        <a href="https://docs.ttnrtsite.me">Docs</a>
        &nbsp;
        <a href="https://blog.ttnrtsite.me">Blog</a>
        </div>
        <br />
        <div className="flex flex-col items-center">
          <p>&copy; TTNRT CORP</p>
          <p>2020 - 2023</p>
        </div>
    </main>
  )
}
