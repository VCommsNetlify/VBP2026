"use client";
import React, { useEffect, useState } from "react";
import data from "../../public/data/faq.json";
import classNames from "classnames";

const FAQItem = ({ question, answer }) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <button className={classNames("faqs-accordion  ", active && "active")} onClick={() => setActive(!active)}>
                <span className="translate !font-semibold text-xl md:text-2xl" data-key="faqs-1">
                    {question}
                </span>
            </button>
            <div className="border-b-2 border-[#004d84]"></div>
            <div
                className={classNames("faqs-panel md:text-2xl text-xl", active && "!block")}
                dangerouslySetInnerHTML={{ __html: answer }}
            ></div>
        </>
    );
};

const FAQ = () => {
    const [faq, setFaq] = useState(data);

    return (
        <>
            <div id="faqs-sec" className="anchor"></div>
            <section id="faqs" className=" !bg-[#FFFFFF] p-8 w-full h-full mx-auto container my-16">
                {/* bbc9ff */}
                <h1
                    className="faqs-title text-2xl md:text-4xl font-bold text-center !text-[#004d84] font-bison"
                    data-key="faqs-title"
                >
                    FREQUENTLY ASKED QUESTIONS
                </h1>
                <div className="faqs-menu !bg-[#FFFFFF] !text-[#004d84]">
                    {faq.map((item, idx) => (
                        <FAQItem key={idx} {...item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default FAQ;
