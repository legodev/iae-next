import Image from "next/image";
import img1 from "../image/hi.jpeg"
import img2 from "../image/hola.jpg"
import img3  from "../image/img-3.jpg"

export default function About() {
    return (
        <section>
            <h3>
                This is the about section ❤️
            </h3> 
                <Image src={img2} className="imagenes" alt="Imagen" width={500} height={300} />
                <Image src={img3} className="imagenes" alt="Imagen" width={500} height={300} />
                <Image src={img1} alt="Imagen" width={500} height={300} />
        </section>
    )
}