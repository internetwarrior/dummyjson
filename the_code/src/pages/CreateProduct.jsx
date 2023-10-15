import React, { useRef } from "react";

function CreateProduct() {
  const form = useRef(null);
  const uploadProduct = async (event) => {
    event.preventDefault();

    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
        id: "1000",
        /* other product data */
      }),
    });
    const data = await res.json();
  };

  return (
    <main className=" flex items-center justify-center pb-20 ">
      <div className="flex w-full max-w-[1120px]">
        <h1 className=" text-xl">
          К сожалению DummyJSON не предоставляет фунцию добавить продукты.
          Работает только симуляция запросов <b>POST,EDIT,DELETE</b>
        </h1>
        {/* <form
          ref={form}
          onSubmit={(e) => {
            uploadProduct(e);
          }}
          method="post"
        >
          {" "}
          <input type="text" />
          <input type="submit" value="Отправить" />
        </form> */}
      </div>
    </main>
  );
}

export default CreateProduct;
