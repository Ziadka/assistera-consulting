import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-white sm:text-5xl mb-12">
          Contactez-nous
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Nos coordonnées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white" />
                <a href="mailto:contact@assisteraconsulting.com" className="text-white hover:underline">
                  contact@assisteraconsulting.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-gray-400">Appelez-nous pour un service personnalisé</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-gray-400">Service d'assistance virtuelle - Disponible en ligne</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Suivez-nous</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400">
                Restez informé de nos dernières actualités et offres en nous suivant sur les réseaux sociaux.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild className="border-white text-white hover:bg-white hover:text-black">
                  <a href="https://www.facebook.com/AssiteraConsulting" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-white text-white hover:bg-white hover:text-black">
                  <a href="https://www.linkedin.com/company/assiteraconsulting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-white text-white hover:bg-white hover:text-black">
                  <a href="https://www.instagram.com/assiteraconsulting" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Prêt à simplifier la gestion de votre entreprise ?</h2>
          <Button size="lg" asChild className="btn-primary">
            <a href="mailto:contact@assisteraconsulting.com">Contactez-nous dès maintenant</a>
          </Button>
        </div>
      </div>
    </div>
  )
}