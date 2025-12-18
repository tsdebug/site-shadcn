import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default function Programs() {
    const courses = [
        {
            title: "B. Tech",
            text: "B-Tech is the abridged form of Bachelor of Technology. It is a professional four-year undergraduate engineering degree course."
        },
        {
            title: "M. Tech",
            text: "The 2 year M.Tech programme is one of the most popular courses amongst research enthusiasts who want to work in the field of technological research."
        },
        {
            title: "MBA",
            text: "A master of business administration (MBA) is a graduate degree that provides theoretical and practical training for business or investment management."
        },
        {
            title: "MCA",
            text: "MCA at BCREC is a two-year PG course designed for aspirants who want to excel in the world of computer application development."
        },
    ]

    return (
        <div className="mx-auto p-6 py-12">

            <h2 className="font-bold text-center text-3xl mb-8 text-slate-800">
                Our <span className="text-yellow-500">Programmes</span>
            </h2>

            {/* sm - 1 card, md - 2 cards, lg - 4 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {courses.map((course, index) => (
                    <Card key={index} className="border-none shadow-md flex flex-col h-full overflow-hidden">

                        <CardHeader className="bg-[#001f7d] py-3 text-center">
                            <CardTitle className="text-white text-lg font-bold">
                                {course.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="p-6 flex flex-col justify-between h-full">
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {course.text}
                            </p>

                            <div>
                                <Button className="bg-[#001f7d] hover:bg-blue-900 text-white">
                                    Learn More
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}