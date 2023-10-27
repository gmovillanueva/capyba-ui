import { Button01 } from "@/components/Button/Button01";
import { Button02 } from "@/components/Button/Button02";
import { ComponentShowcase } from "@/components/ComponentShowcase/ComponentShowcase";
import { Footer01 } from "@/components/Footer/Footer01";

export const LandingPage = () => {
  return (
    <>
      <div className="bg-blackrussian text-glacier h-screen snap-y snap-mandatory overflow-scroll z-0">
        <h1 className="text-3xl font-bold underline text-center">Capyba-UI</h1>
        <div className="flex flex-col justify-center items-center">
          <ComponentShowcase>
            <Button01 />
          </ComponentShowcase>
          <ComponentShowcase>
            <Button02 />
          </ComponentShowcase>
          <ComponentShowcase>
            <Footer01 />
          </ComponentShowcase>
        </div>
      </div>
    </>
  );
};
