import React from 'react';

const OverlayContainer = ({  title, description, link, linkTxt, handleClose  }) => {

    return (
        <div className="dialog" tabIndex="-1">
            <div className="dialog__main" id="dialog-1-main">
                <h1 className="dialog__title">
                    {title}
                </h1>
                <button
                    className="dialog__close"
                    type="button"
                    onClick={() => handleClose()}>
                    <span className="dialog__close-icon">&nbsp;</span>
                </button>
                <div className="dialog--desc">
                    {description}
                </div>
                <a href={link} 
                    target="_blank" 
                    className="btn">
                    {linkTxt}
                    </a>
            </div>
        </div>
    );
};

export default OverlayContainer;

