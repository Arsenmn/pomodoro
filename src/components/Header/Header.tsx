import { useState } from "react"
import { SocialsModal } from "./SocialsModal"
import { CaretDownOutlined } from "@ant-design/icons"

export const Header = () => {
  const [socialsOpened, setSocialsOpened] = useState<boolean>(false)
  const closeSocials = () => setSocialsOpened(false)

  return (
    <header
      className="
        w-[calc(100%-10px)] mx-auto h-[100px] relative
        rounded-3xl border-b-2 border-[#383838]

        bg-gradient-to-tl from-white/5 to-white/22
        bg-[length:200%_200%] backdrop-blur-md
        border border-white/30

        transition-all duration-500

        [animation:glassFlow_3s_ease-in-out_infinite]
    ">
      <div className="flex flex-row items-center justify-between mx-10 pt-7">
        <h4 className="font-bold text-3xl text-white">
          POMODORO TIMER
        </h4>
        <div className="flex flex-col">
          <div
            className="flex flex-row gap-2 font-bold text-xl text-white"
          >
            By Arsen Yergali
            <div onClick={() => setSocialsOpened(!socialsOpened)} className="cursor-pointer">
              <CaretDownOutlined />
            </div>
          </div>
          {socialsOpened 
            ? (<div className="fixed top-20">
                <SocialsModal open={socialsOpened} onClose={closeSocials}/>
              </div>) 
            : null}
        </div>
      </div>
    </header>
  )
}