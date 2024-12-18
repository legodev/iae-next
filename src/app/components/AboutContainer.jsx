import AboutColumns from "./AboutColumns"
import { Texts } from "./Texts"


export default function AboutContainer() {
  return (
    <section className="about__columns home">
      <AboutColumns
        title="Conditions"
        description={Texts.about.text1}
        src="/image/img-10.jpeg"
        alt="Image"
      />
      <AboutColumns
        title="Inclusive"
        description={Texts.about.text2}
        src="/image/img-11.jpg"
        alt="Image"
      />
      <AboutColumns
        title="Equipment"
        description={Texts.about.text3}
        src="/image/img-12.jpeg"
        alt="Image"
      />
      <AboutColumns
        title="Excellence"
        description={Texts.about.text4}
        src="/image/img-13.jpeg"
        alt="Image"
      />
    </section>
  )
}
