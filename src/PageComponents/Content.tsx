import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

export default function Content() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white place-content-center justify-center">
      <div className=" justify-center flex m-4 p-4">
        <img
          src="https://appsrv1-147a1.kxcdn.com/appseed-v2/media/products/soft-dashboard-tailwind/mobile.png"
          alt="pic"
          className=" scale-75"
        />
      </div>
      <div className="  text-slate-600 m-4 p-4 place-content-center">
        <p className="text-4xl"> Tailwind CSS </p>
        <p className="text-4xl">
          Template for <b>App and Software site</b>
        </p>
        <p className="text-xm mt-6 text-slate-500">
          App Landing Page Web Template is specially crafted for app and
          software websites. This website has an amazing and clean design and
          all the essential sections, components, and features you need to
          launch a complete app website.
        </p>
        <div className="place-content-center space-x-2">
          <button className="bg-purple-500 text-white rounded-md px-4 py-2 mt-11 font-semibold  ">
            Download
          </button>

          <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-md  mt-2 ">
            <FontAwesomeIcon icon={faPlay} className=" text-purple-500" /> Watch
            Video
          </button>
        </div>
      </div>
    </div>
  );
}
