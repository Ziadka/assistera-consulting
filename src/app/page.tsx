import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Simplifiez la gestion de votre entreprise avec Assitera Consulting
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Des solutions digitales pour une assistance professionnelle, efficace et à coût maîtrisé
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="/contact">
              <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Contactez-nous dès maintenant
              </Button>
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="/contact">
              <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Obtenez une consultation gratuite
              </Button>
              </a>
            </div>
          </div>
        </header>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Notre mission</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Assistance administrative et gestion virtuelle pour petites entreprises
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Chez Assitera Consulting, nous offrons des services d&apos;assistance administrative et de gestion virtuelle pour aider les petites entreprises à rationaliser leurs processus grâce à des solutions digitales sur mesure.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}