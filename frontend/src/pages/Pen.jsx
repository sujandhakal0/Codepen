import React, { useContext, useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { atomone } from "@uiw/codemirror-theme-atomone";
import logo from "../assets/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdCheck, MdEdit } from "react-icons/md";
import { IoIosCloudy } from "react-icons/io";
import axios from "axios";
import { Context } from "@/main";
import UserProfile from "@/components/UserProfile";
import toast from "react-hot-toast";

const Pen = () => {
  const navigate = useNavigate();
  const { urlId } = useParams();

  const loadCoad = async () => {
    try {
      const response = await axios.post(
        "https://codepen-backend-t587.onrender.com/v1/save/getProgram",
        {
          urlId: urlId,
        }
      );
      const { title, html, css, js, output } = response.data.fullCode;
      setTitle(title);
      setHtml(html);
      setCss(css);
      setJs(js);
      setOutput(output);
    } catch (error) {
      console.error("error while getting code", error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCoad();
    }
  }, [urlId]);

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");
  const [isTitle, setIsTitle] = useState("");
  const [title, setTitle] = useState("United");
  const [user, setUser] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await axios.get(
          "https://codepen-backend-t587.onrender.com/v1/user/me",
          {
            withCredentials: true,
          }
        );
        setUser(data.data.user);
      } catch (error) {
        setUser({});
      }
    };
    getUser();
  }, []);

  const updateOutput = () => {
    const finalOutput = `
    <html>
    <head><style>${css}</style></head>
    <body>${html}<script>${js}</script></body>
    </html>
    `;
    setOutput(finalOutput);
  };

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  const savePen = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post(
        "https://codepen-backend-t587.onrender.com/v1/save/saveProgram",
        {
          fullCode: {
            title: title,
            html: html,
            css: css,
            js: js,
            output: output,
          },
        }
      );
      const newUrl = response.data.url;
      navigate(`/pen/${newUrl}`, { replace: true });
      toast.success("Project Saved");
    } catch (error) {
      console.log("error while saving code", error);
    } finally {
      setSaveLoading(false);
    }
  };
  return (
    <>
      <div className="h-screen w-screen text-white ">
        <div className="bg-[#010101] py-2 w-full flex items-center justify-between px-8 ">
          <div className="flex items-center justify-center gap-3 ">
            <Link to={"/"}>
              <img src={logo} alt="" className="h-[33px] w-[33px]" />
            </Link>
            <div className="flex flex-col items-start justify-start">
              <div className="flex items-center justify-center ">
                <AnimatePresence>
                  {isTitle ? (
                    <>
                      <motion.input
                        key="titleInput"
                        type="text"
                        placeholder="create title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-transparent text-white rounded-md border-none outline-none "
                      />
                    </>
                  ) : (
                    <>
                      <motion.p
                        key="inputLabel"
                        className="px-3 py-2 text-white text-lg font-semibold"
                      >
                        {title}
                      </motion.p>
                    </>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {isTitle ? (
                    <>
                      <motion.div
                        key="mdcheck"
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={() => setIsTitle(false)}
                      >
                        <MdCheck />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        key="mdedit"
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={() => setIsTitle(true)}
                      >
                        <MdEdit />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-center px-3 -mt-2 ">
                <p className="text-sm text-[#828391]">{user?.name}</p>
              </div>
            </div>
          </div>
          {isAuthenticated ? (
            <div className="flex items-center justify-center gap-3 ">
              <motion.button
                className="bg-[#444857] hover:bg-[#5a5f73] rounded px-4 py-2 flex items-center justify-center gap-1"
                onClick={savePen}
                disabled={saveLoading}
              >
                <IoIosCloudy className="text-white text-xl" />{" "}
                {saveLoading ? "Saving..." : "Save"}
              </motion.button>
              <UserProfile />
            </div>
          ) : (
            <div>
              <motion.button className="bg-[#444857] hover:bg-[#5a5f73] rounded px-4 py-2 flex items-center justify-center gap-1">
                <Link to={"/login"}>
                  <IoIosCloudy className="text-white text-xl" /> Save
                </Link>
              </motion.button>
            </div>
          )}
        </div>

        <div className="h-full w-full">
          <ResizablePanelGroup
            direction="vertical"
            className=" flex flex-col gap-2"
          >
            <ResizablePanel>
              <ResizablePanelGroup
                direction="horizontal"
                className=" flex gap-2"
              >
                <ResizablePanel className=" bg-[#272c35]">
                  <div className="flex justify-between  bg-[#060606] ">
                    <div className="bg-[#272c35] px-4 py-2 border-t-4 border-[#34363e] flex items-center         justify-center gap-2 ">
                      <FaHtml5 className="text-red-400 text-xl" />
                      <p className="text-[#aaaebc]">HTML</p>
                    </div>

                    <div className="cursor-pointer flex items-center justify-center gap-1 px-4 text-white">
                      <div className=" bg-[#5a5f73] py-1 px-2 rounded">
                        <IoMdSettings />
                      </div>
                      <div className=" bg-[#5a5f73] py-1 px-2 rounded">
                        <FaChevronDown className="" />
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full ">
                    <CodeMirror
                      value={html}
                      height="400px"
                      extensions={[javascript({ jsx: true })]}
                      theme={atomone}
                      onChange={(val, viewUpdate) => {
                        setHtml(val);
                      }}
                    />
                  </div>
                </ResizablePanel>
                {/* ......................................... */}

                <ResizableHandle />
                <ResizablePanel className=" bg-[#272c35]">
                  <div className="flex justify-between  bg-[#060606] ">
                    <div className="bg-[#272c35] px-4 py-2 border-t-4 border-[#34363e] flex items-center         justify-center gap-2 ">
                      <FaCss3 className="text-red-400 text-xl" />
                      <p className="text-[#aaaebc]">Css</p>
                    </div>

                    <div className="cursor-pointer flex items-center justify-center gap-1 px-4 text-white">
                      <div className=" bg-[#5a5f73] py-1 px-2 rounded">
                        <IoMdSettings />
                      </div>
                      <div className=" bg-[#5a5f73] py-1 px-2 rounded">
                        <FaChevronDown className="" />
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full">
                    <CodeMirror
                      value={css}
                      height="400px"
                      extensions={[javascript({ jsx: true })]}
                      theme={atomone}
                      onChange={(val, viewUpdate) => {
                        setCss(val);
                      }}
                    />
                  </div>
                </ResizablePanel>
                {/* ......................................... */}

                <ResizableHandle />
                <ResizablePanel className=" bg-[#272c35]">
                  <div className="flex justify-between  bg-[#060606] ">
                    <div className="bg-[#272c35] px-4 py-2 border-t-4 border-[#34363e] flex items-center         justify-center gap-2 ">
                      <FaJs className="text-red-400 text-xl" />
                      <p className="text-[#aaaebc]">Js</p>
                    </div>

                    <div className="cursor-pointer flex items-center justify-center gap-1 px-4 text-white">
                      <div className=" bg-[#5a5f73] py-1 px-2 rounded">
                        <IoMdSettings />
                      </div>
                      <div className=" bg-[#5a5f73] py-1 px-2 rounded">
                        <FaChevronDown className="" />
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full">
                    <CodeMirror
                      value={js}
                      extensions={[javascript({ jsx: true })]}
                      theme={atomone}
                      onChange={(val, viewUpdate) => {
                        setJs(val);
                      }}
                      height="400px"
                    />
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            {/* ............... */}
            <ResizableHandle />
            <ResizablePanel className="bg-white ">
              <iframe srcDoc={output} className="h-full w-full" />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </>
  );
};

export default Pen;
