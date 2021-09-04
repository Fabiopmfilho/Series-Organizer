import React from 'react'

import Main from '../../components/main/Main'

const Home = (props) => {
    return (
        <Main
            icon='home'
            title='Início'
            subtitle='Séries+. Controle de episódios!'
        >
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema controle de séries</p>
        </Main>
    )
}

export default Home

