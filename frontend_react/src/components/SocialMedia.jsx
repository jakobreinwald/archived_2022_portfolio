import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub, BsEnvelopeFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jakob.reinwald_/">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/jakob.reinwald.9/">
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jakob-reinwald/">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/jakobreinwald">
                    <BsGithub />
                </a>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="mailto:jakob.reinwald@yahoo.com">
                    <BsEnvelopeFill />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia