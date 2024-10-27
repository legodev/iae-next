import Link from "next/link";
import "./button.css"

export default function ButtonPage ({children, href}) {
    return (
        <Link className="button" href={href}>{children}</Link>
    )
}