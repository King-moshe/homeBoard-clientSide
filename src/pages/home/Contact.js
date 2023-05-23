import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {



    return (
        <div className='md:px-36 contact px-10 pb-20 pt-20' id='contact'>
            <Row className='mb-5 '>
                <Col lg='8'>
                    <h1 className='font-bold md:text-7xl text-3xl md:mb-4 text-gray-500 border-b'>שמרו על קשר</h1>
                </Col>
            </Row>
            <Row className='rounded-lg'>
                <Col lg='5' className=' mb-5'>
                    <div className='text-[#00bf9a] text-xl pb-2'>חשוב לנו להיות בקשר ולשמוע ממכם, אנא שמרו על קשר</div>
                    <address>
                        <div className='font-bold text-gray-500'>  Exemple@gmail.com : אימייל</div>
                        <br />
                        <p>
                            <div className='font-bold text-gray-500'> מס' טלפון : +972 584767475</div>
                        </p>
                        <p className='text-[#00bf9a] py-4'>
                           ! אולי יש לך רעיון לשיפור או כל דבר שעולה על דעתך, נשמח לשמוע
                        </p>
                    </address>
                </Col>
                <Col lg='7' className='flex align-middle'>
                    <form className='w-full lg:border-b '>
                        <Row>
                            <Col lg='3' className='mb-2'>
                                <input className='form-control border-0 shadow bg-slate-900 bg-opacity-90' name='name' placeholder=':שם' type='text' />
                            </Col>
                            <Col lg='6' className='mb-2'>
                                <input className='form-control border-0 shadow bg-slate-900 bg-opacity-90 ' name='email' placeholder=':מייל' type='email' />
                            </Col>
                            <Col lg='3' className='mb-2 '>
                                <input className='form-control border-0 shadow bg-slate-900 bg-opacity-90 ' name='phone' placeholder=':טל' type='phone' />
                            </Col>
                        </Row>

                        <textarea className='form-control border-0 shadow bg-slate-900 bg-opacity-90 ' id='massage' name='massage' placeholder=':הודעה' rows={5}></textarea>
                        <br />
                        <Row>
                            <Col lg='12' className='form-group'>
                                <button className='text-[#00bf9a] hover:bg-gray-700 rounded-md  border-[0.1px] bg-slate-900 bg-opacity-60 shadow p-1 px-4' type='submit'>שליחה</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
                <div className='lg:border-b w-1/5 mx-3'></div>
            </Row>
        </div>
    )
}
