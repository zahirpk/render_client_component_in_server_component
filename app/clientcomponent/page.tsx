import ClientSideRendering from "../csr/page";


export default function ServerComponent() {
  return (
    <div>
    <h1 className="flex justify-center text-3xl bg-red-500 text-white"> Server Compoent </h1>
    <ClientSideRendering/>
    </div>
  )
}
