import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  // console.log("render");
  const [aramaAlanı, setAramaAlanı] = useState(""); //value,setValue
  const [title, setTitle] = useState("");
  const [canavarlar, setCanavarlar] = useState([]);
  // const [dizeAlanı, setDizeAlanı] = useState("");
  const [filtrelenmişCanavarlar, setFiltrelenmişCanavarlar] =
    useState(canavarlar);
  console.log("işlendi");

  useEffect(() => {
    // console.log("effect ateşlendi");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setCanavarlar(users));
  }, []);
  useEffect(() => {
    const yenifiltrelenmişCanavarlar = canavarlar.filter((canavar) => {
      return canavar.name.toLocaleLowerCase().includes(aramaAlanı);
    });
    setFiltrelenmişCanavarlar(yenifiltrelenmişCanavarlar);
    console.log("Effect ateşlendi");
  }, [canavarlar, aramaAlanı]);
  // console.log(aramaAlanı);

  const aramaDeğişikliği = (e) => {
    const aramaAlanıDizesi = e.target.value.toLocaleLowerCase();
    setAramaAlanı(aramaAlanıDizesi);
  };

  // const başlıkDeğişikliği = (e) => {
  //   const aramaAlanıDizesi = e.target.value.toLocaleLowerCase();
  //   setTitle(aramaAlanıDizesi);
  // };

  // const dizeDeğişimi = (event) => {
  //   setDizeAlanı(event.target.value);
  // };

  // console.log(filtrelenmişCanavarlar);

  return (
    <div className="App">
      <h1 className="app-title">CANAVARLAR</h1>
      <SearchBox
        onChangeHandler={aramaDeğişikliği}
        placeholder="canavarları ara"
        className="monsters-search-box"
      />
      {/* <br /> */}
      {/* <SearchBox
        onChangeHandler={başlıkDeğişikliği}
        placeholder="başlıkları ara"
        className="monsters-search-box"
      /> */}
      {/* <SearchBox onChangeHandler={dizeDeğişimi} placeholder="dize ayarla" /> */}
      <CardList canavarlar={filtrelenmişCanavarlar} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       canavarlar: [],
//       aramaAlanı: "",
//     };
//     // console.log('constructor')
//   }
//   componentDidMount() {
//     // console.log('componentDidMount')
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { canavarlar: users };
//           },
//           () => {
//             // console.log(this.state)
//           }
//         )
//       );
//   }
//   aramaDeğişikliği = (e) => {
//     // console.log({ başlangıçDizisi: this.state.canavarlar })
//     const aramaAlanı = e.target.value.toLocaleLowerCase();
//     //AaaAAaAAAaAaAa ==> "aaaaaaaaaaa"
//     //[{name: "Leanne"}, {name: "Namık"}]

//     this.setState(() => {
//       return { aramaAlanı };
//     });
//   };

//   render() {
//     // console.log("App js'den render")
//     const { canavarlar, aramaAlanı } = this.state;
//     const { aramaDeğişikliği } = this;
//     const filtrelenmişCanavarlar = canavarlar.filter((canavar) => {
//       return canavar.name.toLocaleLowerCase().includes(aramaAlanı);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">CANAVARLAR</h1>
//         <SearchBox
//           onChangeHandler={aramaDeğişikliği}
//           placeholder="canavarları ara"
//           className="monsters-search-box"
//         />
//         <CardList canavarlar={filtrelenmişCanavarlar} />
//       </div>
//     );
//   }
// }

export default App;
