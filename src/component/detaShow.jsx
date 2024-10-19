// * export default function DetaShow({titel,id,completed} ) { aivabeo deya ta best
export default function DetaShow(deta) {
  return (
    <>
      <div className="p-2 shadow-md border m-4">
        <h1 className="text-2xl text-red-600 m-2">{deta.titel}</h1>
        <h3 className="text-blue-400 m-2">{deta.completed}</h3>
        <p className="text-blue-400 m-2">{deta.id}</p>
      </div>
    </>
  );
}
