import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import daddy from "../assets/daddy.jpg";
import "./about.css";
export const About = () => {
  return (
    <div>
      <img src={bannerImage} alt="Banner" className="bannerImage" />
      <h1 className="heading">About </h1>
      <div className="about">
        <img src={daddy} alt="" className="daddyPic" />
        <p className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          temporibus perferendis explicabo, cupiditate vel sequi? Vero minus
          laudantium veritatis iste dicta ab sapiente nam quasi rem! Laboriosam
          eius facere dolor beatae voluptates rerum odio tempora delectus illum
          nesciunt. Nam, facilis! Magni velit autem totam illo esse excepturi,
          delectus quas ipsam repellat. Corrupti libero doloremque, eaque ut
          cumque qui nam, sapiente magnam corporis, voluptatem neque id beatae
          quas voluptates. Temporibus, tenetur cupiditate! Reprehenderit,
          obcaecati, aperiam ab nobis eos recusandae soluta, itaque cupiditate
          perferendis odio fugit libero maiores ipsam commodi! Harum, velit
          expedita? Perspiciatis provident, eum quibusdam ab exercitationem quas
          doloribus tenetur, aut reprehenderit sapiente ipsam molestias? Odio
          dolore debitis dignissimos quidem ducimus eum cumque illo assumenda,
          nostrum vel porro architecto magni voluptate quibusdam aliquid veniam
          nulla deleniti facilis tempora inventore tempore, sit odit. Velit
          doloribus iste dolores libero consequatur aut obcaecati error unde
          perferendis numquam et, atque culpa autem tempora laborum nesciunt,
          sapiente commodi nulla at reprehenderit maiores adipisci nobis dolor.
          Necessitatibus delectus aliquid dicta eos a laborum facilis suscipit
          voluptate recusandae, earum veritatis rerum adipisci eaque tempora
          numquam quia sequi vitae accusamus aut doloremque cum esse maxime?
          Possimus eligendi laborum, laboriosam quod eius iste exercitationem
          voluptatum eum tempora, at natus explicabo perferendis quisquam error,
          adipisci consectetur dolor cumque eaque assumenda ut quo cum sapiente.
          Sapiente saepe similique quas et debitis totam fugiat nam placeat, non
          numquam enim? Laboriosam voluptatem quasi distinctio deserunt
          provident quisquam. Unde minus possimus repudiandae, eius quam aliquam
          autem soluta optio incidunt quia. Quam iusto unde nihil saepe aliquam
          eaque illum incidunt explicabo voluptatem soluta accusamus
          exercitationem nulla ipsam fugiat, repellat repellendus, aperiam aut
          omnis autem ratione alias perspiciatis error! Pariatur excepturi quae
          quas et ad, eius, asperiores, doloribus labore sunt illum officia!
          Laudantium totam nihil nostrum vero eius fuga cumque facilis, eveniet
          tempora dolorum perferendis maxime repellendus sit, consectetur,
          officia ex magni excepturi architecto officiis. Ullam perferendis
          nesciunt at eligendi excepturi optio ad libero doloribus cupiditate,
          totam necessitatibus sed aliquid error voluptatum quasi laboriosam
          eius! Laboriosam aliquam culpa doloribus molestias accusantium,
          perspiciatis nostrum hic quod odit, repellat aliquid, quasi nemo?
          Voluptate iure ea tempora aspernatur? Provident facilis consequatur ex
          perferendis impedit fuga! Magni, repudiandae sit nobis nemo numquam
          obcaecati rerum suscipit soluta voluptatibus laborum? Minus asperiores
          officiis temporibus quibusdam odio dignissimos eum, magnam quos illo
          facere natus tempore fugiat nihil earum obcaecati porro, harum,
          ratione itaque? Non beatae iusto cumque animi recusandae aperiam
          minima ab sed veritatis ea odio quasi quisquam reprehenderit, magnam
          dolorem et repellat inventore accusantium suscipit velit consequatur
          ratione quaerat earum ut. Doloremque nam reiciendis quae dolore dolor
          facilis nobis. Blanditiis maxime debitis, quisquam culpa placeat
          consequatur, itaque distinctio fugit iste minima, molestias nam
          eveniet voluptate. Cumque voluptatibus repellendus labore, eveniet
          corporis saepe doloribus. Quasi, nisi. Minima voluptates quisquam,
          odit pariatur necessitatibus natus sit fugit doloremque iste mollitia
          fugiat cupiditate nemo repudiandae labore nostrum. Repellendus neque
          magnam, rem, tempore nemo harum ducimus recusandae ipsa voluptatibus
          voluptates quo delectus consequuntur corporis necessitatibus mollitia
          nam voluptatem impedit? Aperiam repellat odit ab! Amet perspiciatis
          officiis eaque.
        </p>
      </div>
      <Link to="/">
        <button className="watch-sermon">Watch Sermon</button>
      </Link>
    </div>
  );
};
