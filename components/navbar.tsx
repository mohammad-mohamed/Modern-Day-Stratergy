"use client"
import { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { usePathname } from "next/navigation";
import Link from 'next/link'
import styled from 'styled-components';
import 'flag-icons/css/flag-icons.min.css'
import localfont from "next/font/local"

const bickhamFont = localfont({
  src: "../public/fonts/Bickham-regular.ttf"
})

const FlagCircle = styled.span`
  display: inline-block;
  width: 10px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  overflow: hidden;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 10;
    right: 10;
    bottom: 0;
    border-radius: 100%;
    content: '';
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 130px;
  border-radius: 0.375rem;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #374151;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const BickhamM = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

// Language options with updated flag classes
const languages = [
  { code: 'gb', name: 'English', flag: 'fi fi-gb fis' },
  { code: 'nl', name: 'Dutch', flag: 'fi fi-nl fis' },
]

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  // Updated navigation items: Service, About, Contact
  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const pathname = usePathname();

  return (
    <header className={`
      ${pathname === '/login' && 'hidden'}
      sticky inset-x-0 top-0 z-50 bg-black h-16 
    `}>
      <nav aria-label="Global" className="flex justify-between p-6 lg:px-8 h-full items-center">
        <div className="flex lg:flex-1">
          <div className="-m-1.5 px-11">
            <Link href="/" className="text-2xl font-bold text-white">
              <BickhamM className = {`${bickhamFont.className}`}>M</BickhamM><span className="font-aeonik">ds</span>
            </Link>
          </div>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center space-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-8">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-3 text-white"
            >
              <FlagCircle className={currentLanguage.flag} />
              <span className="text-sm font-light">{currentLanguage.name}</span>
              <ChevronDownIcon className="h-4 w-4 opacity-40" />
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <DropdownMenu>
                {languages.map((language) => (
                  <DropdownItem
                    key={language.code}
                    onClick={() => {
                      setCurrentLanguage(language);
                      setIsLanguageOpen(false);
                    }}
                  >
                    <FlagCircle className={language.flag} />
                    <span>{language.name}</span>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </div>

          <Link href="/#" className="text-sm font-light text-white hover:underline">
            Consult an expert
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white"><BickhamM className = {`${bickhamFont.className}`}>M</BickhamM>ds</Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {/* Language Selector for Mobile */}
                <div className="mb-4">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => setCurrentLanguage(language)}
                      className="flex items-center space-x-3 -mx-3 px-3 py-2 text-base/7 font-light text-white hover:bg-gray-800 w-full"
                    >
                      <FlagCircle className={language.flag} />
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
                <Link href="/#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800">
                  Consult an Expert
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
