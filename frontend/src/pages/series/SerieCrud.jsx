import React, { Component } from 'react'
import axios from 'axios'

import Main from '../../components/main/Main'

const headerProps = {
    icon: 'tv',
    title: 'Series',
    subtitle: 'Cadastro de série: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/series'
const initialState = {
    serie: { 
        name: '', 
        category: '',
        season: 1,
        episode: 1,
        status: ''
    },
    list: []
}

class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(res => {
            this.setState({ list: res.data })
        })
    }

    clear() {
        this.setState({ serie: initialState.serie })
    }

    save() {
        const serie = this.state.serie
        const method = serie._id ? 'put' : 'post'
        const url = serie._id ? `${baseUrl}/${serie._id}` : baseUrl
        axios[method](url, serie)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ serie: initialState.serie, list })
                
            }).catch(err => {
                window.alert(`Não foi possível salvar! (${err})`)
            })
    }

    getUpdatedList(serie, add = true) {
        const list = this.state.list.filter(u => u._id !== serie._id)
        if (add) list.unshift(serie)
        return list
    }

    updateField(event) {
        const serie = { ...this.state.serie }
        serie[event.target.name] = event.target.value
        this.setState({ serie })
    }

    renderForm() {
        return (
            <form className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.serie.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."
                                required
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Categoria</label>
                            <input
                                type="text"
                                className="form-control"
                                name="category"
                                value={this.state.serie.category}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a categoria..."
                                required />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Temporada</label>
                            <input
                                type="number"
                                className="form-control"
                                name="season"
                                value={this.state.serie.season}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a temporada atual..."
                                min="1"
                                step='1'
                                required />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Episódio</label>
                            <input
                                type="number"
                                className="form-control"
                                name="episode"
                                value={this.state.serie.episode}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o episódio..."
                                min='1'
                                step='1'
                                required />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Status</label>
                            <input
                                type="text"
                                className="form-control"
                                name="status"
                                value={this.state.serie.status}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o status (assistido, assistindo)..."
                                required />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onclick={e => this.clear(e)}>
                            Cancelar
                        </button> 
                    </div>
                </div>
            </form>
        )
    }

    load(serie) {
        this.setState({ serie })
    }

    remove(serie) {
        axios.delete(`${baseUrl}/${serie._id}`).then(res => {
            const list = this.getUpdatedList(serie, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Episódio</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(serie => {
            return (
                <tr key={serie._id}>
                    <td>{serie.name}</td>
                    <td>{serie.category}</td>
                    <td>{serie.season}</td>
                    <td>{serie.episode}</td>
                    <td>{serie.status}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(serie)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(serie)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <Main {...headerProps}>
                    {this.renderForm()}
                    {this.renderTable()}
                </Main>
            </div>
        )
    }
}

export default UserCrud
