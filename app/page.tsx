
import About from "@/components/about";
import Contact from "@/components/contact";
import Introduction from "@/components/introduction";
import MyRoles from "@/components/my-roles";
import OutsideWork from "@/components/outside-work";
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
        <OutsideWork />
        <Contact />
    </>
  );
}
