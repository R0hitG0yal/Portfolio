const Navbar = () =>{
    return (
      <div className="flex justify-between px-32 py-2 font-serif">
        <div className="text-3xl underline underline-offset-2">Rohit Goyal</div>
        <div>
          <ul className="flex items-center text-lg py-2">
            <li className="min-w-120px px-4">
              <a href="#intro">Who Am I?</a>
            </li>
            <li className="min-w-120px px-3">
              <a href="#experience">Experience</a>
            </li>
            <li className="min-w-120px px-3">
              <a href="#education">Education</a>
            </li>
            <li className="min-w-120px px-3">
              <a href="#skills">Skills</a>
            </li>
            <li className="min-w-120px px-3">
              <a href="#contact">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;