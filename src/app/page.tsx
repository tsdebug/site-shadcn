import { ImgSlider } from "@/components/sections/ImgSlider"
import { Highlights } from "@/components/sections/Highlights"
import Welcome from "@/components/sections/Welcome";

export default function Home() {
  return (
    <>
    <div><Highlights/></div>
    <div><ImgSlider/></div>
    <div><Welcome/></div>
    </>
  );
}
