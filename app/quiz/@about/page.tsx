const About: React.FC = () => {
  return (
    <div className="text-white flex flex-col w-full h-full items-center justify-center ">
      <p className="text-xl">
        :: Powered By{" "}
        <a href="https://opentdb.com" className="underline hover:text-blue-500">
          opentdb
        </a>{" "}
        ::
      </p>
      <br />
      <ol className="list-inside list-disc">
        <p>Put together by :</p>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Redux Toolkit & Redux Toolkit Query</li>
        <li>Tailwind + Custom CSS</li>
        <li>Unit Testing with Jest and React Testing Library</li>
        <br />
        <p>Minor Packages :</p>
        <li>
          <a href="" className="underline hover:text-blue-500">
            react-countup
          </a>
        </li>
        <li>
          <a href="" className="underline hover:text-blue-500">
            react-icons
          </a>
        </li>
        <li>
          <a href="" className="underline hover:text-blue-500">
            html-entities
          </a>
        </li>
      </ol>
    </div>
  )
}

export default About
