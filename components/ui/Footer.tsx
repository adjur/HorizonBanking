import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
    const router = useRouter();

    return (
        <footer className="footer">
            <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
                <p className="text-xl font-bold text-blue-700">
                    {'A'}
                </p>
            </div>

            <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
                <h1 className="text-14 truncate text-gray-700 font-semibold">
                    {'Andi Dj'}
                </h1>
                <p className="text-14 truncate font-normal text-gray-600">
                    {'test@gmail.com'}
                </p>
            </div>

            <div className="footer_image" >
                <Link href={'./sign-in'}>
                    <Image src="icons/logout.svg" fill alt="jsm" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer