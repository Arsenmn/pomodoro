import { Timer } from "./Timer";
import { FloatMenu } from "../FloatMenu/FloatMenu";


const Main = () => {

  return (
    <section className="h-[calc(100vh-105px)] flex items-center justify-center">
      <Timer />
      <FloatMenu />
    </section>
  );
}

export default Main;