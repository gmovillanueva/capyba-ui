const CurrentYear = new Date().getFullYear();

const TwitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 32 32"
      className="w-4 h-4"
    >
      <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
    </svg>
  );
};

const FacebookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 32 32"
      className="w-4 h-4"
    >
      <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
    </svg>
  );
};

const SocialMedia = [
  {
    icon: TwitterIcon,
    link: "https://www.twitter.com/",
  },
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/",
  },
];

const CategoryOne = [
  {
    name: "Example #1",
    link: "#",
  },
  {
    name: "Example #2",
    link: "#",
  },
  {
    name: "Example #3",
    link: "#",
  },
];

const CategoryTwo = [
  {
    name: "Example #1",
    link: "#",
  },
  {
    name: "Example #2",
    link: "#",
  },
  {
    name: "Example #3",
    link: "#",
  },
];

const CategoryThree = [
  {
    name: "Example #1",
    link: "#",
  },
  {
    name: "Example #2",
    link: "#",
  },
  {
    name: "Example #3",
    link: "#",
  },
];

const CategoryFour = [
  {
    name: "Example #1",
    link: "#",
  },
  {
    name: "Example #2",
    link: "#",
  },
  {
    name: "Example #3",
    link: "#",
  },
];

export function Footer01() {
  return (
    <>
      <footer className="relative z-50 bg-bunker px-8 pt-12 pb-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12">
              <h1 className="mb-2 !font-semibold !text-primary">
                Company Tailwind
              </h1>
              <div className="mt-6">
                {SocialMedia.map(({ icon, link }, key) => (
                  <a key={key} href={link} target="_blank" rel="noreferrer">
                    <i
                      className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-glacier p-3 text-center text-primary outline-none focus:outline-none`}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-auto w-full px-4 md:w-7/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-primary">
                    Category One
                  </span>
                  <ul className="list-unstyled">
                    {CategoryOne.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="block pb-2 text-sm font-normal leading-relaxed text-aqua transition-colors hover:text-primary"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-primary">
                    Category Two
                  </span>
                  <ul className="list-unstyled">
                    {CategoryTwo.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          rel="noreferrer"
                          href={link}
                          className="block pb-2 text-sm font-normal leading-relaxed text-aqua transition-colors hover:text-primary"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-primary">
                    Category Three
                  </span>
                  <ul className="list-unstyled">
                    {CategoryThree.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          rel="noreferrer"
                          href={link}
                          className="block pb-2 text-sm font-normal leading-relaxed text-aqua transition-colors hover:text-primary"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-primary">
                    Category Four
                  </span>
                  <ul className="list-unstyled">
                    {CategoryFour.map(({ name, link }, key) => (
                      <li key={key}>
                        <a
                          rel="noreferrer"
                          href={link}
                          className="block pb-2 text-sm font-normal leading-relaxed text-aqua transition-colors hover:text-primary"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blue-gray-50" />
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
            <div className="text-center lg:text-left">
              <div className="text-md mt-2 py-1 font-normal text-gray-600">
                Copyright &copy; {CurrentYear}{" "}
                <a href="/" className="text-inherit transition-all">
                  Company Name
                </a>{" "}
                by{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-inherit transition-all"
                >
                  Someone
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
