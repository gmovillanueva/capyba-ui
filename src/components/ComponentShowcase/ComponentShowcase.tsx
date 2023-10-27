import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ComponentShowcase = ({ children }: Props) => {
  return (
    <section className="container mx-auto overflow-hidden rounded-lg scrollbar-none">
      <div id="component-showcase-root" className="divide-y rounded bg-bunker">
        <div
          id="component-showcase-header"
          className="flex justify-between px-2 py-4 sm:p-4 flex-nowrap"
        >
          <div id="component-showcase-button-group" className="space-x-2">
            <button
              className="px-2 py-1 text-sm rounded-md"
              type="button"
              name="Show Preview"
            >
              Preview
            </button>
            <button
              className="px-2 py-1 text-sm rounded-md"
              type="button"
              name="Show JSX"
            >
              JSX
            </button>
          </div>
        </div>
        <div id="component-showcase-body" className="relative">
          <div className="p-3 px-6 min-h-48 flex overflow-x-auto justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
