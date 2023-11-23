import Link from "next/link";

export default function ProductPage() {
  return (
    <>
      <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 w-full ">
        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg"
            alt="Two each of gray, white, and black shirts arranged on table."
            className="object-cover object-center"
          />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            Basic Tee 6-Pack
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="text-2xl text-gray-900">$192</p>
          </section>

          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading" className="sr-only">
              Product options
            </h3>

            <form>
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>
          </section>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 w-full ">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <Link href="/products/1" className="group" >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
        </Link>
        <Link href="/products/1" className="group" >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </Link>
        <Link href="/products/1" className="group" >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
        </Link>
        <Link href="/products/1" className="group" >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </Link>
      </div>
    </div>
      </>

  )
}

