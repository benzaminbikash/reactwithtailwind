import { motion } from "framer-motion";

import AnimatePre from "../components/AnimatePre";
import FlipC from "../components/FlipC";
import GestureA from "../components/Gesture";
import ScrollBased from "../components/ScrollBased";
import ViewBase from "../components/ViewBase";

// <AnimatePre />
// <GestureA />
// <ViewBase />
// <ScrollBased />

const Home = () => {
  return (
    <div className="container mx-auto mt-10">
      {/* <div className="grid grid-cols-2 place-items-center  gap-10 "> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptate
        amet obcaecati, explicabo quis officiis iure provident maxime quibusdam,
        repellat nesciunt rem iusto? Quasi consequuntur architecto, temporibus
        ullam natus odit pariatur cupiditate enim eius earum nulla assumenda,
        sit aliquid similique? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Iste expedita ab commodi. Incidunt inventore suscipit
        quod ipsam quisquam voluptatem perspiciatis quae excepturi deleniti
        error. Reprehenderit iure blanditiis voluptatibus error est veritatis
        excepturi nisi enim ducimus. Explicabo tenetur dolorem fugit officia
        temporibus, atque, iusto numquam eius sint delectus voluptatem dolorum
        corporis esse, eos dolore? Doloremque, quae. Labore magni pariatur error
        exercitationem maiores cumque! Odit, veritatis! Eaque earum dolor quod
        illum temporibus voluptatum totam voluptatem voluptatibus quo obcaecati
        nostrum illo repellendus consectetur eos tempore pariatur mollitia optio
        tempora beatae quia harum, veritatis adipisci! Necessitatibus libero
        inventore fugit reprehenderit eaque, enim repudiandae? Eius? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eos impedit quisquam,
        cupiditate maiores iste nam! Aspernatur ab ipsam asperiores
        reprehenderit ullam vero at fugit expedita debitis, perspiciatis,
        laborum dignissimos consequatur dolorem labore incidunt et recusandae
        accusamus veritatis. Nulla, ducimus unde! Iusto distinctio in numquam
        ipsa assumenda recusandae quo incidunt velit ipsam earum, dolore aliquam
        nesciunt. Maxime quis, officia perspiciatis nostrum unde odio, veritatis
        quisquam, accusantium repellendus eius pariatur error veniam ullam.
        Suscipit unde odit id quod, adipisci in ex tempore iste excepturi? Sunt,
        alias perspiciatis eaque quam minus quae possimus dolorum magni,
        veritatis dicta porro ipsam ut quisquam optio maiores sit qui accusamus?
        Enim totam eum dolore saepe perspiciatis numquam ut ipsa nostrum
        quisquam necessitatibus doloribus laudantium, possimus asperiores
        laborum illo assumenda? Molestiae, eveniet? Perferendis eaque quis
        mollitia totam molestiae iste aspernatur at, officiis similique magni
        pariatur eligendi reprehenderit voluptatum minima perspiciatis quae
        deleniti tempora porro inventore laboriosam? Qui accusamus tempora
        reprehenderit velit aliquam facere non sunt sequi consectetur quas
        quidem exercitationem illo fuga dolorum eaque aut odit facilis ratione,
        sed quasi. Neque magni corrupti eos totam aliquid mollitia quis illum
        saepe adipisci. Cupiditate ducimus repellendus quos a perferendis
        sapiente eligendi maiores laborum iure sint? Ad dolor suscipit,
        reprehenderit aut a, iure odit aliquid amet distinctio quibusdam ratione
        nulla eveniet natus commodi exercitationem nobis, temporibus
        voluptatibus! Hic aliquid enim sequi harum maiores distinctio qui
        similique voluptates. Maxime omnis laborum voluptates dolorem
        repudiandae officiis veritatis ut? Placeat delectus nam officia? Porro
        reprehenderit harum sunt provident esse sint minima ad repudiandae optio
        cum, unde recusandae, nam odit sequi praesentium placeat, ducimus
        maiores quo tenetur magnam iste. Illo, saepe quidem? Dolore pariatur
        tempora expedita, libero, exercitationem numquam nihil impedit alias
        natus nobis deserunt excepturi nisi odio, blanditiis sed et provident.
        Officiis, vitae aperiam molestias quae optio, perspiciatis a minus
        fugiat quis ipsum nisi provident! Eos libero incidunt aperiam minus
        autem, odio nihil repudiandae vero pariatur, molestiae error eveniet
        animi? In voluptates minus molestias delectus incidunt quaerat nihil
        quibusdam. Eum, fugiat totam provident obcaecati dolore est quos quis
        soluta rerum, voluptates molestiae maiores libero reiciendis eveniet
        similique corrupti consequatur error reprehenderit! Delectus
        voluptatibus ab reiciendis neque nulla, obcaecati dicta, dolorum dolorem
        modi earum, quo quidem et architecto maiores? Voluptas quas non
        laudantium quisquam deserunt aliquid architecto eius at cumque harum
        doloremque optio incidunt dolorem, error odio nisi tempora. Nemo cumque
        architecto deleniti ipsa harum. Sapiente voluptatibus qui beatae quos
        quas nisi ipsa quo at dolorum alias voluptatem, vitae enim consequuntur
        architecto blanditiis dicta ipsum molestiae ea dolores dolorem
        asperiores ad, placeat suscipit! Eius alias possimus dolor delectus
        ipsam nemo odit, dolorum inventore culpa sunt laborum exercitationem
        voluptate quo, harum deleniti voluptatibus magni officia at placeat
        ullam! Numquam eveniet itaque nisi dolorum officiis suscipit officia
        libero, ratione exercitationem! Recusandae nulla, ut esse enim et
        ducimus cupiditate illum maxime officia suscipit. Ea cumque magnam
        tempore debitis dolor perferendis vero, quaerat blanditiis, nisi quos,
        architecto repudiandae! Deleniti maxime officiis quia nam nobis. Ex
        voluptates, nisi sapiente quo veniam expedita in omnis saepe quae
        necessitatibus natus nam nulla.
      </p> */}

      <div>
        <div>
          <motion.h1
            initial={{
              x: -40,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60, damping: 30 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-2xl font-bold text-black"
          >
            Ellyse Perry
          </motion.h1>
        </div>

        <div>
          <motion.h1
            initial={{
              x: -40,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60, damping: 30 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            Ellyse Alexandra Perry (born 3 November 1990) is an Australian
            sportswoman who has represented her country in cricket and soccer.
            Having debuted for both the national cricket team and the national
            soccer team at the age of 16, she is the youngest Australian to play
            international cricket and the first to have appeared in both ICC and
            FIFA World Cups. Gradually becoming a single-sport professional
            athlete from 2014 onward, Perry's acclaimed cricket career has
            continued to flourish and she is widely regarded to be one of the
            greatest woman cricketers of all time.
          </motion.h1>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ rotate: "-2.4deg" }}
          className="bg-red-500 px-10 py-2"
        >
          Hello
        </motion.button>
      </div>

      <div className="flex justify-around">
        <motion.img
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 100, damping: 30 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-60"
          src="https://i.pinimg.com/564x/1f/15/bf/1f15bf1eabe154f1e79709259eceb5f4.jpg"
          alt="randomImage"
        />
        <motion.img
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            y: { type: "spring", stiffness: 100, damping: 30 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-60"
          src="https://i.pinimg.com/564x/1f/15/bf/1f15bf1eabe154f1e79709259eceb5f4.jpg"
          alt="randomImage"
        />
        <motion.img
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          exit={{ y: 30, opacity: 0 }}
          transition={{
            delay: 0.9,
            y: { type: "spring", stiffness: 100, damping: 30 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-60"
          src="https://i.pinimg.com/564x/1f/15/bf/1f15bf1eabe154f1e79709259eceb5f4.jpg"
          alt="randomImage"
        />
      </div>
      {/* </div> */}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        recusandae eum nobis eius deleniti itaque molestias nemo facilis unde
        libero quia, possimus nulla voluptatem earum beatae iusto, doloremque
        ducimus eos voluptatum dolores placeat tempore sunt sint inventore?
        Voluptatibus aspernatur iste velit enim mollitia cumque impedit nostrum
        reiciendis neque quam sed iusto, repudiandae tenetur eum esse dicta
        tempore? Alias qui soluta dolorum unde consectetur quidem iste expedita
        facere hic, voluptatem ipsum aperiam ab ipsam! Minima quaerat possimus
        commodi dolore quasi laborum nemo dignissimos accusantium similique
        porro, corporis laudantium? Eveniet itaque repellendus omnis perferendis
        quos! Eveniet, alias! Molestiae laboriosam sit recusandae quasi esse?
        Dignissimos enim, explicabo, rem harum, maiores corporis quaerat ratione
        ipsum doloremque quas quo dolorum ipsa nostrum deleniti cupiditate
        dolores cumque! Numquam voluptates ipsam laudantium, molestiae quos
        officiis optio vel saepe officia obcaecati dolorem inventore mollitia
        culpa excepturi corrupti, vero earum ad placeat, praesentium ducimus
        quo? Fugit eveniet voluptate architecto autem quibusdam eaque minus
        officiis dignissimos, in qui totam aliquam, facilis molestias maxime
        obcaecati dolor animi. Repudiandae laboriosam sunt quam aliquam amet
        facere voluptates nostrum pariatur, officiis obcaecati repellat
        quibusdam ipsam? Asperiores eum architecto inventore ab fugit voluptatem
        sequi expedita officiis, totam placeat dicta nemo sed provident odit
        amet unde id optio nesciunt ut! Aspernatur perferendis inventore eos
        nesciunt asperiores voluptatum minus? Ratione nulla eaque perferendis in
        libero soluta maiores veniam placeat quis aliquam quam impedit officiis
        consequuntur omnis recusandae, vel autem laudantium! Nisi sequi
        recusandae aperiam cupiditate labore eos asperiores cumque, tenetur
        impedit quia corrupti aliquam optio? Eum officiis magnam consectetur
        tenetur cum velit deserunt, nihil expedita facere veritatis voluptatum
        magni veniam perferendis, consequuntur aut libero possimus mollitia
        earum, ut unde provident ea sunt temporibus. Ullam ipsum in, magnam
        laudantium dolor cupiditate tenetur quibusdam fugiat placeat earum qui
        harum minus porro atque. A, culpa quis ut non ipsa possimus pariatur
        delectus sapiente dicta eius dolorum dolores similique laborum!
        Obcaecati debitis veniam molestiae harum explicabo a, eius iure sit
        nulla id, dolore quod animi illum fugiat. Placeat quam dolorem incidunt
        sapiente obcaecati totam ab autem! Perferendis dolore at laborum placeat
        voluptatibus alias natus! Eveniet nam hic et necessitatibus, animi
        molestiae! Ex reprehenderit vero eaque fugit dolor quas tenetur error
        eveniet. Aut ullam minus enim exercitationem natus repellat sunt modi
        animi. Fugiat aliquam aliquid saepe laudantium suscipit vitae obcaecati
        facilis, totam, esse, nulla illum eveniet. Nam hic alias illum error
        totam debitis ratione, sapiente ipsa minima? Ad perspiciatis, debitis
        ipsum sapiente quibusdam officia placeat at quaerat voluptatem cumque
        ullam laudantium accusamus quod veritatis iusto dolorum minus aspernatur
        cupiditate quo? Adipisci laudantium labore sequi ut nobis, amet totam
        mollitia libero deleniti. Et, fugiat illum, repudiandae excepturi
        aliquid, omnis hic tenetur facere sunt aut ut? Est iusto vitae obcaecati
        explicabo ducimus laudantium exercitationem, atque voluptatibus,
        adipisci aut maiores iure cum at qui, repellat ea quaerat sit nihil
        sint? Dolore iusto veritatis ipsam praesentium reprehenderit minima
        temporibus blanditiis. Magni voluptates natus quibusdam, maiores enim,
        cum molestias est quisquam perspiciatis et provident similique
        doloribus? Fugiat, quae sed praesentium eius libero iure nihil veritatis
        minus exercitationem molestiae expedita minima ullam, quo fugit!
        Obcaecati enim magni voluptatibus excepturi, voluptatem impedit culpa
        dicta commodi esse numquam porro illum veniam autem reiciendis. Fugiat
        repellat dolorum aut nobis aliquam est amet distinctio aliquid! Error
        non facilis ipsum soluta totam repellendus dolor obcaecati eveniet saepe
        sequi voluptatum ex laudantium recusandae explicabo natus quo est, alias
        quia, impedit vero? Consectetur, vel minima quidem aliquam sapiente
        error vitae rem ullam nam quia odit explicabo praesentium similique
        tenetur expedita iste molestiae voluptas dolores nostrum aliquid, est
        quas! Dolores pariatur inventore vel ipsa repudiandae tempora qui,
        temporibus ratione illo facilis repellendus blanditiis ex optio totam
        assumenda! Officia quis aliquid aliquam fugiat ullam nesciunt
        asperiores, dolorem, maiores pariatur commodi facilis, perferendis
        dolores aut. Vitae eveniet minus nisi non veritatis tempora ea,
        similique temporibus ad error vero nostrum earum commodi inventore atque
        debitis laudantium cum corrupti odit maxime iusto quisquam! Tempore
        earum quibusdam dolorum sunt amet, minima fugiat ipsum aspernatur ad quo
        illum aliquam, cupiditate ipsa nemo quisquam vero vel! Illo, sint
        asperiores rem fugiat mollitia temporibus ipsa est blanditiis,
        cupiditate repellendus perferendis maiores inventore accusantium?
        Impedit, esse necessitatibus reprehenderit suscipit voluptates fuga ad
        earum odio accusamus delectus, nostrum, iure voluptatibus? Magnam
        aspernatur nulla soluta saepe voluptates deleniti eveniet, nesciunt
        assumenda dolore at dolorum laboriosam sit quis sunt similique quasi
        doloremque vero perspiciatis? Perferendis perspiciatis vitae sit illo
        vero suscipit magni provident dolorem ab. Non amet neque dolore eum
        libero reprehenderit, perspiciatis necessitatibus repellat dolorum quia
        dicta adipisci dolor, eveniet ea quam temporibus. Sapiente odit minus
        eum sed quod ducimus nam expedita, tempore animi, iste harum nisi
        labore. Voluptatem sapiente non totam consequuntur quos deserunt cum
        blanditiis, adipisci eos ipsum, excepturi voluptate temporibus
        praesentium impedit id animi nulla quod deleniti esse fugit quisquam
        obcaecati sit quo dolorem? Eum aperiam provident, aliquam tempore quo
        voluptas accusantium consequuntur! Beatae delectus maxime ex qui, non
        repellendus id cum optio sed earum. Provident explicabo excepturi
        obcaecati vel perspiciatis odio nam, soluta rem mollitia suscipit
        deserunt autem sed commodi error magnam reiciendis sunt veniam cum
        quidem culpa! Mollitia earum provident inventore iusto at, quasi
        voluptas sit dolorem dignissimos? Libero voluptates maiores, fuga
        mollitia reprehenderit laborum enim quibusdam sit? Adipisci eveniet
        earum delectus possimus reprehenderit esse tempore recusandae inventore
        suscipit laborum officiis nesciunt dolorum ullam maiores consectetur
        blanditiis, voluptatum accusantium eos vero fuga pariatur nemo
        praesentium saepe. Voluptatem, veritatis et ex non officiis nesciunt
        velit dicta libero quisquam nostrum quo id explicabo autem corrupti
        cumque distinctio enim expedita ratione recusandae quis odio soluta!
        Blanditiis error dolores necessitatibus perferendis odit veritatis
        quaerat totam, deserunt labore quasi culpa quas nemo alias sunt quae
        mollitia. Quo iusto optio veniam provident asperiores doloribus rem
        fugiat quidem minus laboriosam eum nesciunt, blanditiis in aspernatur
        inventore! Officiis ut doloremque eum laborum animi magni, itaque, vel
        ea, hic numquam quae! Consequuntur, aliquid. Delectus optio pariatur
        molestiae hic alias ex quod labore, nisi vero adipisci dicta
        exercitationem, aperiam at impedit! Voluptatem molestiae possimus rerum
        deleniti deserunt consectetur dolorum sequi. Non quod est aperiam atque
        reprehenderit id dolore architecto quia doloremque veniam.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 4,
        }}
        className="w-32 h-16 bg-black"
      ></motion.div>
    </div>
  );
};

export default Home;
