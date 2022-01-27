import React from 'react';

export default function Footer() {
    return <div>
        <section className="">
            <footer className="text-center text-white" style={{backgroundColor: "#0d6efd"}}>
                <div className="container p-4 pb-0">
                    <section className="">
                        <p className="d-flex justify-content-center align-items-center">
                            <span className="me-3">Access Everything on the go</span>
                            <button type="button" className="btn btn-outline-light btn-rounded">
                                Download App
                            </button>
                        </p>
                    </section>
                </div>
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    Copyright © {new Date().getFullYear()} Board Books. All Rights Reserved.
                </div>
            </footer>
        </section>
    </div>;
}
