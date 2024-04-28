import { Logo } from "../Logo";

/**
 * Navbar sticky at the top component where we render the logo
 */
export const Navbar = () => {
  return (
    <section className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white max max-container">
        <div className="border-b border-gray-200 padding-x">
          <div className="flex h-16 items-center justify-between">
            <Logo />
          </div>
        </div>
      </header>
    </section>
  );
};
