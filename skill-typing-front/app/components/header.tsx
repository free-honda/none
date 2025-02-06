import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
        <Link to="/" className="text-xl text-gray-900">
          Skill Typing
        </Link>
        <div ref={containerRef} className="relative inline-block">
          <button
            type="button"
            onClick={toggleMenu}
            className="flex flex-col justify-center space-y-2 p-2"
          >
            <div className="h-0.5 w-8 bg-gray-900" />
            <div className="h-0.5 w-8 bg-gray-900" />
            <div className="h-0.5 w-8 bg-gray-900" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-4 w-32 rounded border bg-white shadow-lg">
              <button
                type="button"
                className="block w-full px-4 py-2 text-center text-gray-900 hover:bg-gray-100"
              >
                ログアウト
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
