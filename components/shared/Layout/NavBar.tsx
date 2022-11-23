import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useWindowSize } from '../../../hooks'
import { DesktopNavLinks } from './Navlinks'
import MegaMenu from './MegaMenu'
import Dots from '../../../public/images/dots.svg'
import LogoWhite from '../../../public/images/DEPT-LOGO-white.svg'
import LogoDark from '../../../public/images/DEPT-LOGO-black.svg'

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
  const { width } = useWindowSize()
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  const handleMegaMenu = () => {
    setIsMegaMenuOpen((prev) => !prev)
  }

  return (
    <>
      <header className="layout__navigation">
        <div>
          <Link href="/">
            <Image src={width > 768 ? LogoWhite : LogoDark} alt="logo" />
          </Link>
        </div>
        <div className="layout__navigation--menu">
          <nav className="layout__navigation--menu__desktopMenu">
            {DesktopNavLinks.map((item) => {
              return (
                <Link key={item.id} href="#">
                  {item.title}
                </Link>
              )
            })}
          </nav>

          <Image
            onClick={handleMegaMenu}
            src={Dots}
            className="hidden cursor-pointer md:flex"
            alt="logo"
          />
        </div>
        <div className="text-[#0E0E0E] text-base flex md:hidden">
          <button onClick={handleMegaMenu}>MENU</button>
        </div>
      </header>

      {isMegaMenuOpen && (
        <MegaMenu handleOpen={handleMegaMenu} isOpen={isMegaMenuOpen} />
      )}
    </>
  )
}

export default NavBar
