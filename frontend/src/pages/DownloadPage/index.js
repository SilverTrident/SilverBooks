import React from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Filter from '../../components/Filter'


import './styles.css'

function DownloadPage() {
    return (
        <div id='pageDowload'>
            <Header />
            <div id='filters'>
                <Filter name='ficção cientifica'/>
                <Filter name='Romance'/>
                <Filter name='Terror'/>
                <Filter name='Aventura'/>
                <Filter name='Distopia'/>
                <Filter name='Games'/>
                <Filter name='Programação'/>
                <Filter name='Jovem adulto'/>
                <Filter name='Crônicas'/>
            </div>

            <div id='containner-pageDowload'>
                <aside id='left-aside'>

                </aside>
                <section id='top-page'>

                    <header>
                        <div id='img-container'>
                            <img id='book-img' alt='book-folder' src="http://imagens.lelivros.love/2020/06/baixar-livro-a-cantiga-dos-passaros-e-das-serpentes-jogos-vorazes-vol-04-suzanne-collins-em-pdf-epub-mobi-ou-ler-online-370x546.jpg" />
                        </div>
                        <div id='title-container'>
                            <h1>A Cantiga dos Pássaros e das Serpentes  -
                            Jogos Vorazes Vol 04 –
                            Suzanne Collins</h1>

                            <aside id='advertising'>

                            </aside>
                        </div>
                    </header>
                    <footer>
                        <input type='button' id='btn-download' value='Download' />
                    </footer>
                    <div id='main-page'>
                    <main>
                        <label>Descrição do livro:</label>
                                <p>UMA HISTÓRIA DA SÉRIE JOGOS VORAZES. AMBIÇÃO O ALIMENTARÁ. COMPETIÇÃO O CONDUZIRÁ.
                            MAS O PODER TEM O SEU PREÇO.</p>

                                <p>É a manhã do dia da colheita que iniciará a décima edição dos Jogos Vorazes. Na Capital,
                            o jovem de dezoito anos Coriolanus Snow se prepara para sua oportunidade de glória como um mentor dos Jogos
                            . A outrora importante casa Snow passa por tempos difíceis e o destino dela depende da pequena chance
                            de Coriolanus ser capaz de encantar, enganar e manipular seus colegas estudantes para conseguir mentorar
                            o tributo vencedor. A sorte não está a favor dele. A ele foi dada a tarefa humilhante de mentorar a garota tributo
                            do Distrito 12, o pior dos piores. Os destinos dos dois estão agora interligados – toda escolha que Coriolanus
                            fizer pode significar sucesso ou fracasso, triunfo ou ruína. Na arena, a batalha será mortal. Fora da arena,
                            Coriolanus começa a se apegar a já condenada garota tributo… e deverá pesar a necessidade de seguir as
                            regras e o desejo de sobreviver custe o que custar. </p>
                                                                                   
                    </main>
                </div>
                </section>
                
                <aside id='right-aside'>
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default DownloadPage;