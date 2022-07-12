import React, { useState } from "react";

function WriteDictionary({ dictionary, selectCount }) {
    const [count, setCount] = useState(1);
    const [isScore, setIsScore] = useState(true);
    const [inputText, setInputText] = useState("");
    const [score, setScore] = useState(0);

    function reset() {
        setIsScore(true);
        setScore(0);
        setCount(1);
    }

    function nextClicked(name) {
        if (inputText.toLowerCase() === name.toLowerCase()) {
            setScore((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setInputText("");
        } else {
            setCount((prev) => prev + 1);
            setInputText("");
        }
        if (count === 20) {
            console.log(count);
            setIsScore(false);
            setCount(1);
        }
    }
    return (
        <div className="card p-4 mb-2 mt-2">
            <div className="dictionary-header">
                <h2 className="title mb-2 mt-2 text-capitalize">Essential Words Unit {selectCount}</h2>
            </div>
            {dictionary
                .filter((item) => item.idMain === parseInt(selectCount))
                .filter((item) => item.id === count)
                .map((item, index) => (
                    <div key="index" className="card-wrapper">
                        {isScore ? (
                            <div className="write-wrapper">
                                <h1 className="text-capitalize">{item.english}</h1>
                                <input
                                    className="input-write"
                                    type="text"
                                    value={inputText}
                                    onChange={(e) =>
                                        setInputText(e.target.value)
                                    }
                                />
                                <br />
                                <button
                                    className="btn-write"
                                    onClick={() => nextClicked(item.uzbek)}
                                >
                                    Keyingisi
                                </button>
                            </div>
                        ) : (
                            <div className="result">
                                <h3>
                                    Sizning natijangiz <br /> 20 tadan {score}
                                </h3>
                                <button onClick={reset} className="btn-result">
                                    Qayta ishlash
                                </button>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default WriteDictionary;
