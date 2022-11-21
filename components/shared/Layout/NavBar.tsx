import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWindowSize } from '../../../hooks'

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
  const router = useRouter()
  const { width } = useWindowSize()

  return (
    <header className="layout__navigation">
      <div>
        <Link href="/">
          <Image
            src={
              width > 768
                ? '/images/DEPT-LOGO-white.svg'
                : '/images/DEPT-LOGO-black.svg'
            }
            alt="logo"
            width={width > 768 ? 88 : 88}
            height={width > 768 ? 50 : 50}
          />
        </Link>
      </div>
      <div className="layout__navigation--menu">
        <nav>
          <Link href="#">Work</Link>
          <Link href="#">Culture</Link>
          <Link href="#">Services</Link>
          <Link href="#">Insights</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contact</Link>
        </nav>
        <Image
          src="/images/dots.svg"
          className="hidden md:flex"
          alt="logo"
          width={20}
          height={20}
        />
      </div>
      <div className="text-[#0E0E0E] text-base flex md:hidden">
        <span>MENU</span>
      </div>
    </header>
  )
}

export default NavBar
