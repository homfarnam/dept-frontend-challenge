import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
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

  useEffect(() => {
    if (time) {
      // increase the time by 1 every second
      var timer = setTimeout(() => setTime((prev) => prev + 1), 1000)
      console.log({ timer })
      document.body.style.setProperty('--time', `${time}s`)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [time])

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
            alt="logo"
            width={30}
            height={30}
          />
        </div>
      </div>

      <div className="megaMenu__menu">
        {MobileNavLinks.map((item, i) => {
          return (
            <>
              <div key={item.id} className="megaMenu__menu__item">
                <Link href="#">{item.title}</Link>
                <hr className="w-full border border-[#A3A3A3]" />
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default MegaMenu
