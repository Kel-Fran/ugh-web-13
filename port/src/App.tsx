import "./egyedi.css"
import ListCard from "./Components/ListCard"
import AnimalCard from "./Components/AnimalCard"

function App() {
    return <div className='container' >
        { /* FŐCÍM */ }

        < div className = "row" >
            <div className="col-sm-12 kartya mb-3" >
                <div className="mt-2 mb-1 p-5 bg-success text-white rounded" >
                    <h1 id="focim" >🐾 Állatkert lakói </h1>

                        < p className = "mb-0" > Téma: Állatok az állatkertben </p>
                            </div>
                            </div>
                            </div>

    { /* BEVEZETŐ */ }

    <div className="row mb-2" >
        <div className="col-sm-12" >
            <div className="card" >
                <div className="card-header" >
                    Mit érdemes tudni az állatkerti állatokról ?
                        </div>

                        < div className = "card-body" >
                            <p>
                            Az állatkertekben különböző földrészekről származó állatokkal
    találkozhatunk.Az állatokat fajuknak és természetes élőhelyüknek
                megfelelő körülmények között gondozzák.
              </p>

        <p>
                Az állatok életkora és testsúlya fajonként jelentősen eltérhet.
                Táplálkozásuk is különböző: vannak növényevők, húsevők és
    mindenevők.
              </p>

        < p className = "mb-0" >
            Egyes állatfajok veszélyeztetettek, ezért az állatkertek a
                természetvédelmi szemléletformálásban és egyes fajok megőrzésében
                is szerepet vállalhatnak.
              </p>
        </div>
        </div>
        </div>
        </div>

    { /* LISTÁK */ }

    <div className="row mb-2" >

        <ListCard title="Élőhelyek" content = { ["Afrikai szavanna", "Ázsiai esőerdő", "Dél-amerikai őserdő", "Sarki vidék", "Ausztráliai területek"]} />
            <ListCard otherKind title = "Népszerű állatok" content = { ["Oroszlán", "Elefánt", "Zsiráf", "Panda", "Pingvin"]} />
                <ListCard otherKind title = "Táplálkozás" content = { ["Növényevő", "Húsevő", "Mindenevő", "Gyümölcsevő", "Rovarokkal táplálkozó"]} />
                    </div>

    { /* TÁBLÁZAT */ }

    <div className="row mb-1" id = "allatok" >
        <div className="col-sm-12 kartya mb-3" >
            <h2>Az állatkert néhány lakója </h2>

                < table className = "table table-bordered" >
                    <thead>
                    <tr>
                    <th>Név </th>

                    < th > Életkor </th>

                    < th > Súly </th>

                    < th > Veszélyeztetett ? </th>

                    < th > Kedvenc ételek </th>
                        </tr>
                        </thead>

                        < tbody >
                        <tr>
                        <td>Szimba </td>

                        < td > 8 év </td>

                            < td > 190 kg </td>

                                < td > Igen </td>

                                < td > Marhahús, csirkehús </td>
                                </tr>

                                < tr >
                                <td>Lili </td>

                                < td > 12 év </td>

                                    < td > 3200 kg </td>

                                        < td > Nem </td>

                                        < td > Fű, levelek, gyümölcsök </td>
                                        </tr>

                                        < tr >
                                        <td>Beni </td>

                                        < td > 6 év </td>

                                            < td > 850 kg </td>

                                                < td > Igen </td>

                                                < td > Levelek, ágak </td>
                                                </tr>

                                                < tr >
                                                <td>Pötyi </td>

                                                < td > 5 év </td>

                                                    < td > 95 kg </td>

                                                        < td > Igen </td>

                                                        < td > Bambusz, sárgarépa </td>
                                                        </tr>

                                                        < tr >
                                                        <td>Csőrike </td>

                                                        < td > 4 év </td>

                                                            < td > 28 kg </td>

                                                                < td > Nem </td>

                                                                < td > Hal, krill </td>
                                                                </tr>
                                                                </tbody>
                                                                </table>
                                                                </div>
                                                                </div>

    { /* ÁLLATOK */ }
    <AnimalCard title="Oroszlán" name = "Szimba" about = "Szimba egy 8 éves hím oroszlán. Súlya körülbelül 190 kg." endangered favourites = { ["marhahús", "csirkehús"]} />
        <AnimalCard title="Elefánt" name = "Lili" about = "Lili egy 12 éves elefánt.Súlya körülbelül 3200 kg." favourites = { ["fű", "levelek", "gyümölcsök"]} />
            <div className = "row mb-1" >
                <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100" >
                    <h2>Oroszlán </h2>

                    < div className = "card" >
                        <div className="card-body" >
                            <h3>Szimba </h3>

                            <p>
                Szimba egy 8 éves hím oroszlán.Súlya körülbelül 190 kg.
              </p>

        < p >
        <strong>Veszélyeztetett: </strong> Igen
            </p>

            < p className = "mb-0" >
                <strong>Kedvenc ételei: </strong> marhahús, csirkehús
                    </p>
                    </div>
                    </div>
                    </div>

                    < div className = "col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100" >
                        <h2>Elefánt </h2>

                        < div className = "card" >
                            <div className="card-body" >
                                <h3>Lili </h3>

                                <p>
                Lili egy 12 éves elefánt.Súlya körülbelül 3200 kg.
              </p>

        < p >
        <strong>Veszélyeztetett: </strong> Nem
            </p>

            < p className = "mb-0" >
                <strong>Kedvenc ételei: </strong> fű, levelek, gyümölcsök
                    </p>
                    </div>
                    </div>
                    </div>

                    < div className = "col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100" >
                        <h2>Zsiráf </h2>

                        < div className = "card" >
                            <div className="card-body" >
                                <h3>Beni </h3>

                                <p>
                Beni egy 6 éves zsiráf.Súlya körülbelül 850 kg.
              </p>

        < p >
        <strong>Veszélyeztetett: </strong> Igen
            </p>

            < p className = "mb-0" >
                <strong>Kedvenc ételei: </strong> levelek, ágak
                    </p>
                    </div>
                    </div>
                    </div>

                    < div className = "col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100" >
                        <h2>Panda </h2>

                        < div className = "card" >
                            <div className="card-body" >
                                <h3>Pötyi </h3>

                                <p>
                Pötyi egy 5 éves panda.Súlya körülbelül 95 kg.
              </p>

        < p >
        <strong>Veszélyeztetett: </strong> Igen
            </p>

            < p className = "mb-0" >
                <strong>Kedvenc ételei: </strong> bambusz, sárgarépa
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>

    { /* FONTOS TUDNIVALÓK */ }

    <div className="row" >
        <div className="col-sm-12 kartya mb-3" >
            <div className="card" >
                <div className="card-header" > Amit érdemes megjegyezni </div>

                    < div className = "card-body" >
                        <ul>
                        <li>
                        Minden állatfajnak sajátos táplálkozási igényei vannak.
                </li>

                            <li>
                  Az állatok életkora és testsúlya fajonként, illetve egyedenként
    eltérhet.
                </li>

        <li>
                  A veszélyeztetett fajok védelme fontos természetvédelmi
    feladat.
                </li>

        <li>
                  Az állatkertekben az állatok gondozása mellett az
                  ismeretterjesztés is fontos szerepet kap.
                </li>

        <li>
                  Egy állat adatai többféle adattípust tartalmazhatnak:
    szöveget, számot, logikai értéket és tömböt.
                </li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>

    { /* LÁBLÉC */ }

    <div className="container-fluid" >
        <div className="row" >
            <div className="col-sm-12 kartya mb-3" >
                <p className="text-center" >
                    <b>Az oldalt készítette: </b>

                        < i > Gipsz Jakab </i>
                            </p>

                            < p style = {{ textAlign: 'center' }
}>
    <span style={ { fontWeight: 'bold' } }> Készítés dátuma: </span>

        < span className = "dolt" > 2026.10.04.</span>
            </p>
            </div>
            </div>

            </div>
}

export default App
