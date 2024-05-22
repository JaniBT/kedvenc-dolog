import PennBadgley from "../assets/images/characters/PennBadgley.webp"
import GuinevereBeck from "../assets/images/characters/GuinevereBeck.jpg"
import LoveQuinn from "../assets/images/characters/LoveQuinn.webp"
import KateLockwood from "../assets/images/characters/KateLockwood.webp"
import RhysMontrose from "../assets/images/characters/RhysMontrose.webp"
import EllieAlves from "../assets/images/characters/EllieAlves.webp"
import FortyQuinn from "../assets/images/characters/FortyQuinn.webp"
import CandaceStone from "../assets/images/characters/CandaceStone.webp"

export interface CharacterInterface {
    id: number;
    name: string;
    description: string;
    image: any;
    voice: any;
}

export const MainCharacterList: CharacterInterface [] = [
    {
        id: 1,
        name: "Joe Goldberg - Penn Badgley",
        description: "Manipulatív és erőszakos módszerekkel igyekszik irányítani kiszemeltjei életét, miközben kedves és figyelmes külsőt mutat. A karakter ellentmondásos, mivel vonzereje mögött egy sötét, beteges személyiség húzódik meg.",
        image: PennBadgley,
        voice: {}
    },
    {
        id: 2,
        name: "Guinevere Beck - Elizabeth Lail",
        description: "Egy ambiciózus, de önbizalomhiánnyal küzdő író. Joe Goldberg egyik kiszemeltje lesz, akinek figyelme és megszállottsága komoly veszélyt jelent rá. Beck vonzó, intelligens és érzékeny, de sebezhetősége és naivitása miatt könnyen manipulálható.",
        image: GuinevereBeck,
        voice: {}
    },
    {
        id: 3,
        name: "Love Quinn - Victoria Pedretti",
        description: "Egy szenvedélyes és karizmatikus fiatal nő, aki egy élelmiszerboltban dolgozik. Joe Goldberg új szerelme lesz, és kiderül, hogy hasonlóan sötét és összetett személyiséggel bír. Love mélyen érzelmes és védelmező, de titkai és szélsőséges tettei miatt kiszámíthatatlan és veszélyes.",
        image: LoveQuinn,
        voice: {}
    }, 
    {
        id: 4,
        name: "Katherine Lockwood - Charlotte Ritchie",
        description: "Egy intelligens és ambiciózus nő, aki művészeti galériát vezet. Joe Goldberg egyik későbbi kiszemeltje lesz. Kate erős és független személyiség, aki nehezen bízik meg másokban, és éleslátással rendelkezik, ami kihívást jelent Joe számára.",
        image: KateLockwood,
        voice: {}
    },
    {
        id: 5,
        name: "Rhys Montrose - Edward Speleers",
        description: "Egy karizmatikus és titokzatos író, aki később felbukkan a történetben. Rhys éles eszű és manipulatív, és kapcsolatai általában bonyolultak és rejtélyesek.",
        image: RhysMontrose,
        voice: {}
    },
    {
        id: 6,
        name: "Ellie Alves - Jenna Ortega",
        description: "Egy okos és makacs tinédzser lány, aki a könyvesboltban dolgozik. Ellie életében nehéz körülmények között kell boldogulnia, és gyakran játszik a tűzzel. Ám mélyen gondoskodó és érzékeny személyiség, aki méltó Joe Goldberg bizalmára és figyelmére.",
        image: EllieAlves,
        voice: {}
    },
    {
        id: 7,
        name: "Forty Quinn - James Scully",
        description: "Love Quinn excentrikus és szeszélyes ikertestvére. Kreatív és kaotikus, Forty küzdelmes kapcsolatot ápol a testvérekkel és önmagával egyaránt.",
        image: FortyQuinn,
        voice: {}
    },
    {
        id: 8,
        name: "Candace Stone - Ambyr Childers",
        description: "Joe Goldberg korábbi barátnője, aki visszatér az életébe. Makacs és céltudatos, Candace szembeszáll Joe sötét titkaival, hogy igazságot szolgáltasson.",
        image: CandaceStone,
        voice: {}
    }
]