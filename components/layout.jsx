import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Cookie from "js-cookie";
import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'rc-tree/assets/index.css';
import 'react-image-lightbox/style.css';

import Header from "./common/header";
import Footer from "./common/footer";
import MobileMenu from "./common/partials/mobile-menu";

import { stickyInit, scrollTopHandlder, scrollTopInit } from "../utils";

function Layout({ children }) {
    const router = useRouter();
    const [showTopNotice, setShowTopNotice] = useState(!Cookie.get("closeTopNotice"));
    const [darkMode, setDarkMode] = useState(false);

    function closeTopNotice() {
        setShowTopNotice(false);
        Cookie.set("closeTopNotice", true, { expires: 7, path: router.basePath });
    }

    function darkModeHandler(value) {
        setDarkMode(value);
    }

    useEffect(() => {
        window.addEventListener("scroll", stickyInit, { passive: true });
        window.addEventListener("scroll", scrollTopInit, { passive: true });
        window.addEventListener("resize", stickyInit);

        return () => {
            window.removeEventListener("scroll", stickyInit, { passive: true });
            window.removeEventListener("scroll", scrollTopInit, { passive: true });
            window.removeEventListener("resize", stickyInit);
        }
    }, [])

    return (
        <>
            <div className={`page-wrapper ${darkMode ? 'dark-mode' : ''}`}>
                {/* <Header changeToDarkMode={ darkModeHandler } /> */}

                {children}

                {/* <Footer /> */}
            </div>

            {/* <MobileMenu /> */}

            <a id="scroll-top" href="#" title="Top" role="button" className="btn-scroll d-flex align-items-center justify-content-center" onClick={scrollTopHandlder}><svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-180deg)' }}><path fillRule="evenodd" clipRule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></a>

        </>
    )
}

export default Layout;