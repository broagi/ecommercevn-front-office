'use client';
import { Transition } from "@headlessui/react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return <>
  <button onClick={openMobileMenu} type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <Transition show={isOpen}>
  <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-black bg-opacity-25"></div>

  <div className="fixed inset-0 z-40 flex">
    <div className="fixed top-0 left-0 right-0 bottom-0 flex w-full h-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
      <div className="flex px-4 pb-2 pt-5">
        <button onClick={closeMobileMenu} type="button" className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-6 border-gray-200 px-4 py-6">
        <div className="flow-root">
          <Link href="/products" onClick={closeMobileMenu} className="-m-2 block p-2 text-gray-900">Producs</Link>
        </div>
        <div>
              <p id="women-clothing-heading-mobile" className="font-medium text-gray-900">Categories</p>
              <ul role="list" aria-labelledby="women-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                  <Link href="/products"  onClick={closeMobileMenu}  className="-m-2 block p-2 text-gray-500">Women</Link>
                </li>
                <li className="flow-root">
                  <Link href="/products"  onClick={closeMobileMenu}  className="-m-2 block p-2 text-gray-500">Women</Link>
                </li>
                <li className="flow-root">
                  <Link href="/products"  onClick={closeMobileMenu}  className="-m-2 block p-2 text-gray-500">Women</Link>
                </li>

              </ul>
            </div>
        <div className="flow-root">
          <Link href="/contact"  onClick={closeMobileMenu}  className="-m-2 block p-2 text-gray-900">Contact</Link>
        </div>
        <div className="flow-root">
          <Link href="/about-us" onClick={closeMobileMenu}  className="-m-2 block p-2 text-gray-900">About Us</Link>
        </div>
      </div>

      <div hidden className="space-y-6 border-gray-200 px-4 py-6">
        <div className="flow-root">
          <a href="#" className="-m-2 block p-2 text-gray-700">Sign in</a>
        </div>
        <div className="flow-root">
          <a href="#" className="-m-2 block p-2 text-gray-700">Create account</a>
        </div>
      </div>
    </div>
  </div>
</div>
</Transition>
</>
}