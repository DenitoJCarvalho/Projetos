import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="User" />
                <div>
                    <strong>Teacher</strong>
                    <span>Espanhol</span>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ea officia perspiciatis, nostrum debitis aut consequuntur! Eligendi ipsum iusto in quos illum pariatur voluptatem est quas suscipit perferendis. Hic, unde!
                    <br /><br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ea officia perspiciatis, nostrum debitis aut consequuntur! Eligendi ipsum iusto in quos illum pariatur voluptatem est quas suscipit perferendis. Hic, unde!
                    </p>

                    <footer>
                        <p>
                            Preço por hora
                            <strong>
                                R$100,00
                            </strong>
                        </p> 
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </div>
            </header>
        </article>
    )
}

export default TeacherItem