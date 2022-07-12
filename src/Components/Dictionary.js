import Learn1 from "./Learn1";
import Select from "./Select";
import React, { useEffect, useState } from "react";
import TableDictionary from "./TableDictionary";
import TestDictionary from "./TestDictionary";
import WriteDictionary from "./WriteDictionary";

import { DataDictionary } from "../Data";

import TestDictionaryUE from "./TestDictionaryUE";
import WriteDictionaryUE from "./WriteDictionaryUE";
import AllDictionary from "./AllDictionary";

function Dictionary() {
    const [dictionary, setDictionary] = useState([]);
    const [selectCount, setSelectCount] = useState(0);
    const [isSelectTable, setIsSelectTable] = useState(false);
    const [isSelectTest, setIsSelectTest] = useState(false);
    const [isSelectTestUE, setIsSelectTestUE] = useState(false);
    const [isSelectWrite, setIsSelectWrite] = useState(false);
    const [isSelectWriteUE, setIsSelectWriteUE] = useState(false);
    const [isSelectAll, setIsSelectAll] = useState(false);

    const [accordion1, setAccardion1] = useState(false);
    const [accordion2, setAccardion2] = useState(false);
    const [accordion3, setAccardion3] = useState(false);

    useEffect(() => {
        setDictionary(DataDictionary);
    }, []);
    function openAccordion(e) {
        if (e === 1) {
            setAccardion1((prev) => !prev);
        }
        if (e === 2) {
            setAccardion2((prev) => !prev);
        }
        if (e === 3) {
            setAccardion3((prev) => !prev);
        }
    }
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-2">
                            <h2 className="text-center mb-2">Dictionaries</h2>

                            <div
                                className="dictionary-left-1"
                                onClick={() => openAccordion(1)}
                            >
                                <h4 className="text-center mb-0">
                                    Essential words 4000 ({dictionary.length}{" "}
                                    ta)
                                </h4>
                            </div>
                            <div
                                className={`dictionary-help-1 p-2 ${
                                    accordion1 ? "h-auto" : "h-0"
                                }`}
                            >
                                <Select setSelectCount={setSelectCount} />
                                <Learn1
                                    setIsSelectTable={setIsSelectTable}
                                    setIsSelectTest={setIsSelectTest}
                                    setIsSelectTestUE={setIsSelectTestUE}
                                    setIsSelectWrite={setIsSelectWrite}
                                    setIsSelectWriteUE={setIsSelectWriteUE}
                                    setIsSelectAll={setIsSelectAll}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <div className="card p-4">
                    {isSelectTable ? (
                        <TableDictionary
                            dictionary={dictionary}
                            selectCount={selectCount}
                        />
                    ) : (
                        ""
                    )}
                    {isSelectTest ? (
                        <TestDictionary
                            dictionary={dictionary}
                            selectCount={selectCount}
                        />
                    ) : (
                        ""
                    )}
                    {isSelectTestUE ? (
                        <TestDictionaryUE
                            dictionary={dictionary}
                            selectCount={selectCount}
                        />
                    ) : (
                        ""
                    )}
                    {isSelectWrite ? (
                        <WriteDictionary
                            dictionary={dictionary}
                            selectCount={selectCount}
                        />
                    ) : (
                        ""
                    )}
                    {isSelectWriteUE ? (
                        <WriteDictionaryUE
                            dictionary={dictionary}
                            selectCount={selectCount}
                        />
                    ) : (
                        ""
                    )}
                    {isSelectAll ? (
                        ""
                    ) : (
                        <AllDictionary
                            dictionary={dictionary}
                            selectCount={selectCount}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dictionary;
