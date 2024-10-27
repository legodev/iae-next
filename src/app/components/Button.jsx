import Link from "next/link";
import "./Button.css"

export default function ButtonPage ({children, href}) {
    return (
        <Link className="button" href={href}>{children}</Link>
    )
}