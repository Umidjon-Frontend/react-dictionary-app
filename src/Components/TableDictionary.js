import React from "react";

function TableDictionary({ dictionary, selectCount }) {
    return (
        <div className="table-dictionary mb-2 mt-2">
            <h2 className="text-center mb-2">
                Essential Words Unit {selectCount}
            </h2>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Word / Phrase</th>
                        <th>Translation</th>
                    </tr>
                </thead>
                <tbody>
                    {dictionary
                        .filter((item) => item.idMain === parseInt(selectCount))
                        .map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.english}</td>
                                <td>{item.uzbek}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableDictionary;
