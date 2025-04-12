import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Winter from "../data/Winter";
import Autumn from "../data/Autumn";
import Summer from "../data/Summer";
import { useTranslation } from "react-i18next";
import { MdErrorOutline, MdStarRate } from "react-icons/md";
import { FaCommentSlash, FaHeart, FaRegHeart, FaSpinner } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import useLikeStore from "../store/likeStore";

const base = [
  {
    id: 1,
    left: "winter.left.1",
    right: "winter.right.1",
  },
  {
    id: 2,
    left: "winter.left.2",
    right: "winter.right.2",
  },
  {
    id: 3,
    left: "winter.left.3",
    right: "winter.right.3",
  },
  {
    id: 4,
    left: "winter.left.4",
    right: "winter.right.4",
  },
  {
    id: 5,
    left: "winter.left.5",
    right: "winter.right.5",
  },
  {
    id: 6,
    left: "winter.left.6",
    right: "winter.right.6",
  },
];

function Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { t } = useTranslation();
  const { likedItems, toggleLike } = useLikeStore(); // Like store'ni olish

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [origin, setOrigin] = useState("center center");
  const [reviews, setReviews] = useState([]); // Sharhlarni saqlash uchun

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  useEffect(() => {
    setLoading(true);
    const allItems = Winter.concat(Autumn, Summer);
    const found = allItems.find((item) => item?.id?.toString() === id);

    setTimeout(() => {
      setItem(found);
      setLoading(false);
    }, 600);
  }, [id]);

  // LocalStorage’dan sharhlarni olish
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { ...formData, id: item.id };

    // Sharhlarni saqlash
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setFormData({ name: "", email: "", message: "", rating: 0 });
  };

  const getRelatedItems = () => {
    const allItems = Winter.concat(Autumn, Summer);
    return allItems
      .filter((relatedItem) => relatedItem.id !== item.id)
      .slice(0, 5);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <FaSpinner className="animate-spin text-blue-500 text-[80px]" />
        <p className="mt-4 text-xl text-gray-600">loading</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-96">
        <MdErrorOutline className="text-red-500 text-[200px]" />
        <h1 className="text-2xl font-bold text-red-500">Malumot Yo'q</h1>
      </div>
    );
  }

  let collectionName;
  if (Winter.some((i) => i.id === item.id)) {
    collectionName = t("winter.titlesup");
  } else if (Autumn.some((i) => i.id === item.id)) {
    collectionName = t("autm.titlesup");
  } else if (Summer.some((i) => i.id === item.id)) {
    collectionName = t("summer.titlesup");
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="w-full h-full overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setOrigin("center center");
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setOrigin(`${x}% ${y}%`);
          }}
        >
          <img
            src={item?.img}
            alt={item?.title}
            className="w-full h-full object-cover rounded-3xl transition-transform duration-300 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.5)" : "scale(1)",
              transformOrigin: origin,
            }}
          />
        </div>
        <div>
          <h1 className=" text-3xl font-bold pt-4 pb-5">{t(item?.title)}</h1>
          <table className="w-full table-auto border border-black border-collapse">
            <tbody>
              {base.map((item) => (
                <tr key={item.id} className="border border-black">
                  <td className="border text-sm md:text-md border-black px-4 py-4">
                    {t(item.left)}
                  </td>
                  <td className="border text-sm md:text-md border-black px-4 py-4">
                    {t(item.right)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="pt-5 text-red-500 text-center md:text-left">
            {t("winter.text")} {collectionName}
          </p>
        </div>
      </div>

      {/* Review section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="flex flex-col order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl text-center font-bold">
            {t("detal.sh")}
          </h2>
          <div>
            {reviews &&
            reviews.filter((review) => review.id === item.id).length > 0 ? (
              reviews
                .filter((review) => review.id === item.id) // Faqat shu productga oid sharhlar
                .map((review, index) => (
                  <div key={index} className="rounded-md bg-gray-100 p-4 my-2">
                    <p>
                      <strong>{review.name}</strong>
                    </p>
                    <p>{review.email}</p>
                    <p>{review.message}</p>
                    <p>
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} className="inline text-yellow-500" />
                        ))}
                    </p>
                  </div>
                ))
            ) : (
              <div className="flex flex-col justify-center items-center h-full pt-10">
                <FaCommentSlash className="text-9xl text-gray-400" />
              </div>
            )}
          </div>
        </div>

        {/* form izoh qoldirish uchun */}
        <div className="flex flex-col order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl text-center font-semibold">
            {t("detal.shq")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <label className=" text-gray-700 text-sm ">{t("detal.reting")}</label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <MdStarRate
                  key={rating}
                  className={`cursor-pointer text-3xl ${
                    formData.rating >= rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  onClick={() =>
                    setFormData((prevData) => ({ ...prevData, rating }))
                  }
                />
              ))}
            </div>
            <div>
              <label className="pl-4 text-gray-700 text-sm">{t("detal.name")}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-2 bg-gray-300 rounded-2xl focus:outline-none focus:scale-102"
              />
            </div>
            <div>
              <label className="pl-4 text-gray-700 text-sm">{t("detal.email")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-4 py-2 bg-gray-300 rounded-2xl focus:outline-none focus:scale-102"
              />
            </div>
            <div>
              <label className="pl-4 text-gray-700 text-sm">
                {t("detal.rew")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="w-full px-4 py-2 bg-gray-300 rounded-2xl focus:outline-none focus:scale-102"
              />
            </div>
            <div></div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 w-full py-2 bg-red-500 hover:bg-red-400 text-white rounded-lg"
              >
                {t("detal.btn")}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center">{t("detal.pro")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
          {getRelatedItems().map((relatedItem) => {
            const isLiked = likedItems.some(
              (likedItem) => likedItem.id === relatedItem.id
            );
            return (
              <div key={relatedItem.id} className="relative">
                <button
                  onClick={() => toggleLike(relatedItem)}
                  className="absolute bg-white/80 text-red-500 w-8 h-8 flex items-center justify-center rounded-full top-2 right-2 z-3 text-xl"
                >
                  {isLiked ? <FaHeart /> : <FaRegHeart />}
                </button>
                <img
                  src={relatedItem.img}
                  alt={relatedItem.title}
                  className="w-full h-40 rounded-xl object-cover"
                />
                <h3 className="text-md mt-2">{t(relatedItem.title)}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
