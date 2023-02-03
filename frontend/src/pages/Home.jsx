// import CardTest from "../components/CardTest";
import ButtonCreate from "../components/ButtonCreate";
import ButtonGet from "../components/ButtonGet";
import Card from "../components/Card";

export default function Home() {
  return (
    <header className="bg-[url('https://res.cloudinary.com/db2sa2bxv/image/upload/v1675342883/og-default_jluo2r.webp')]">
      <div className="text-center bg-gray-700 text-white py-1 font-semibold text-lg md:text-xl px-2">
        {" "}
        REJOINS LES 10 MEILLEURS BUTEURS DE LA LIGUE DES CHAMPIONS{" "}
      </div>
      <div className="flex justify-around">
        <div className="py-4">
          <ButtonCreate />
        </div>
        <div className="py-4">
          <ButtonGet />
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="py-8 gap-8 flex flex-col md:flex-row flex-wrap-reverse justify-center">
          <Card />
        </div>
      </div>

      {/* <CardTest /> */}
    </header>
  );
}

// break-inside-avoid-column
