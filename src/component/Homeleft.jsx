
import { useTypewriter, Cursor } from "react-typewriter";


const Homeleft = () => {
    const [text] = useTypewriter({
        words: ["and potential for life beyond Earth.", "new horizons in the quest for extraterrestrial life.", "scientific discovery, and expanding humanity's horizons"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 30,
        delaySpeed: 2500,
      });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">GETWAY OF EXPLORING, </h4>
        
        <h2 className="text-4xl font-bold text-white">
          Creating <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Creating habitable worlds on exoplanets is a fascinating scientific endeavor that captures the imagination of researchers and enthusiasts alike. In the search for extraterrestrial life, scientists look for planets within the habitable zone where water, a vital ingredient for life, could exist in liquid form.
        </p>
      </div>
      <div className="w-full flex xl:flex-row flex-col justify-between">
                <div className="border">
                    <span className="px-2 py-1  cursor-pointer text-lg font-bold rounded-r-md bg-white bg-opacity-30 ">Explore now</span>
                    <img src="" alt="g" />
                </div>
                <div className="border">
                    < span className="px-2 py-1  cursor-pointer text-lg font-bold rounded-r-md bg-white bg-opacity-30">Create your own world</span>
                    <img src="" alt="g" />
                </div>
            </div>
    </div>
  )
}

export default Homeleft
