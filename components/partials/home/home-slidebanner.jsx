import { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInUpShorter } from '../../../utils/data/keyframes';
import ALink from '../../common/ALink';

export default function IntroSection() {
    useEffect(() => {
        document.querySelector("body").addEventListener("click", onBodyClick);

        return (() => {
            document.querySelector("body").removeEventListener("click", onBodyClick);
        })
    }, [])

    function onBodyClick(e) {
        e.target.closest('.toolbox-sort.opened') || (document.querySelector('.toolbox-sort.opened') && document.querySelector('.toolbox-sort.opened').classList.remove('opened'));
        document.querySelector('.toolbox-sort .selected') && document.querySelector('.toolbox-sort .selected').classList.remove('selected');
    }

    function openList(e) {
        e.currentTarget.classList.toggle('opened');
    }

    return (
        <div className="home-section">
            <div className="home-banner banner">
                <figure style={{ background: '#222' }}>
                    <img src="https://f8n-production.imgix.net/collections/l0wlkhs32-DSC01561.jpg" width="1903" height="500" alt="Banner" />
                </figure>

                <div className="banner-layer">
                    <img src="https://f8n-production.imgix.net/collections/3qjlgkqhb-DSC06350.jpg" width="300" height="300" alt="thumbnail" />
                    <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                        <button type="button" className="btn-default mt-5 border-0 btn-rounded text-dark btn-blur font-weight-light text-white">VSNS<svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg></button>
                    </Reveal>

                    <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                        <h2 className="text-white mt-3 mb-3">VISIONS</h2>
                    </Reveal>

                    <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000} triggerOnce className="position-relative" style={{ zIndex: '3' }}>
                        <div className="info">
                            <button type="button" className="btn-default mb-4 btn-with-img border-0 btn-rounded text-dark btn-blur font-weight-light text-white"><img src="https://f8n-production.imgix.net/creators/profile/a4i1cnlg4-icon-jpg-4pq97v.jpg" className="mr-3" alt="thumbnail" />@yuuui</button>
                            <div className="info-details sort-list d-block">
                                <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                                    <img src="https://f8n-production.imgix.net/creators/profile/a4i1cnlg4-icon-jpg-4pq97v.jpg" width="300" height="300" alt="thumbnail" />

                                    <button type="button" className="btn-default btn-border-light btn-rounded text-dark bg-transparent">Follow</button>
                                </div>

                                <h3>@yuuui</h3>
                                <h4 className="bg-gradient">@yuuui</h4>
                                <p className="font-weight-normal">I am a japanese digital art creator who express the unreal</p>

                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0 mr-3">Followed by</h5>
                                    <div className="d-flex align-items-center">
                                        <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                            <figure className="product-image-circle">
                                                <ALink href="#" >
                                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx" width="30" height="30" alt="Game" />
                                                </ALink>
                                            </figure>
                                        </div>

                                        <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                            <figure className="product-image-circle">
                                                <ALink href="#" >
                                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                                </ALink>
                                            </figure>
                                        </div>

                                        <div className="product-default media-with-lazy left-details product-widget d-block product-small">
                                            <figure className="product-image-circle">
                                                <ALink href="#" >
                                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x4d201e8cf396f1f1aecb6a43e504bf18519847c8/avatar/QmTLjeHhmpbop3s9XhRRQKnw7udz8VSKfrifu2q3ZMB3m8" width="30" height="30" alt="Game" />
                                                </ALink>

                                                <span className="badge">
                                                    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                                </span>
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-50 d-inline-block">
                                    <h3 className="mb-1 font-weight-semi-bold">108</h3>
                                    <h4 className="text-gray mb-0 font-weight-semi-bold">Following</h4>
                                </div>

                                <div className="w-50 d-inline-block">
                                    <h3 className="mb-1 font-weight-semi-bold">261</h3>
                                    <h4 className="text-gray mb-0 font-weight-semi-bold">Followers</h4>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={fadeInUpShorter} delay={900} duration={1000} triggerOnce>
                        <div className="d-flex justify-content-between align-items-md-center flex-md-row flex-column">
                            <table className="table table-bg-white box-shadow mb-md-0 mb-3">
                                <thead>
                                    <tr>
                                        <th>Collection of</th>
                                        <th>Owned by</th>
                                        <th>Floor Price</th>
                                        <th>Total Sales</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td className="d-flex align-items-center">1 <img src="https://f8n-production.imgix.net/collections/3qjlgkqhb-DSC06350.jpg" className="ml-3 rounded-circle" width="30" height="30" alt="thumbnail" /></td>
                                        <td>0.48 ETH</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="btn-group ml-md-3">
                                <div className="toolbox-item toolbox-sort select-custom d-flex border-0 p-0 align-items-center justify-content-center mb-0" onClick={openList}>
                                    <button type="button" className="btn-default btn-white border-0 rounded-circle mr-3 box-shadow p-0 w-50px">
                                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
                                    </button>

                                    <ul className="sort-list" style={{ minWidth: '150px' }}>
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center" ><svg width="16" height="16" fill="none" className="mr-2 w-auto h-auto" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 2c1.3 0 2.5.4 3.5 1.1l-8.4 8.4C2.4 10.5 2 9.3 2 8c0-3.3 2.7-6 6-6zm0 12c-1.3 0-2.5-.4-3.5-1.1l8.4-8.4c.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z" fill="#F93A3A"></path></svg>Tweet</ALink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="toolbox-item toolbox-sort select-custom d-flex border-0 p-0 align-items-center justify-content-center mb-0" onClick={openList}>
                                    <button type="button" className="btn-default mb-0 btn-white border-0 btn-rounded font-weight-bold box-shadow">
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-1 mr-2 d-block position-relative"><path d="M11 16V1M17 7l-6-6-6 6M21 21H1" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>Share
                                    </button>

                                    <ul className="sort-list" style={{ minWidth: '150px' }}>
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center" ><svg viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-2 d-block position-relative"><path d="M27.946 3.33a11.667 11.667 0 01-3.296.904 5.784 5.784 0 002.524-3.176 11.857 11.857 0 01-3.648 1.381 5.74 5.74 0 00-9.93 3.918c0 .455.053.892.149 1.311-4.772-.225-9.001-2.517-11.832-5.98a5.626 5.626 0 00-.777 2.887A5.74 5.74 0 003.69 9.354a5.722 5.722 0 01-2.6-.719v.071a5.743 5.743 0 004.604 5.632 5.829 5.829 0 01-2.58.099 5.76 5.76 0 005.371 3.987 11.513 11.513 0 01-7.119 2.455c-.455 0-.909-.027-1.365-.078a16.327 16.327 0 008.816 2.577c10.563 0 16.333-8.745 16.333-16.317 0-.244 0-.49-.018-.735 1.121-.804 2.1-1.82 2.87-2.972l-.055-.024z" fill="currentColor"></path></svg>Tweet</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#" className="d-flex align-items-center" ><svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2 d-block position-relative"><path d="M10 5l2.575-2.575a5.011 5.011 0 017 0v0a5.011 5.011 0 010 7L17 12M12 17l-2.575 2.575a5.011 5.011 0 01-7 0v0a5.011 5.011 0 010-7L5 10M7 15l8-8" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path></svg>Copy Link</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}