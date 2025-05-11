import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import { MdOutlineVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";

const services = [
  {
    id: 1,
    title: "service.title.1",
    text: "service.text.1",
    icon: <LiaShippingFastSolid />,
  },
  {
    id: 2,
    title: "service.title.2",
    text: "service.text.2",
    icon: <MdOutlineVerified />,
  },
  {
    id: 3,
    title: "service.title.3",
    text: "service.text.3",
    icon: <BiSupport />,
  },
  {
    id: 4,
    title: "service.title.4",
    text: "service.text.4",
    icon: <TfiWallet />,
  },
];
function Service() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-15">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {services.map((item) => (
              <div key={item.id} className="flex flex-col lg:flex-row lg:text-center items-center gap-3 md:gap-5">
                <div className="text-3xl sm:text-5xl text-red-500 text-primary">{item.icon}</div>
                <div className="lg:text-left text-center">
                  <div className="text-[10px] sm:text-[14px] font-semibold pb-2">{t(item.title)}</div>
                  <div className="text-gray-600 text-[8px] md:text-[10px]">{t(item.text)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
