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
import vscode from './vscode.png';
import git from './git.png';
import amazonq from './amazonq.png';
import figma from './figma.svg';
import mobile from './mobile.png';
import webicon from './webicon.png';
import accessibility from './accessibility.png';
import yoga from './yoga.png';
import gautamfelogo from './gautam-fe-logo.png';
import subSkills from './subSkills.jpg';
import nexer from './nexer.png';
import ibm from './ibm.png';
import ascena from './ascena.png';
import sapient from './sapient.jpg';
import cts from './cognizant.jpg';
import ericsson from './ericsson.jpeg'

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
    vscode: string | StaticImageData;
    git: string | StaticImageData;
    amazonq: string | StaticImageData;
    figma: string | StaticImageData;
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
    vscode,
    git,
    amazonq,
    figma,
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

export const toosData: (string | StaticImageData)[] = [
    assetsImages.vscode, assetsImages.amazonq, assetsImages.figma, assetsImages.git
]