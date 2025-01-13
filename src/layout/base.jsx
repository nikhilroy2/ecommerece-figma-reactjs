import Header from "./header";
import Footer from "./footer";
export default function Base({children}) {
  return <>
  <Header></Header>
  {children}
  <Footer></Footer>
  </>;
}
