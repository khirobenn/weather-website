import Fade from 'react-reveal/Fade.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const welcometo = 'welcome to';
    const weather = 'weather';
    const application = 'website';
    return <>
        <h1 className="text-white text-5xl ml-48 uppercase flex flex-col items-center grow text-center w-max justify-center phone:ml-0 phone:text-4xl phone:w-full">
            <Fade left cascade>
                <span>
                    {welcometo}
                </span>
            </Fade>
            <div>
                <Fade right cascade>
                    <span>your </span>
                    <span className='text-green-300'>{weather}</span>
                </Fade>
            </div>
            <Fade left cascade>
                <span className='relative after:content-[""] after:absolute after:w-full after:h-full after:-bottom-2 after:left-0 after:border after:border-green-300 after:border-l-0 after:border-r-0 after:border-t-0 after:scale-x-50'>
                    {application}
                </span>
            </Fade>
            <div className='flex'>
                <Fade bottom cascade>
                    <p className='pt-4 text-sm'>
                        made by
                    </p>
                </Fade>
                <Fade bottom cascade>
                    <a href="https://github.com/khirobenn" className='text-green-300 pt-4 text-sm'> khireddine</a>
                </Fade>
            </div>
        </h1>
        <Fade bottom>
            <div className='flex gap-x-4 pb-2 px-8 items-end'>
                <p className='text-gray-400 hover:text-green-300 hover:-translate-y-1'>
                    <a href="https://github.com/khirobenn" ><FontAwesomeIcon icon={faGithub} size='2xl' /></a>
                </p>
                <p className='text-gray-400 hover:text-green-300 hover:-translate-y-1'>
                    <a href="https://www.linkedin.com/in/khireddine-benmeziane-743978248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIquFhi1tTeCJcdRlRndE2Q%3D%3D" ><FontAwesomeIcon icon={faLinkedin} size='2xl'/></a>
                </p>
            </div>
        </Fade>
    </>
}

export default Home;