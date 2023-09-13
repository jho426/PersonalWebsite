import MdevDes from "../assets/mdev-des.svg";
import KiwiiDes from "../assets/kiwii-des.svg";
import ArtemisDes from "../assets/artemis-des.svg";
import MdevMedia from "../assets/mdev-des-media.svg";
import KiwiiMedia from "../assets/kiwii-des-media.svg";

const ExperienceData = [
    {
        title: "Artemis",
        date: "may 2023 – aug 2023",
        description: ArtemisDes,
        showDropDown: false,
        tools: ["React Native", "Python", "Tailwind CSS", "JavaScript", "MongoDB", "Redis"],
        link: "https://www.artemisdata.io/",
        media: MdevMedia
    },
    {
        title: "Kiwii",
        date: "may 2022 – aug 2022",
        description: KiwiiDes,
        showDropDown: false,
        tools: ["React", "JavaScript", "HTML/CSS", "Firebase", "Figma"],
        link: "https://kiwiimenu.ca/",
        media: KiwiiMedia
    },
    {
        title: "Markville App Development",
        date: "sep 2020 – aug 2022",
        description: MdevDes,
        showDropDown: false,
        tools: ["Java", "Dart", "Flutter", "XCode", "Android Studio"],
        link: "https://markville.dev/",
        media: KiwiiMedia
    }
];

export default ExperienceData;