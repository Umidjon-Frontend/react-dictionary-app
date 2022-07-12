import React, { useState } from "react";

function TestDictionary({ dictionary, selectCount }) {
    const [count, setCount] = useState(1);
    const [score, setScore] = useState(0);
    const [isScore, setIsScore] = useState(true);

    function reset() {
        setIsScore(true);
        setScore(0);
        setCount(1);
    }

    function onClickNext(index) {
        console.log(count);
        if (index === 0) {
            setCount((prev) => prev + 1);
            setScore((prev) => prev + 1);
        } else {
            setCount((prev) => prev + 1);
        }
        if (count === 20) {
            console.log(count);
            setIsScore(false);
            setCount(1);
        }
    }
    function randomNumber() {
        var arr = [0, 1, 2, 3];
        var j;
        var x;
        for (let i = 0; i < arr.length; i++) {
            j = Math.floor(Math.random() * arr.length);
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    const a = randomNumber();

    return (
        <div className="card p-4 mb-2 mt-2">
            <h2 className="text-center mb-2 mt-2 text-capitalize">Essential Words Unit {selectCount}</h2>
            <div className="test-answer">
                {dictionary
                    .filter((item) => item.idMain === parseInt(selectCount))
                    .filter((item) => item.id === count)
                    .map((item) => (
                        <div key={item.id} className="answer-wrapper">
                            {isScore ? (
                                <div>
                                    <div className="test-word">
                                        <h1 className="text-capitalize">{item.english}</h1>
                                    </div>
                                    <button
                                        className="btn-answer"
                                        onClick={() => onClickNext(a[0])}
                                    >
                                        {item.inuzbek[a[0]]}
                                    </button>
                                    <button
                                        className="btn-answer"
                                        onClick={() => onClickNext(a[1])}
                                    >
                                        {item.inuzbek[a[1]]}
                                    </button>
                                    <button
                                        className="btn-answer"
                                        onClick={() => onClickNext(a[2])}
                                    >
                                        {item.inuzbek[a[2]]}
                                    </button>
                                    <button
                                        className="btn-answer"
                                        onClick={() => onClickNext(a[3])}
                                    >
                                        {item.inuzbek[a[3]]}
                                    </button>
                                </div>
                            ) : (
                                <div className="result">
                                    <h3>
                                        Sizning natijanginz <br /> 20 tadan{" "}
                                        {score} ta
                                    </h3>
                                    <button
                                        onClick={reset}
                                        className="btn-result"
                                    >
                                        Qayta ishlash
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default TestDictionary;
