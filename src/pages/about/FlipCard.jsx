import './about.css'
import { FiExternalLink } from 'react-icons/fi'
import PropTypes from "prop-types";
const FlipCard = (props) => {
    return (
        <div className="card h-40 w-80 md:w-52">
            <div className="card-inner">
                <div className="card-front flex items-center justify-center text-2xl font-medium">
                    <p>{props.name}</p>
                </div>
                <div className="card-back text-black flex flex-col items-center justify-center">
                    <strong>{props.position}</strong>
                    <p>{props.contribution}</p>
                    <a
                        className='flex items-center gap-1 '
                        href={'https://' + props.connect}
                        target='_blank'
                        rel="noreferrer">
                        Connect <FiExternalLink />
                    </a>
                </div>
            </div>
        </div>
    )
}
FlipCard.propTypes = {
    name: PropTypes.string.isRequired,
    connect: PropTypes.string.isRequired,
    contribution: PropTypes.string.isRequired,
    position: PropTypes.string
}
export default FlipCard