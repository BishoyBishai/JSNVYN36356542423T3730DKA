/**
 * Footer is a component to render the footer of the application
 */
export const Footer = () => {
  return (
    <footer className="padding-x bg-black text-white">
      <div className="py-10 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
