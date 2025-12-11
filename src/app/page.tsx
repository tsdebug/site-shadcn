import { ImgSlider } from "@/components/sections/ImgSlider"
import { Highlights } from "@/components/sections/Highlights"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div><Highlights/></div>
    <div><ImgSlider/></div>
    </>
  );
}
