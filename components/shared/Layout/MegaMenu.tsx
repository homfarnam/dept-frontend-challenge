import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { StyledMenuItem } from 'styles/styled'
import { MobileNavLinks } from './Navlinks'

interface MegaMenuProps {
  handleOpen: () => void
  isOpen: boolean
}

const MegaMenu = ({ handleOpen, isOpen }: MegaMenuProps) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.style.overflowY = 'hidden'
    }
  }, [isOpen])

  const handleClose = () => {
    const body = document.body

    body.style.overflowY = 'scroll'

    handleOpen()
  }

  return (
    <div className="megaMenu">
      <div className="megaMenu__top">
        <div>
          <Link href="/">
            <Image
              src="/images/DEPT-LOGO-white.svg"
              alt="logo"
              width={88}
              height={50}
            />
          </Link>
        </div>
        <div>
          <Image
            onClick={handleClose}
            src="/images/icons/close.svg"
            className="cursor-pointer"
            id="close"
            alt="close"
            width={30}
            height={30}
          />
        </div>
      </div>

      <div className="megaMenu__menu">
        {MobileNavLinks.map((item, i) => {
          return (
            <>
              <StyledMenuItem
                index={i}
                key={item.id}
                className="megaMenu__menu__item"
              >
                <Link href="#">{item.title}</Link>
                <hr className="w-full border border-[#A3A3A3]" />
              </StyledMenuItem>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default MegaMenu
