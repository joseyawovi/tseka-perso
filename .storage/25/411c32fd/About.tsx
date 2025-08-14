import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-primary/10 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                À Propos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Découvrez mon parcours, ma vision et ce qui me pousse à
                accompagner les autres dans leur développement personnel et
                professionnel.
              </p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="/assets/about/portrait.jpg"
                  alt="Portrait de Tcheka Malou"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold">
                  Tcheka Malou
                </h2>
                <p className="font-italianno text-3xl text-secondary">
                  "Les limites de notre vocabulaire sont les limites de notre
                  monde."
                </p>
                <div className="space-y-4 text-lg">
                  <p>
                    Né à Lyon en 1975, j'ai développé très tôt une passion pour
                    la communication et l'écriture. Après des études de sciences
                    politiques et un passage par une grande école de
                    journalisme, j'ai travaillé pendant dix ans dans les médias
                    avant de me réorienter vers le conseil.
                  </p>
                  <p>
                    Auteur de plusieurs ouvrages sur la communication
                    authentique et le leadership éthique, je partage aujourd'hui
                    mon temps entre l'écriture, la formation, le consulting et
                    divers projets entrepreneuriaux et sociaux.
                  </p>
                  <p>
                    Ma mission est d'aider les individus et les organisations à
                    trouver leur voix authentique et à l'exprimer avec impact et
                    intégrité.
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-secondary text-primary hover:bg-secondary/90"
                  >
                    <Link to="/contact">Me Contacter</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              Mon Parcours
            </h2>

            <div className="max-w-3xl mx-auto space-y-12">
              <div className="relative pl-10 pb-12 border-l-2 border-secondary">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
                <h3 className="font-playfair text-xl font-bold mb-2">
                  2020 - Aujourd'hui
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  Fondateur & Consultant
                </p>
                <p className="text-muted-foreground">
                  Création de mon cabinet de conseil en communication et
                  leadership. Accompagnement de dirigeants, personnalités
                  publiques et organisations dans leur stratégie de
                  communication.
                </p>
              </div>

              <div className="relative pl-10 pb-12 border-l-2 border-secondary">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
                <h3 className="font-playfair text-xl font-bold mb-2">
                  2015 - 2020
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  Directeur de la Communication
                </p>
                <p className="text-muted-foreground">
                  Direction de la stratégie de communication d'un grand groupe
                  industriel français. Gestion des relations presse et
                  institutionnelles.
                </p>
              </div>

              <div className="relative pl-10 pb-12 border-l-2 border-secondary">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
                <h3 className="font-playfair text-xl font-bold mb-2">
                  2010 - 2015
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  Auteur & Formateur
                </p>
                <p className="text-muted-foreground">
                  Publication de mes premiers ouvrages sur la communication.
                  Début de mon activité de formation auprès d'écoles de commerce
                  et d'universités.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
                <h3 className="font-playfair text-xl font-bold mb-2">
                  2000 - 2010
                </h3>
                <p className="text-secondary font-semibold mb-4">Journaliste</p>
                <p className="text-muted-foreground">
                  Reporter puis rédacteur en chef adjoint pour plusieurs médias
                  nationaux. Spécialisation dans les sujets économiques et
                  politiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-playfair text-3xl font-bold md:text-4xl mb-4">
                Mes Valeurs
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Les principes qui guident mon travail et mon engagement au
                quotidien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary/5 p-8 rounded-lg">
                <div className="mb-4 h-12 w-12 rounded-full bg-secondary/20 p-3 text-secondary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3">
                  Authenticité
                </h3>
                <p className="text-muted-foreground">
                  Je crois en une communication sincère et transparente, qui
                  respecte l'intelligence de l'interlocuteur et favorise la
                  confiance.
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg">
                <div className="mb-4 h-12 w-12 rounded-full bg-secondary/20 p-3 text-secondary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3">Impact</h3>
                <p className="text-muted-foreground">
                  Mon objectif est de créer un changement positif et durable,
                  que ce soit à travers mes écrits, mes formations ou mes
                  conseils.
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg">
                <div className="mb-4 h-12 w-12 rounded-full bg-secondary/20 p-3 text-secondary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3">
                  Transmission
                </h3>
                <p className="text-muted-foreground">
                  Je m'engage à partager mes connaissances et mon expérience
                  pour permettre à chacun de développer son plein potentiel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Life Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src="/assets/about/personal1.jpg"
                      alt="Tcheka Malou en montagne"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src="/assets/about/personal2.jpg"
                      alt="Tcheka Malou avec sa famille"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 aspect-[2/1] overflow-hidden rounded-lg">
                    <img
                      src="/assets/about/personal3.jpg"
                      alt="Tcheka Malou en train d'écrire"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:order-1">
                <h2 className="font-playfair text-3xl font-bold">
                  Au-delà du travail
                </h2>
                <div className="space-y-4">
                  <p>
                    Père de deux enfants, je vis entre Lyon et la campagne
                    ardéchoise où j'ai mes racines familiales. Passionné de
                    montagne et de randonnée, j'y puise l'inspiration et
                    l'énergie nécessaires à mon travail créatif.
                  </p>
                  <p>
                    Grand lecteur, ma bibliothèque compte plus de 3000 ouvrages,
                    principalement de littérature, philosophie et sciences
                    humaines. J'aime aussi la photographie et la cuisine, deux
                    autres formes d'expression qui nourrissent ma créativité.
                  </p>
                  <p>
                    Je m'implique régulièrement dans des projets associatifs
                    liés à l'éducation et à l'accès à la culture, convaincu que
                    ces leviers sont essentiels pour construire une société plus
                    juste et plus harmonieuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
