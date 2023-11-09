type Props = {};

export function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 bg-marshland flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <p className="uppercase hidden md:inline-flex text-sm text-alt">
        Capyba UI
      </p>
    </header>
  );
}
