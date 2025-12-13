import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Welcome() {
  return (
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-8 mt-6">
      
      {/*Left side*/}
      <div className="md:ml-4"> 
        <h1 className="text-3xl font-bold ">
          Welcome to <span className="text-yellow-500">BCREC</span>
        </h1> 
        <Separator className="bg-blue-900 my-3"/>
        
        <p className="text-black-100 text-justify text-md mt-2">
          BCREC evolved from a coming together of like-minded professionals and philanthropic entrepreneurs with an objective to create an 
          institution of global standard of learning through synergic application of creativity, innovation and discipline. Established in 
          the year 2000, BCREC Society within a short span of time made its mark as Centre of Excellence in the fields of Engineering, 
          Pharmacy Health Science and Management education. Dr. B.C. Roy Engineering College has been recognized as an e-Govt. Campus by the 
          Engineering Watch (in association with National Informatics Centre, Govt. of India) among the 100 prestigious colleges nationwide.
        </p>
        
        <Button className="bg-blue-900 hover:bg-blue-700 mt-4">
          Read More
        </Button>
      </div>

      {/*Right side*/}
      <Card className="bg-[#001f7d] border-none text-white w-full max-w-[800px]">
        <CardHeader>
          <CardTitle className="text-2xl">
            Principal's <span className="text-yellow-500">Corner</span>
          </CardTitle>
          <Separator className="bg-white/30 my-2"/>
        </CardHeader>
        
        <CardContent className="flex flex-col md:flex-row gap-4">
          <img 
            src="\principal.jpg" 
            alt="Principal" 
            className="w-full md:w-56 h-48 object-cover rounded bg-gray-300"
          />
          
          <div className="flex flex-col justify-between">
            <p className="text-black-100 text-justify text-md mx-4 mt-4">
              I welcome you all to join with me towards the journey of excellence in technical education. Dr. B.C. Roy Engineering 
              college is a well known name looked upon by any aspirant in the Engineering and Technological Education.
            </p>
            <div className="mt-4">
              <Button className="bg-red-700 hover:bg-red-900 mx-4 mb-2">
                Read More
              </Button>
            </div>
          </div>
        </CardContent>
        
      </Card>
    </div>
  )
}