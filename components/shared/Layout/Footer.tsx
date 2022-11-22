import React, { useRef } from 'react'
import Image from 'next/image'
import FaceBook from '../../../public/images/socials/facebook.svg'
import Twitter from '../../../public/images/socials/twitter.svg'
import Instagram from '../../../public/images/socials/instagram.svg'
import Logo from '../../../public/images/DEPT-LOGO-white.svg'
import Arrow from '../../../public/images/arrow-up.svg'

const Footer = () => {
  const backToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="layout__footer">
      <div className="layout__footer__main">
        <div className="layout__footer__main__top">
          <div className="layout__footer__main__top__nav">
            <div className="layout__footer__main__top__nav--logo">
              <Image
                src="/images/DEPT-LOGO-white.svg"
                alt="Logo"
                sizes="100vw"
                width={88}
                height={25}
                quality={100}
              />
            </div>

            <ul className="layout__footer__main__top__nav--menu">
              <li>work</li>
              <li>services</li>
              <li>storeies</li>
              <li>about</li>
              <li>careers</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="layout__footer__main__top__nav--socials">
            <Image src={FaceBook} alt="facebook" />
            <Image src={Twitter} alt="Twitter" />
            <Image src={Instagram} alt="Instagram" />
          </div>
        </div>
        <hr className="layout__footer__main__top--separtor" />
        <div className="layout__footer__main__down">
          <div className="layout__footer__main__down--details">
            <span>Chamber of Commerce: 63464101 </span>
            <span>VAT: NL 8552.47.502.B01 </span>
            <span>Terms and conditions </span>
          </div>
          <div className="layout__footer__main__down--copyright">
            <span>© 2022 Dept Agency</span>
          </div>
        </div>
      </div>
      <div className="layout__footer__arrow" id="arrow-up" onClick={backToTop}>
        <Image src={Arrow} alt="Logo" quality={100} />
        <span>TOP</span>
      </div>
    </footer>
  )
}

export default Footer
