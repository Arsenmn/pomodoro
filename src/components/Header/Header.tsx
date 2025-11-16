import React, { lazy, Suspense, useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import Loader from "../Loader";
import { t } from "i18next";

const SocialsModal = lazy(() => import("./SocialsModal"));

const Header = () => {
  const [socialsOpened, setSocialsOpened] = useState<boolean>(false);
  const closeSocials = () => setSocialsOpened(false);

  return (
    <header
      className="
        w-[calc(100%-10px)] mx-auto h-[100px] relative
        rounded-3xl border-b-2
        bg-linear-to-tl from-white/5 to-white/22
        bg-size-[200%_200%] backdrop-blur-md
        border border-white/30
        transition-all duration-500
        animate-[glassFlow_3s_ease-in-out_infinite]
    "
    >
      <div className="flex flex-row items-center justify-between mx-10 pt-7">
        <h4 className="font-bold text-3xl text-white">
          {t("header.pomodoro")}
        </h4>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 font-bold text-xl text-white">
            {t("header.me")}
            <div
              onClick={() => setSocialsOpened(!socialsOpened)}
              className="cursor-pointer"
            >
              <CaretDownOutlined />
            </div>
          </div>
          {socialsOpened && (
            <div className="fixed top-20">
              <Suspense
                fallback={
                  <h3>
                    <Loader />
                  </h3>
                }
              >
                <SocialsModal open={socialsOpened} onClose={closeSocials} />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export const MemoHeader = React.memo(Header);
