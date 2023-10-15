import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailedProp from "../components/DetailedProp";
import { Link } from "react-router-dom";
import Observe from "../components/Observe";
import { useDispatch, useSelector } from "react-redux";
import { toggleOb } from "../features/observe/observeSlice";
import { toggle as popup, toggle } from "../features/popup/popupSlice";
import cartAddIcon from "../svg/shop-add.svg";
import { setItem } from "../features/cart/cartSlice";

function DetailedProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await fetch("https://dummyjson.com/products/" + id);
    const data = await res.json();
    setProduct(data);
  };

  const dispatch = useDispatch();
  const { id } = useParams("id");
  return (
    <>
      <Observe />
      <main className=" flex items-start min-h-[100vh] w-full h-full justify-center">
        <div className="flex max-w-[1120px] w-full  gap-5 flex-col min-h-[100vh]">
          <Link to="/catalog" className=" text-2xl hover:underline">
            Назад
          </Link>
          <div className=" flex gap-5">
            <div className="flex flex-col gap-5">
              {product?.images?.map((val) => {
                return (
                  <div
                    onClick={() => {
                      dispatch(toggleOb(val));
                    }}
                    className=" cursor-zoom-in min-w-[300px] max-w-[500px] max-h-[500px] shadow overflow-hidden rounded-[5px] "
                  >
                    <img
                      src={val}
                      alt=""
                      srcset=""
                      className=" w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-grow flex-col">
              <div className=" text-5xl mb-10 flex items-center gap-5">
                {product?.title}
                <button
                  onClick={() => {
                    dispatch(toggle("Добавлено в карзину."));
                    dispatch(
                      setItem({
                        id: product.id,
                        price: product.price,
                        title: product.title,
                        pieces: 1,
                      })
                    );
                  }}
                  className=" bg-yellow-500 p-4 rounded-full"
                >
                  <img src={cartAddIcon} alt="" />
                </button>
              </div>
              <DetailedProp
                label={"Описание товара"}
                description={product.description}
              />
              <DetailedProp label={"Цена"} description={"$" + product.price} />
              <DetailedProp
                label={"Процент скидки"}
                description={product.discountPercentage + "%"}
              />
              <DetailedProp
                label={"Рейтинг"}
                description={"⭐ " + product.rating}
              />
              <DetailedProp label={"Brand"} description={product.brand} />

              <div>
                <h1 className=" text-2xl mb-5">
                  Для покупки обратитесь по номеру:
                </h1>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText("+996772391223");
                    dispatch(toggle("Скапировано!"));
                  }}
                  className=" text-3xl rounded-full border p-5 border-black-1 hover:border-none hover:bg-yellow-500 cursor-pointer"
                >
                  +996 772 39 12 23
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DetailedProduct;
