export interface Props {
    title: string;
    content: string[];
    otherKind?: boolean;

}
export default function ListCard({ otherKind = false, title, content }: Props) {
    return <div className={"col-sm-4 kartya" + otherKind ? "mb-2" : ""}>
        <h2>{title}</h2>
        {otherKind ? <ol className="list-group list-group-numbered">
            {content.map((it, i) => <li key={i} className="list-group-item">{it}</li>)}
        </ol> : <ul className="list-group">
            {content.map((it, i) => <li key={i} className="list-group-item">{it}</li>)}
        </ul>}
    </div>

}
