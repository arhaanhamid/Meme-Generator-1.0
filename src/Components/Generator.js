import React from "react"

export default function Generator() {
    const [meme, setMemeData] = React.useState({
        topText: "top",
        bottomText: "bottom",
        randomImage: "http://i.imgflip.com/1bij.jpg"        
    })

    const [allMemes, setAllMemes] = React.useState({})

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(resData => setAllMemes(resData.data.memes))
    }, [])

    function handleGetText(event) {
        const {name, value} = event.target
        setMemeData(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleGetImage() {
        const random = Math.floor(Math.random() * allMemes.length)
        setMemeData(prevMeme => ({
            topText: prevMeme.topText,
            bottomText: prevMeme.bottomText,
            randomImage: allMemes[random].url
        }))      
    }    

    return(
        <div className="div-generator-holder">
            <div className="div-generator">
                <div className="generator-content">
                    <input
                        type="text"
                        placeholder="Top"
                        onChange={handleGetText}
                        value={meme.topText}
                        name="topText"
                    />
                    <input
                        type="text"
                        placeholder="Bottom"
                        onChange={handleGetText}
                        value={meme.bottomText}
                        name="bottomText"
                    />

                    <button className="generator-button" onClick={handleGetImage}>Get a New Image</button>                
                </div>
                <div className="meme">
                    <img src={meme.randomImage} alt="abc" className="meme-image"/>
                    <h1 className="meme-text top">{meme.topText}</h1>
                    <h1 className="meme-text bottom">{meme.bottomText}</h1>                    
                </div>
            </div>
        </div>
    )
}