"use client";
import Image from "next/image";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


export const Navlinks=["Home", "About", "Learning Journey", "Experience", "Contact"]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sync the React state with the checkbox toggle (DaisyUI behavior)
  const handleDrawerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(e.target.checked);
  };

  // Manually toggle open/close using button
  const handleToggle = () => {
    const checkbox = document.getElementById("my-drawer-1") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      setIsOpen(checkbox.checked);
    }
  };

  // Close the drawer when clicking a menu item
  const handleClose = () => {
    const checkbox = document.getElementById("my-drawer-1") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
    setIsOpen(false);
  };

  return (
    <div className="drawer z-50">
      {/* Drawer controller checkbox */}
      <input
        id="my-drawer-1"
        type="checkbox"
        className="drawer-toggle"
        onChange={handleDrawerChange}
      />

      {/* Drawer button */}
      <div className="drawer-content">
        <button
          onClick={handleToggle}
          className="drawer-button block lg:hidden z-50 fixed top-3  left-2"
        >
          {isOpen ? (
            <RxCross2 className="text-2xl font-bold" />
          ) : (
            <RiMenu2Fill className="text-2xl font-bold" />
          )}
        </button>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-accent backdrop-blur-2xl min-h-full w-64 p-4 pt-10">
          {/* Profile section */}
          <div className="flex flex-col items-center">
            <Image
              src="/profile.png"
              alt="Mazedur Rahman"
              width={50}
              height={50}
              className="rounded-full mb-2 border-2 border-white"
            />
            <h2 className="text-xl font-bold mb-6 text-secondary">Md Mazedur Rahman</h2>
          </div>

          {Navlinks.map(
            (item) => (
              <li  key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={handleClose}
                  className="font-medium  hover:bg-primary text-white rounded-lg transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
