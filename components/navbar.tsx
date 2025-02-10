"use client"
import { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from "next/navigation";
import Link from 'next/link'

export const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ];

    const pathname = usePathname();

    return (
      <header className={`
        ${pathname === '/login' && 'hidden'}
        fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md h-16 border-b border-gray-200
      `}>
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-full">
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <Link href="/" className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                {/* Applying custom fonts */}
                <span className="font-bickham">M</span><span className="font-aeonik">DS</span>
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/#"className="text-sm/6 font-semibold text-gray-900">
              Consult an expert
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold">MDS</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Consult an Expert
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    );
};
