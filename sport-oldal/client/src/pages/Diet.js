import React from 'react'

export default function Diet() {
    return (
       <div>
            <h1 className="text-center font-mono font-extrabold m-5 text-5xl text-blue-100">Letölthető étrendek</h1>
            <div className="flex flex-row justify-center flex-1">
            <table class="tg">

        <tr>
         <th class="tg-0lax" height= "10px"><div><img src="https://dietetikusod.hu/wp-content/uploads/2023/03/dietetikusod_elfoglaltaknak.jpg" width="250" height="50" alt="Kavezo"></img></div><p className="w-1/2 mr-2 text-white items-center"> <br></br>
            <a href="/Elfoglaltetrend"><u>Megnézem</u></a></p></th>

         <th class="tg-0lax" height= "10px"><div><img src="https://dietetikusod.hu/wp-content/uploads/2023/03/dietetikusod_receptgyujtemeny.jpg" width="250" height="50" alt="Kavezo"></img></div><p className="w-1/2 mr-2 text-white items-center"> <br></br>
            <a href="/Egeszsegtudatos"><u>Megnézem</u></a></p></th>

            <th class="tg-0lax" height= "10px"><div><img src="https://dietetikusod.hu/wp-content/uploads/2023/03/dietetikusod_glutenmentes.jpg" width="250" height="50" alt="Kavezo"></img></div><p className="w-1/2 mr-2 text-white items-center"> <br></br>
            <a href="/Glutenmentes"><u>Megnézem</u></a></p></th>

        
         </tr>
        
        
        </table>
        </div>
        </div>


    )
}