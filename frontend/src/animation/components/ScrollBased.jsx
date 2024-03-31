import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const ScrollBased = () => {
  const { scrollX, scrollXProgress, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(255,0,0)", "rgb(0,255,0)"]
  );
  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX,
          backgroundColor: background,
          transformOrigin: "center",
          width: "100%",
          height: 20,
          top: 0,
          position: "sticky",
        }}
      ></motion.div>
      <div className=" max-w-[700px] m-auto p-10">
        <p>
          Culpa sunt enim pariatur veniam. Nulla nulla est consequat Lorem
          officia elit fugiat dolor cupidatat. Commodo sit cupidatat amet nulla
          labore ex proident in consectetur ullamco commodo. In id sit commodo
          sunt sit veniam aliquip proident irure commodo laborum nisi dolor
          minim.Aliquip sint proident labore laboris ad ea officia excepteur.
          Aute aliqua non sint incididunt in ad laboris. Cillum proident
          proident in fugiat adipisicing commodo anim sit anim non ut incididunt
          eu. Nisi aliquip excepteur enim qui adipisicing. Enim adipisicing
          ullamco consequat exercitation esse nostrud. Eu dolore Lorem et
          excepteur Lorem. Tempor qui duis enim ea tempor ea cillum nulla duis
          velit. Nulla irure labore voluptate cillum sunt cillum culpa aliquip
          labore velit. Eu mollit irure culpa nostrud excepteur enim ad. Tempor
          ipsum ex deserunt id consequat aliquip reprehenderit voluptate ut
          esse. Laborum esse esse ea qui duis. Deserunt consectetur minim fugiat
          qui reprehenderit sunt quis qui id. Enim ad ipsum pariatur aliqua
          laborum laborum sint laboris consectetur esse voluptate adipisicing.
          Nulla consequat deserunt tempor nulla excepteur amet exercitation esse
          excepteur nisi qui esse. Minim ullamco labore deserunt laborum
          consequat tempor cupidatat nisi. Exercitation velit anim sit est nulla
          magna. Qui aliqua exercitation consequat dolore non velit ullamco sunt
          culpa laboris tempor sint anim. Ullamco in laborum non ad sunt in sunt
        </p>
        <p>
          Culpa sunt enim pariatur veniam. Nulla nulla est consequat Lorem
          officia elit fugiat dolor cupidatat. Commodo sit cupidatat amet nulla
          labore ex proident in consectetur ullamco commodo. In id sit commodo
          sunt sit veniam aliquip proident irure commodo laborum nisi dolor
          minim.Aliquip sint proident labore laboris ad ea officia excepteur.
          Aute aliqua non sint incididunt in ad laboris. Cillum proident
          proident in fugiat adipisicing commodo anim sit anim non ut incididunt
          eu. Nisi aliquip excepteur enim qui adipisicing. Enim adipisicing
          ullamco consequat exercitation esse nostrud. Eu dolore Lorem et
          excepteur Lorem. Tempor qui duis enim ea tempor ea cillum nulla duis
          velit. Nulla irure labore voluptate cillum sunt cillum culpa aliquip
          labore velit. Eu mollit irure culpa nostrud excepteur enim ad. Tempor
          ipsum ex deserunt id consequat aliquip reprehenderit voluptate ut
          esse. Laborum esse esse ea qui duis. Deserunt consectetur minim fugiat
          qui reprehenderit sunt quis qui id. Enim ad ipsum pariatur aliqua
          laborum laborum sint laboris consectetur esse voluptate adipisicing.
          Nulla consequat deserunt tempor nulla excepteur amet exercitation esse
          excepteur nisi qui esse. Minim ullamco labore deserunt laborum
          consequat tempor cupidatat nisi. Exercitation velit anim sit est nulla
          magna. Qui aliqua exercitation consequat dolore non velit ullamco sunt
          culpa laboris tempor sint anim. Ullamco in laborum non ad sunt in sunt
        </p>
        <p>
          Culpa sunt enim pariatur veniam. Nulla nulla est consequat Lorem
          officia elit fugiat dolor cupidatat. Commodo sit cupidatat amet nulla
          labore ex proident in consectetur ullamco commodo. In id sit commodo
          sunt sit veniam aliquip proident irure commodo laborum nisi dolor
          minim.Aliquip sint proident labore laboris ad ea officia excepteur.
          Aute aliqua non sint incididunt in ad laboris. Cillum proident
          proident in fugiat adipisicing commodo anim sit anim non ut incididunt
          eu. Nisi aliquip excepteur enim qui adipisicing. Enim adipisicing
          ullamco consequat exercitation esse nostrud. Eu dolore Lorem et
          excepteur Lorem. Tempor qui duis enim ea tempor ea cillum nulla duis
          velit. Nulla irure labore voluptate cillum sunt cillum culpa aliquip
          labore velit. Eu mollit irure culpa nostrud excepteur enim ad. Tempor
          ipsum ex deserunt id consequat aliquip reprehenderit voluptate ut
          esse. Laborum esse esse ea qui duis. Deserunt consectetur minim fugiat
          qui reprehenderit sunt quis qui id. Enim ad ipsum pariatur aliqua
          laborum laborum sint laboris consectetur esse voluptate adipisicing.
          Nulla consequat deserunt tempor nulla excepteur amet exercitation esse
          excepteur nisi qui esse. Minim ullamco labore deserunt laborum
          consequat tempor cupidatat nisi. Exercitation velit anim sit est nulla
          magna. Qui aliqua exercitation consequat dolore non velit ullamco sunt
          culpa laboris tempor sint anim. Ullamco in laborum non ad sunt in sunt
        </p>
        <p>
          Culpa sunt enim pariatur veniam. Nulla nulla est consequat Lorem
          officia elit fugiat dolor cupidatat. Commodo sit cupidatat amet nulla
          labore ex proident in consectetur ullamco commodo. In id sit commodo
          sunt sit veniam aliquip proident irure commodo laborum nisi dolor
          minim.Aliquip sint proident labore laboris ad ea officia excepteur.
          Aute aliqua non sint incididunt in ad laboris. Cillum proident
          proident in fugiat adipisicing commodo anim sit anim non ut incididunt
          eu. Nisi aliquip excepteur enim qui adipisicing. Enim adipisicing
          ullamco consequat exercitation esse nostrud. Eu dolore Lorem et
          excepteur Lorem. Tempor qui duis enim ea tempor ea cillum nulla duis
          velit. Nulla irure labore voluptate cillum sunt cillum culpa aliquip
          labore velit. Eu mollit irure culpa nostrud excepteur enim ad. Tempor
          ipsum ex deserunt id consequat aliquip reprehenderit voluptate ut
          esse. Laborum esse esse ea qui duis. Deserunt consectetur minim fugiat
          qui reprehenderit sunt quis qui id. Enim ad ipsum pariatur aliqua
          laborum laborum sint laboris consectetur esse voluptate adipisicing.
          Nulla consequat deserunt tempor nulla excepteur amet exercitation esse
          excepteur nisi qui esse. Minim ullamco labore deserunt laborum
          consequat tempor cupidatat nisi. Exercitation velit anim sit est nulla
          magna. Qui aliqua exercitation consequat dolore non velit ullamco sunt
          culpa laboris tempor sint anim. Ullamco in laborum non ad sunt in sunt
        </p>
        <p>
          Culpa sunt enim pariatur veniam. Nulla nulla est consequat Lorem
          officia elit fugiat dolor cupidatat. Commodo sit cupidatat amet nulla
          labore ex proident in consectetur ullamco commodo. In id sit commodo
          sunt sit veniam aliquip proident irure commodo laborum nisi dolor
          minim.Aliquip sint proident labore laboris ad ea officia excepteur.
          Aute aliqua non sint incididunt in ad laboris. Cillum proident
          proident in fugiat adipisicing commodo anim sit anim non ut incididunt
          eu. Nisi aliquip excepteur enim qui adipisicing. Enim adipisicing
          ullamco consequat exercitation esse nostrud. Eu dolore Lorem et
          excepteur Lorem. Tempor qui duis enim ea tempor ea cillum nulla duis
          velit. Nulla irure labore voluptate cillum sunt cillum culpa aliquip
          labore velit. Eu mollit irure culpa nostrud excepteur enim ad. Tempor
          ipsum ex deserunt id consequat aliquip reprehenderit voluptate ut
          esse. Laborum esse esse ea qui duis. Deserunt consectetur minim fugiat
          qui reprehenderit sunt quis qui id. Enim ad ipsum pariatur aliqua
          laborum laborum sint laboris consectetur esse voluptate adipisicing.
          Nulla consequat deserunt tempor nulla excepteur amet exercitation esse
          excepteur nisi qui esse. Minim ullamco labore deserunt laborum
          consequat tempor cupidatat nisi. Exercitation velit anim sit est nulla
          magna. Qui aliqua exercitation consequat dolore non velit ullamco sunt
          culpa laboris tempor sint anim. Ullamco in laborum non ad sunt in sunt
        </p>
        <p>
          Culpa sunt enim pariatur veniam. Nulla nulla est consequat Lorem
          officia elit fugiat dolor cupidatat. Commodo sit cupidatat amet nulla
          labore ex proident in consectetur ullamco commodo. In id sit commodo
          sunt sit veniam aliquip proident irure commodo laborum nisi dolor
          minim.Aliquip sint proident labore laboris ad ea officia excepteur.
          Aute aliqua non sint incididunt in ad laboris. Cillum proident
          proident in fugiat adipisicing commodo anim sit anim non ut incididunt
          eu. Nisi aliquip excepteur enim qui adipisicing. Enim adipisicing
          ullamco consequat exercitation esse nostrud. Eu dolore Lorem et
          excepteur Lorem. Tempor qui duis enim ea tempor ea cillum nulla duis
          velit. Nulla irure labore voluptate cillum sunt cillum culpa aliquip
          labore velit. Eu mollit irure culpa nostrud excepteur enim ad. Tempor
          ipsum ex deserunt id consequat aliquip reprehenderit voluptate ut
          esse. Laborum esse esse ea qui duis. Deserunt consectetur minim fugiat
          qui reprehenderit sunt quis qui id. Enim ad ipsum pariatur aliqua
          laborum laborum sint laboris consectetur esse voluptate adipisicing.
          Nulla consequat deserunt tempor nulla excepteur amet exercitation esse
          excepteur nisi qui esse. Minim ullamco labore deserunt laborum
          consequat tempor cupidatat nisi. Exercitation velit anim sit est nulla
          magna. Qui aliqua exercitation consequat dolore non velit ullamco sunt
          culpa laboris tempor sint anim. Ullamco in laborum non ad sunt in sunt
        </p>
      </div>
    </>
  );
};

export default ScrollBased;
