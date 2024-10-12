import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Users } from "lucide-react"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl mb-12">
          À propos d&apos;AssiteraConsulting
        </h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xl text-gray-700 mb-6">
              AssiteraConsulting est née de la volonté d&apos;aider les petites entreprises à se libérer des tâches administratives chronophages. Notre mission est d&apos;offrir des solutions d&apos;assistance virtuelle sur mesure et d&apos;accompagner nos clients dans leur transformation digitale.
            </p>
            <p className="text-xl text-gray-700">
              Nous comprenons les défis auxquels font face les entrepreneurs et les petites entreprises. C&apos;est pourquoi nous nous engageons à simplifier leur quotidien en leur permettant de se concentrer sur ce qui compte vraiment : le développement de leur activité.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assitance.jpg?height=400&width=400"
              alt="Illustration d'assistance virtuelle"
              className="rounded-lg shadow-lg"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Notre Mission
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 mr-2 text-blue-600" />
                Faciliter la gestion quotidienne des entreprises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                Chez AssiteraConsulting, notre objectif principal est de simplifier et d'optimiser la gestion administrative de nos clients. Nous mettons à leur disposition notre expertise et des outils digitaux performants pour les aider à gagner en efficacité et en productivité.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
                Solutions d&apos;assistance virtuelle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Nous proposons une gamme complète de services d&apos;assistance administrative virtuelle, adaptés aux besoins spécifiques de chaque entreprise. De la gestion des emails à la facturation, en passant par l&apos;organisation d&apos;agendas, nous prenons en charge les tâches chronophages pour libérer votre temps.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-purple-600" />
                Accompagnement dans la transformation digitale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                La digitalisation est un enjeu majeur pour les petites entreprises. Nous les guidons dans ce processus en leur proposant des solutions adaptées à leur taille et à leur secteur d&apos;activité. Notre objectif est de les aider à tirer pleinement parti des outils numériques pour améliorer leur efficacité et leur compétitivité.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}