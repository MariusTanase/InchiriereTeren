import { Link } from 'react-router-dom'
import { FooterLinkProps} from '../../types/FooterType.type'

const FooterLink = ({title, arrayLinks}: FooterLinkProps) => {


    return (
        <div className='flex flex-col lg:flex-col'>
            <h4 className='text-slate-900 font-bold text-2xl mb-4'>{title}</h4>
            <ul>
                {arrayLinks.map((item) => {
                    return (
                        <Link key={item.title+item.link} to={item.link}>
                            <li key={title} className='text-slate-700 font-bold text-lg flex-1 mb-2'>
                                {item.title}
                            </li>
                        </Link>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default FooterLink