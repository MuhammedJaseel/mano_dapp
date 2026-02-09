import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const about =
  "I’m a Full-Stack Developer with 6+ years of experience building web, mobile, and Web3 applications. I have hands-on experience with React, Next.js, Node/NestJS, and blockchain integrations using Ethers.js and Web3.js across EVM networks. I’ve worked on dApps, wallet integrations, and scalable backend APIs, and I enjoy owning features end-to-end from frontend UX to backend logic and smart-contract interactions. I’m particularly interested in roles where I can contribute to real-world Web3 products while continuing to grow in blockchain and decentralized technologies.";

let _textC = 0;

export default function Home() {
  const [isProject, setisProject] = useState(false);
  const [showC, setshowC] = useState(0);
  const [textC, settextC] = useState(0);

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    setTimeout(() => {
      setshowC(1);
      const tInt = setInterval(() => {
        _textC++;
        settextC(_textC);
        if (_textC > 600) clearInterval(tInt);
      }, 10);
      setTimeout(() => {
        setshowC(2);
        setTimeout(() => {
          setshowC(3);
          setTimeout(() => {
            setshowC(4);
            setTimeout(() => {
              setshowC(5);
            }, 600);
          }, 600);
        }, 1000);
      }, 5000);
    }, 1000);

    const moveRandomly = (el: any) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const duration = Math.random() * 2 + 6; // 6s – 14s
      const scale = Math.random() * 1.4 + 0.5; // scale 0.5 → 1.9

      el.style.transition = `transform ${duration}s cubic-bezier(0.4,0,0.2,1)`;
      el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    };

    const intervals = refs.map((ref) => {
      const el = ref.current;
      if (!el) return null;
      moveRandomly(el);
      return setInterval(() => moveRandomly(el), 7000); // every 7s
    });

    return () => intervals.forEach((i) => i && clearInterval(i));
  }, []);

  return (
    <div className="fixed right-0 top-0 left-0 bottom-0 bg-[#0F111A]">
      <div
        className="absolute w-10 h-10 rounded-full shadow-[inset_0_0_12px_rgba(125,183,102,0.05)]"
        ref={refs[0]}
      />
      <div
        className="absolute w-16 h-16 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.1)]"
        ref={refs[1]}
      />
      <div
        className="absolute w-20 h-20 rounded-full shadow-[inset_0_0_18px_rgba(125,183,102,0.04)]"
        ref={refs[2]}
      />
      <div
        className="absolute w-16 h-16 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.2)]"
        ref={refs[3]}
      />
      <div
        className="absolute w-20 h-20 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.2)]"
        ref={refs[4]}
      />
      <div
        className="absolute w-10 h-10 rounded-full shadow-[inset_0_0_12px_rgba(125,183,102,0.1)]"
        ref={refs[5]}
      />
      <div
        className="absolute w-16 h-16 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.15)]"
        ref={refs[6]}
      />
      <div
        className="absolute w-20 h-20 rounded-full shadow-[inset_0_0_18px_rgba(125,183,102,0.12)]"
        ref={refs[7]}
      />
      <div
        className="absolute w-16 h-16 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.12)]"
        ref={refs[8]}
      />
      <div
        className="absolute w-20 h-20 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.12)]"
        ref={refs[9]}
      />
      <div className="p-[5%_5%] lg:p-[5%_10%] font-mono pb-30 h-full overflow-auto">
        <div className="font-bold text-xl text-[#EC4899] pb-5 lg:pb-10">
          Jaseel.Dev
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[50%] text-xs/[1.6] lg:text-sm/[1.6]">
            {showC > 0 && (
              <div className="text-[#FACC15] ">
                <span className="text-[#60A5FA]">const</span>{" "}
                <span className="text-[#F472B6]">about_me</span> = "
                {about.substring(0, textC)}"
                <span className="text-white">;</span>
              </div>
            )}
            {showC > 1 && (
              <div className="text-[#10B981] pt-3 lg:pt-8">{`{/* 🛠️ TOOLS I USE */}`}</div>
            )}
            {showC > 2 && (
              <div className="text-[#10B981] pt-3 lg:pt-8">
                {`{/* ReactJs, NextJs, NodeJS, ExpressJs, NestJs */}`}
              </div>
            )}
            {showC > 3 && (
              <div className="text-[#10B981] pt-3 lg:pt-8">
                {`{/* Git, GitHub, CI/CD, AWS */}`}
              </div>
            )}
            {showC > 4 && (
              <div className="text-[#F472B6] pt-3 lg:pt-8">
                return <span className="text-white">;</span>
              </div>
            )}
            {showC < 4 && <span className="font-bold">_</span>}
          </div>
          {showC > 4 && (
            <div className="w-full lg:w-[50%] border border-[#666] rounded px-4 lg:px-6 py-3 lg:py-4 flex flex-col text-white">
              <div className="text-[#9CA3AF] flex justify-between">
                Output
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="text-sm lg:text-base pb-4 lg:pb-16 pt-4 lg:pt-8">
                muhammedjaseel@Jaseels-MacBook-Air ~ %
              </div>
              <div className="text-2xl lg:text-4xl font-bold text-center">
                Muhammed Jaseel.💖
              </div>
              <div className="text-sm lg:text-base font-bold text-center">
                👔 Full stack Developer
              </div>
              <br />
              <div className="flex gap-2 justify-center text-xs lg:text-sm">
                <a href="mailto:jaseelmanamulli@gmail.com">
                  <div className="border border-dashed p-2 w-35 lg:w-40 text-center cursor-pointer">
                    💌 Contact Me
                  </div>
                </a>

                <div
                  className="border border-dashed p-2 w-35 lg:w-40 text-center cursor-pointer"
                  onClick={() => setisProject(true)}
                >
                  🗂️ View Projects
                </div>
              </div>
              <div className="flex gap-2 justify-center text-sm"></div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 w-full p-[2%_5%_2%_5%] lg:p-[2%_10%_2%_10%] flex gap-2 flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-b from-[#00000000] via-[#00000066] to-black">
        <p className="text-slate-400 text-xs lg:text-sm">
          © 2026 Muhammed Jaseel. Built with Love and Coffee.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/MuhammedJaseel" target="_blank">
            <Github className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/jaseel-muhammed-7609251b3/">
            <Linkedin className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </a>
          <a href="mailto:jaseelmanamulli@gmail.com">
            <Mail className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </a>
        </div>
      </div>
      {isProject && (
        <div
          className="fixed left-0 right-0 bottom-0 top-0 bg-[#ffffff11] flex justify-center items-center"
          onClick={() => setisProject(false)}
        >
          <div
            className="max-w-200 w-full m-2 border border-[#666] rounded px-6 py-4 flex flex-col bg-[#0F111A] h-[80vh] overflow-scroll text-xs lg:text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[#9CA3AF] flex justify-between">
              Terminal
              <div className="flex gap-2">
                <div
                  className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                  onClick={() => setisProject(false)}
                />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <br />
            {isProject && <Project />}
          </div>
        </div>
      )}
    </div>
  );
}

function Project() {
  const [showC, setshowC] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setshowC(2);
        setTimeout(() => {
          setshowC(3);
          setTimeout(() => {
            setshowC(4);
            setTimeout(() => {
              setshowC(5);
              setTimeout(() => {
                setshowC(6);
                setTimeout(() => {
                  setshowC(7);
                  setTimeout(() => {
                    setshowC(8);
                    setTimeout(() => {
                      setshowC(9);
                      setTimeout(() => {
                        setshowC(10);
                        setTimeout(() => {
                          setshowC(11);
                          setTimeout(() => {
                            setshowC(12);
                            setTimeout(() => {
                              setshowC(13);
                            }, 600);
                          }, 600);
                        }, 600);
                      }, 1200);
                    }, 600);
                  }, 600);
                }, 600);
              }, 600);
            }, 600);
          }, 600);
        }, 1000);
      }, 1000);
    }, 1000);
  }, []);

  return (
    <>
      <div>root@srv1281222:/opt/ano# vi projects.env</div>

      <br />
      {showC > 1 && (
        <div className="text-[#32F4F1] font-bold">
          # A static web site developer in core html css
        </div>
      )}
      {showC > 2 && <div className="text-[#32F4F1]"># html, Js, tailwint</div>}
      {showC > 3 && (
        <div>
          URL
          <span className="text-[#EBEF18]"> = "</span>
          <a href="https://anolabs.site" target="_blank">
            <span className="text-[#F472B6]">https://anolabs.site</span>
          </a>
          <span className="text-[#10B981]">" </span>
        </div>
      )}

      <br />
      {showC > 4 && (
        <div className="text-[#32F4F1] font-bold">
          # A blockchain website in NextJs, with dome live response
        </div>
      )}
      {showC > 5 && (
        <div className="text-[#32F4F1]">
          # next.js express.js, tailwint, websocket, rest-api
        </div>
      )}
      {showC > 6 && (
        <div>
          URL
          <span className="text-[#EBEF18]"> = "</span>
          <a href="https://m.anolabs.site" target="_blank">
            <span className="text-[#F472B6]">https://m.anolabs.site</span>
          </a>
          <span className="text-[#10B981]">" </span>
        </div>
      )}

      <br />
      {showC > 7 && (
        <div className="text-[#32F4F1] font-bold">
          # Block explorer URL for a EVM chain
        </div>
      )}
      {showC > 8 && (
        <div className="text-[#32F4F1]">
          # vite+react nest.js, tailwint, websocket, rest-api
        </div>
      )}
      {showC > 9 && (
        <div>
          URL
          <span className="text-[#EBEF18]"> = "</span>
          <a href="https://scanm.anolabs.site" target="_blank">
            <span className="text-[#F472B6]">https://scanm.anolabs.site</span>
          </a>
          <span className="text-[#10B981]">" </span>
        </div>
      )}

      <br />
      {showC > 10 && (
        <div className="text-[#32F4F1] font-bold">
          # DApp developer in vite+react
        </div>
      )}
      {showC > 11 && (
        <div className="text-[#32F4F1]">
          # vite+react nest.js, tailwint, websocket, rest-api, metamask
        </div>
      )}
      {showC > 11 && (
        <div>
          URL
          <span className="text-[#EBEF18]"> = "</span>
          <a href="https://dapp.anolabs.site" target="_blank">
            <span className="text-[#F472B6]">https://dapp.anolabs.site</span>
          </a>
          <span className="text-[#10B981]">" </span>
        </div>
      )}

      {showC < 12 && "Loading..."}

      <div>
        <div className="text-[#F472B6]">
          ~<br /> ~<br />~<br />~<br />~<br />~<br />~<br />~<br />~<br />
        </div>
        "projects.env" 15L, {39 * showC}B
      </div>
    </>
  );
}
