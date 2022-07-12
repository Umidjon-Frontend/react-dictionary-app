import React from "react";

function AllDictionary({ dictionary, selectCount }) {
    return (
        <div className="card h_auto">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Word / Phrase</th>
                        <th>Translation</th>
                    </tr>
                </thead>
                <tbody>
                    {dictionary.map((item, index) => (
                        <tr key={index}>
                            <td>{item.idAll}</td>
                            <td>{item.english}</td>
                            <td>{item.uzbek}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllDictionary;
