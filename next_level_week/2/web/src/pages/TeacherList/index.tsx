import React, { useState, FormEvent } from 'react'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/input'
import Select from '../../components/Select'

import './styles.css'



function TeacherList(){

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [teachers, setTeachers] = useState([])


    async function searchTeachers(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('classes', {
            params: {subject, week_day, time}
        })

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrível que você quer dar aulas.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                        name="subject" 
                        label="Nome completo" 
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
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
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
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

                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={e => setTime(e.target.value)} 
                    /> 

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
                
            </main>
        </div>
    )
}

export default TeacherList