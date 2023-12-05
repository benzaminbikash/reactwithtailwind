import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

function SingleProduct() {
  const location = useLocation();
  const item = location.state;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      //   behavior: "smooth",
    });
  }, []);
  return (
    <div className="max-w-screen-2xl px-28 mt-7">
      <div className="max-w-7xl mx-auto p-3">
        <div className="flex gap-1 my-1">
          <Link to="/" className="font-bold">
            Home /
          </Link>
          <a href="">Shop</a>
        </div>
        <div className="grid grid-cols-3 gap-6 items-center ">
          <img src={item.image} alt="/" className="w-full" />
          {/* product detail */}
          <div>
            <p className="title text-start mb-3">{item.title}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              animi dolorum, tempore rerum temporibus natus eveniet alias quo
              fuga ipsa sapiente rem facilis quibusdam quidem magnam ducimus,
              eius ea optio doloremque dolore impedit quas accusantium nemo
              dicta? Sequi, consectetur omnis.
            </p>
            <div className="flex gap-1 mt-3 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-orange-500 font-semibold text-2xl my-3">
              ${item.price}
            </p>
            {/* input */}
            <input
              defaultValue={1}
              type="text"
              className=" px-2 py-1 w-full border border-gray-400 outline-none rounded-md  focus:border-red-500"
            />
            <button className="bg-orange-500 text-white w-full py-1 rounded-md mt-2">
              Order Confirm
            </button>
          </div>
        </div>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          iure, earum mollitia perferendis quia at adipisci ipsum ducimus,
          obcaecati itaque aperiam veniam fugit quibusdam minima, accusamus
          repellat provident! Sapiente sit qui odit sint eaque molestiae itaque
          tempore! Incidunt tenetur officia deleniti qui odio itaque consequatur
          libero adipisci veniam repudiandae obcaecati totam fuga labore quidem
          nihil quam maxime, ipsum soluta officiis velit repellat saepe
          doloribus voluptatibus eos. Fugiat nulla vero sed. Ab asperiores
          cumque, error itaque possimus perferendis maiores, aut aliquam officia
          vel ut earum nulla quia at qui voluptates ex beatae. Nobis omnis
          officiis ad, aspernatur minima fugit illo quidem, inventore
          dignissimos vel numquam, asperiores voluptates obcaecati molestiae
          magnam hic ut similique? Libero voluptate eius laborum deleniti
          dolore! Iste alias dolore, quo consequuntur, vitae corporis deleniti
          exercitationem ut, quia accusamus vero cumque fugiat quas ipsum minima
          incidunt laborum tempora! Labore, magni impedit nemo illum similique
          nobis quos officia odit sit repellendus, non fuga repellat hic ipsa
          omnis repudiandae enim quas in vel ab optio, temporibus placeat eius
          inventore. Possimus animi, porro sint minima deserunt iusto vero
          expedita. Adipisci, praesentium aliquid ipsa consequatur corporis,
          magnam quaerat eos possimus qui fugiat perferendis in. Culpa cum, eos
          adipisci quisquam nisi fugit consequatur laborum labore vel ea
          quibusdam totam facere odio tempore numquam obcaecati eaque quod
          iusto, quidem modi distinctio aliquid ad libero! Beatae est, laborum
          dolore cumque corporis illum numquam ab unde enim odio neque nam
          libero vero rerum cupiditate earum totam, necessitatibus inventore
          laudantium culpa possimus quos? Delectus illo veniam est eos,
          accusantium nemo aperiam suscipit optio dignissimos, ut, dolore earum
          quidem vel eveniet ad modi sed. Dolorem at perspiciatis vero quod
          pariatur error repudiandae ut, recusandae cumque, repellendus quae non
          laudantium veniam sit nulla. Quas expedita commodi, totam optio
          praesentium numquam ea nobis ab explicabo vitae quis consectetur in,
          voluptates maxime dolor illum. Asperiores obcaecati doloremque ab
          dicta, praesentium eum cum est aliquam sit facilis, officiis dolores
          non aut harum cumque mollitia, tenetur provident veritatis enim minus
          optio. Officiis possimus magnam magni. Magni, unde. Ab vero nisi
          labore. Velit non corporis quibusdam, asperiores illo magnam quia.
          Libero illum et iste accusamus, est ipsum, sed excepturi inventore
          illo corrupti deserunt molestias harum amet id nihil eveniet ipsa quae
          ad quibusdam! Similique laudantium quisquam dignissimos distinctio
          quibusdam qui, voluptatum corporis odit, eaque et sint aspernatur
          delectus unde! Quidem veritatis minus ab repudiandae eaque a cum
          maxime ducimus, sunt sit animi iste quod magnam.
        </p>
      </div>
    </div>
  );
}

export default SingleProduct;
