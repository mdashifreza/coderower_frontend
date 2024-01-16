import React from 'react';

const Footer = () => {
    return (
        <footer className="border-2 p-6 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Sales :</h2>
                    <p>India +91 97111 41179</p>
                </div>
                <div className="flex items-center space-x-4 md:mb-0 mb-4">
                    <a
                        href="https://www.facebook.com/coderower"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.linkedin.com/company/coderower"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://twitter.com/coderower"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Email :</h2>
                    <p>info@coderower.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
