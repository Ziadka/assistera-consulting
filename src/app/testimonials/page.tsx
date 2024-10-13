import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah",
      role: "Gérante d'une boutique en ligne",
      content: "Une équipe réactive et très professionnelle. Grâce à Assitera Consulting, nous avons optimisé notre gestion quotidienne.",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Ahmed",
      role: "CEO d'une startup tech",
      content: "Ils sont devenus un atout essentiel pour notre équipe. Des services d'assistance efficaces et fiables.",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-white sm:text-5xl mb-12">
          Témoignages Clients
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-0">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={`Avatar de ${testimonial.name}`} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold text-white">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="relative">
                  <Quote className="absolute top-0 left-0 text-white h-8 w-8 -mt-2 -ml-2 opacity-25" />
                  <p className="text-gray-300 italic pl-6 pr-4">{testimonial.content}</p>
                </div>
                <div className="flex mt-4 text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}