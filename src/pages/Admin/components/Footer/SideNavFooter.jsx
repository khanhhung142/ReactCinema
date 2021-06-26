import React from 'react';

function SideNavFooter(props) {
    return (
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Group 5 - IS207.L21</div>
                    <div>
                        <a href="#">Giảng viên : </a>
                                <a href="#">Trình Trọng Tín</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SideNavFooter;