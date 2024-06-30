const Intro = () => {
  return (
    <div className="grid justify-center text-center my-24">
      <p className="text-3xl font-mono underline underline-offset-8 py-8">
        Who am I?
      </p>
      <p className="font-mono font-bold italic">
        "I am a web developer
        <br />
        working on responsive websites and cross-platform apps."
      </p>

      <div className="grid grid-cols-2 pt-12 px-32 justify-between">
        <div className="">
          <div>
            <a href="https://www.linkedin.com/in/rohit-goyal-ba6b292a9/">
              Rohit Goyal's Linkedin
            </a>
          </div>
        </div>

        <div className="font-semibold ">
          <p className="font-mono font-normal text-3xl py-2">
            Hi! My name is Rohit Goyal and I am a software engineer.
          </p>
          <p className="py-2 italic">
            I work for Hexaware Technologies, developing value driven, full
            stack web applications.
          </p>
          <p className="py-2 italic">
            I completed B.Tech in Computer Science Engineering from Siliguri
            Institute of Technology Siliguri, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
