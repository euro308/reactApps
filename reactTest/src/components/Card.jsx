export function Card({children}) {
    return (
        <article className="card">
            {children}
            <span>"bob"</span>
        </article>
    )
}