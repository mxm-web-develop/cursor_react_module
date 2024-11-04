import MxMweb from "./application/Somelib";

function Preview() {
  console.log('当前版本:', import.meta.env.VITE_APP_VERSION);
  return <MxMweb />
}


export default Preview
