import { faBars, faHeadphones, faHouse, faPlay, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export const navList = [
    {
        icon: faPlay,
        text: 'Música',
        routerLink: "/player",
    },
    {
        routerLink: "/",
        icon: faHouse,
        text: 'Início'
    },
    {
        routerLink: "/search",
        icon: faSearch,
        text: 'Buscar'
    },
    {
        routerLink: "/me",
        icon: faUser,
        text: 'Eu'
    },
]