"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FAQ from "@/sections/FAQ";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { SiX } from "react-icons/si";

export default function Home() {
    const [showTranslation, setShowTranslation] = useState(false);

    return (
        <div>
            
            <Navigation />
            <main className="bg-main bg-no-repeat bg-cover w-full min-h-screen pt-0 md:pt-8 pb-8">
                <section className="w-full md:w-4/5 lg:w-3/5 mx-auto container py-4">
                   
                    <div className="">
                        <div className=" relative">
                            <video-js
                                data-account="3745659807001"
                                data-player="hXGs3fyvO"
                                data-embed="default"
                                controls=""
                                data-video-id="6388792887112"
                                data-ad-config-id="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3dfbGF0ZW5jeSI6dHJ1ZSwibW4iOiJwbGF5bGlzdCIsImlzcyI6ImJsaXZlLXBsYXliYWNrLW1hbmFnZW1lbnQtYXBpIiwic3ViIjoicGxheWJhY2t0b2tlbiIsImF1ZCI6WyIzNzQ1NjU5ODA3MDAxIl0sImp0aSI6IjYzODg3OTI4ODcxMTIifQ.NLm-n1EgJtwolZTHwD7i8ckCJFWq63V9YklY6nwzn68"
                                data-live-playback-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3dfbGF0ZW5jeSI6dHJ1ZSwibW4iOiJwbGF5bGlzdCIsImlzcyI6ImJsaXZlLXBsYXliYWNrLW1hbmFnZW1lbnQtYXBpIiwic3ViIjoicGxheWJhY2t0b2tlbiIsImF1ZCI6WyIzNzQ1NjU5ODA3MDAxIl0sImp0aSI6IjYzODg3OTI4ODcxMTIifQ.NLm-n1EgJtwolZTHwD7i8ckCJFWq63V9YklY6nwzn68"
                                data-application-id=""
                                width="960"
                                height="360"
                                className="vjs-fluid object-contain"
                            ></video-js>
                        </div>
                        <button
                            onClick={() => setShowTranslation(!showTranslation)}
                            className="w-full min-h-10 pt-1 pb-1 font-bison font-bold text-left px-2 md:px-4 bg-[#faa836] !text-white text-[.65rem] sm:text-sm md:text-base"
                        >
                            <Image
                                src="/headset.png"
                                width={"24"}
                                height={"24"}
                                alt="Headset"
                                className="mr-1 md:mr-2 inline"
                            />{" "}
                            Press this bar to select your preferred language interpretation.
                        </button>
                    </div>

                    <iframe
                        id="interprefyiFrame"
                        src="https://interpret.world/integrationlink?token=TheV2026&audio=true&captions=true"
                        className={classNames("w-full transition-all ", showTranslation ? "h-[80vh]" : "h-0")}
                    ></iframe>
                </section>

                 <div className="relative w-full h-24 sm:h-28 md:h-32 mx-auto mt-8 md:mt-12">
                        <Image
                            src={"/vbusiness.png"}
                            alt="V Business"
                            fill={true}
                            className="object-contain glowfilter object-bottom md:object-center"
                        />
                    </div>

                <section id="contact-us" className="mx-auto container py-16 text-[#004d84] font-medium">
                    <p className="px-4 md:px-0 py-3 md:py-6 text-lg md:text-3xl lg:text-4xl max-w-prose md:max-w-[40ch] mx-auto text-center leading-normal md:leading-loose lg:leading-normal">
                        {" "}
                        You have the power to change your life. The question is: where do you start?
                    </p>
                    <p className="px-4 md:px-0 py-3 md:py-6 text-lg md:text-3xl lg:text-4xl max-w-prose md:max-w-[40ch] mx-auto text-center leading-normal md:leading-loose lg:leading-normal">
                        Start here with <span className="font-bold">V Business Presentation!</span> This is the right
                        place for you to discover the world of network marketing and explore its unlimited
                        possibilities-The V way.
                    </p>
                    <h3 className="text-2xl md:text-5xl py-4 text-[#007377] text-center font-bold font-avheavy">
                        Let{"'"}s unleash your limitless potential!
                    </h3>
                    <h4 className="text-center text-[#004d84] font-bold mt-6 text-xl md:text-3xl font-avheavy">
                        Follow us and tag us on social:
                    </h4>

                    <div className="flex flex-row items-center justify-center gap-6 md:gap-8 py-4">
                        {/* Facebook: Icon and Text side-by-side */}
                        <Link 
                            href="https://www.facebook.com/@thevofficial" 
                            target="_blank" 
                            className="flex items-center gap-2"
                        >
                            <FaFacebook className="text-2xl md:text-3xl text-[#004d84]" /> 
                            <span className="text-[#004d84] italic text-base md:text-lg">@thevofficial</span>
                        </Link>

                        {/* Instagram: Icon only */}
                        <Link 
                            href="https://www.instagram.com/thev_official/" 
                            target="_blank"
                            className="flex items-center"
                        >
                            <AiFillInstagram className="text-3xl md:text-4xl text-[#004d84]" /> 
                        </Link>

                        {/* Twitter/X: Icon and Text side-by-side */}
                        <Link 
                            href="https://x.com/thev_official" 
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            {/* Updated Icon */}
                            <SiX className="text-xl md:text-2xl text-[#004d84]" /> 
                            <span className="text-[#004d84] italic text-base md:text-lg">@thev_official</span>
                        </Link>
                    </div>
                    <h2 className="font-bold font-avheavy text-[#004d84] text-center text-xl sm:text-2xl md:text-4xl py-4">
                        #VBP2026
                    </h2>
                </section>

                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
