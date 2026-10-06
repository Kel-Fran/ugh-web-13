export interface Props {
    title: string;
    name: string;
    about: string;
    endangered?: boolean;
    favourites: string[];

}
export default function AnimalCard({ title, name, about, endangered = false, favourites }: Props) {
    return <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
        <h2>{title}</h2>

        <div className="card">
            <div className="card-body">
                <h3>{name}</h3>

                <p>
                    {about}
                </p>

                <p>
                    <strong>Veszélyeztetett:</strong> {endangered ? "Igen" : "Nem"}
                </p>

                <p className="mb-0">
                    <strong>Kedvenc ételei:</strong> {favourites.join(', ')}
                </p>
            </div>
        </div>
    </div>

}
