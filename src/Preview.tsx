import MxMweb from "./application";

function Preview() {
  console.log('当前版本:', import.meta.env.VITE_APP_VERSION);
  return <MxMweb />
}


export default Preview
