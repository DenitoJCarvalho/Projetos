import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/input'
import Textarea from '../../components/TextArea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import api from '../../services/api'



function TeacherForm() {

    const history = useHistory()

    const [name, setname] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')


    const [ scheduleItem, setScheduleItem ] = useState([
        { week_day: 0, from: '', to: ''}
    ])

    function addNewScheduleItem(){

        setScheduleItem([
            ...scheduleItem,
            { week_day: 0, from: '', to: ''}
        ])
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault()

        api.post('classes',{
            name, 
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItem
        }).then(() => {
            alert('Cadastro realizado com sucesso.')

            history.push('/')
        }).catch(err => {
            alert(`[ERROR]: ${err}`)
        })
    }

    function setScheduleItemValue(index: number, field: string, value: string) {
        const updateScheduleItem = scheduleItem.map((scheduleItem, scheduleIndex) => {
            if (scheduleIndex === index) {
                return { ...scheduleItem, [field]: value}
            }

            return scheduleItem
        })

        setScheduleItem(updateScheduleItem)
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher este formulário de isncrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input 
                            name="name" 
                            label="Nome completo" 
                            value={name} 
                            onChange={(e) => {setname(e.target.value)} } 
                        />

                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value)}}
                        
                        />

                        <Input 
                            name="whatsapp" 
                            label="Whatsapp" 
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value)}}
                        />

                        <Textarea 
                            name="bio" 
                            label="Biografia" 
                            value={bio}
                            onChange={(e) => { setBio(e.target.value)}}
                        
                        />

                    </fieldset>

                    <fieldset>
                        <legend> Sobre a aula</legend>
                        
                        <Select 
                            name="subject" 
                            label="Nome completo" 
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
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

                        <Input 
                            name="cost" 
                            label="Custo da hora por aula." 
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                            <legend>
                                Horários disponíveis
                                <button type="button" onClick={addNewScheduleItem}> 
                                    + Novo horário 
                                </button>
                            </legend>

                            {scheduleItem.map((item, index) => {
                                return (
                                    <div key={item.week_day} className="schedule-item">
                                        <Select 
                                            name="week_day" 
                                            label="Dia da semana" 
                                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                            name="from" 
                                            label="Das" 
                                            type="time" 
                                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)}

                                        />

                                        <Input 
                                            name="to"
                                            label="até"
                                            type="time" 
                                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                        />


                                    </div>
                                )
                            })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante <br/>
                            Preencha todos os dados.
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
            
        </div>
    )
}

export default TeacherForm