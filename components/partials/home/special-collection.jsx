import React from 'react';
import Reveal from 'react-awesome-reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ALink from '../../common/ALink';
import { fadeInUpShorter } from '../../../utils/data/keyframes';

export default function SpecialCollection() {
    function openList(e) {
        e.currentTarget.classList.toggle('opened');
    }

    return (
        <Tabs className="product-single-tabs mt-10" selectedTabClassName="active" selectedTabPanelClassName="show">
            <TabList className="nav nav-tabs">
                <Tab className="nav-item">
                    <ALink href="#" className="nav-link">Artworks</ALink>
                </Tab>

                <Tab className="nav-item">
                    <ALink href="#" className="nav-link">Description</ALink>
                </Tab>
            </TabList>

            <div className="d-flex align-items-sm-center justify-content-between flex-column flex-sm-row mt-2 mb-3">
                <ul className="d-flex align-items-center filter-menu mb-sm-0 mb-2">
                    <li className="filter-item mr-3 active">
                        <a href="#" className="d-flex align-items-center font-weight-bold" onClick={(e) => e.preventDefault()}>All <span className="vertical-divider"></span>4</a>
                    </li>

                    <li className="filter-item mr-3">
                        <a href="#" className="d-flex align-items-center font-weight-bold" onClick={(e) => e.preventDefault()}>Available <span className="vertical-divider"></span>4</a>
                    </li>

                    <li className="filter-item">
                        <a href="#" className="d-flex align-items-center font-weight-bold" onClick={(e) => e.preventDefault()}>Sold <span className="vertical-divider"></span>0</a>
                    </li>
                </ul>

                <div className="toolbox-item toolbox-sort select-custom d-flex align-items-center justify-content-center mb-0 position-relative" onClick={openList}>
                    <a href="#" className="trigger font-weight-bold" onClick={(e) => e.preventDefault()}>
                        <span>Date Minited - Newest</span>
                        <svg viewBox="0 0 16 16" fill="none" width="16" height="16" className="ml-3"><path fillRule="evenodd" clipRule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg>
                    </a>

                    <ul className="sort-list">
                        <li>
                            <ALink href="#" className="d-flex align-items-center justify-content-between">Date Minited - Newest</ALink>
                        </li>
                        <li>
                            <ALink href="#" className="d-block" >Date Minited - Oldest</ALink>
                        </li>
                        <li>
                            <ALink href="#" className="d-block" >Price - Highest</ALink>
                        </li>
                        <li>
                            <ALink href="#" className="d-block" >Price - Lowest</ALink>
                        </li>
                    </ul>
                </div>
            </div>

            <TabPanel className="tab-pane fade">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                            <div className="product-default media-with-lazy left-details product-type-one">
                                <figure>
                                    <ALink href="#">
                                        <img src="https://f8n-production-collection-assets.imgix.net/0x0f18c91B957C79106C4710990646a6dc8f72C13B/4/QmSzSKuM1QU6t9xF9nJBZ6LVcp8DYvCwXhNBMgEMqcGEJA/nft.jpg" width="271" height="271" alt="Banner" />
                                    </ALink>
                                </figure>

                                <div className="product-details">
                                    <h3 className="product-title mb-1">
                                        <ALink href="#">CONTINUE</ALink>
                                    </h3>

                                    <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                                        <div className="d-flex align-items-center">
                                            <img src="https://f8n-production.imgix.net/collections/3qjlgkqhb-DSC06350.jpg" width="300" height="300" alt="thumbnail" />
                                            <h5 className="mb-0 ml-3 pl-2">VISIONS</h5>
                                        </div>

                                        <h6 className="mb-0">VSNS</h6>
                                    </div>

                                    <h4 className="mb-0">
                                        <ALink href="#">Reserve price</ALink>
                                    </h4>

                                    <div className="category-wrap d-flex align-items-center justify-content-between">
                                        <div className="category-list text-left">
                                            <ALink href="#">0.02 WETH</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                            <div className="product-default media-with-lazy left-details product-type-one">
                                <figure>
                                    <ALink href="#">
                                        <img src="https://f8n-production-collection-assets.imgix.net/0x0f18c91B957C79106C4710990646a6dc8f72C13B/3/Qmf65M47jiejLBYVu689B8rgpiSQkx1vJFwKWoEk9bh19t/nft.jpg" width="271" height="271" alt="Banner" />
                                    </ALink>
                                </figure>

                                <div className="product-details">
                                    <h3 className="product-title mb-1">
                                        <ALink href="#">DRAWM</ALink>
                                    </h3>

                                    <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                                        <div className="d-flex align-items-center">
                                            <img src="https://f8n-production.imgix.net/collections/3qjlgkqhb-DSC06350.jpg" width="300" height="300" alt="thumbnail" />
                                            <h5 className="mb-0 ml-3 pl-2">VISIONS</h5>
                                        </div>

                                        <h6 className="mb-0">VSNS</h6>
                                    </div>

                                    <h4 className="mb-0">
                                        <ALink href="#">Reserve price</ALink>
                                    </h4>

                                    <div className="category-wrap d-flex align-items-center justify-content-between">
                                        <div className="category-list text-left">
                                            <ALink href="#">0.02 WETH</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                            <div className="product-default media-with-lazy left-details product-type-one">
                                <figure>
                                    <ALink href="#">
                                        <img src="https://f8n-production-collection-assets.imgix.net/0x0f18c91B957C79106C4710990646a6dc8f72C13B/2/QmRd3QnakrsdNWF7BzgPLjXEmfcjaMFLfD5L85cvzQ5Phr/nft.jpg" width="271" height="271" alt="Banner" />
                                    </ALink>
                                </figure>

                                <div className="product-details">
                                    <h3 className="product-title mb-1">
                                        <ALink href="#">WANT</ALink>
                                    </h3>

                                    <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                                        <div className="d-flex align-items-center">
                                            <img src="https://f8n-production.imgix.net/collections/3qjlgkqhb-DSC06350.jpg" width="300" height="300" alt="thumbnail" />
                                            <h5 className="mb-0 ml-3 pl-2">VISIONS</h5>
                                        </div>

                                        <h6 className="mb-0">VSNS</h6>
                                    </div>

                                    <h4 className="mb-0">
                                        <ALink href="#">Reserve price</ALink>
                                    </h4>

                                    <div className="category-wrap d-flex align-items-center justify-content-between">
                                        <div className="category-list text-left">
                                            <ALink href="#">0.02 WETH</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Reveal keyframes={fadeInUpShorter} delay={700} duration={1000} triggerOnce>
                            <div className="product-default media-with-lazy left-details product-type-one">
                                <figure>
                                    <ALink href="#">
                                        <img src="https://f8n-production-collection-assets.imgix.net/0x0f18c91B957C79106C4710990646a6dc8f72C13B/1/QmTL19wZWamEcK6zcPbFJFndeJbgxwguRGXNrPoBEWi1jo/nft.jpg" width="271" height="271" alt="Banner" />
                                    </ALink>
                                </figure>

                                <div className="product-details">
                                    <h3 className="product-title mb-1">
                                        <ALink href="#">WILL</ALink>
                                    </h3>

                                    <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                                        <div className="d-flex align-items-center">
                                            <img src="https://f8n-production.imgix.net/collections/3qjlgkqhb-DSC06350.jpg" width="300" height="300" alt="thumbnail" />
                                            <h5 className="mb-0 ml-3 pl-2">VISIONS</h5>
                                        </div>

                                        <h6 className="mb-0">VSNS</h6>
                                    </div>

                                    <h4 className="mb-0">
                                        <ALink href="#">Reserve price</ALink>
                                    </h4>

                                    <div className="category-wrap d-flex align-items-center justify-content-between">
                                        <div className="category-list text-left">
                                            <ALink href="#">0.02 WETH</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </TabPanel>

            <TabPanel className="tab-pane fade">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                            <div className="product-default media-with-lazy left-details product-type-one">
                                <figure>
                                    <ALink href="#">
                                        <img src="https://f8n-production-collection-assets.imgix.net/0x0f18c91B957C79106C4710990646a6dc8f72C13B/3/Qmf65M47jiejLBYVu689B8rgpiSQkx1vJFwKWoEk9bh19t/nft.jpg" width="271" height="271" alt="Banner" />
                                    </ALink>
                                </figure>

                                <div className="product-details">
                                    <h3 className="product-title mb-1">
                                        <ALink href="#">DRAWM</ALink>
                                    </h3>

                                    <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                                        <div className="d-flex align-items-center">
                                            <img src="https://f8n-production.imgix.net/collections/3qjlgkqhb-DSC06350.jpg" width="300" height="300" alt="thumbnail" />
                                            <h5 className="mb-0 ml-3 pl-2">VISIONS</h5>
                                        </div>

                                        <h6 className="mb-0">VSNS</h6>
                                    </div>

                                    <h4 className="mb-0">
                                        <ALink href="#">Reserve price</ALink>
                                    </h4>

                                    <div className="category-wrap d-flex align-items-center justify-content-between">
                                        <div className="category-list text-left">
                                            <ALink href="#">0.02 WETH</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000} triggerOnce>
                            <div className="product-default media-with-lazy left-details product-type-one">
                                <figure>
                                    <ALink href="#">
                                        <img src="https://f8n-production-collection-assets.imgix.net/0x0f18c91B957C79106C4710990646a6dc8f72C13B/2/QmRd3QnakrsdNWF7BzgPLjXEmfcjaMFLfD5L85cvzQ5Phr/nft.jpg" width="271" height="271" alt="Banner" />
                                    </ALink>
                                </figure>

                                <div className="product-details">
                                    <h3 className="product-title mb-1">
                                        <ALink href="#">WANT</ALink>
                                    </h3>

                                    <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                                        <div className="d-flex align-items-center">
                                            <img src="https://f8n-production.imgix.net/collections/3qjlgkqhb-DSC06350.jpg" width="300" height="300" alt="thumbnail" />
                                            <h5 className="mb-0 ml-3 pl-2">VISIONS</h5>
                                        </div>

                                        <h6 className="mb-0">VSNS</h6>
                                    </div>

                                    <h4 className="mb-0">
                                        <ALink href="#">Reserve price</ALink>
                                    </h4>

                                    <div className="category-wrap d-flex align-items-center justify-content-between">
                                        <div className="category-list text-left">
                                            <ALink href="#">0.02 WETH</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
}

