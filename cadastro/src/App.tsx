import './App.css'
import TabDadosDeEndereco from './pages/TabDadosDeEndereco'
import TabCadastro from './pages/TabCadastro'
import TabLogin from './pages/TabLogin'

function Zeka() {
  async function testeDeRequisicao() {

    // const req = await fetch("http://localhost:8080/api/user", {
    //   method: "POST",
    //   headers: {"Content-type": "application/json; charset=UTF-8"},
    //   body: JSON.stringify({
    //     name: "novo",
    //     email: "nova@example.com",
    //     password: "123123"
    // })
    // })
    const req = await fetch("http://localhost:8080/api/logged/kasdflkasdhflkash", {
      method: "POST",
    })
    const res = await req.json()
    console.log(req.body)
    console.log(res)
    
  }

  return <button onClick={testeDeRequisicao}>Teste</button>
}

export default function () {

  return <>
    <TabCadastro />
    <Zeka />
  </>
}