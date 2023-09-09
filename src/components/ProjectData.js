import React from "react";
import BoinkImg from "../assets/boink.png";
import ChessImg from "../assets/chess.png";
import SpotifyImg from "../assets/spotifyFriends.png";
import MtrailsImg from "../assets/mtrails.png";
import LompImg from "../assets/lomp.png";
import UniGPTImg from "../assets/uniGpt.png";
import MtrailsDes from "../assets/mtrails-des.svg";
import SpotifyDes from "../assets/spotify-des.svg";
import BoinkDes from "../assets/boink-des.svg";
import ChessDes from "../assets/chess-des.svg";
import LompDes from "../assets/lomp-des.svg";
import UniGPTDes from "../assets/uniGPT-des.svg";
import UniGPTTitle from "../assets/uniGPT-title.svg";
import SpotifyTitle from "../assets/spotify-friends-title.svg";
import ChessTitle from "../assets/chess-title.svg";
import MtrailsTitle from "../assets/mtrails-title.svg";
import BoinkTitle from "../assets/boink-title.svg";
import LompTitle from "../assets/lomp-title.svg";
import BoinkLarge from "../assets/boink-large.png";
import ChessLarge from "../assets/chess-large.png";
import LompLarge from "../assets/lomp-large.png";
import BoinkAbout from "../assets/boink-about.svg";
import SpotifyAbout from "../assets/spotify-about.svg";
import ChessAbout from "../assets/chess-about.svg";
import MtrailsAbout from "../assets/mtrails-about.svg";
import LompAbout from "../assets/lomp-about.svg";

const ProjectData = [
    {
        title: "UNI GPT",
        image: UniGPTImg,
        description: UniGPTDes,
        titleImg: UniGPTTitle,
        largeImg: BoinkLarge,
        about: BoinkAbout,

    },
    {
        title: "SPOTIFY FRIENDS",
        image: SpotifyImg,
        description: SpotifyDes,
        titleImg: SpotifyTitle,
        largeImg: BoinkLarge,
        about: SpotifyAbout
    },
    {
        title: "CHESS",
        image: ChessImg,
        description: ChessDes,
        titleImg: ChessTitle,
        largeImg: ChessLarge,
        about: ChessAbout

    },
    {
        title: "MARKHAM TRAILS",
        image: MtrailsImg,
        description: MtrailsDes,
        titleImg: MtrailsTitle,
        largeImg: BoinkLarge,
        about: MtrailsAbout
    },
    {
        title: "BOINK",
        image: BoinkImg,
        description: BoinkDes,
        titleImg: BoinkTitle,
        largeImg: BoinkLarge,
        about: BoinkAbout
    },
    {
        title: "LEGENDS OF MATH PRODIGY",
        image: LompImg,
        description: LompDes,
        titleImg: LompTitle,
        largeImg: LompLarge,
        about: LompAbout
    }
];

export default ProjectData;