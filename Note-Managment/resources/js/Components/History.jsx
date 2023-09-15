import React, { useEffect, useState } from "react";

const History = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/notes");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onload = function () {
            if (xhr.status === 200) {
                setNotes(JSON.parse(xhr.responseText).notes);
            } else if (xhr.status !== 200) {
                alert("Request failed. Returned status of " + xhr.status);
            }
        };

        xhr.send();
    }, []); // Use an empty dependency array to run this effect only once

    return (
        <div className="bg-gray-700 lg:bg-gradient-to-r from-gray-700 to-zinc-950 min-h-screen">
            <div className="container mx-auto px-4 lg:px-8 py-12">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {notes.map((note) => (
                        <div
                            key={note.title}
                            className="bg-white dark:bg-gray-500 shadow-lg rounded-lg p-4 lg:p-6"
                        >
                            <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                                {note.title}
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                                {note.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;
