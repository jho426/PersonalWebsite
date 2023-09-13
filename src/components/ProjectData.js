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
import MtrailsLarge from "../assets/mtrails-large.png";
import ChessLarge from "../assets/chess-large.png";
import LompLarge from "../assets/lomp-large.png";
import UniGPTLarge from "../assets/uniGPT-large.png";
import SpotifyLarge from "../assets/spotify-large.png";
import BoinkAbout from "../assets/boink-about.svg";
import UniGPTAbout from "../assets/uniGPT-about.svg";
import SpotifyAbout from "../assets/spotify-about.svg";
import ChessAbout from "../assets/chess-about.svg";
import MtrailsAbout from "../assets/mtrails-about.svg";
import LompAbout from "../assets/lomp-about.svg";
import ChessMedia from "../assets/chess-des-media.svg";
import SpotifyMedia from "../assets/spotify-des-media.svg";
import MtrailsMedia from "../assets/mtrails-des-media.svg";
import BoinkMedia from "../assets/boink-des-media.svg";
import LompMedia from "../assets/lomp-des-media.svg";
import UniGPTMedia from "../assets/uniGPT-media-des.svg";
const ProjectData = [
    {
        title: "UNI GPT",
        image: UniGPTImg,
        description: UniGPTDes,
        titleImg: UniGPTTitle,
        largeImg: UniGPTLarge,
        about: UniGPTAbout,
        tools: ["react.js", "javascript", "tailwind css", "mui", "langchain", "pinecone", "node.js", "heroku", "gpt3", "express.js" ],
        links: [{"name": "GITHUB", "link": "https://github.com/jho426/UniGPT"}, {"name": "SITE", "link": "https://universitygpt-43101.web.app/"}, {"name": "API", "link": "https://unigpt-c074044c0e9d.herokuapp.com/"}],
        mediaDescription: UniGPTMedia
    },
    {
        title: "SPOTIFY FRIENDS",
        image: SpotifyImg,
        description: SpotifyDes,
        titleImg: SpotifyTitle,
        largeImg: SpotifyLarge,
        about: SpotifyAbout,
        tools: ["react native", "javascript", "typescript", "spotify api", "xcode"],
        links: [{"name": "GITHUB", "link": "https://github.com/jho426/SpotifyFriends"}, {"name": "APP STORE", "link": "https://apps.apple.com/ca/app/listening-activity-for-spotify/id6451445133"}],
        mediaDescription: SpotifyMedia
    },
    {
        title: "CHESS",
        image: ChessImg,
        description: ChessDes,
        titleImg: ChessTitle,
        largeImg: ChessLarge,
        about: ChessAbout,
        tools: ["java", "photoshop"],
        links: [{"name": "GITHUB", "link": "https://github.com/jho426/Chess"}],
        mediaDescription: ChessMedia
    },
    {
        title: "MARKHAM TRAILS",
        image: MtrailsImg,
        description: MtrailsDes,
        titleImg: MtrailsTitle,
        largeImg: MtrailsLarge,
        about: MtrailsAbout,
        tools: ["flutter", "dart", "xcode"],
        links: [{"name": "APP STORE", "link": "https://apps.apple.com/ca/app/markham-trails/id1640993603"}],
        mediaDescription: MtrailsMedia
    },
    {
        title: "BOINK",
        image: BoinkImg,
        description: BoinkDes,
        titleImg: BoinkTitle,
        largeImg: BoinkLarge,
        about: BoinkAbout,
        tools: ["unity", "c#", "figma"],
        links: [{"name": "APP STORE", "link": "https://apps.apple.com/ca/app/bo-nk/id1570376501"}, {"name": "WEBSITE", "link": "https://markville.dev/boinksite/"}],
        mediaDescription: BoinkMedia
    },
    {
        title: "LEGENDS OF MATH PRODIGY",
        image: LompImg,
        description: LompDes,
        titleImg: LompTitle,
        largeImg: LompLarge,
        about: LompAbout,
        tools: ["java", "photoshop"],
        links: [{"name": "GITHUB"}, {"link": "https://github.com/jho426/LegendsOfMathProdigy"}],
        mediaDescription: LompMedia
    }
];

export default ProjectData;