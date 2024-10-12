import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Calendar, FileText, Users, MessageCircle, Send, BarChart, PieChart } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Gestion administrative",
      description: "Optimisez votre temps et votre efficacité",
      icon: <Mail className="h-6 w-6" />,
      tasks: [
        "Traitement des emails",
        "Organisation d'agendas",
        "Gestion de la facturation",
        "Préparation de documents"
      ]
    },
    {
      title: "Support client",
      description: "Améliorez la satisfaction de vos clients",
      icon: <Users className="h-6 w-6" />,
      tasks: [
        "Réponses aux demandes",
        "Gestion des réseaux sociaux"
      ]
    },
    {
      title: "Marketing digital",
      description: "Boostez votre présence en ligne",
      icon: <Send className="h-6 w-6" />,
      tasks: [
        "Création de newsletters",
        "Suivi de campagnes",
        "Gestion de la présence en ligne"
      ]
    },
    {
      title: "Assistance comptable",
      description: "Simplifiez votre gestion financière",
      icon: <PieChart className="h-6 w-6" />,
      tasks: [
        "Préparation de documents financiers",
        "Suivi des comptes",
        "Assistance avec des outils comptables"
      ]
    }
  ]

  const reasons = [
    {
      title: "Fiabilité",
      description: "Une équipe expérimentée à votre service pour garantir des résultats de qualité."
    },
    {
      title: "Flexibilité",
      description: "Des solutions sur mesure adaptées à vos besoins spécifiques."
    },
    {
      title: "Coût maîtrisé",
      description: "Optimisez vos dépenses en externalisant vos tâches administratives."
    },
    {
      title: "Expérience digitale",
      description: "Profitez de notre expertise en outils numériques pour moderniser vos processus."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl mb-12">
          Nos Services
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {service.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mt-16 mb-8">
          Pourquoi choisir AssiteraConsulting ?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}