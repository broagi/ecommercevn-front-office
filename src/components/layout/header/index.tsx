import { Dropdown } from "@components/ui/Dropdown"
import Link from "next/link"
import { MobileMenu } from "./mobile-header"

export const Header = () => {
  return  <div className="">

  <header className="relative z-20" style={{background: 'linear-gradient(5deg, rgba(255,255,0,1) 0%, rgba(250,208,44,1) 100%)'}}>
    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
        <MobileMenu />

          <div className="ml-4 flex lg:ml-0">
            <Link href="/">
              <img className="w-10" src="/next.svg" alt="" />
            </Link>
          </div>

          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
            <Link href="/products" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Products</Link>
            <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
            <Dropdown />
            </a>
            <Link href="/contact" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Contact</Link>
            <Link href="/about-us" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">About Us</Link>
            </div>
          </div>

          <div  className="ml-auto flex items-center">
            <div hidden className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
              <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
            </div>

            <div hidden className="hidden lg:ml-8 lg:flex">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                <span className="ml-3 block text-sm font-medium">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>

            <div className="flex lg:ml-6">
              <a href="#" className="p-2 text-black hover:text-gray-500">
                <span className="sr-only">Search</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </a>
            </div>

            <div className="ml-4 flow-root lg:ml-6">
              <Link href="/payment/cart" className="group -m-2 flex items-center p-2">
                <svg className="h-6 w-6 flex-shrink-0  text-black group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

}