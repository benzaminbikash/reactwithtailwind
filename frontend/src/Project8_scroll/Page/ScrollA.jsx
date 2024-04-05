import React, { useEffect, useState } from "react";
import Navbar from "../../AsyncThunk/Navbar";

function ScrollA() {
  const [lastScrollY, setlastScrolly] = useState(0);
  const [show, setShow] = useState(true);
  console.log(lastScrollY);
  function functiona() {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setlastScrolly(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", functiona);
    return () => {
      window.removeEventListener("scroll", functiona);
    };
  }, [lastScrollY]);
  return (
    <div>
      <Navbar show={show} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum
        cupiditate dicta quas cum sint facere illum eum aperiam eos soluta quia
        voluptatibus repellendus consequatur expedita, quam amet in eveniet,
        natus esse! Illum, dignissimos? Aliquam illum ipsum aut? Modi nulla
        eaque nihil dolor corrupti porro esse temporibus soluta ea culpa fugit
        fugiat consectetur harum nostrum quas impedit exercitationem, molestiae
        non, distinctio deleniti expedita eum et tenetur molestias. Perferendis
        corrupti sed natus aliquam pariatur ad nisi non. Laborum fugiat commodi
        eveniet cumque ab ducimus, perspiciatis porro deserunt consectetur,
        atque, incidunt repudiandae aliquid. Doloremque illum obcaecati ipsum
        possimus labore, laudantium unde nisi quaerat molestias. Assumenda
        aperiam id animi minima nesciunt consectetur, modi nihil quisquam
        repellat labore veritatis similique ab sunt magnam, tempora vero ut
        voluptate ratione quasi alias! Molestias dolores reprehenderit tenetur
        nisi obcaecati commodi numquam a ut, inventore unde temporibus quae,
        repudiandae, praesentium quod veritatis laudantium suscipit totam
        placeat! Blanditiis animi tempore illum molestias, officia deleniti
        magnam velit, facere esse numquam id ea alias vel aspernatur optio
        dolores. Eligendi dolor nemo placeat quod dolorem velit ducimus fugiat
        harum adipisci in, iure ratione porro. Explicabo dicta accusamus
        doloremque ipsa eligendi. Ipsam dolore repellat, qui dicta sequi quia
        tenetur iste, aliquam ab culpa nobis voluptatibus quibusdam in harum
        deserunt. Ullam esse maxime minus est, ut eaque repudiandae facere
        veniam id quas! Nulla alias illo quas labore consequatur rem distinctio
        eligendi, autem quia nesciunt libero exercitationem dicta deleniti
        corporis nostrum consectetur possimus temporibus et iure. Fugit quam
        repellendus vel praesentium, qui explicabo error fuga facere iure
        delectus atque velit alias voluptate provident quos eius dolores
        exercitationem! Ipsam ducimus iure quasi aliquid sequi repudiandae
        animi. Illum quod est velit ipsa corporis magni autem delectus iste
        maxime molestias enim beatae, cumque ab, omnis provident, aut sequi
        laboriosam repellendus laborum non assumenda? Eos facilis impedit,
        sapiente porro, natus ea temporibus eum quasi ipsam esse cupiditate nisi
        earum rerum nobis necessitatibus error consequatur iusto quia velit
        dolores laudantium alias voluptas dolore cumque! Tenetur dolore
        obcaecati corporis molestias, sint maxime est aspernatur aut. Pariatur
        corrupti libero accusantium aut inventore ab laboriosam vitae facilis
        molestiae neque ullam a fuga hic blanditiis repudiandae ipsum, culpa
        obcaecati consequatur! Impedit dignissimos velit blanditiis alias totam
        ab officia, cupiditate possimus illo odit, ipsum iure explicabo esse
        perspiciatis eos, distinctio tempora magnam. Omnis harum, dignissimos
        nulla eaque sequi blanditiis id modi perspiciatis repellat sint placeat
        quae alias, illo consequatur pariatur enim, vero error? Beatae, fuga
        culpa modi itaque quidem quos repellendus iure suscipit. Inventore autem
        veritatis modi commodi obcaecati, eveniet officiis quo earum quos
        reiciendis fugit quam aut quae esse accusantium, ratione id hic fugiat
        ex distinctio! Natus atque unde pariatur voluptate corrupti mollitia
        voluptatibus nihil tempora ipsum magni? Suscipit illo, architecto
        assumenda reprehenderit quidem neque labore qui quasi dicta, error vero,
        quo sit? Laudantium nisi fuga sapiente veritatis inventore optio,
        tempore iure expedita mollitia quam odit sed cumque magnam totam
        repellat libero quasi accusantium beatae hic explicabo? Nisi consequatur
        cupiditate voluptatibus adipisci dolorem quos consequuntur et inventore
        laudantium, expedita voluptas sed voluptatem fuga debitis optio
        distinctio. Officia quae neque molestias perferendis saepe ducimus
        accusamus dignissimos rem velit. Ducimus a asperiores maxime! Officia
        sint asperiores exercitationem impedit minus, dolore suscipit earum
        dolorum, iusto eveniet, inventore mollitia? Provident exercitationem
        harum corrupti, pariatur beatae magnam similique suscipit et minima
        libero deleniti quibusdam ex sit, commodi dolorum vel nihil esse eos
        magni quos voluptas velit. Aliquid, dolore veritatis vero asperiores
        ipsa facilis, hic, voluptatibus fugiat cum eius blanditiis adipisci
        velit modi autem aspernatur magnam labore quam commodi. Quia iste
        eveniet delectus doloribus, dignissimos, totam animi suscipit, quam
        commodi laborum incidunt non. Autem reprehenderit sequi ipsum quod ea
        numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        dolorum cupiditate dicta quas cum sint facere illum eum aperiam eos
        soluta quia voluptatibus repellendus consequatur expedita, quam amet in
        eveniet, natus esse! Illum, dignissimos? Aliquam illum ipsum aut? Modi
        nulla eaque nihil dolor corrupti porro esse temporibus soluta ea culpa
        fugit fugiat consectetur harum nostrum quas impedit exercitationem,
        molestiae non, distinctio deleniti expedita eum et tenetur molestias.
        Perferendis corrupti sed natus aliquam pariatur ad nisi non. Laborum
        fugiat commodi eveniet cumque ab ducimus, perspiciatis porro deserunt
        consectetur, atque, incidunt repudiandae aliquid. Doloremque illum
        obcaecati ipsum possimus labore, laudantium unde nisi quaerat molestias.
        Assumenda aperiam id animi minima nesciunt consectetur, modi nihil
        quisquam repellat labore veritatis similique ab sunt magnam, tempora
        vero ut voluptate ratione quasi alias! Molestias dolores reprehenderit
        tenetur nisi obcaecati commodi numquam a ut, inventore unde temporibus
        quae, repudiandae, praesentium quod veritatis laudantium suscipit totam
        placeat! Blanditiis animi tempore illum molestias, officia deleniti
        magnam velit, facere esse numquam id ea alias vel aspernatur optio
        dolores. Eligendi dolor nemo placeat quod dolorem velit ducimus fugiat
        harum adipisci in, iure ratione porro. Explicabo dicta accusamus
        doloremque ipsa eligendi. Ipsam dolore repellat, qui dicta sequi quia
        tenetur iste, aliquam ab culpa nobis voluptatibus quibusdam in harum
        deserunt. Ullam esse maxime minus est, ut eaque repudiandae facere
        veniam id quas! Nulla alias illo quas labore consequatur rem distinctio
        eligendi, autem quia nesciunt libero exercitationem dicta deleniti
        corporis nostrum consectetur possimus temporibus et iure. Fugit quam
        repellendus vel praesentium, qui explicabo error fuga facere iure
        delectus atque velit alias voluptate provident quos eius dolores
        exercitationem! Ipsam ducimus iure quasi aliquid sequi repudiandae
        animi. Illum quod est velit ipsa corporis magni autem delectus iste
        maxime molestias enim beatae, cumque ab, omnis provident, aut sequi
        laboriosam repellendus laborum non assumenda? Eos facilis impedit,
        sapiente porro, natus ea temporibus eum quasi ipsam esse cupiditate nisi
        earum rerum nobis necessitatibus error consequatur iusto quia velit
        dolores laudantium alias voluptas dolore cumque! Tenetur dolore
        obcaecati corporis molestias, sint maxime est aspernatur aut. Pariatur
        corrupti libero accusantium aut inventore ab laboriosam vitae facilis
        molestiae neque ullam a fuga hic blanditiis repudiandae ipsum, culpa
        obcaecati consequatur! Impedit dignissimos velit blanditiis alias totam
        ab officia, cupiditate possimus illo odit, ipsum iure explicabo esse
        perspiciatis eos, distinctio tempora magnam. Omnis harum, dignissimos
        nulla eaque sequi blanditiis id modi perspiciatis repellat sint placeat
        quae alias, illo consequatur pariatur enim, vero error? Beatae, fuga
        culpa modi itaque quidem quos repellendus iure suscipit. Inventore autem
        veritatis modi commodi obcaecati, eveniet officiis quo earum quos
        reiciendis fugit quam aut quae esse accusantium, ratione id hic fugiat
        ex distinctio! Natus atque unde pariatur voluptate corrupti mollitia
        voluptatibus nihil tempora ipsum magni? Suscipit illo, architecto
        assumenda reprehenderit quidem neque labore qui quasi dicta, error vero,
        quo sit? Laudantium nisi fuga sapiente veritatis inventore optio,
        tempore iure expedita mollitia quam odit sed cumque magnam totam
        repellat libero quasi accusantium beatae hic explicabo? Nisi consequatur
        cupiditate voluptatibus adipisci dolorem quos consequuntur et inventore
        laudantium, expedita voluptas sed voluptatem fuga debitis optio
        distinctio. Officia quae neque molestias perferendis saepe ducimus
        accusamus dignissimos rem velit. Ducimus a asperiores maxime! Officia
        sint asperiores exercitationem impedit minus, dolore suscipit earum
        dolorum, iusto eveniet, inventore mollitia? Provident exercitationem
        harum corrupti, pariatur beatae magnam similique suscipit et minima
        libero deleniti quibusdam ex sit, commodi dolorum vel nihil esse eos
        magni quos voluptas velit. Aliquid, dolore veritatis vero asperiores
        ipsa facilis, hic, voluptatibus fugiat cum eius blanditiis adipisci
        velit modi autem aspernatur magnam labore quam commodi. Quia iste
        eveniet delectus doloribus, dignissimos, totam animi suscipit, quam
        commodi laborum incidunt non. Autem reprehenderit sequi ipsum quod ea
        numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        dolorum cupiditate dicta quas cum sint facere illum eum aperiam eos
        soluta quia voluptatibus repellendus consequatur expedita, quam amet in
        eveniet, natus esse! Illum, dignissimos? Aliquam illum ipsum aut? Modi
        nulla eaque nihil dolor corrupti porro esse temporibus soluta ea culpa
        fugit fugiat consectetur harum nostrum quas impedit exercitationem,
        molestiae non, distinctio deleniti expedita eum et tenetur molestias.
        Perferendis corrupti sed natus aliquam pariatur ad nisi non. Laborum
        fugiat commodi eveniet cumque ab ducimus, perspiciatis porro deserunt
        consectetur, atque, incidunt repudiandae aliquid. Doloremque illum
        obcaecati ipsum possimus labore, laudantium unde nisi quaerat molestias.
        Assumenda aperiam id animi minima nesciunt consectetur, modi nihil
        quisquam repellat labore veritatis similique ab sunt magnam, tempora
        vero ut voluptate ratione quasi alias! Molestias dolores reprehenderit
        tenetur nisi obcaecati commodi numquam a ut, inventore unde temporibus
        quae, repudiandae, praesentium quod veritatis laudantium suscipit totam
        placeat! Blanditiis animi tempore illum molestias, officia deleniti
        magnam velit, facere esse numquam id ea alias vel aspernatur optio
        dolores. Eligendi dolor nemo placeat quod dolorem velit ducimus fugiat
        harum adipisci in, iure ratione porro. Explicabo dicta accusamus
        doloremque ipsa eligendi. Ipsam dolore repellat, qui dicta sequi quia
        tenetur iste, aliquam ab culpa nobis voluptatibus quibusdam in harum
        deserunt. Ullam esse maxime minus est, ut eaque repudiandae facere
        veniam id quas! Nulla alias illo quas labore consequatur rem distinctio
        eligendi, autem quia nesciunt libero exercitationem dicta deleniti
        corporis nostrum consectetur possimus temporibus et iure. Fugit quam
        repellendus vel praesentium, qui explicabo error fuga facere iure
        delectus atque velit alias voluptate provident quos eius dolores
        exercitationem! Ipsam ducimus iure quasi aliquid sequi repudiandae
        animi. Illum quod est velit ipsa corporis magni autem delectus iste
        maxime molestias enim beatae, cumque ab, omnis provident, aut sequi
        laboriosam repellendus laborum non assumenda? Eos facilis impedit,
        sapiente porro, natus ea temporibus eum quasi ipsam esse cupiditate nisi
        earum rerum nobis necessitatibus error consequatur iusto quia velit
        dolores laudantium alias voluptas dolore cumque! Tenetur dolore
        obcaecati corporis molestias, sint maxime est aspernatur aut. Pariatur
        corrupti libero accusantium aut inventore ab laboriosam vitae facilis
        molestiae neque ullam a fuga hic blanditiis repudiandae ipsum, culpa
        obcaecati consequatur! Impedit dignissimos velit blanditiis alias totam
        ab officia, cupiditate possimus illo odit, ipsum iure explicabo esse
        perspiciatis eos, distinctio tempora magnam. Omnis harum, dignissimos
        nulla eaque sequi blanditiis id modi perspiciatis repellat sint placeat
        quae alias, illo consequatur pariatur enim, vero error? Beatae, fuga
        culpa modi itaque quidem quos repellendus iure suscipit. Inventore autem
        veritatis modi commodi obcaecati, eveniet officiis quo earum quos
        reiciendis fugit quam aut quae esse accusantium, ratione id hic fugiat
        ex distinctio! Natus atque unde pariatur voluptate corrupti mollitia
        voluptatibus nihil tempora ipsum magni? Suscipit illo, architecto
        assumenda reprehenderit quidem neque labore qui quasi dicta, error vero,
        quo sit? Laudantium nisi fuga sapiente veritatis inventore optio,
        tempore iure expedita mollitia quam odit sed cumque magnam totam
        repellat libero quasi accusantium beatae hic explicabo? Nisi consequatur
        cupiditate voluptatibus adipisci dolorem quos consequuntur et inventore
        laudantium, expedita voluptas sed voluptatem fuga debitis optio
        distinctio. Officia quae neque molestias perferendis saepe ducimus
        accusamus dignissimos rem velit. Ducimus a asperiores maxime! Officia
        sint asperiores exercitationem impedit minus, dolore suscipit earum
        dolorum, iusto eveniet, inventore mollitia? Provident exercitationem
        harum corrupti, pariatur beatae magnam similique suscipit et minima
        libero deleniti quibusdam ex sit, commodi dolorum vel nihil esse eos
        magni quos voluptas velit. Aliquid, dolore veritatis vero asperiores
        ipsa facilis, hic, voluptatibus fugiat cum eius blanditiis adipisci
        velit modi autem aspernatur magnam labore quam commodi. Quia iste
        eveniet delectus doloribus, dignissimos, totam animi suscipit, quam
        commodi laborum incidunt non. Autem reprehenderit sequi ipsum quod ea
        numquam.
      </p>
    </div>
  );
}

export default ScrollA;
