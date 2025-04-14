import type { StaticImageData } from 'next/image';
import gautam from './GautamProfilePic.jpg';
import gautamImg from './gautamImg.jpeg';
import author from './authorImage.jpeg';
import nextSvg from './next.svg';
import gautamFeLogo from './gautam-fe-logo.png';
import gautamLogo from './gautam-logo.png';
import code from './code.svg';
import education from './education.svg';
import professional from './professional.svg';
import experience from './experience.jpg';
import mobile from './mobile.png';
import webicon from './webicon.png';
import accessibility from './accessibility.png';
import yoga from './yoga.png';
import gautamfelogo from './gautam-fe-logo.png';
import subSkills from './subSkills.jpg';
import nexer from './nexer.png';
import ibm from './ibm.jpg';
import ascena from './ascena.png';
import sapient from './sapient.jpg';
import cts from './cognizant.jpg';
import ericsson from './ericsson.jpg'

export type assetsImagesType= {
    gautam: string | StaticImageData;
    gautamImg: string | StaticImageData;
    author: string | StaticImageData;
    nextSvg: string | StaticImageData;
    gautamFeLogo: string | StaticImageData;
    gautamLogo: string | StaticImageData;
    code: string | StaticImageData;
    education: string | StaticImageData;
    professional: string | StaticImageData;
    experience: string | StaticImageData;
    mobile: string | StaticImageData;
    webicon: string | StaticImageData;
    accessibility: string | StaticImageData;
    yoga: string | StaticImageData;
    gautamfelogo: string | StaticImageData;
    subSkills: string | StaticImageData;
    nexer: string | StaticImageData;
    ibm: string | StaticImageData;
    ascena: string | StaticImageData;
    sapient: string | StaticImageData;
    cts: string | StaticImageData;
    ericsson: string | StaticImageData;
}

export const assetsImages:assetsImagesType = {
    gautam,
    gautamImg,
    author, 
    nextSvg, 
    gautamFeLogo,
    gautamLogo,
    code,
    education, 
    professional,
    experience,
    mobile,
    webicon,
    accessibility,
    yoga,
    gautamfelogo,
    subSkills,
    nexer,
    ibm,
    ascena,
    sapient,
    cts, 
    ericsson
}

export type workDataType = {
    title: string;
    description: string;
    bgImage: string | StaticImageData;
}
export const workData: workDataType[] = [
    {
        title: 'Senior Frontend Developer',
        description: 'Web Development',
        bgImage: assetsImages.nexer
    },
    {
        title: 'Senior Frontend Developer',
        description: 'Web Development and Leading team',
        bgImage: assetsImages.ibm
    },
    {
        title: 'Senior Frontend devloper',
        description: 'Web Development',
        bgImage: assetsImages.ascena
    },
    {
        title: 'Interactive Project',
        description: 'Making web pages',
        bgImage: assetsImages.sapient
    },
    {
        title: 'Accessibility Consultant',
        description: 'Accessing & testing accessibility',
        bgImage: assetsImages.cts
    },
]

export type serviceDataType = {
    icon: IconType,
    title: string;
    description: string;
    link?: string;
}
import { MdEngineering } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { IconType } from 'react-icons';
export const serviceData:serviceDataType[] = [
    {
        icon: MdEngineering, 
        title: 'Web development',
        description: 'web development using different fe techs',
        link: ''
    },
    {
        icon: FaMobileAlt, 
        title: 'Mobile development',
        description: 'web development using different fe techs',
        link: ''
    },
    {
        icon: FaUniversalAccess, 
        title: 'Web accessibility',
        description: 'web development using different fe techs',
        link: ''
    },
    {
        icon: GrYoga, 
        title: 'Yoga',
        description: 'Learn to be clam and flexible...',
        link: ''
    }
]

export type infoListType = {
    icon?: string | StaticImageData,
    title: string;
    description: string;
}
export const infoList: infoListType[] = [
    {
        icon: assetsImages.code,
        title: 'Language',
        description: 'HTML, CSS, JavaScript, React JS, Next JS',
    },
    {
        icon: assetsImages.education,
        title: 'Education',
        description: 'B.Tech in Electronics and Communication',
    },
    {
        icon: assetsImages.professional,
        title: 'Experience',
        description: 'Having over a decade of experience in frontend domain and web acessibility',
    }
]
export type timelineType = {
    location: string;
    name: string;
    year: string;
    image: string | StaticImageData;
    link: string;
    description: string;
}
export const timeline = [
    {
        location: "Gothenburg, Sweden",
        name: "Nexer AB",
        year: "Nov 2022 - Till Date",
        align: "right",
        image: assetsImages.nexer,
        description: "A stunning office in an incredible location—where I get to commute by ferry, tram, bus, or bike (summer vibes, of course). 🌞 Nexer holds a special place in my heart because it didn’t just give me the opportunity to move to this beautiful, peaceful country—it also introduced me to a whole new way of working, fresh technologies, and even a few new games for those “brain break” moments. 🎮 Most importantly, I met some truly genuine people, like my manager, who genuinely cares about your growth and well-being. Definitely a place where you’re encouraged to thrive—and maybe learn a few new tricks along the way!",
        link: "https://nexergroup.com/",

    },
    {
        location: "Gothenburg, Sweden",
        name: "Ericsson (Nexer's client)",
        year: "Nov 2022 - Dec 2024",
        align: "left",
        image: assetsImages.ericsson,
        description: "One of the best projects (and clients) I’ve ever worked with. The views alone—piers, boats, and a food scene that turned lunch breaks into mini getaways—were enough to make you forget you’re at work! 🌊🍣 🍜 But beyond the scenery, it was the warmth, support, and appreciation I received that truly made a difference. I got the space to grow, contribute meaningfully, and feel like more than just a Jira ticket resolver. Plus, I made lifelong friends from all corners of the globe. Huge shoutout to Ericsson for introducing me to some truly incredible humans 🌍👯‍♂️",
        link: "https://www.ericsson.com/en",
    },
    {
        location: "Bangalore, India",
        name: "IBM",
        year: "Apr 2021 - Sep 2022",
        align: "right",
        image: assetsImages.ibm,
        description: "My first official leadership role (unofficially, I’d been low-key leading since forever 😎). I got to manage three juniors and run the whole project like a one-person startup—minus the venture capital. And while IBM has this huge, shiny, campus that looks like it belongs in a sci-fi movie, I only visited it 4 or 5 times… courtesy of lockdown life, where my living room doubled as the boardroom, war room, and coffee station. ☕💻",
        link: "https://www.ibm.com/us-en",
    },
    {
        location: "Bangalore, India",
        name: "Ascena",
        year: "Jan 2018 - Mar 2021",
        align: "left",
        image: assetsImages.ascena,
        description: "It’s been a fantastic ride—from front-end developer to senior front-end developer—with plenty of laughs (and late nights) along the way. Colleagues turned into friends, and honestly, when you’re working with friends, even those extended hours feel a bit like hanging out—with extra debugging and occasional existential crises. And yes, post-work pizza or drinks definitely helped. 🍕🍻 Bonus: I got to collaborate closely with the US team and share ideas and work regularly, got many inside of American brands and culture 😄",
        link: "https://knitwellgroup.com/",
    },
    {
        location: "Bangalore, India",
        name: "Sapient",
        year: "Aug 2016 - Jan 2018",
        align: "right",
        image: assetsImages.sapient,
        description: "Sapient gave me the perfect excuse to move to one of my favorite cities—aka the Silicon Valley of India—where I ended up spending more time than anywhere else besides my hometown. It’s also where my front-end skills got a glow-up, thanks to a constant stream of “fun little challenges” (read: mini panic attacks followed by breakthroughs). Basically, it was like a bootcamp—but with better snacks, more caffeine, and less screaming. ☕💻🔥",
        link: "https://www.publicissapient.com/",
    },
    {
        location: "Kolkata, India",
        name: "Cognizant, Kolkata, India",
        year: "Feb 2014 - Aug 2016",
        align: "left",
        image: assetsImages.cts,
        description: "I dove into corporate ethics, finally put all that university knowledge to good use, and got well-versed in accessibility laws, guidelines, and the magical world of WCAG. I became an accessibility consultant and had the chance to make a real impact while working on projects like Prudential and Delta. Oh, and small bonus... I also met my wife there. Not bad for a day job, right? 😄 ",
        link: "https://www.cognizant.com/us/en",
      },
  ];