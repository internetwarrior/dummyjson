import React, { useEffect, useRef, useState } from "react";
import Item from "../components/Item";
import { useDispatch } from "react-redux";
import { toggle } from "../features/popup/popupSlice";
import searchIcon from "../svg/search-normal.svg";
import { Link } from "react-router-dom";

function Catalog() {
  const [catalog, setCatalog] = useState([]);
  const searchInput = useRef(null);
  const [searchPage, setSearchPage] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    fetchCatalog();
    fetchCategories();
  }, []);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const fetchOnlyByCategories = async (category) => {
    fetch("https://dummyjson.com/products/category/" + category)
      .then((res) => res.json())
      .then((data) => setCatalog(data.products));
    window.scrollTo(0, 0);
  };

  const fetchCatalog = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setCatalog(data.products);
    } catch (err) {
      console.log(err);
      dispatch(toggle("Проверьте подлючение к интернету. Код ощибки: " + err));
    }
  };

  const searchProduct = async (product) => {
    if (product != "") {
      fetch(`https://dummyjson.com/products/search?q=${product}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchedProducts(data.products);
        });
    } else {
      setSearchedProducts([]);
    }
  };

  const setResult = async (event) => {
    if (event) {
      event.preventDefault();
    }
    setCatalog(searchedProducts);
    setSearchedProducts([]);
    setSearchPage(true);
    document.activeElement.blur();
  };

  return (
    <main className=" flex items-center justify-center pb-20 ">
      <div className=" grid grid-cols-3 gap-5 w-full max-w-[1140px]">
        <div className=" grid-col-full w-full shadow rounded-lg relative">
          <form
            autoComplete="off"
            onSubmit={(e) => {
              setResult(e);
            }}
            className="flex"
          >
            <label htmlFor="search">
              <img src={searchIcon} className=" p-2" alt="" />
            </label>
            <input
              ref={searchInput}
              onBlur={() => {
                setTimeout(() => {
                  setSearchedProducts([]);
                }, 300);
              }}
              onFocus={(e) => {
                searchProduct(e.target.value);
              }}
              type="search"
              name="search-input"
              id="search"
              placeholder="Поиск по каталогу"
              className=" px-8 py-2 flex-grow text-xl search-cancel focus:outline-none "
              onChange={(e) => {
                searchProduct(e.target.value);
              }}
            />
            <input type="submit" value="" />
          </form>
          <div className=" flex flex-col absolute z-30 w-full top-[50px] shadow rounded-lg overflow-hidden">
            {/* <div className="py-4 px-8 bg-white">Все результаты:</div> */}
            {searchedProducts.map((val, ind) => {
              if (ind < 5) {
                return (
                  <Link
                    id="result"
                    to={"/product/" + val.id}
                    className=" w-full bg-white py-4 px-8 hover:bg-gray-100"
                  >
                    {val.title}
                  </Link>
                );
              }
            })}
            {searchedProducts.length > 5 && (
              <div
                onClick={() => {
                  setResult();
                }}
                className=" text-lg py-4 px-8 bg-white hover:bg-gray-100 cursor-pointer font-bold"
              >
                {searchedProducts.length
                  ? searchedProducts.length > 5 &&
                    "Найдено ещё: " +
                      (searchedProducts.length - 5) +
                      " товаров. "
                  : "Результатов нету  "}
              </div>
            )}
          </div>
        </div>
        {searchPage && (
          <div className=" grid-col-full">
            <button
              onClick={() => {
                fetchCatalog();
                setSearchPage(false);
              }}
              className=" text-2xl underline mb-5"
            >
              Назад
            </button>
            <div>Найдено: {catalog.length} результатов</div>
          </div>
        )}

        {!searchPage && (
          <div className=" bg-white row-span-4 flex flex-col shadow rounded-lg">
            <div className=" text-2xl font-bold px-10 py-5">Категории:</div>

            <button
              onClick={() => {
                fetchCatalog();
              }}
              className=" font-bold flex px-10 py-5 hover:bg-yellow-500"
            >
              Все товары
            </button>
            {categories.map((val) => {
              return (
                <button
                  onClick={() => {
                    fetchOnlyByCategories(val);
                  }}
                  className=" flex px-10 py-5 hover:bg-gray-100"
                >
                  {val}
                </button>
              );
            })}
          </div>
        )}

        {catalog.map((val, ind) => {
          return <Item data={val} />;
        })}
      </div>
    </main>
  );
}

export default Catalog;
