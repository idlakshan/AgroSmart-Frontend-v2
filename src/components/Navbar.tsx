import {
  LeafIcon,
  MenuIcon,
  SunIcon,
  DropletsIcon,
  SproutIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

interface NavItem {
  name: string;
  icon: ReactNode;
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { user } = useUser();
  const role = user?.publicMetadata?.role as string | undefined;

  const navItems: NavItem[] = [
    { name: "Analysis", icon: <DropletsIcon className="h-4 w-4" /> },
    { name: "Features", icon: <SproutIcon className="h-4 w-4" /> },
    { name: "Recommendations", icon: <LeafIcon className="h-4 w-4" /> },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-sm py-3 px-6 md:px-12 sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <LeafIcon className="h-7 w-7 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
            <SunIcon className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 animate-pulse" />
          </div>
          <span className="font-heading font-bold text-2xl bg-linear-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            AgroSmart
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(" ", "-")}`}
              className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 transition-colors group"
            >
              {item.icon}
              {item.name}
              <span className="block w-0 group-hover:w-full h-0.5 bg-linear-to-r from-green-400 to-green-600 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-green-50 text-gray-600 hover:text-green-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        <div className="hidden md:flex items-center space-x-4">
          {role === "admin" && (
            <Link
              to="/admin/crops"
              className="text-green-700 font-medium hover:text-green-800 transition-all flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-green-50"
            >
              Admin
            </Link>
          )}

          <SignedOut>
            <div className="flex items-center gap-3">
              <Link
                to="/sign-in"
                className="px-4 py-2 text-green-700 font-medium rounded-lg hover:bg-green-50 transition flex items-center gap-1.5 border border-green-100 hover:border-green-200 hover:shadow-sm"
              >
                Log In
              </Link>

              <Link
                to="/sign-up"
                className="px-4 py-2 bg-linear-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-600 transition flex items-center gap-1.5 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="border-l border-green-100 pl-4">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-8 w-8",
                    userButtonOuterIdentifier:
                      "text-sm font-medium text-gray-700",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white mt-2 py-2 px-4 rounded-lg shadow-lg border border-green-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(" ", "-")}`}
              className="flex items-center gap-2 py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              {item.name}
            </a>
          ))}

          <div className="pt-2 mt-2 border-t border-green-100">
            <Link
              to="/admin/crops"
              className="flex items-center gap-2 py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </div>

          <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-green-100">
            <SignedOut>
              <Link
                to="/sign-in"
                className="flex justify-center px-4 py-2.5 border border-green-100 text-green-700 font-medium rounded-lg hover:bg-green-50 transition"
              >
                Log In
              </Link>

              <Link
                to="/sign-up"
                className="flex justify-center px-4 py-2.5 bg-linear-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-600 transition shadow-sm"
              >
                Get Started
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="flex justify-center py-2">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};
