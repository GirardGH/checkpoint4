// import CardTest from "../components/CardTest";
import ButtonCreate from "../components/ButtonCreate";
import Card from "../components/Card";

export default function Home() {
  return (
    <header className="bg-[url('https://res.cloudinary.com/db2sa2bxv/image/upload/v1675342883/og-default_jluo2r.webp')]">
      <div className="text-center bg-gray-700 text-white py-1 font-semibold text-lg md:text-xl">
        {" "}
        REJOINS LES 10 MEILLEURS BUTEURS DE LA LIGUES DES CHAMPIONS{" "}
      </div>
      <div className="text-right pt-2 pb-6">
        <ButtonCreate />
      </div>
      <div className="flex flex-row justify-center gap-4">
        {/* <CardTest /> */}
        <div className="">
          <Card />
        </div>
      </div>

      {/* <CardTest /> */}
    </header>
  );
}

// break-inside-avoid-column
