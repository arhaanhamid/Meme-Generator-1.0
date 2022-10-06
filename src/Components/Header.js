import React from "react";
import logoImg from "../Images/logo.png"

export default function Header() {
    return(
        <div className="div-header">
            <div className="div-headerLogo">
                <img className="div-headerImg" src={logoImg} alt="logo" />
                <p>Meme Generator</p>
            </div>
            <p className="div-headerInfo">Generator Memes using API</p>
        </div>
    )
}