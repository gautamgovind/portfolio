
import About from "@/components/about";
import Contact from "@/components/contact";
import Introduction from "@/components/introduction";
import MyRoles from "@/components/my-roles";
import Recommendations from "@/components/recommendations";
import Work from "@/components/work";


export default function Home() {
  return (
    <>
        <Introduction />
        <About  />
        <MyRoles />
        <Work />
        <Recommendations />
        <Contact />
    </>
  );
}
