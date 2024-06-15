import SearchBar from "./(components)/searchBar/SearchBar";
import RandomVerbeBtn from "./(components)/word/RandomVerbeBtn";

export default function Home() {
  return (
    <main className="m-auto my-20 px-mobilex md:px-normalx pt-[3rem]">
      <div className="grid grid-auto gap-16 max-w-[60rem]">
        <h1 className="font-bold text-2xl md:text-4xl text-center">Bienvenue à votre dictionnaire de prépositions préféré!</h1>
        <div className="flex flex-col gap-3">
          <SearchBar />
          <div className="flex justify-center">
            <RandomVerbeBtn />
          </div>
        </div>
      </div>
    </main>
  );
}
