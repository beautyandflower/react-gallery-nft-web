import React, { Component, Fragment } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import sample4 from '../assets/images/gallery/4.png';

class MintPage extends Component {
    state = {
        value: '0x12434343434333',
        copied: false,
    };

    render() {
        return (
            <Fragment>
                <div className="mint-page">
                    <div className="banner bg-overlay">
                        <figure>
                            <img src={sample4} width="1903" height="800" alt="bg" />
                        </figure>

                        <div className="banner-layer text-center pd-t140 d-flex align-items-center justify-content-center flex-column w-100">
                            <h1 className="fw-800 f-72 text-white border-bottom border-bottm-width-7">CURRECT : PRE-SALE</h1>
                            <h2 className="fw-800 f-40 text-white mb-0 pd-b10">Price: $500 each</h2>
                            <h2 className="fw-800 f-40 text-white mb-0 pd-b10">Target Supply: $800 NFT's</h2>
                            <h2 className="fw-800 f-40 text-white pd-b140 d-flex align-items-center address">
                                <span>Contract Address: 0x12434343434333</span>

                                <CopyToClipboard text={this.state.value}
                                    onCopy={() => this.setState({ copied: true })}>
                                    <a href="#" onClick={e => e.preventDefault()}><i className="sicon-bag text-white mr-10"></i></a>
                                </CopyToClipboard>
                            </h2>

                            <div className="connection-group d-flex align-items-center justify-content-center pd-b60">
                                <a href="#" className="btn btn-gradient btn-type-one mr-4 d-flex align-items-center justify-content-center" onClick={e => { e.preventDefault(); }}>CONNECT</a>
                                <input type="text" className="form-control" placeholder="Enter Here" />
                                <a href="#" className="btn btn-gradient btn-type-one ml-4 d-flex align-items-center justify-content-center" onClick={e => { e.preventDefault(); }}>MINT</a>
                            </div>

                            <h4 className="fw-400 f-24 text-white mb-0">By buying in bulk, Save even more</h4>
                            <h4 className="fw-400 f-24 text-white mb-0">10% discount for 5+ NFT's</h4>
                            <h4 className="fw-400 f-24 text-white mb-0">15% discount for 10+ NFT's</h4>
                            <h4 className="fw-400 f-24 text-white mb-0">25% discount for 25+ NFT's</h4>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MintPage;
