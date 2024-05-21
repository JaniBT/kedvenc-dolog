import PennBadgley from "../assets/images/characters/PennBadgley.webp"
import GuinevereBeck from "../assets/images/characters/GuinevereBeck.jpg"
import LoveQuinn from "../assets/images/characters/LoveQuinn.webp"
import KateLockwood from "../assets/images/characters/KateLockwood.webp"

export interface CharacterInterface {
    id: number;
    name: string;
    description: string;
    image: any;
}

export const MainCharacterList: CharacterInterface [] = [
    {
        id: 1,
        name: "Joe Goldberg - Penn Badgley",
        description: "Manipulatív és erőszakos módszerekkel igyekszik irányítani kiszemeltjei életét, miközben kedves és figyelmes külsőt mutat. A karakter ellentmondásos, mivel vonzereje mögött egy sötét, beteges személyiség húzódik meg.",
        image: PennBadgley
    },
    {
        id: 2,
        name: "Guinevere Beck - Elizabeth Lail",
        description: "Egy ambiciózus, de önbizalomhiánnyal küzdő író. Joe Goldberg egyik kiszemeltje lesz, akinek figyelme és megszállottsága komoly veszélyt jelent rá. Beck vonzó, intelligens és érzékeny, de sebezhetősége és naivitása miatt könnyen manipulálható.",
        image: GuinevereBeck
    },
    {
        id: 3,
        name: "Love Quinn - Victoria Pedretti",
        description: "Egy szenvedélyes és karizmatikus fiatal nő, aki egy élelmiszerboltban dolgozik. Joe Goldberg új szerelme lesz, és kiderül, hogy hasonlóan sötét és összetett személyiséggel bír. Love mélyen érzelmes és védelmező, de titkai és szélsőséges tettei miatt kiszámíthatatlan és veszélyes.",
        image: LoveQuinn
    }, 
    {
        id: 4,
        name: "Katherine Lockwood - Charlotte Ritchie",
        description: "Egy intelligens és ambiciózus nő, aki művészeti galériát vezet. Joe Goldberg egyik későbbi kiszemeltje lesz. Kate erős és független személyiség, aki nehezen bízik meg másokban, és éleslátással rendelkezik, ami kihívást jelent Joe számára.",
        image: KateLockwood
    }
]