import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/input'
import Select from '../../components/Select'

import './styles.css'




function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrível que você quer dar aulas.">
                <form id="search-teachers">
                <Select 
                        name="subject" 
                        label="Nome completo" 
                        options={[
                            { value: 'Artes',label: 'Artes' },
                            { value: 'Biologia',label: 'Biologia' },
                            { value: 'Ciências',label: 'Ciências' },
                            { value: 'Educação Física',label: 'Educação Física' },
                            { value: 'Física',label: 'Física' },
                            { value: 'Geografia',label: 'Geografia' },
                            { value: 'História',label: 'História' },
                            { value: 'Matemática',label: 'Matemática' },
                            { value: 'Portugês',label: 'Português' },
                            { value: 'Química',label: 'Química' },
                            { value: 'Inglês',label: 'Inglês' },
                            { value: 'Espanhol',label: 'Espanhol' },
                            { value: 'Linguagem e Alfabetização',label: 'Linguagem e Alfabetização' },
                            { value: 'História/Geografia',label: 'História/Geografia' },
                            { value: 'Ética e Cidadania',label: 'Ética e Cidadania' },
                            { value: 'Robótica',label: 'Robótica' },
                        ]}
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        options={[
                            { value: '0',label: 'Domingo' },
                            { value: '1',label: 'Segunda-Feira' },
                            { value: '2',label: 'Terça-Feira' },
                            { value: '3',label: 'Quarta-Feira' },
                            { value: '4',label: 'Quinta-Feira' },
                            { value: '5',label: 'Sexta-Feira' },
                            { value: '6',label: 'Sábado' }
                        ]}
                    />

                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" /> 
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList