import React from "react";

function Learn1({
    setIsSelectTable,
    setIsSelectTest,
    setIsSelectWrite,
    setIsSelectTestUE,
    setIsSelectWriteUE,
    setIsSelectAll,
}) {
    function select(e) {
        if (e.target.value === "1") {
            setIsSelectTable(true);
            setIsSelectTest(false);
            setIsSelectWrite(false);
            setIsSelectTestUE(false);
            setIsSelectWriteUE(false);
            setIsSelectAll(true);
        }
        if (e.target.value === "2") {
            setIsSelectTable(false);
            setIsSelectTest(false);
            setIsSelectWrite(false);
            setIsSelectTestUE(true);
            setIsSelectWriteUE(false);
            setIsSelectAll(true);
        }
        if (e.target.value === "3") {
            setIsSelectTable(false);
            setIsSelectTest(true);
            setIsSelectWrite(false);
            setIsSelectTestUE(false);
            setIsSelectWriteUE(false);
            setIsSelectAll(true);
        }
        if (e.target.value === "4") {
            setIsSelectTable(false);
            setIsSelectTest(false);
            setIsSelectWrite(true);
            setIsSelectTestUE(false);
            setIsSelectWriteUE(false);
            setIsSelectAll(true);
        }
        if (e.target.value === "5") {
            setIsSelectTable(false);
            setIsSelectTest(false);
            setIsSelectWrite(false);
            setIsSelectTestUE(false);
            setIsSelectWriteUE(true);
            setIsSelectAll(true);
        }
        if (e.target.value === "0") {
            setIsSelectTable(false);
            setIsSelectTest(false);
            setIsSelectWrite(false);
            setIsSelectTestUE(false);
            setIsSelectWriteUE(false);
            setIsSelectAll(false);
        }
    }
    return (
        <>
            <h5>O'rganish usulini tanlang</h5>
            <select
                className="form-select"
                onChange={select}
                aria-label="Default select example"
            >
                <option value="0">...</option>
                <option value="1">Jadval orqali yodlash</option>
                <option value="2">Test orqali yodlash(Uzbek-English)</option>
                <option value="3">Test orqali yodlash(English-Uzbek)</option>
                <option value="4">Yozish orqali yodlash(English-Uzbek)</option>
                <option value="5">Yozish orqali yodlash(Uzbek-English)</option>
            </select>
        </>
    );
}

export default Learn1;
