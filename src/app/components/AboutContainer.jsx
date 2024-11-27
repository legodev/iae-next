import AboutColumns from "./AboutColumns"
import { Texts } from "./Texts"


export default function AboutContainer() {
  return (
    <section className="about__columns home">
      <AboutColumns
        title="Title"
        description={Texts.about.text1}
        src="/image/hola.jpg"
        alt="Image"
      />
      <AboutColumns
        title="Title"
        description={Texts.about.text2}
        src="/image/hola.jpg"
        alt="Image"
      />
      <AboutColumns
        title="Title"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ea
        deleniti neque adipisci a minus soluta quis itaque necessitatibus magnam
        sapiente impedit doloremque, maxime labore dignissimos voluptatum, non,
        odio dicta."
        src="/image/hola.jpg"
        alt="Image"
      />
      <AboutColumns
        title="Title"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ea
        deleniti neque adipisci a minus soluta quis itaque necessitatibus magnam
        sapiente impedit doloremque, maxime labore dignissimos voluptatum, non,
        odio dicta."
        src="/image/hola.jpg"
        alt="Image"
      />
    </section>
  )
}
