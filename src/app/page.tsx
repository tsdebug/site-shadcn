import { ImgSlider } from "@/components/sections/ImgSlider"
import { Highlights } from "@/components/sections/Highlights"
import Welcome from "@/components/sections/Welcome";
import { CardHoverEffect } from "@/components/sections/HCards";
import Programs from "@/components/sections/Programs";

export default function Home() {
  return (
    <>
    <div><Highlights/></div>
    <div><ImgSlider/></div>
    <div><Welcome/></div>
    <div><CardHoverEffect/></div>
    <div><Programs/></div>
    </>
  );
}
