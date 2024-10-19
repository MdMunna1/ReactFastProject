import { useEffect, useState } from "react";
import DetaShow from "./detaShow";

export default function DetaLoadingFunction() {
  const [lastDeta, setDeta] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((deta) => setDeta(deta));
  }, []);
  console.log(lastDeta);

  return (
    <>
      <div>
        {lastDeta.length > 0 ? (
          lastDeta.map((all) => (
            <DetaShow
              titel={all.title}
              id={all.id}
              completed={all.completed?"TRUE":"FALSE"}
            />
          )) // Corrected console log
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
