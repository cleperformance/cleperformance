import {
  Banknote,
  Clock,
  MapPin,
  ShieldCheck,
  ThumbsUp,
  Wrench,
} from "lucide-react";

const advantages = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Intervention rapide",
    description:
      "Dépannage le jour même dans la plupart des cas. Nous comprenons l'urgence.",
  },
  {
    icon: <Banknote className="h-6 w-6" />,
    title: "Prix imbattables",
    description:
      "Jusqu'à 50% moins cher qu'en concession. Devis gratuit et sans engagement.",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Matériel professionnel",
    description:
      "Équipement de dernière génération pour toutes les marques et tous les systèmes.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Garantie qualité",
    description:
      "Clé identique à l'originale. Fonctionnement garanti : démarrage, télécommande, keyless.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Tout le 66 couvert",
    description:
      "Perpignan et toutes les communes des Pyrénées-Orientales. Déplacement possible.",
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Toutes marques",
    description:
      "Renault, Peugeot, VW, Toyota, Mercedes, BMW... Voitures, motos, PL, agricole.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="bg-[#F8F9FB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2A4A] sm:text-4xl">
            Pourquoi choisir Clé Performance 66 ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Un service professionnel, rapide et abordable pour la
            reprogrammation de vos clés à Perpignan.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1A6FAF]/10 text-[#1A6FAF]">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#0A2A4A]">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
