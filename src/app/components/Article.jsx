export default function Article({cls1, cls2, cls3, title, text }) {
  return (
    <article className={cls1}>
      <h4 className={cls2}>{title}</h4>
      <p className={cls3}>{text}</p>
    </article>
  )
}
