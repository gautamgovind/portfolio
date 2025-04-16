import type { StaticImageData } from 'next/image';

import gautamImg from '../../assets/gautamImg.jpeg';
import author from '../../assets/authorImage.jpeg';
import gautamFeLogo from '../../assets/gautam-fe-logo.png';
import gautamLogo from '../../assets/gautam-logo.png';
import gautamfelogo from '../../assets/gautam-fe-logo.png';
import subSkills from '../../assets/subSkills.jpg';


export type assetsImagesType= {
    gautamImg: string | StaticImageData;
    author: string | StaticImageData;
    gautamFeLogo: string | StaticImageData;
    gautamLogo: string | StaticImageData;
    gautamfelogo: string | StaticImageData;
    subSkills: string | StaticImageData;
 
}

export const assetsImages:assetsImagesType = {
    gautamImg,
    author, 
    gautamFeLogo,
    gautamLogo,
    gautamfelogo,
    subSkills,
}

export type workDataType = {
    title: string;
    description: string;
    bgImage: string;
}
export const workData: workDataType[] = [
    {
        title: 'Senior Frontend Developer',
        description: 'Web Development',
        bgImage: "/companies/nexer.png",
    },
    {
        title: 'Senior Frontend Developer',
        description: 'Web Development and Leading team',
        bgImage: "/companies/ibm.jpg",
    },
    {
        title: 'Senior Frontend devloper',
        description: 'Web Development',
        bgImage: "/companies/ascena.png",
    },
    {
        title: 'Interactive Project',
        description: 'Making web pages',
        bgImage: "/companies/sapient.jpg",
    },
    {
        title: 'Accessibility Consultant',
        description: 'Accessing & testing accessibility',
        bgImage: "/companies/cognizant.jpg",
    },
]

export type serviceDataType = {
    icon: IconType,
    title: string;
    description: string;
    link: string;
}
import { MdEngineering } from "react-icons/md";
import { FaUniversalAccess } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { IconType } from 'react-icons';
export const serviceData:serviceDataType[] = [
    {
        icon: MdEngineering, 
        title: 'Web development',
        description: 'web development using different fe techs',
        link: '/my-work/#fe-devlopment'
    },
    {
        icon: FaUniversalAccess, 
        title: 'Web accessibility',
        description: 'web development using different fe techs',
        link: '/my-work/#web-accessibility'
    },
    {
        icon: GrYoga, 
        title: 'Yoga',
        description: 'Learn to be clam and flexible...',
        link: '/my-work/#yoga'
    }
]

export type infoListType = {
    link: string;
    title: string;
    description: string;
}
export const infoList: infoListType[] = [
    {
        title: 'Skills',
        link: '/my-work',
        description: 'React JS, TypeScript, Next JS, HTML, CSS, JavaScript, ...more.',
    },
    {
        title: 'Education',
        link: '/my-journey/#lpu',
        description: 'B.Tech in Electronics and Communication',
    },
    {
        title: 'Experience',
        link: '/my-journey',
        description: 'With over 10 years of IT experience, I specialize in frontend development and web accessibility.',
    }
]
export type timelineType = {
    location: string;
    name: string;
    id: string;
    year: string;
    align: string;
    image: string;
    myimage: string;
    description: string;
    link: string;
}
export const timeline: timelineType[] = [
    {
        location: "Gothenburg, Sweden",
        name: "Nexer AB",
        id: "nexer",
        year: "Nov 2022 - Till Date",
        align: "right",
        image: "/companies/nexer.png",
        myimage: "/personal/nexerTeam.png",
        description: "A stunning office in an incredible location—where I get to commute by ferry, tram, bus, or bike (summer vibes, of course). 🌞 Nexer holds a special place in my heart because it didn’t just give me the opportunity to move to this beautiful, peaceful country—it also introduced me to a whole new way of working, fresh technologies, and even a few new games for those “brain break” moments. 🎮 Most importantly, I met some truly genuine people, like my manager, who genuinely cares about your growth and well-being. Definitely a place where you’re encouraged to thrive—and maybe learn a few new tricks along the way!",
        link: "https://nexergroup.com/",

    },
    {
        location: "Gothenburg, Sweden",
        name: "Ericsson (Nexer's client)",
        id: "ericsson",
        year: "Nov 2022 - Dec 2024",
        align: "left",
        image: "/companies/ericsson.jpg",
        myimage: "/personal/ericssonTeam.jpg",
        description: "One of the best projects (and clients) I’ve ever worked with. The views alone—piers, boats, and a food scene that turned lunch breaks into mini getaways—were enough to make you forget you’re at work! 🌊🍣 🍜 But beyond the scenery, it was the warmth, support, and appreciation I received that truly made a difference. I got the space to grow, contribute meaningfully, and feel like more than just a Jira ticket resolver. Plus, I made lifelong friends from all corners of the globe. Huge shoutout to Ericsson for introducing me to some truly incredible humans 🌍👯‍♂️",
        link: "https://www.ericsson.com/en",
    },
    {
        location: "Bangalore, India",
        name: "IBM",
        id: "ibm",
        year: "Apr 2021 - Sep 2022",
        align: "right",
        image: "/companies/ibm.jpg",
        myimage: "/personal/ibmTeam.jpeg",
        description: "My first official leadership role (unofficially, I’d been low-key leading since forever 😎). I got to manage three juniors and run the whole project like a one-person startup—minus the venture capital. And while IBM has this huge, shiny, campus that looks like it belongs in a sci-fi movie, I only visited it 4 or 5 times… courtesy of lockdown life, where my living room doubled as the boardroom, war room, and coffee station. ☕💻",
        link: "https://www.ibm.com/us-en",
    },
    {
        location: "Bangalore, India",
        name: "Ascena",
        id: "ascena",
        year: "Jan 2018 - Mar 2021",
        align: "left",
        image:  "/companies/ascena.png",
        myimage: "/personal/ascenaTeam.jpeg",
        description: "It’s been a fantastic ride—from front-end developer to senior front-end developer—with plenty of laughs (and late nights) along the way. Colleagues turned into friends, and honestly, when you’re working with friends, even those extended hours feel a bit like hanging out—with extra debugging and occasional existential crises. And yes, post-work pizza or drinks definitely helped. 🍕🍻 Bonus: I got to collaborate closely with the US team and share ideas and work regularly, got many inside of American brands and culture 😄",
        link: "https://knitwellgroup.com/",
    },
    {
        location: "Bangalore, India",
        name: "Sapient",
        id: "sapient",
        year: "Aug 2016 - Jan 2018",
        align: "right",
        image: "/companies/sapient.jpg",
        myimage: "/personal/sapientTeam.jpeg",
        description: "Sapient gave me the perfect excuse to move to one of my favorite cities—aka the Silicon Valley of India—where I ended up spending more time than anywhere else besides my hometown. It’s also where my front-end skills got a glow-up, thanks to a constant stream of “fun little challenges” (read: mini panic attacks followed by breakthroughs). Basically, it was like a bootcamp—but with better snacks, more caffeine, and less screaming. ☕💻🔥",
        link: "https://www.publicissapient.com/",
    },
    {
        location: "Kolkata, India",
        name: "Cognizant",
        id: "cts",
        year: "Feb 2014 - Aug 2016",
        align: "left",
        image: "/companies/cognizant.jpg",
        myimage: "/personal/ctsLife.jpeg",
        description: "I dove into corporate ethics, finally put all that university knowledge to good use, and got well-versed in accessibility laws, guidelines, and the magical world of WCAG. I became an accessibility consultant and had the chance to make a real impact while working on projects like Prudential and Delta. Oh, and small bonus... I also met my wife there. Not bad for a day job, right? 😄 ",
        link: "https://www.cognizant.com/us/en",
      },
      {
        location: "Punjab, India",
        name: "LPU",
        id: "lpu",
        year: "Aug 2009 - Aug 2013",
        align: "right",
        image: "/companies/lpu.jpg",
        myimage: "/personal/lpuLife.jpg",
        description: "Words can’t quite capture my experience at LPU—it was one of those times I’d happily relive 100 times over. Every day was an adventure, meeting over 100 new faces and learning from faculty with diverse backgrounds. It was a rollercoaster of competing to be first in class, debates, programming challenges, trying (and sometimes failing) to catch the attention of girls, and of course, the unforgettable late-night parties. Let’s not forget the many creative excuses to skip class! It's hard to put into words the journey from being a group of mischievous kids to becoming somewhat responsible adults (still a work in progress, though!).",
        link: "https://www.lpu.in/",
      },
  ];

  export type RolesType = {
    role: string;
    tools: string;
    id: string;
    align: string;
    image: string;
    description: string;

  }
  export const roles:RolesType[] = [
    {
        role: "Frontend/Web Development",
        tools: "React JS, Redux JS, Next JS, TypeScript, JavaScript, Node, HTML, CSS, jQuery, Bootstrap...etc.",
        id: "fe-devlopment",
        align: "right",
        image: "/companies/webdevelopment.jpg",
        description: `
            I’ve been working in frontend development since 2016, during which I’ve had the opportunity to explore a wide range of evolving technologies. My journey has taken me through both service-based and product-based organizations, giving me a well-rounded perspective on software delivery.
            
            Throughout the years, I’ve collaborated with clients across diverse industries—including telecom, retail/e-commerce, healthcare, insurance, and travel & hospitality. This exposure has helped me develop a deep understanding of different business domains, allowing me to quickly adapt, align with their goals, and contribute meaningfully as part of their teams.

            Frontend technology continues to evolve at a rapid pace, constantly introducing new capabilities for building high-performance, user-centric digital experiences. I stay current by engaging with peers in the industry and actively following the latest trends, tools, and best practices to ensure I’m always growing and delivering modern, effective solutions.
        `,
      },
      {
        role: "Web Accessibility",
        tools: "JavaScript,HTML, CSS, Aria, WCAG, Section 508, NVDA, JAWS, CCA, Voiceover etc.",
        id: "web-accessibility",
        align: "left",
        image: "/companies/accessibility.jpg",
        description: "Accessibility is a critical aspect of modern web development, with many countries enforcing legal compliance through standards such as WCAG (A, AA, AAA levels), Section 508, and other regional guidelines. As an accessibility consultant, I’ve had the opportunity to help leading organizations—including Delta Air Lines and Prudential Financial—achieve compliance and create inclusive digital experiences. My work has not only enhanced usability for all users but also helped these businesses mitigate legal risks and avoid potential penalties from non-compliance.",
      },
      {
        role: "Yoga",
        tools: "Personal training, practice",
        id: "yoga",
        align: "right",
        image: "/companies/yoga.jpeg",
        description: "Unit with one - I was fortunate to be exposed to the original roots of yoga at a young age, learning that it is much more than just physical postures. Yoga, as taught by ancient Indian sages, is a path toward inner stillness—a tool to calm the fluctuations of the mind and cultivate clarity, focus, and spiritual growth. In the early years, I practiced regularly, but like many, I drifted away amidst the hustle of life. However, over the last 4–5 years, I’ve returned to the practice with renewed commitment. It has not only helped me reconnect with myself but also inspired me to occasionally guide others. ",
      },
  ]