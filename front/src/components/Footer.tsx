import FooterLink from './elements/FooterLink'

const Footer = () => {

    const linksArray1 = [
        {
            title: 'About',
            link: "/aboutUs"
        },
        {
            title: 'Careers',
            link: "/careers"
        },
        {
            title: 'Press',
            link: "/press"
        }
    ]

    const linksArray2 = [
        {
            title: 'Help',
            link: "/FAQ"
        },
        {
            title: 'Contact',
            link: "/contact"
        },
        {
            title: 'Pricing',
            link: "/pricing"
        }
    ]

    const linksArray3 = [
        {
            title: 'Legal',
            link: "/terms"
        },
        {
            title: 'Privacy',
            link: "/privacypolicy"
        },
        {
            title: 'Security',
            link: "/security"
        }
    ]


    return (
        <div className='flex w-full mt-24'>
            <div className="container flex flex-col justify-evenly items-center w-full h-full mx-auto">
                <div className='flex flex-col lg:flex-row justify-evenly items-center w-full h-full mx-auto'>
                    <FooterLink title='About us' arrayLinks={linksArray1} />
                    <FooterLink title='About us' arrayLinks={linksArray2} />
                    <FooterLink title='About us' arrayLinks={linksArray3} />
                </div>
                <div className='my-8'>
                    <h4>&copy; 2023 SportuMeu</h4>
                </div>


            </div>




        </div>
    )
}

export default Footer