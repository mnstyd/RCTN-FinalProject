import React from "react";
import Movie from "./Movie";

export default function MovieList ({ results }) {
    let data = [];
    if (results.data) {
      data = results.data.Search || [];
    }

    return(
        <div className="display">
            {data.map((item) => (
                <Movie key={item.imdbID} movie={item} />
            ))}
        </div>
    )
}