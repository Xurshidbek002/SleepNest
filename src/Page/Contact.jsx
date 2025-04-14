import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GoCheckCircle } from "react-icons/go";
import { IoClose } from "react-icons/io5";




function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmail = email.includes("@gmail.com")
      ? email
      : email + "@gmail.com";
    const text = `📩 Yangi xabar:\n\n📧 Email: ${newEmail}\n📱 Telefon: ${phone}\n📝 Xabar: ${message}`;

    await fetch(
      `https://api.telegram.org/bot7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "6873538625",
          text: text,
        }),
      }
    )
      .then((res) => {
        setEmail("");
        setPhone("");
        setMessage("");
        setModal(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            <form
              onSubmit={handleSubmit}
              className="md:w-1/2 flex flex-col gap-5 items-start"
            >
              <h1 className="text-3xl pl-5 font-medium md:text-4xl  md:font-bold">
                {t("contact.title")}
              </h1>

              <input
                required
                type="text"
                placeholder={t("contact.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-[12px] md:text-sm outline-none hover:shadow-[2px_2px_3px_#00000019] focus:shadow-[2px_2px_6px_#00000040] bg-gray-300 rounded-3xl pl-7 p-3"
              />

              <input
                required
                type="tel"
                placeholder={t("contact.phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-[12px] md:text-sm outline-none hover:shadow-[2px_2px_3px_#00000019] focus:shadow-[2px_2px_6px_#00000040] bg-gray-300 rounded-3xl pl-7 p-3"
              />

              <textarea
                placeholder={t("contact.message")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-[12px] md:text-sm outline-none hover:shadow-[2px_2px_3px_#00000019] focus:shadow-[2px_2px_6px_#00000040] h-26 bg-gray-300 rounded-3xl pl-7 p-3"
              ></textarea>

              <button
                type="submit"
                className="px-4 tracking-wide text-white font-medium py-1 bg-red-500 rounded-2xl cursor-pointer"
              >
                {t("contact.btn")}
              </button>
            </form>

            <iframe
              className="h-100 md:w-1/2 rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1744540235784!5m2!1sen!2sus"
              touchstart="passive"
            ></iframe>
          </div>
          <div className=""></div>
        </div>
      </div>
      {modal && (
        <div
          onClick={closeModal}
          className="w-full fixed h-full bg-black/40 backdrop-blur-sm z-[5000]  top-0 left-0 flex justify-center items-center"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white relative shadow-[0_0_19px_#00000080] rounded-2xl p-5"
          >
            <IoClose
              onClick={closeModal}
              size={20}
              className="absolute right-1.5 top-1.5"
            />

            <GoCheckCircle size={100} className="mx-auto text-green-500" />
            <div className="mt-5">{t("contact.modal")}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
