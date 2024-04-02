import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

function RegisterComponent() {
    const navigate =useNavigate()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    const register = async (e) => {
        e.preventDefault()
        let model = { email: email, name: name, password: password }
        try {
            const response = await axios.post("http://localhost:5000/auth/register", model)
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("user",JSON.stringify(response.data.user))
            console.log(response)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center" style={{ marginTop: "70px" }}>
                <div className="col-5">
                    <div className="card">
                        <div className="card-header">
                            <h1>Kayıt Sayfası</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={register}>
                                <div className="form-group">
                                    <label htmlFor="email">Mail Adresi</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">
                                        Kullanıcı Adı
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }} />
                                </div><div className="form-group mt-2">
                                    <label htmlFor="password">
                                        Şifre
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                </div>
                                <div className="form-group mt-2">
                                    <button className="btn btn-outline-success w-100">
                                        Kayıt Ol
                                    </button>
                                    <Link
                                        className="mt-2"
                                        to={"/login"}
                                        style={{ float: "right" }}>Giriş Sayfası
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent;