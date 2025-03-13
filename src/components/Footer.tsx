import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="w-full mt-10 flex-column justify-center items-center text-white opacity-85">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Products */}
                <div className="text-center">
                    <h3 className="text-lg text-sky-200 font-semibold mb-3">Products</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://skyflow.me?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Bluesky Observatory
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://pwplz.com?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Free Passwords
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://unrained.com?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Real-Time Weather
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://jumblr.fun?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Reading Challenge
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Blog */}
                <div className="text-center">
                    <h3 className="text-lg text-sky-200 font-semibold mb-3">Blog</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://devarno.com/blog/password-please?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Passwords | FastAPI
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://devarno.com/blog/dje-skyflow-1?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Networking | FastAPI
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://devarno.com/blog/jokes-votes-launch?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Jokes | Next.js
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://devarno.com/blog/sicilian-bytes?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Code | Cooking
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="text-center">
                    <h3 className="text-lg text-sky-200 font-semibold mb-3">Social</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://bsky.app/profile/devarno.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Bluesky
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Dev4rno"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.reddit.com/user/Dev4rno/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Reddit
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ko-fi.com/dev4rno"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-300"
                            >
                                Ko-Fi
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="mt-8 text-center pt-6 space-y-1">
                <a
                    href="https://devarno.com?utm_source=punpal&utm_medium=referral&utm_campaign=footer_cross_promotion&utm_content=site_footer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/devarno-logo.png" alt="DevArno Logo" width={50} height={50} className="mx-auto mb-2" />
                </a>
                <p className="text-lg text-sky-200">Build the solution</p>
                <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} DevArno. All rights reserved.</p>
            </div>{" "}
        </footer>
    );
};
